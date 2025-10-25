"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import InterstellarNebula from "@/components/interstellar-nebula"
import { ParticleField } from "@/components/particle-field"
import { MediaDropZone } from "@/components/media-drop-zone"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Portfolio items for the carousel
  const portfolioItems = [
    {
      id: 1,
      type: "youtube",
      title: "eBay Sourcing Masterclass",
      subtitle: "Online Course",
      description: "Learn how to find profitable items to resell on eBay.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 2,
      type: "website",
      title: "Money Making Strategies",
      subtitle: "Web Development",
      description: "Complete guide to making money online from your phone.",
      image: "/images/duitr-app-preview.png",
      url: "https://www.example.com",
    },
    {
      id: 3,
      type: "behance",
      title: "Success Stories",
      subtitle: "Portfolio",
      description: "Real results from students who followed my methods.",
      embedUrl: "https://www.behance.net/embed/project/example",
      url: "https://www.behance.net/example",
    },
  ]

  // Social media apps
  const socialApps = [
    {
      name: "Threads",
      url: "https://threads.com/@jamie",
      icon: <img src="/icons/threads-logo-white.svg" alt="Threads" className="w-6 h-6" />,
    },
    {
      name: "Insta",
      url: "https://instagram.com/jamie",
      icon: <img src="/icons/instagram-glyph-white.svg" alt="Instagram" className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jamie",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/example",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      ),
    },
  ]

  const secondRowApps = [
    {
      name: "Lynk.Id",
      url: "https://lynk.id/jamie",
      icon: <img src="/icons/lynkid-icon-white.png" alt="Lynkid" className="w-6 h-6 brightness-0 invert" />,
    },
    {
      name: "Behance",
      url: "https://www.behance.net/jamie",
      icon: <img src="/icons/behance-logo-white.png" alt="Behance" className="w-6 h-6 brightness-0 invert" />,
    },
    {
      name: "Threads",
      url: "https://threads.com/@jamie",
      icon: <img src="/icons/threads-logo-white.svg" alt="Threads" className="w-6 h-6" />,
    },
    {
      name: "YT",
      url: "https://www.youtube.com/@jamie",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ]

  // Carousel functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    isDragging.current = true
    startX.current = e.pageX - carouselRef.current.offsetLeft
    scrollLeft.current = carouselRef.current.scrollLeft
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX.current) * 2
    carouselRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleMouseUp = () => {
    isDragging.current = false
    snapToSlide()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return
    isDragging.current = true
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft
    scrollLeft.current = carouselRef.current.scrollLeft
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !carouselRef.current) return
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX.current) * 2
    carouselRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleTouchEnd = () => {
    isDragging.current = false
    snapToSlide()
  }

  const snapToSlide = () => {
    if (!carouselRef.current) return
    const cardWidth = 240
    const scrollPosition = carouselRef.current.scrollLeft
    const newSlide = Math.round(scrollPosition / cardWidth)
    setCurrentSlide(Math.max(0, Math.min(newSlide, portfolioItems.length - 1)))
    carouselRef.current.scrollTo({
      left: newSlide * cardWidth,
      behavior: "smooth",
    })
  }

  const handleCardClick = (url: string, e: React.MouseEvent) => {
    if (!isDragging.current) {
      window.open(url, "_blank")
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <InterstellarNebula />
      <ParticleField />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        {/* Interactive Phone Mockup - First Thing Visitors See */}
        <div className={`mb-2 -mt-32 md:-mt-52 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="relative w-[375px] h-[812px] mx-auto" style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
            {/* iPhone Frame Image */}
            <img
              src="/images/iphone-mockup.png"
              alt="iPhone Frame"
              className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
            />

            <div className="absolute top-[28px] left-[18px] right-[18px] bottom-[28px] bg-white rounded-[36px] overflow-hidden z-0">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 pb-2 text-black text-sm font-medium pt-7">
                <span className="font-semibold">{currentTime}</span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black/50 rounded-full"></div>
                  </div>
                  <svg className="w-5 h-3 ml-1" viewBox="0 0 24 16" fill="none">
                    <rect x="1" y="4" width="18" height="8" rx="2" stroke="black" strokeWidth="1" fill="black" />
                    <rect x="20" y="6" width="2" height="4" rx="1" fill="black" />
                  </svg>
                </div>
              </div>

              {/* Music Widget */}
              <div className="mx-4 mt-3 mb-4">
                <div className="rounded-xl p-2 overflow-hidden bg-transparent py-0 px-0">
                  <iframe
                    src="https://open.spotify.com/embed/artist/6Lg8Y5pMc0Gq5g8jrdmx93?utm_source=generator&theme=0"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg px-0 my-0 py-0"
                  />
                </div>
              </div>

              {/* Portfolio Carousel */}
              <div className="mx-4 mb-4 overflow-hidden">
                <div
                  ref={carouselRef}
                  className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing leading-7 gap-4 px-0 my-0 py-5"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {portfolioItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 w-[240px] bg-white rounded-xl shadow-md overflow-hidden select-none cursor-pointer hover:shadow-lg transition-shadow duration-200"
                      onClick={(e) => handleCardClick(item.url, e)}
                    >
                      <div className="h-32 overflow-hidden">
                        {item.type === "youtube" ? (
                          <iframe
                            src={item.embedUrl}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={item.title}
                          />
                        ) : item.type === "behance" ? (
                          <iframe
                            src={item.embedUrl}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="clipboard-write"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            title={item.title}
                          />
                        ) : item.type === "website" ? (
                          <div className="relative w-full h-full">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover"
                              draggable={false}
                            />
                          </div>
                        ) : (
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            draggable={false}
                          />
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-gray-500 mb-1">{item.subtitle}</p>
                        <h3 className="font-bold text-black mb-1 text-lg tracking-tight leading-6">{item.title}</h3>
                        <p className="text-xs text-gray-600 mb-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center gap-1 mt-0 mb-0.5">
                  {portfolioItems.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                        index === currentSlide ? "bg-black" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Social Media Apps */}
              <div className="mx-4 mb-4">
                <div className="flex justify-center gap-7 border-0 my-0 py-0">
                  {socialApps.map((app, index) => (
                    <button
                      key={app.name + index}
                      className="flex flex-col items-center gap-1 group"
                      onClick={() => window.open(app.url, "_blank")}
                    >
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-200">
                        {app.icon}
                      </div>
                      <span className="text-black text-xs font-medium w-12 text-center">{app.name}</span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-center border-0 my-0 py-0 mt-4 gap-7">
                  {secondRowApps.map((app, index) => (
                    <button
                      key={app.name + index + "second"}
                      className="flex flex-col items-center gap-1 group"
                      onClick={() => window.open(app.url, "_blank")}
                    >
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-200">
                        {app.icon}
                      </div>
                      <span className="text-black text-xs font-medium w-12 text-center">{app.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="rounded-t-2xl mx-4 p-3 text-center ml-0 px-3 bg-transparent py-0 mr-0 mb-1.5">
                  <p className="text-black font-semibold text-2xl leading-6 tracking-tight">WORK FROM PHONE</p>
                  <p className="text-gray-600 text-xs mt-1 tracking-tight leading-4">Money Making Mentor & Entrepreneur</p>
                </div>

                {/* Home Indicator */}
                <div className="flex justify-center flex-row pb-3">
                  <div className="w-24 bg-black rounded-full py-0 h-1 my-1.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 -mt-32">
              <h1
                className={`text-2xl md:text-4xl font-bold text-white transition-all duration-1000 border-0 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div>Stop just using your phone.</div>
                <div className="mt-2">Start profiting from it.</div>
              </h1>
          <p
            className={`text-sm md:text-base text-gray-300 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Real strategies. Real results. All from your phone.
          </p>

        </div>

        <div
          className={`absolute bottom-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            variant="ghost"
            onClick={() => scrollToSection(mediaRef)}
            className="text-white hover:text-primary animate-bounce"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Button>
        </div>
      </section>

      <section className="py-24 flex items-center justify-center relative z-10 px-4">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 fade-in-up">About Me</h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Profile Picture */}
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-700 flex-shrink-0 bg-gray-800 flex items-center justify-center">
                  <img 
                    src="https://media.discordapp.net/attachments/1354510635236458703/1431512950652407911/image0.jpg?ex=68fdafd3&is=68fc5e53&hm=b322b6201d0bcc7dde5921b647f43f5645e9e80e34e54482b830adb510c7b10f&=&format=webp&width=664&height=885" 
                    alt="Profile Photo" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 80%' }}
                  />
            </div>
            
            {/* About Text */}
            <div className="flex-1 space-y-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
                <div className="text-white leading-relaxed space-y-4 text-base">
                  <p>👋 Hello, I am Jamie.</p>
                  
                  <p>I've spent the last 10+ years mentoring people of all ages — sharing wealth, knowledge, and opportunity. I truly believe there's enough food on the table for everyone.</p>
                  
                  <p>I started with nothing — less than $200 in my bank account. I was a college dropout with no backup plan, no mentors, and no examples to follow. Everything I've learned came from trial, failure, and experience.</p>
                  
                  <p>The road wasn't easy, but every failure taught me something valuable. Those lessons turned into skills, and those skills built the life I have today.</p>
                  
                  <p>Now, I'm here to help you do it faster — to save you time, stress, and money by showing you what actually works.</p>
                  
                  <p><strong>Beginner or expert, it doesn't matter. If you're ready to learn, I'm ready to teach you everything I know.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={mediaRef} className="py-24 flex items-center justify-center relative z-10 px-4">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 fade-in-up">Whether you're a student, 9–5 worker, or just looking for extra income, you can start right from your phone.</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MediaDropZone type="mixed" title="eBay Sourcing" description="Find profitable items to resell" />
            <MediaDropZone type="mixed" title="Pricing Strategies" description="Maximize your profit margins" />
            <MediaDropZone type="mixed" title="Listing Optimization" description="Write descriptions that sell" />
            <MediaDropZone type="mixed" title="Success Stories" description="Real results from students" />
          </div>
        </div>
      </section>

      <section className="py-24 flex items-center justify-center relative z-10 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 fade-in-up">Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0 bg-gray-700 flex items-center justify-center mr-4">
                  <div className="text-gray-400 text-center">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    defaultValue="David Gomez"
                    className="w-full bg-transparent text-white placeholder:text-gray-400 border-none outline-none text-sm font-semibold"
                  />
                </div>
              </div>
              <textarea
                defaultValue="Has helped me so much and that's just scratching the surface. This server is really a leader above the rest!"
                className="w-full h-24 bg-transparent text-white placeholder:text-gray-400 resize-none border-none outline-none text-sm leading-relaxed"
              />
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0 bg-gray-700 flex items-center justify-center mr-4">
                  <div className="text-gray-400 text-center">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    defaultValue="Eric Le"
                    className="w-full bg-transparent text-white placeholder:text-gray-400 border-none outline-none text-sm font-semibold"
                  />
                </div>
              </div>
              <textarea
                defaultValue="Overall, being part of this Discord server has been an enriching experience. Not only am I learning new ways to grow my income, but I'm also connecting with like-minded individuals who share my passion for financial empowerment. If you're looking to expand your financial horizons and join a supportive community, I highly recommend checking out this money-making Discord server."
                className="w-full h-24 bg-transparent text-white placeholder:text-gray-400 resize-none border-none outline-none text-sm leading-relaxed"
              />
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0 bg-gray-700 flex items-center justify-center mr-4">
                  <div className="text-gray-400 text-center">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    defaultValue="Jesus Vasquez"
                    className="w-full bg-transparent text-white placeholder:text-gray-400 border-none outline-none text-sm font-semibold"
                  />
                </div>
              </div>
              <textarea
                defaultValue="I wanted to save up for college and just in the first month, I made more than what I make in 3 months from my job, changed my life in many ways."
                className="w-full h-24 bg-transparent text-white placeholder:text-gray-400 resize-none border-none outline-none text-sm leading-relaxed"
              />
            </div>

            {/* Testimonial 4 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0 bg-gray-700 flex items-center justify-center mr-4">
                  <div className="text-gray-400 text-center">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    defaultValue="Talton Mouton"
                    className="w-full bg-transparent text-white placeholder:text-gray-400 border-none outline-none text-sm font-semibold"
                  />
                </div>
              </div>
              <textarea
                defaultValue="Have been loving WorkFromPhone so far! Just joined about a week ago and there's still so much I'm exploring! Loving my free food and have already cashed out on some major deals!"
                className="w-full h-24 bg-transparent text-white placeholder:text-gray-400 resize-none border-none outline-none text-sm leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="py-16 flex items-center justify-center relative z-10 px-4">
        <div className="max-w-xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 fade-in-up">Contact Me</h2>

          <Card className="bg-card/80 backdrop-blur-sm border-border p-6 opacity-80">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your name"
                    className="bg-input border-border text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-input border-border text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

                  <div>
                    <Textarea
                      placeholder="Tell me about yourself..."
                      rows={4}
                      className="bg-input border-border text-white placeholder:text-gray-400 resize-none"
                    />
                  </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}