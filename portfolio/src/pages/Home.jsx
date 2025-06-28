"use client"

import { useState, useEffect } from "react"
import Hero from "./miniComponents/Hero"
import Skills from "./miniComponents/Skills"
import MyApps from "./miniComponents/MyApps"
import About from "./miniComponents/About"
import Portfolio from "./miniComponents/Portfolio"
import Contact from "./miniComponents/Contact"
import Pageload from "./miniComponents/pageonload"
import Footer from "./miniComponents/Footer"
import axios from "axios"


import Header from "./miniComponents/Header"

const Home = () => {
  const [user, setUser] = useState({})
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [loading, setLoad] = useState(false)

  const domain = process.env.BACKEND_URL

  const getMySkills = async () => {
    const { data } = await axios.get(`${domain}/api/v1/skill/getall`, { withCredentials: true })
    setSkills(data.skills)
  }

  const getMyProfile = async () => {
    const { data } = await axios.get(`${domain}/api/v1/user/portfolio/me`, { withCredentials: true })
    setUser(data.user)
    setLoad(true)
  }

  const getMyProjects = async () => {
    const { data } = await axios.get(`${domain}/api/v1/project/getall`, { withCredentials: true })
    setProjects(data.projects)
  }

  useEffect(() => {
    getMyProfile()
    setLoad(false)
    getMySkills()
    getMyProjects()
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {loading ? (
        <div className="w-full">
          <Header user={user} />
          <main className="w-full">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
              <Hero user={user} />
              <About user={user} />
              <Skills skills={skills} />
              <Portfolio projects={projects} />
              <MyApps />
              <Contact user={user} />
            </div>
            <Footer user={user} />
          </main>
        </div>
      ) : (
        <Pageload />
      )}
    </div>
  )
}

export default Home
