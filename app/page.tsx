import Aboutsection from "../components/Aboutsection"
import Footer from "../components/Footer"
import Herosection from "../components/Herosection"
import Projectsection from "../components/Projectsection"

export default function Home() {
  return (
    <main  className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Herosection/>
      <Aboutsection/>
      <Projectsection/>
  
      <Footer/>
    </main>
    
  )
}