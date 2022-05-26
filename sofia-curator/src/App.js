import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './_App.scss';
import Navbar from "./Components/Navbar";


import Sidebar from "./Components/Sidebar";
import { AboutUs } from "./Views/AboutUs";
import { Services, Curator, Consultant, } from "./Views/Services";
import { MyArt } from "./Views/MyArt";
import Contact from "./Views/ContactUs";
import Support from "./Views/Support";
import StartPage from "./Views/StartPage";
import PageNotFound from "./Views/PageNotFound";

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <div className="sidebarVisible"><Sidebar /></div>
        <div className="navbarVisible"><Navbar /></div>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/curator" element={<Curator />} />
          <Route path="/services/consultant" element={<Consultant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-art" element={<MyArt />} /><Route path="/support" element={<Support />} />
          <Route path="/#" element={<PageNotFound />} />
        </Routes>
        
      
      </BrowserRouter>
      
      
     </div>
     
  );
}

export default App;
