import Image from "next/image"

export default function WhoWeAre() {
  return (
    <section className="pt-0 pb-16 bg-black text-white relative px-4 sm:px-0">
      <div className="absolute top-0 left-0 w-full">
        <Image
          src="/WHO WE ARE.svg"
          alt="WHO WE ARE"
          width={1440}
          height={170}
          className="w-full"
          priority
        />
      </div>

      <div className="container-custom mt-[100px] sm:mt-[300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-[32px] sm:text-[48px] font-bold">Welcome to Taget</h3>
            <div className="w-16 h-1 bg-white"></div>
            <div className="relative w-full h-[2px] bg-white after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[2px] after:bg-white after:rotate-[0deg]"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg font-[300]">
              Taget is more than a project—it's a movement. We're a community-driven initiative focused on onboarding,
              educating, and empowering individuals in the world of decentralised organisations (DAOs) and beyond.
              Partnering with innovators like @MprofyDao, we're breaking barriers and setting new targets for what's
              possible.
            </p>
            <p className="text-lg font-[300]">
              In Q1 2025 alone, we hosted the largest DAO event in Uyo, kicked off a massive onboarding phase, and laid
              the groundwork for a learning revolution. Ready to join us?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
