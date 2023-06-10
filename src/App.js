import React, { lazy, Suspense, useEffect } from "react";
import "./styles/styles.css";
import Loader from "./components/loader/loader";
import Video from "./components/video/video";
import Features from "./components/features/features";import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = lazy(() => import("./components/header/header"));
const Hadit =  lazy(()=> import("./components/hadit/hadit"));
const Welcom = lazy(()=> import("./components/welcom/welcom"));
const Services = lazy(()=> import("./components/services/services"));

const App = () => {
  useEffect(()=> {
    AOS.init()
  }
  ,[]);
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Hadit />
      <Welcom />
      <div className="bg-pr">
        <Services />
        <Video />
      </div>
      <Features />
    </Suspense>
  );
}

export default App;