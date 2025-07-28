import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import Home from "./Pages/Home"
import About from "./Pages/About"
import RawMaterial from "./Pages/RawMaterial"
import Showcase from "./Pages/Showcase"
import Contact from "./Pages/Contact"
import Certificates from "./Pages/Certificates"
import TermsAndConditions from "./Pages/TermsandConditions"
import ShippingPolicy from "./Pages/ShippingPolicy"
import RefundPolicy from "./Pages/RefundPolicy"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import CookiePolicy from "./Pages/CookiePolicy"

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
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/documents' element={<Certificates/>}/>
      <Route path='/terms-conditions' element={<TermsAndConditions/>}/>
      <Route path='/shipping' element={<ShippingPolicy/>}/>
      <Route path='/refund' element={<RefundPolicy/>}/>
      <Route path='/privacy' element={<PrivacyPolicy/>}/>
      <Route path='/cookie' element={<CookiePolicy/>}/>
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
