"use client"
import { useEffect, useRef } from "react"
import type React from "react"

interface FrameComponentProps {
  video: string
  width: number | string
  height: number | string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  showFrame: boolean
  autoplayMode: "all" | "hover"
  isHovered: boolean
  onResize?: (e: React.MouseEvent | React.TouchEvent, direction: string) => void
  cornerRadius: number
}

export function FrameComponent({
  video,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  showFrame,
  autoplayMode,
  isHovered,
  onResize,
  cornerRadius,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (autoplayMode === "all") {
      videoRef.current?.play()
    } else if (autoplayMode === "hover") {
      if (isHovered) {
        videoRef.current?.play()
      } else {
        videoRef.current?.pause()
      }
    }
  }, [isHovered, autoplayMode])

  const handleResize = (e: React.MouseEvent | React.TouchEvent, direction: string) => {
    e.preventDefault()
    if (onResize) {
      onResize(e, direction)
    }
  }

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transformOrigin: "center",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Scalable video container with corner radius mask */}
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${mediaSize})`,
            transformOrigin: "center",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              borderRadius: `${cornerRadius / mediaSize}px`,
            }}
          >
            <video
              className="w-full h-full object-cover"
              src={video}
              loop
              muted
              playsInline
              autoPlay={autoplayMode === "all" || (autoplayMode === "hover" && isHovered)}
              ref={videoRef}
            />
          </div>
        </div>

        {/* Frame Elements */}
        {showFrame && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            {/* Corners with resize handlers */}
            <div
              className="absolute top-0 left-0 w-24 h-24 bg-contain bg-no-repeat cursor-nw-resize"
              style={{ backgroundImage: `url(${corner})` }}
              onMouseDown={(e) => handleResize(e, "nw")}
              onTouchStart={(e) => handleResize(e, "nw")}
            />
            <div
              className="absolute top-0 right-0 w-24 h-24 bg-contain bg-no-repeat cursor-ne-resize"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
              onMouseDown={(e) => handleResize(e, "ne")}
              onTouchStart={(e) => handleResize(e, "ne")}
            />
            <div
              className="absolute bottom-0 left-0 w-24 h-24 bg-contain bg-no-repeat cursor-sw-resize"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
              onMouseDown={(e) => handleResize(e, "sw")}
              onTouchStart={(e) => handleResize(e, "sw")}
            />
            <div
              className="absolute bottom-0 right-0 w-24 h-24 bg-contain bg-no-repeat cursor-se-resize"
              style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
              onMouseDown={(e) => handleResize(e, "se")}
              onTouchStart={(e) => handleResize(e, "se")}
            />

            {/* Edges with resize handlers */}
            <div
              className="absolute top-0 left-24 right-24 h-24 cursor-n-resize"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 96px",
                backgroundRepeat: "repeat-x",
              }}
              onMouseDown={(e) => handleResize(e, "n")}
              onTouchStart={(e) => handleResize(e, "n")}
            />
            <div
              className="absolute bottom-0 left-24 right-24 h-24 cursor-s-resize"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 96px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
              onMouseDown={(e) => handleResize(e, "s")}
              onTouchStart={(e) => handleResize(e, "s")}
            />
            <div
              className="absolute left-0 top-24 bottom-24 w-24 cursor-w-resize"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "96px auto",
                backgroundRepeat: "repeat-y",
              }}
              onMouseDown={(e) => handleResize(e, "w")}
              onTouchStart={(e) => handleResize(e, "w")}
            />
            <div
              className="absolute right-0 top-24 bottom-24 w-24 cursor-e-resize"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "96px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
              onMouseDown={(e) => handleResize(e, "e")}
              onTouchStart={(e) => handleResize(e, "e")}
            />
          </div>
        )}
      </div>
    </div>
  )
}
