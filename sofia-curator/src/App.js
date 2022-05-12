import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './_App.scss';
import Navbar from "./Components/Navbar";
import ContactUs from "./Views/ContactUs";
import PageNotFound from "./Views/PageNotFound";

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path='/contact-us' element={<ContactUs/>} />


          <Route path='/*' element={<PageNotFound/>} />
        </Routes>
        
      
      </BrowserRouter>
      
      
     </div>
     
  );
}

export default App;
