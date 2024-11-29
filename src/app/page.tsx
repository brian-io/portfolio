import About from "@/sections/about";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Header from "@/components/Header";
import Contact from "@/sections/contact";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

export default function Home(){
  return (
    <div className="bg-bglight dark:bg-bgdark overflow-hidden">
      <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
      <Header/>
      <main>
        <Hero/>
        {/* <About/> */}
        <Projects/>
        <Contact/>
      </main>
      <SocialLinks page="index"/>
      <Footer/>
      </div>
    </div>
    
  
  );
}

 
    
