import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import Pagenotfound from "./pages/PageNotFound";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/Imeet_Projects" element={<Homepage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
