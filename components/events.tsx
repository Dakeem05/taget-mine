import Image from "next/image"
import Link from "next/link"

export default function Events() {
  const events = [
    {
      title: "Hosted the Biggest DAO Event in Uyo with Mprofy",
      date: "Nov 10-12, 2025",
      time: "3:00 PM - 5:00 PM",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Massive Onboarding Phase 1 - Get welcomed into the Taget family.",
      date: "October 15, 2025",
      time: "3:00 PM - 5:00 PM",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Q2 2025 Prep - Get ready for the Learning Phase",
      date: "October 20, 2025",
      time: "2:00 PM - 3:30 PM",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section className="py-16">
      <div className="container-custom">
        <h3 className="text-center text-lg mb-2">Our Events</h3>
        <h2 className="text-4xl font-bold text-center mb-12">Grow Your Skills, Expand Your Network, and Have Fun!</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {events.map((event, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <div className="p-4 space-y-4">
                <h3 className="font-bold">{event.title}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>
                <Link
                  href="/events"
                  className="block text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/events"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  )
}
