import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import Home from "./Pages/Home"

function App() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
