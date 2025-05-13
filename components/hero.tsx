import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <p className="text-xl font-bold">200+</p>
                  <p className="text-xs">Community</p>
                </div>
                <div>
                  <p className="text-xl font-bold">7+</p>
                  <p className="text-xs">Partners</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">Set Your Targets with Taget</h1>
              <p className="text-lg text-gray-700">
                Empowering communities, igniting innovation, and building a decentralized future—one milestone at a
                time.
              </p>
            </div>

            <Link href="/join" className="btn-primary inline-block">
              Get Involved Now
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border-8 border-black"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full border-8 border-black"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/4 h-1/4 rounded-full bg-orange-400"></div>
                </div>

                {/* Target crosshairs */}
                <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-px bg-black"></div>
                <div className="absolute left-0 right-0 top-1/2 -mt-px h-px bg-black"></div>

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
