import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Globe, Blocks } from "lucide-react"
import { useState, useEffect } from "react"



const About = ({ user }) => {


  const technologies = [
    { name: "MongoDB", category: "Database" },
    { name: "Express.js", category: "Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "PHP", category: "Language" },
  ]

  const specializations = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Creating responsive mobile applications with modern frameworks",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Building scalable web applications with cutting-edge technologies",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "MERN Stack",
      description: "Full-stack development using MongoDB, Express, React, and Node.js",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: "Blockchain",
      description: "Developing decentralized applications and smart contracts",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" className="">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8">
          <h1
            className="flex gap-4 items-center text-[1.85rem] sm:text-[2.75rem] md:text-[3rem] 
            lg:text-[3rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
            tracking-[15px] mx-auto w-fit font-extrabold about-h1"
            style={{
              background: "hsl(222.2 84% 4.9%)",
            }}
          >
            ABOUT
            <span className="text-tubeLight-effect font-extrabold">ME</span>
          </h1>
          <span className="absolute w-full h-1 top-7 sm:top-7 
          md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
        </div>
        {/* Section Header */}
        <div className="text-center mb-16">
         
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {specializations.map((spec, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${spec.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {spec.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">{spec.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                // src={user.avatar?.url || "/placeholder.svg?height=500&width=400"}
                src={user.avatar && user.avatar.url}
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-3xl"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Technologies & Expertise</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300"
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Experience & Background</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {user.aboutMe ||
                  "Experienced developer with a passion for creating innovative solutions. Specialized in full-stack development with expertise in modern web technologies and mobile application development."}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">3+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About



