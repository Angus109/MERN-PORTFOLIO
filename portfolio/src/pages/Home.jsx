import React, { useState, useEffect } from "react";
import Hero from "./miniComponents/Hero";
import Timeline from "./miniComponents/Timeline";
import Skills from "./miniComponents/Skills";
import MyApps from "./miniComponents/MyApps";
import About from "./miniComponents/About";
import { ThemeProvider } from "@/components/theme-provider";
import Portfolio from "./miniComponents/Portfolio";
import Contact from "./miniComponents/Contact";
import Pageload from "./miniComponents/pageonload";
import Footer from "./miniComponents/Footer";
import axios from "axios";





const Home = () => {

  const [user, setUser] = useState({});
  const [loading, setLoad] = useState(false)


  const domain = process.env.BACKEND_URL
  console.log(domain)

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        `${domain}/api/v1/user/portfolio/me`,
        { withCredentials: true }
      );
      setUser(data.user);
      setLoad(true)
    };
    getMyProfile();
    setLoad(false)
  }, []);


  return (
    <>
      {loading == true ? (<article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
        <Hero />
        <Timeline />
        <About />
        <Skills />
        <Portfolio />
        <MyApps />
        <Contact />
        <Footer />
      </article>) : ( <Pageload />)}
    </>
  );
};

export default Home;
