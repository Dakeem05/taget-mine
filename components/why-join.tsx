import Image from "next/image"

export default function WhyJoin() {
  const reasons = [
    {
      title: "COMMUNITY",
      icon: "/placeholder.svg?height=120&width=120",
      description:
        "Immerse yourself in a community passionate about Web3, where you can connect with innovators and contribute to shaping the on-chain future.",
    },
    {
      title: "EDUCATION",
      icon: "/placeholder.svg?height=120&width=120",
      description:
        "Explore Web3 technologies with our expansive resources, acquiring the skills and knowledge you need to engage in the blockchain revolution.",
    },
    {
      title: "JOBS",
      icon: "/placeholder.svg?height=120&width=120",
      description:
        "Discover career opportunities in the growing Web3 industry, from blockchain development to creating NFTs, and shape your future.",
    },
    {
      title: "LIVE SPACES",
      icon: "/placeholder.svg?height=120&width=120",
      description:
        "Engage in Web3 through live sessions, workshops, and AMAs, gaining real-time insights and staying updated with the latest developments.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16">Why Join Taget ?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src={reason.icon || "/placeholder.svg"}
                    alt={reason.title}
                    width={60}
                    height={60}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-sm text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
