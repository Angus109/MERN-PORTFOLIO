import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Globe, Blocks } from "lucide-react"

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
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile Development",
      description: "Creating responsive mobile applications with modern frameworks",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Web Development",
      description: "Building scalable web applications with cutting-edge technologies",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "MERN Stack",
      description: "Full-stack development using MongoDB, Express, React, and Node.js",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Blocks className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Blockchain",
      description: "Developing decentralized applications and smart contracts",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20">
      <div className="w-full">
        {/* Section Title */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[8px] sm:tracking-[12px] lg:tracking-[15px] relative inline-block">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                ABOUT
              </span>
              <span className="ml-2 sm:ml-4 text-blue-600 dark:text-blue-400">ME</span>
            </h1>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700 -z-10"></div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="w-full mb-12 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 h-full"
              >
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r ${spec.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    {spec.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
                    {spec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 max-w-sm sm:max-w-md mx-auto">
                <img
                  src={user.avatar && user.avatar.url}
                  alt="Profile"
                  className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/5]"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  Technologies & Expertise
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  Experience & Background
                </h3>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {user.aboutMe ||
                    "Experienced developer with a passion for creating innovative solutions. Specialized in full-stack development with expertise in modern web technologies and mobile application development."}
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">50+</div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">3+</div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                  </div>
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
