import Link from "next/link"

export default function JoinCommunity() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
        <Link
          href="/join"
          className="inline-block bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          Join Us
        </Link>
      </div>
    </section>
  )
}
