"use client"

import type React from "react"
import { Card } from "@/components/ui/card"

interface MediaDropZoneProps {
  type: "image" | "video" | "mixed"
  title: string
  description: string
}

export function MediaDropZone({ type, title, description }: MediaDropZoneProps) {
  return (
    <Card className="relative border-2 border-dashed h-80 border-border bg-card/50 hover:border-primary/50 hover:bg-card/70 transition-all duration-300">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <div className="mb-3 transition-transform duration-300">
          {title.toLowerCase().includes('ebay') ? (
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" 
                alt="eBay Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
          ) : type === "image" ? (
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          ) : type === "video" ? (
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          ) : (
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4zM6 6v14h12V6H6zm3-2V2h6v2H9z"
              />
            </svg>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-gray-400">{description}</div>
        </div>
      </div>
    </Card>
  )
}