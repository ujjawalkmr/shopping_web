import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./component/Appbar";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Product = lazy(() => import("./pages/Product"));
const Contact=lazy(()=>import("./pages/Contact"));
const Subscription=lazy(()=>import("./pages/Subscription"));
const Gift=lazy(()=>import("./pages/Gift"));
const Login=lazy(()=>import("./pages/Login"));
const Profile=lazy(()=>import("./pages/Profile"));

function App() {

  return (

    <div>
      <Appbar />
     
      {/* Suspense shows fallback while lazy component loads */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
           <Route path="/contact" element={<Contact />} />
            <Route path="/subscription" element={<Subscription />} />
             <Route path="/gift" element={<Gift />} />
             <Route path="/login" element={<Login/>}/>
             <Route path="profile" element={<Profile/>}/>
        </Routes>
      </Suspense>
      </div>
  );
}

export default App;
