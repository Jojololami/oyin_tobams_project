import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import HeroLMS from "@/app/components/HeroLMS";
import HeroWhiteBg from "./components/HeroWhiteBg";
import HeroMDP from "./components/HeroMDP";
import HeroCEO from "./components/HeroCEO";
import Consultant from "./components/Consultant";
import Book  from "./components/Book";
import Testimonials from "./components/Testimonials";
import Ready from "./components/Ready";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
       <main className="min-h-screen overflow-x-hidden" >
        <Navbar />

        <Hero />

        <HeroLMS />

        <HeroWhiteBg/>

        <HeroMDP/>
        <HeroCEO/>
        <Consultant/>
        <Book/>
        <Testimonials/>
        <Ready/>
        <Footer/>
        <div >

          {/*className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16"*/}
    
      </div>
      
    </main>
    
  );
}
