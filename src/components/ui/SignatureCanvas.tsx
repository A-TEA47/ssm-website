"use client";

import React, { useRef, useState, useEffect } from "react";
import { X, Edit2 } from "lucide-react";
import { Button } from "./Button";

interface SignatureCanvasProps {
  name?: string;
  onChange?: (dataUrl: string) => void;
  required?: boolean;
}

export function SignatureCanvas({ name = "signature", onChange, required = false }: SignatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [signatureData, setSignatureData] = useState("");

  // Resize canvas to match container size on mount & resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = (rect?.width || 500) * 2; // high DPI scaling
      canvas.height = 160 * 2;
      canvas.style.width = "100%";
      canvas.style.height = "160px";

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(2, 2);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        // Use CSS variable for ink color — works across themes
        const computedStyle = getComputedStyle(canvas);
        ctx.strokeStyle = computedStyle.getPropertyValue("--text-primary").trim() || "#0F172A";
        ctx.lineWidth = 2.5;
      }
      
      // If we already had a signature, redraw it (scaled)
      if (signatureData) {
        const img = new Image();
        img.onload = () => {
          ctx?.drawImage(img, 0, 0, rect?.width || 500, 160);
        };
        img.src = signatureData;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [signatureData]);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    
    // Check if it's touch or mouse
    if ("touches" in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    // Prevent scrolling for touch events
    if (e.cancelable) {
      e.preventDefault();
    }
    
    const coords = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(coords.x, coords.y);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    if (e.cancelable) {
      e.preventDefault();
    }

    const coords = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
      setIsEmpty(false);
    }
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    
    // Save signature
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const dataUrl = canvas.toDataURL();
    setSignatureData(dataUrl);
    if (onChange) onChange(dataUrl);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setIsEmpty(true);
      setSignatureData("");
      if (onChange) onChange("");
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className="relative h-40 w-full rounded-sm overflow-hidden"
        style={{
          backgroundColor: "var(--input-bg)",
          border: "1px solid var(--input-border)",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 cursor-crosshair z-10 touch-none"
          style={{ background: "transparent" }}
        />

        {isEmpty && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none select-none z-0"
            style={{ color: "var(--text-muted)", opacity: 0.5 }}
          >
            <Edit2 className="w-8 h-8 stroke-1" />
            <span className="font-serif italic text-lg sm:text-2xl transform -rotate-2">Draw Signature Here</span>
            <span className="text-xs uppercase tracking-wider font-semibold opacity-70">Use Mouse or Touchscreen</span>
          </div>
        )}

        {!isEmpty && (
          <button
            type="button"
            onClick={clearCanvas}
            className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-sm transition-all shadow-sm"
            style={{
              backgroundColor: "var(--bg-muted)",
              color: "var(--text-secondary)",
              border: "1px solid var(--surface-border)",
            }}
          >
            <X className="w-3.5 h-3.5" /> Clear Signature
          </button>
        )}
      </div>

      {/* Hidden input to pass data in forms */}
      <input
        type="hidden"
        name={name}
        value={signatureData}
        required={required}
      />
    </div>
  );
}
