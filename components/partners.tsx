"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Partners() {
  // Double the partners array for seamless loop
  const partners = [
    {
      name: "VIVE",
      logo: "/Vive.svg",
    },
    {
      name: "Oculus",
      logo: "/Oculus.svg",
    },
    {
      name: "Mprofy",
      logo: "/Mprofy.svg",
    },
    {
      name: "Unity",
      logo: "/Unity.svg",
    },
  ]

  const doubledPartners = [...partners, ...partners]

  return (
    <section className="py-8 sm:py-12 border-b overflow-hidden">
      <div className="relative">
        <div 
          className="flex whitespace-nowrap animate-marquee"
          style={{
            animationDuration: '20s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {doubledPartners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              className="mx-4 sm:mx-8 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={50}
                className="h-8 sm:h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
