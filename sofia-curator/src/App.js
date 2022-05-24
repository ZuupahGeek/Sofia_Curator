import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './_App.scss';
import Navbar from "./Components/Navbar";


import Sidebar from "./Components/Sidebar";
import { AboutUs, OurAim, OurVision } from "./Views/AboutUs";
import { Services, ServicesOne, ServicesTwo, ServicesThree, } from "./Views/Services";
import { Events, EventsOne, EventsTwo } from "./Views/Events";
import Contact from "./Views/ContactUs";
import Support from "./Views/Support";
import StartPage from "./Views/StartPage";
function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Sidebar />
        <Navbar />
        <Routes>
          <Route path="/" component={StartPage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/about-us/aim" component={OurAim} />
          <Route path="/about-us/vision" component={OurVision} />
          <Route path="/services" component={Services} />
          <Route path="/services/services1" component={ServicesOne} />
          <Route path="/services/services2" component={ServicesTwo} />
          <Route path="/services/services3" component={ServicesThree} />
          <Route path="/contact" component={Contact} />
          <Route path="/events" component={Events} />
          <Route path="/events/events1" component={EventsOne} />
          <Route path="/events/events2" component={EventsTwo} />
          <Route path="/support" component={Support} />
        </Routes>
        
      
      </BrowserRouter>
      
      
     </div>
     
  );
}

export default App;
