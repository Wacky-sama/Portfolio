const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-gradient-to-r from-purple-950 to-purple-600 text-white"
    >
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center sm:text-left">
          About Me
        </h3>
        <div className="flex gap-10 flex-col sm:flex-row items-start">
          <p className="text-lg leading-relaxed sm:w-1/2">
            I’m{" "}
            <span className="font-semibold text-yellow-400">
              Kenji "Brocks" I. Tabugadir
            </span>
            , a Linux enthusiast with an addiction to building{" "}
            <span className="font-semibold">
              software, websites, and servers
            </span>
            . I thrive on turning complex problems into simple, functional
            solutions. Outside of coding, I’m always exploring new tools,
            tinkering with servers, and pushing myself to learn more about
            technology every day.
          </p>

          <div className="sm:w-1/2 flex flex-col gap-5">
            <div>
              <p className="font-bold text-lg">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-sm text-white/70">
                Cagayan State University | 2022–Present
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">
                Champion, Dynamic Web Designing
              </p>
              <p className="text-sm text-white/70">Technolympics | 2025</p>
            </div>
            <div>
              <p className="font-bold text-lg">Skills & Tools</p>
              <p className="text-sm text-white/70">
                Linux • React • FastAPI • Tailwind CSS • PostgreSQL • Server
                Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
