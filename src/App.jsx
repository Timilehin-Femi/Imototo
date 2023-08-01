import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/pages/Home";
import ContactUs from "./Components/pages/ContactUs";
import Services from "./Components/pages/Services";
import WastePickUp from "./Components/pages/WastePickUp";
import DumpsiteLocation from "./Components/pages/DumpsiteLocation";
import Imw from "./Components/pages/Imw";
import Recycle from "./Components/pages/Recycle";
import Subscribe from "./Components/pages/Subscribe";
import Footer from "./Components/Footer";

function App() {
  return (
   <div>
     <Router>
      <Navbar />
      <Routes>
        
          <Route path="/" exact element={<Home />} />

          <Route path="/contact-us" exact element={<ContactUs />} />

          <Route path="/services" exact element={<Services />} />

          <Route path="/waste-pick-up" exact element={<WastePickUp />} />

          <Route
            path="/dumpsite-locations"
            exact
            element={<DumpsiteLocation />}
          />

          <Route path="/recycle" exact element={<Recycle />} />

          <Route path="/imw" exact element={<Imw />} />

          <Route path="/subscribe" exact element={<Subscribe />} />
      
      </Routes>
    </Router>
    <Footer/>
   </div>
  );
}

export default App;
