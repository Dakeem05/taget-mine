"use client"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"

export default function EventsPage() {
  const featuredEvents = [
    {
      title: "Hosted the Biggest DAO Event in Uyo with Mprofy",
      date: "Nov 10-12, 2025",
      time: "3:00 PM - 5:00 PM",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "biggest-dao-event-uyo",
      description:
        "Join us for the largest DAO event in Uyo, featuring workshops, keynote speeches, and networking opportunities.",
    },
    {
      title: "Massive Onboarding Phase 1 - Get welcomed into the Taget family.",
      date: "October 15, 2025",
      time: "3:00 PM - 5:00 PM",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "onboarding-phase-1",
      description:
        "Get welcomed into the Taget family with our comprehensive onboarding program designed to introduce you to the world of DAOs.",
    },
    {
      title: "Q2 2025 Prep - Get ready for the Learning Phase",
      date: "October 20, 2025",
      time: "2:00 PM - 3:30 PM",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "q2-2025-prep",
      description:
        "Prepare for our Q2 learning phase with this introductory session that will set you up for success in the coming months.",
    },
  ]

  const upcomingEvents = [
    {
      title: "Web3 Workshop Series",
      date: "December 5-7, 2025",
      time: "10:00 AM - 4:00 PM",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "web3-workshop-series",
      description: "A three-day intensive workshop series covering the fundamentals of Web3 technologies.",
    },
    {
      title: "DAO Governance Forum",
      date: "January 15, 2026",
      time: "1:00 PM - 6:00 PM",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "dao-governance-forum",
      description: "Explore the intricacies of DAO governance models and best practices with industry experts.",
    },
    {
      title: "Blockchain Developer Bootcamp",
      date: "February 10-28, 2026",
      time: "9:00 AM - 5:00 PM",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "blockchain-developer-bootcamp",
      description:
        "An intensive bootcamp for aspiring blockchain developers, covering smart contracts, dApps, and more.",
    },
  ]

  return (
    <>
      <main className="min-h-screen">
        <div className="px-3">
          <Navbar />
        </div>
        <div className="container-custom py-8">
          <div className="text-sm breadcrumbs mb-8">
            <ul className="flex space-x-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="before:content-['/'] before:mr-2">Events</li>
            </ul>
          </div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Events
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.slug}
                className="border rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="aspect-video relative">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">{event.title}</h2>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                  <Link
                    href={`/events/${event.slug}`}
                    className="block text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Future Events
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.slug}
                className="border rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="aspect-video relative">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">{event.title}</h2>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                  <Link
                    href={`/events/${event.slug}`}
                    className="block text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
