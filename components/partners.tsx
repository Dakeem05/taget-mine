"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Partners() {
  const partners = [
    {
      name: "VIVE",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
    },
    {
      name: "Oculus",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
    },
    {
      name: "Mprofy",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
    },
    {
      name: "Unity",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
    },
  ]

  return (
    <section className="py-12 border-b">
      <div className="container-custom">
        <motion.div
          className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="opacity-30 hover:opacity-50 transition-opacity"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, opacity: 0.5 }}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
