"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { FrameComponent } from "./FrameComponent"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import confetti from "canvas-confetti"

const initialFrame = {
  id: 1,
  video: "https://static.cdn-luma.com/files/dfd1ef3c85e6e017/Ripple%20Animation.mp4",
  corner: "https://static.cdn-luma.com/files/dfd1ef3c85e6e017/Corner.png",
  edgeHorizontal: "https://static.cdn-luma.com/files/dfd1ef3c85e6e017/horizontal.png",
  edgeVertical: "https://static.cdn-luma.com/files/dfd1ef3c85e6e017/Vertical.png",
  borderThickness: 0,
  borderSize: 80,
  autoplayMode: "all" as const,
  isHovered: false,
}

const MIN_SIZE = 250
const MAX_SIZE = 800
const MIN_MEDIA_SCALE = 0.9
const MAX_MEDIA_SCALE = 0.96
const CORNER_RADIUS = 50
const BASE_CORRECT_WIDTH = 500
const BASE_CORRECT_HEIGHT = 980
const CORRECT_RATIO = BASE_CORRECT_WIDTH / BASE_CORRECT_HEIGHT
const FINAL_SIZE_SCALE = 0.77

const CORRECT_WIDTH = Math.round(BASE_CORRECT_WIDTH * FINAL_SIZE_SCALE)
const CORRECT_HEIGHT = Math.round(BASE_CORRECT_HEIGHT * FINAL_SIZE_SCALE)

