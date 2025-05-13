import Image from "next/image"

export default function Partners() {
  const partners = [
    { name: "VIVE", logo: "/placeholder.svg?height=50&width=120" },
    { name: "Oculus", logo: "/placeholder.svg?height=50&width=120" },
    { name: "Mprofy", logo: "/placeholder.svg?height=50&width=120" },
    { name: "Unity", logo: "/placeholder.svg?height=50&width=120" },
  ]

  return (
    <section className="py-12 border-b">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {partners.map((partner) => (
            <div key={partner.name} className="opacity-30 hover:opacity-50 transition-opacity">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
