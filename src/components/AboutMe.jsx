const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-r from-blue-950 to-blue-600 text-white">
    <h3 className="text-3xl font-bold mb-6">About Me</h3>
    <div className="flex gap-5 sm:gap-15 flex-col sm:flex-row">
      <p className="text-lg text-white">
        I'm Kenji "Brocks" I. Tabugadir, a passionate developer who enjoys building clean and functional web applications. I love learning new technologies and bringing ideas to life through code.
      </p>
        <div className="sm:w-1/2 flex flex-col gap-5">
          <div>
              <p className="font-bold">Bachelor of Science in Information Technology</p>
              <p className="text-sm text-white/50">Cagayan State University | 2022-2026</p>
          </div>
          <div>
              <p className="font-bold">Champion Dynamic Web Designing</p>
              <p className="text-sm text-white/50">Technolympics | 2025</p>
          </div>
        </div>
    </div>
  </section>
  )
}

export default AboutMe;
