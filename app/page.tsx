import Navbar from "./navbar";
import Hero from "./Hero";
import About from "./About";
import {Grid} from "./Grid";
import Projects from "./Projects";
import Contact from "./Contact";


export default function Home() {
  return (
    
    <div className="font-[family-name:var(--font-geist-sans)] relative w-full min-h-screen overflow-x-hidden bg-black text-white">
      {/* Your content goes here */}
  
      <div>
      <Navbar/>
        <Hero/>
        <div className="w-full relative border-t border-gray-700 mt-44"></div>
        <Grid/>
        <div className="w-full relative border-t border-gray-700 "></div>
        <Projects/>
        <div className="w-full relative mt-44"></div>
        <Contact/>
  

      </div>
    </div>
  );
}
