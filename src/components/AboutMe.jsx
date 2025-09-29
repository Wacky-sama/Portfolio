const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-r from-purple-950 to-purple-600 text-white scroll-mt-20"
    >
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center sm:text-left">
          About Me
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 items-start">
          {/* Left side - Intro */}
          <p className="text-lg leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-[#1a3afd] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
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

          {/* Right side - Details */}
          <div className="flex flex-col gap-8">
            {/* Education */}
            <div>
              <p className="font-bold text-lg">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-sm text-white/70">
                Cagayan State University | 2022–Present
              </p>
            </div>

            {/* Achievement */}
            <div>
              <p className="font-bold text-lg">
                Champion, Dynamic Web Designing
              </p>
              <p className="text-sm text-white/70">Technolympics | 2025</p>
            </div>

            {/* Skills */}
            <div>
              <p className="font-bold text-lg mb-3">Skills & Tools</p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                <div>
                  <p className="font-semibold text-white">Backend</p>
                  <p className="text-sm text-white/70">
                    C#, .NET MAUI, Python, PHP, Java
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Frontend</p>
                  <p className="text-sm text-white/70">
                    HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS,
                    Vite, Figma
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Database</p>
                  <p className="text-sm text-white/70">
                    PostgreSQL, MariaDB, MySQL
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">DevOps & Tools</p>
                  <p className="text-sm text-white/70">Docker, Linux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