export default function DynamicFrameLayout() {
  const [frame, setFrame] = useState(initialFrame)
  const [size, setSize] = useState({ width: 300, height: 300 })
  const [mediaSize, setMediaSize] = useState(MIN_MEDIA_SCALE)
  const [currentTime, setCurrentTime] = useState("")
  const [guessDialogOpen, setGuessDialogOpen] = useState(false)
  const [resultDialogOpen, setResultDialogOpen] = useState(false)
  const [guessAccuracy, setGuessAccuracy] = useState(0)
  const [guessedRatio, setGuessedRatio] = useState(0)
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const maxDimension = Math.max(size.width, size.height)
    const scale = (maxDimension - MIN_SIZE) / (MAX_SIZE - MIN_SIZE)
    const newMediaSize = MIN_MEDIA_SCALE + (MAX_MEDIA_SCALE - MIN_MEDIA_SCALE) * scale
    setMediaSize(Math.min(Math.max(newMediaSize, MIN_MEDIA_SCALE), MAX_MEDIA_SCALE))
  }, [size])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}`)
    }

    updateTime()
    const intervalId = setInterval(updateTime, 60000)

    return () => clearInterval(intervalId)
  }, [])

  const handleResize = (e: React.MouseEvent | React.TouchEvent, direction: string) => {
    e.preventDefault()
    const startX = "touches" in e ? e.touches[0].clientX : e.clientX
    const startY = "touches" in e ? e.touches[0].clientY : e.clientY
    const startWidth = size.width
    const startHeight = size.height

    const onMove = (moveEvent: MouseEvent | TouchEvent) => {
      const clientX = "touches" in moveEvent ? moveEvent.touches[0].clientX : moveEvent.clientX
      const clientY = "touches" in moveEvent ? moveEvent.touches[0].clientY : moveEvent.clientY
      const deltaX = clientX - startX
      const deltaY = clientY - startY

      let newWidth = startWidth
      let newHeight = startHeight

      if (direction.includes("e") || direction.includes("w")) {
        newWidth = startWidth + (direction.includes("e") ? deltaX : -deltaX) * 2
      }
      if (direction.includes("s") || direction.includes("n")) {
        newHeight = startHeight + (direction.includes("s") ? deltaY : -deltaY) * 2
      }

      newWidth = Math.max(MIN_SIZE, newWidth)
      newHeight = Math.max(MIN_SIZE, newHeight)

      setSize({ width: newWidth, height: newHeight })
    }

    const onEnd = () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseup", onEnd)
      document.removeEventListener("touchmove", onMove)
      document.removeEventListener("touchend", onEnd)
    }

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseup", onEnd)
    document.addEventListener("touchmove", onMove)
    document.addEventListener("touchend", onEnd)
  }

  const handleGuess = () => {
    const ratio = size.width / size.height
    setGuessedRatio(ratio)
    const accuracy = 100 - Math.abs((ratio - CORRECT_RATIO) / CORRECT_RATIO) * 100
    setGuessAccuracy(accuracy)
    setGuessDialogOpen(false)
    setResultDialogOpen(true)

    if (accuracy >= 99) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

  const getSarcasticComment = (accuracy: number) => {
    if (accuracy >= 99)
      return "Wow, pixel-perfect! Did you measure your iPhone with a micrometer, or is this just your idea of a fun Friday night?"
    if (accuracy >= 95)
      return "Almost there! Your portfolio must be full of 'pixel-perfect' recreations of other people's work, right?"
    if (accuracy >= 90) return "Not bad! Maybe you can put this on your resume under 'Extremely Niche Skills'."
    if (accuracy >= 80)
      return "Hmm, close-ish. Have you considered a career in 'ballpark estimations' instead of design?"
    if (accuracy >= 70) return "Well, at least you didn't confuse it with an Android. Small victories, right?"
    if (accuracy >= 60)
      return "You know, 'close enough' is great for horseshoes and hand grenades, less so for UI design."
    if (accuracy >= 50)
      return "Is this how you handle padding in your CSS too? No wonder your layouts are always 'slightly off'."
    return "Wow. Just... wow. Maybe stick to designing for flip phones? They're making a comeback, I hear."
  }

  const animateToCorrectSize = () => {
    if (frameRef.current) {
      frameRef.current.style.transition = "width 1s, height 1s"
      frameRef.current.style.width = `${CORRECT_WIDTH}px`
      frameRef.current.style.height = `${CORRECT_HEIGHT}px`
      setSize({ width: CORRECT_WIDTH, height: CORRECT_HEIGHT })
    }
  }

  const formatRatio = (ratio: number) => {
    return ratio.toFixed(5)
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Guess the iPhone Aspect Ratio</h1>
      <p className="text-lg mb-4 text-white">
        Drag the frame to match the iPhone's aspect ratio, then click "Guess This"
      </p>
      <div
        ref={frameRef}
        style={{
          width: size.width,
          height: size.height,
          position: "relative",
        }}
      >
        <FrameComponent
          video={frame.video}
          width={size.width}
          height={size.height}
          corner={frame.corner}
          edgeHorizontal={frame.edgeHorizontal}
          edgeVertical={frame.edgeVertical}
          mediaSize={mediaSize}
          borderThickness={frame.borderThickness}
          borderSize={frame.borderSize}
          showFrame={true}
          autoplayMode={frame.autoplayMode}
          isHovered={frame.isHovered}
          onResize={handleResize}
          cornerRadius={CORNER_RADIUS}
        />
        <div
          className="absolute text-white text-sm z-10"
          style={{
            top: "46px",
            left: "46px",
            fontWeight: 500,
          }}
        >
          {currentTime}
        </div>
        <div
          className="absolute z-10"
          style={{
            top: "46px",
            right: "46px",
          }}
        >
          <Image
            src="https://static.cdn-luma.com/files/dfd1ef3c85e6e017/Frame%201.svg"
            alt="Frame"
            width={72}
            height={72}
          />
        </div>
        <div
          className="absolute z-10"
          style={{
            top: "38px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src="https://static.cdn-luma.com/files/dfd1ef3c85e6e017/island2.png"
            alt="Top Middle Asset"
            width={126}
            height={37}
          />
        </div>
        <div
          className="absolute z-10"
          style={{
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "152px",
            height: "5px",
            backgroundColor: "white",
            borderRadius: "2.5px",
          }}
        />
      </div>
      <Button onClick={() => setGuessDialogOpen(true)} className="mt-4">
        Guess This
      </Button>

      <Dialog open={guessDialogOpen} onOpenChange={setGuessDialogOpen}>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>Confirm Your Guess</DialogTitle>
            <DialogDescription className="text-gray-300">
              Are you sure you want to submit your guess? This will be your final answer.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => setGuessDialogOpen(false)}
              className="bg-gray-600 text-white hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button onClick={handleGuess}>Confirm Guess</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={resultDialogOpen} onOpenChange={setResultDialogOpen}>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>Your Guess Result</DialogTitle>
            <DialogDescription className="text-gray-300">{getSarcasticComment(guessAccuracy)}</DialogDescription>
          </DialogHeader>
          <div className="mt-2 text-gray-300">
            <p>Your guessed ratio: {formatRatio(guessedRatio)}</p>
            <p>Actual ratio: {formatRatio(CORRECT_RATIO)}</p>
            <p className="mt-2">Your guess was {guessAccuracy.toFixed(2)}% accurate!</p>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={animateToCorrectSize}
              className="bg-gray-600 text-white hover:bg-gray-700"
            >
              Show Actual Size
            </Button>
            <Button onClick={() => setResultDialogOpen(false)} className="bg-blue-600 hover:bg-blue-700">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
