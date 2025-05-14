"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function WhyJoin() {
  const reasons = [
    {
      title: "COMMUNITY",
      icon: "/image1.svg",
      description:
        "Immerse yourself in a community passionate about Web3, where you can connect with innovators and contribute to shaping the on-chain future.",
    },
    {
      title: "EDUCATION",
      icon: "/image2.svg",
      description:
        "Explore Web3 technologies with our expansive resources, acquiring the skills and knowledge you need to engage in the blockchain revolution.",
    },
    {
      title: "JOBS",
      icon: "/image3.svg",
      description:
        "Discover career opportunities in the growing Web3 industry, from blockchain development to creating NFTs, and shape your future.",
    },
    {
      title: "LIVE SPACES",
      icon: "/image4.svg",
      description:
        "Engage in Web3 through live sessions, workshops, and AMAs, gaining real-time insights and staying updated with the latest developments.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-0">
      <div className="container-custom">
        <motion.h2
          className="text-[32px] sm:text-[48px] text-[#0D0D0D] font-bold text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Join Taget ?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-[#F0F0F0] w-full sm:max-w-[288px] min-h-[387px] rounded-[20px] px-[24px] sm:px-[32px] py-[29px] text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-[175px] h-[175px] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Image
                    src={reason.icon || "/placeholder.svg"}
                    alt={reason.title}
                    width={175}
                    height={175}
                    className="w-[175px] h-[175px] object-cover"
                  />
                </motion.div>
              </div>
              <div className="w-full flex flex-col justify-center items-center px-3">
                <h3 className="text-[24px] w-[224px] min-h-[30px] pb-5 border-b-2 border-b-[#D3D4D8] text-[#0D0D0D] font-bold mb-4">{reason.title}</h3>
                <p className="text-[12px] text-[#0D0D0D]">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  ) 
}                                  