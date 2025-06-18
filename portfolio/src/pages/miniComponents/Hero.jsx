import { ExternalLink, Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { useState, useEffect } from "react"
import axios from "axios"
import React from "react"
import { Typewriter } from "react-simple-typewriter"
import { Button } from "@/components/ui/button"



const Hero = ({user}) => {


  return (
    <section className="">
      <div className="max-w-4xl mx-auto text-center">
        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="bg-green-400 rounded-full h-3 w-3 animate-pulse"></span>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Available for work</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-[1.3rem] sm:text-[1.75rem]  md:text-[2.2rem] lg:text-[2.8rem] font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
          {user.fullName || "Your Name"}
        </h1>

        {/* Typewriter Effect */}
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center justify-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <Typewriter
              words={["FULLSTACK DEVELOPER", "MERN STACK", "MOBILE DEVELOPER", "BLOCKCHAIN DEVELOPER"]}
              loop={50}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>

        {/* Description */}
        <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {user.aboutMe || "Passionate developer creating amazing digital experiences with modern technologies."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href={user.githubURL || "#"} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </a>
          <a href={user.resume?.url || "#"} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 dark:border-slate-600 px-8 py-3 rounded-full transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href={user.YoutubeURl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href={user.instagramURL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href={user.facebookURL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href={user.linkedInURL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-sky-50 dark:bg-sky-900/20 text-sky-600 hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={user.twitterURL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero



