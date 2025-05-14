"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function WhyJoin() {
  const reasons = [
    {
      title: "COMMUNITY",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      description:
        "Immerse yourself in a community passionate about Web3, where you can connect with innovators and contribute to shaping the on-chain future.",
    },
    {
      title: "EDUCATION",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      description:
        "Explore Web3 technologies with our expansive resources, acquiring the skills and knowledge you need to engage in the blockchain revolution.",
    },
    {
      title: "JOBS",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      description:
        "Discover career opportunities in the growing Web3 industry, from blockchain development to creating NFTs, and shape your future.",
    },
    {
      title: "LIVE SPACES",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      description:
        "Engage in Web3 through live sessions, workshops, and AMAs, gaining real-time insights and staying updated with the latest developments.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container-custom">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Join Taget ?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-gray-100 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-24 h-24 rounded-full bg-white flex items-center justify-center"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Image
                    src={reason.icon || "/placeholder.svg"}
                    alt={reason.title}
                    width={60}
                    height={60}
                    className="w-16 h-16 object-contain"
                  />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-sm text-gray-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
