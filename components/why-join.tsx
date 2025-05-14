"use client"

import { motion } from "framer-motion"

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container-custom">
        <motion.h2
          className="text-8xl font-bold mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          WHO WE ARE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold">Welcome to Taget</h3>
            <div className="w-16 h-1 bg-white"></div>
            <motion.div
              className="w-full h-1 bg-white"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              Taget is more than a project—it's a movement. We're a community-driven initiative focused on onboarding,
              educating, and empowering individuals in the world of decentralised organisations (DAOs) and beyond.
              Partnering with innovators like @MprofyDao, we're breaking barriers and setting new targets for what's
              possible.
            </p>
            <p className="text-lg">
              In Q1 2025 alone, we hosted the largest DAO event in Uyo, kicked off a massive onboarding phase, and laid
              the groundwork for a learning revolution. Ready to join us?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
