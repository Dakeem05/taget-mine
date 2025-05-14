"use client"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
// This would typically come from a database or API
const getEventData = (slug: string) => {
  const events = {
    "biggest-dao-event-uyo": {
      title: "Hosted the Biggest DAO Event in Uyo with Mprofy",
      date: "Nov 10-12, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Uyo Tech Hub, Uyo, Nigeria",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      description: `
        <p>Taget proudly hosted what they've dubbed the "biggest DAO event in Uyo" during Q1 2025. This event marks a significant milestone for the project, showcasing its ability to mobilize a community, foster collaboration, and spotlight decentralized autonomous organizations (DAOs) in a region that might not traditionally be seen as a hub for such cutting-edge concepts. The event likely drew a diverse crowd—enthusiasts, developers, educators, and global curious about decentralized systems—making it a landmark moment for both Taget and the broader DAO movement in Nigeria.</p>
        <p>Organizing a large-scale event requires meticulous planning, from securing a venue and speakers to marketing and logistics. Calling it the "biggest" suggests it surpassed expectations in attendance, impact, or scope compared to previous gatherings in Uyo. It's possible this event featured workshops, keynote speeches, or live demonstrations of DAO technologies, aiming to educate and inspire. Given Taget's focus on community and onboarding, this wasn't just a one-off spectacle—it was a launchpad for deeper engagement.</p>
      `,
      sections: [
        {
          title: "Collaboration with @MprofyDao",
          content:
            "The event was a partnership with @MprofyDao, a brand that seems to share Taget's vision for decentralization and community empowerment. While specific details about MprofyDao are scarce from the available data, we can infer it's a DAO-focused entity, likely involved in education, development, or advocacy within the decentralized space. The collaboration suggests a synergy of resources and expertise—MprofyDao might have brought technical know-how, a network of DAO practitioners, or even funding to the table, while Taget contributed its community-building prowess and local influence in Uyo.",
        },
        {
          title: "About MprofyDao",
          content:
            "Though not extensively documented here, MprofyDao's involvement hints at it being a player in the DAO ecosystem, possibly a decentralized organization itself or a group supporting DAO adoption. Its name could imply a focus on &quot;professional&quot; or &quot;proficient&quot; DAO frameworks, perhaps offering tools, governance models, or training. Partnering with Taget indicates MprofyDao values grassroots outreach, aligning with Taget's mission to onboard and enlighten. Together, they likely amplified the event's reach, blending MprofyDao's technical or strategic strengths with Taget's energetic, inclusive approach.",
        },
        {
          title: "Impact",
          content:
            "This event likely put Uyo on the map as an emerging hub for DAO innovation, sparking conversations about decentralization in a region rich with potential. It also solidified Taget's reputation as a leader capable of executing ambitious, community-driven initiatives.",
        },
      ],
    },
    "onboarding-phase-1": {
      title: "Massive Onboarding Phase 1 - Get welcomed into the Taget family",
      date: "October 15, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Event",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      description:
        "Join us for the first phase of our massive onboarding initiative. This virtual event will introduce you to the Taget ecosystem and help you get started on your journey into the world of decentralized autonomous organizations.",
      sections: [
        {
          title: "What to Expect",
          content:
            "During this virtual event, you'll be introduced to the core concepts of DAOs, the Taget platform, and how you can get involved in our community. Our team of experts will guide you through the onboarding process and answer any questions you may have.",
        },
        {
          title: "Who Should Attend",
          content:
            "This event is perfect for newcomers to the Web3 space, as well as experienced professionals looking to expand their knowledge of DAOs and decentralized systems. No prior experience is required, just a curiosity about the future of decentralized organizations.",
        },
        {
          title: "How to Prepare",
          content:
            "To make the most of this event, we recommend setting up a digital wallet beforehand. Don't worry if you're not sure how to do this - we'll provide resources and guidance during the event.",
        },
      ],
    },
    "q2-2025-prep": {
      title: "Q2 2025 Prep - Get ready for the Learning Phase",
      date: "October 20, 2025",
      time: "2:00 PM - 3:30 PM",
      location: "Taget Learning Center, Lagos",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      description:
        "Prepare for our Q2 learning phase with this introductory session that will set you up for success in the coming months. This event will outline our curriculum, introduce our instructors, and provide you with all the resources you need to excel in your Web3 journey.",
      sections: [
        {
          title: "Curriculum Overview",
          content:
            "Get a sneak peek at our comprehensive Q2 curriculum, which covers everything from blockchain fundamentals to advanced DAO governance models. Our team will walk you through the learning path and highlight key milestones along the way.",
        },
        {
          title: "Meet the Instructors",
          content:
            "This session will introduce you to our team of expert instructors, each bringing unique expertise and experience in the Web3 space. You'll have the opportunity to ask questions and get to know the people who will be guiding your learning journey.",
        },
        {
          title: "Resource Distribution",
          content:
            "During this event, we'll distribute essential learning resources, including access to our online learning platform, reading materials, and practice exercises. These resources will be crucial for your success in the Q2 learning phase.",
        },
      ],
    },
  }

  return events[slug as keyof typeof events] || null
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventData(params.slug)

  if (!event) {
    return (
      <>
        <main className="min-h-screen">
          <div className="container-custom py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
            <Link href="/events" className="btn-primary">
              Back to Events
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
    <Navbar />
      <main className="min-h-screen px-3">
        <div className="container-custom py-8">
          <div className="text-sm breadcrumbs mb-8">
            <ul className="flex space-x-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="before:content-['/'] before:mr-2">
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li className="before:content-['/'] before:mr-2">{event.title}</li>
            </ul>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Date</h3>
                <p>{event.date}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Time</h3>
                <p>{event.time}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Location</h3>
                <p>{event.location}</p>
              </div>
            </div>

            <div className="prose max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
            </div>

            {event.sections &&
              event.sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="prose max-w-none">
                    <p>{section.content}</p>
                  </div>
                </motion.div>
              ))}

            <div className="flex justify-center mt-12">
              <Link
                href="#"
                className="btn-primary mr-4"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Registration functionality would be implemented here")
                }}
              >
                Register for Event
              </Link>
              <Link href="/events" className="btn-secondary">
                Back to Events
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
