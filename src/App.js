import React, { lazy, Suspense, useEffect } from "react";
import "./styles/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from "./components/loader/loader";
// const Header = lazy(() => import("./components/header/header"));
const Hadit =  lazy(()=> import("./components/hadit/hadit"));
const Welcom = lazy(()=> import("./components/welcom/welcom"));
const Services = lazy(()=> import("./components/services/services"));
const Video = lazy(()=> import("./components/video/video"));
const Features = lazy(()=> import("./components/features/features"));
const Footer = lazy(()=> import("./components/footer/footer"));
const Contact = lazy(()=> import("./components/contact/contact"));
const Courses = lazy(()=> import("./components/courses/courses"));
const Whatsapp = lazy(()=> import("./components/whatsapp/whats"));

const App = () => {
  useEffect(()=> {
    AOS.init()
  }
  ,[]);
  return (
    <Suspense fallback={<Loader />}>
      <Whatsapp />
      {/* <Header /> */}
      <div className="bg-pr">
        <Welcom />
        <Hadit /> 
        <Services />
        <Video />
      </div>
      <Features />
      <Courses />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;