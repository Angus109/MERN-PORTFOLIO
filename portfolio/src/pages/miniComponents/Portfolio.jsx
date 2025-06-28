"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ExternalLink, Github } from "lucide-react"

const Portfolio = ({ projects }) => {
  const [viewAll, setViewAll] = useState(false)

  const truncateDescription = (element) => {
    const description = element.description
    const maxLength = 40

    if (description.length > maxLength) {
      const truncatedDescription = description.substring(0, maxLength) + "..."
      return (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          {truncatedDescription}
        </p>
      )
    } else {
      return (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )
    }
  }

  return (
    <>
      {projects && projects.length !== 0 && (
        <div id="projects" className="w-full py-12 sm:py-16 lg:py-20">
          {/* Section Title */}
          <div className="relative mb-12 sm:mb-16">
            <div className="text-center">
              <h1 className="hidden sm:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[8px] sm:tracking-[12px] lg:tracking-[15px] relative inline-block">
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                  MY
                </span>
                <span className="ml-2 sm:ml-4 text-blue-600 dark:text-blue-400">WORKS</span>
              </h1>
              <h1 className="block sm:hidden text-2xl font-extrabold tracking-[8px] relative inline-block">
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                  MY
                </span>
                <span className="ml-2 text-blue-600 dark:text-blue-400">WORK</span>
              </h1>
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700 -z-10"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {(viewAll ? projects : projects.slice(0, 9)).map((element) => (
                <Card
                  className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  key={element._id}
                >
                  <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-700">
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                      {element.title}
                    </h5>
                    <div className="flex-grow">{truncateDescription(element)}</div>
                    <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Link to={element.gitRepoLink} target="_blank" className="flex-1">
                        <Button className="w-full rounded-full flex items-center justify-center gap-2 text-sm bg-slate-900 hover:bg-slate-800 text-white">
                          <Github className="w-4 h-4 flex-shrink-0" />
                          <span>Github</span>
                        </Button>
                      </Link>
                      <Link to={`/project/${element._id}`} key={element._id} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full rounded-full flex items-center justify-center gap-2 text-sm border-slate-300 dark:border-slate-600 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4 flex-shrink-0" />
                          <span>Preview</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Show More/Less Button */}
            {projects && projects.length > 9 && (
              <div className="w-full text-center mt-8 sm:mt-12">
                <Button
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                  onClick={() => setViewAll(!viewAll)}
                >
                  {viewAll ? "Show Less" : "Show More"}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Portfolio
