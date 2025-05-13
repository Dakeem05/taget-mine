export default function WhoWeAre() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container-custom">
        <h2 className="text-8xl font-bold mb-16">WHO WE ARE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold">Welcome to Taget</h3>
            <div className="w-16 h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>

          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}
