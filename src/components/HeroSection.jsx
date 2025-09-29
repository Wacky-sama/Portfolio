import profilePic from "../assets/ProfilePic.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-20 px-4 bg-gradient-to-r from-purple-950 to-purple-600 text-white"
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm{" "}
            <span className="text-[#1a3afd] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
              Wacky
            </span>
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
              className="inline-flex text-white bg-[#1a3afd] border-0 py-2 px-6 focus:outline-none hover:bg-[#0018b6] rounded-full text-lg transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex text-white border-2 border-[#1a3afd] py-2 px-6 hover:bg-[#1a3afd] hover:text-white rounded-full text-lg transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center md:justify-start md:ml-12">
          <img
            className="object-cover object-center rounded mx-auto md:mx-0 max-w-[250px] md:max-w-full"
            alt="Profile Picture"
            src={profilePic}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
