const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-16 px-4 bg-gradient-to-r from-purple-950 to-purple-600 text-white"
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <span className="text-yellow-500">Wacky</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            A Linux tech enthusiast with an addiction to building{" "}
            <span className="font-semibold">
              software, websites, and servers
            </span>
            . I love turning ideas into reality through clean code and modern
            tools.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-full text-lg transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex text-white border-2 border-yellow-500 py-2 px-6 hover:bg-yellow-500 hover:text-white rounded-full text-lg transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="picture"
            src="../public/android-chrome-192x192.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
