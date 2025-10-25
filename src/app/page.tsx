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
  const heroRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <InterstellarNebula />
      <ParticleField />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        <div className="text-center space-y-4">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white transition-all duration-1000 border-0 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>Stop just using your phone.</div>
            <div>Start profiting from it.</div>
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-300 transition-all duration-1000 delay-300 ${
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
                    className="w-full h-full object-cover object-top"
                  />
            </div>
            
            {/* About Text */}
            <div className="flex-1 space-y-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
                <div className="text-white leading-relaxed space-y-4 text-base">
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