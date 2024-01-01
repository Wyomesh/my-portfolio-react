import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<About />}></Route>
        {/* <Route path="services" element={<Services />}></Route>
        <Route path="experiences" element={<Experiences />}></Route>
        <Route path="works" element={<Works />}></Route>
        <Route path="blogs" element={<Blogs />}></Route> */}
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}
export default App;
