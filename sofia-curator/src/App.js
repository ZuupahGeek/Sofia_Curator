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
function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Navbar />
        <Routes>
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/about-us/aim" exact component={OurAim} />
          <Route path="/about-us/vision" exact component={OurVision} />
          <Route path="/services" exact component={Services} />
          <Route path="/services/services1" exact component={ServicesOne} />
          <Route path="/services/services2" exact component={ServicesTwo} />
          <Route path="/services/services3" exact component={ServicesThree} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/events" exact component={Events} />
          <Route path="/events/events1" exact component={EventsOne} />
          <Route path="/events/events2" exact component={EventsTwo} />
          <Route path="/support" exact component={Support} />
        </Routes>
        
      
      </BrowserRouter>
      
      
     </div>
     
  );
}

export default App;
