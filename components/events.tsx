"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Events() {
  const events = [
    {
      title: "Hosted the Biggest DAO Event in Uyo with Mprofy",
      date: "Nov 10-12, 2025",
      time: "3:00 PM - 5:00 PM",
      image: "/event1.png",
      slug: "biggest-dao-event-uyo",
    },
    {
      title: "Massive Onboarding Phase 1 - Get welcomed into the Taget family.",
      date: "October 15, 2025",
      time: "3:00 PM - 5:00 PM",
      image: "/event2.png",
      slug: "onboarding-phase-1",
    },
    {
      title: "Q2 2025 Prep - Get ready for the Learning Phase",
      date: "October 20, 2025",
      time: "2:00 PM - 3:30 PM",
      image: "/event3.png",
      slug: "q2-2025-prep",
    },
  ]

  return (
    <section className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-[#333333] font-bold text-lg mb-2">Our Events</h3>
          <h2 className="text-[40px] text-black font-bold text-center mb-12">Grow Your Skills, Expand Your Network, and Have Fun!</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="border min-w-[387px] min-h-[364px] rounded-[10px] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-full flex items-center h-[172px] rounded-[7px] relative">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover w-[359px] h-[172px] rounded-t-[7px]" />
              </div>
              <div className="p-4 space-y-4">
                <h3 className="font-bold text-[#2D2D2D] text-[20px]">{event.title}</h3>
                <div className="flex justify-between text-[12px] text-[#757575]">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>
                <Link
                  href={`/events/${event.slug}`}
                  className="block text-center bg-[#0D0D0D] text-[14px] text-white py-2 rounded-[10px] hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/events"
            className="bg-[#141414] w-[235px] text-[14px] h-[49px] flex items-center justify-center text-white px-6  py-2 rounded-[72px] hover:bg-gray-800 transition-colors"
          >
            See More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
