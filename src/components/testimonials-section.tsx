"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      text: "I went from making $200/month to over $2,000/month in just 3 months. The strategies Jamie teaches actually work!",
      name: "David Gomez",
      role: "Student",
    },
    {
      text: "Being part of WorkFromPhone has been life-changing. I'm making more money from my phone than I ever thought possible.",
      name: "Eric Le",
      role: "Student",
    },
    {
      text: "I wanted to save up for college and just in the first month, I made more than what I make in 3 months from my job.",
      name: "Jesus Vasquez",
      role: "Student",
    },
    {
      text: "Have been loving WorkFromPhone so far! Just joined about a week ago and there's still so much I'm exploring!",
      name: "Talton Mouton",
      role: "Student",
    },
    {
      text: "The eBay sourcing strategies are gold. I found my first profitable item within 24 hours of joining.",
      name: "Sarah Chen",
      role: "Student",
    },
    {
      text: "Jamie's pricing strategies helped me increase my profit margins by 40%. This community is incredible.",
      name: "Michael Torres",
      role: "Student",
    },
    {
      text: "I can finally work from my phone and make real money. This is exactly what I needed.",
      name: "Jennifer Walsh",
      role: "Student",
    },
    {
      text: "The support and community here is amazing. Everyone is so helpful and the strategies really work.",
      name: "David Kim",
      role: "Student",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-12 pb-4 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-white/30"></div>
            Success Stories
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            The students we <span className="font-medium italic">empower</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover how students are transforming their financial future with proven money-making strategies from their phones
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[300px] md:min-h-[350px] overflow-hidden">
          <div
            className="flex gap-8 max-w-6xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} className="flex-1" />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 5)}
              duration={12}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(1, 4)}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

