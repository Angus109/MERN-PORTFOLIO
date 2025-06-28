import { ExternalLink, Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { Typewriter } from "react-simple-typewriter"
import { Button } from "@/components/ui/button"

const Hero = ({ user }) => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="bg-green-400 rounded-full h-3 w-3 animate-pulse flex-shrink-0"></span>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-sm sm:text-base">Available for work</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent leading-tight px-4">
          {user.fullName || "Your Name"}
        </h1>

        {/* Typewriter Effect */}
        <div className="w-full px-4 mb-8">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold min-h-[60px] sm:min-h-[80px] flex items-center justify-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center break-words">
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
        </div>

        {/* Description */}
        <div className="w-full px-4 mb-8 sm:mb-12">
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {user.aboutMe || "Passionate developer creating amazing digital experiences with modern technologies."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full px-4 mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a href={user.githubURL || "#"} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>View GitHub</span>
              </Button>
            </a>
            <a href={user.resume?.url || "#"} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-slate-300 dark:border-slate-600 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
              >
                <ExternalLink className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Download Resume</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full px-4">
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap max-w-sm mx-auto">
            <a
              href={user.YoutubeURl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors flex-shrink-0"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href={user.instagramURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors flex-shrink-0"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={user.facebookURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors flex-shrink-0"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={user.linkedInURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-sky-50 dark:bg-sky-900/20 text-sky-600 hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors flex-shrink-0"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={user.twitterURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors flex-shrink-0"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
