import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import Home from "./Pages/Home"
import About from "./Pages/About"
import RawMaterial from "./Pages/RawMaterial"
import Showcase from "./Pages/Showcase"

function App() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/raw-materials' element={<RawMaterial/>}/>
      <Route path='/showcase' element={<Showcase/>}/>
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
