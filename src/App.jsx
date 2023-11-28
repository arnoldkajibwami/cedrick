import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Service from "./Service";
import Footer from "./Footer";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";

function App() {

  return (
    <Router>
      {/* <Header/> */}
      <Header/>
      {/* <Service/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
