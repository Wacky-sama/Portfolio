const HeroSection = () => {
  return (
        <section id="home">
          <div className="pt-8 flex flex-col h-screen bg-gradient-to-r from-blue-950 to-blue-600 text-white">
            <p className="text-3xl md:text-5xl font-bold">Hi there, I am </p>
            <h2 className="font-bold text-5xl">Kenji "Brocks" I. Tabugadir</h2>
              <p className="mt-4 text-xl text-white"> Aspiring Web Developer</p>
                <a href="#projects" className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">
                  View my projects on GitHub
                </a>
          </div>
        </section>
  )
}

export default HeroSection;
