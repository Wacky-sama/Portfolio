import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import "./index.css";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Contact />
    </>
  )
}

export default App;
