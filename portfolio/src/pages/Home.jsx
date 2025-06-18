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


const TEMP_URL = "https://mern-portfolio-0moh.onrender.com"
import Header from "./miniComponents/Header";





const Home = () => {

  const [user, setUser] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoad] = useState(false)


  const domain = process.env.BACKEND_URL || TEMP_URL
  console.log(domain)

  const getMySkills = async () => {
    const { data } = await axios.get(
      `${domain}/api/v1/skill/getall`,
      { withCredentials: true }
    );
    setSkills(data.skills);
  };

  const getMyProfile = async () => {
    const { data } = await axios.get(
      `${domain}/api/v1/user/portfolio/me`,
      { withCredentials: true }
    );
    setUser(data.user);
    setLoad(true)
  };
  const getMyProjects = async () => {
    const { data } = await axios.get(
      `${domain}/api/v1/project/getall`,
      { withCredentials: true }
    );
    setProjects(data.projects);
  };

  useEffect(() => {

    getMyProfile();
    setLoad(false)
    getMySkills();
    getMyProjects();

  }, []);


  return (
    <>
      {loading == true ? (
        <div>
          <Header user={user} />
          <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-16 xl:mt-16 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">

            <Hero user={user} />
            {/* <Timeline /> */}
            <About user={user} />
            <Skills skills={skills} />
            <Portfolio projects={projects} />
            <MyApps />
            <Contact user={user}/>
            <Footer user={user} />
          </article>
        </div>) : (<Pageload />)}
    </>
  );
};

export default Home;
