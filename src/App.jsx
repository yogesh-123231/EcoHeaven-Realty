import About from "./components/About"
import Benefits from "./components/Benefits"
import Contact from "./components/Contact"
import EcoBanner from "./components/EcoBanner"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Testimonails from "./components/Testimonails"
import { ToastContainer} from 'react-toastify';


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Benefits />
      <Testimonails />
      <FAQ />
      <Contact />
      <EcoBanner />
      <Footer />
    </div>
  )
}

export default App
