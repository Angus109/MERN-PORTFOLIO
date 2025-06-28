"use client"

import { Card } from "@/components/ui/card"
import axios from "axios"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, FreeMode } from "swiper/modules"



const MyApps = () => {
  const [apps, setApps] = useState([])
  const domain = process.env.BACKEND_URL 

  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(`${domain}/api/v1/softwareapplication/getall`, { withCredentials: true })
      setApps(data.softwareApplications)
    }
    getMyApps()
  }, [])

  return (
    <>
      {apps && apps.length !== 0 && (
        <div className="w-full py-12 sm:py-16 lg:py-20">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[8px] sm:tracking-[12px] lg:tracking-[15px] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TECHNOLOGIES
            </h1>
          </div>

          {/* Technologies Swiper */}
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              style={{
                "--swiper-pagination-color": "#3b82f6",
                "--swiper-pagination-bullet-inactive-color": "#cbd5e1",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "12px",
                "--swiper-pagination-bullet-horizontal-gap": "4px",
                paddingBottom: "50px",
              }}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="w-full py-4"
            >
              {apps.map((element) => (
                <SwiperSlide key={element._id}>
                  <Card className="h-full w-full p-4 sm:p-6 flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="w-full flex flex-col items-center text-center">
                      <img
                        src={element.svg && element.svg.url}
                        alt={element.name}
                        className="h-12 sm:h-16 lg:h-20 w-auto mb-3 object-contain"
                      />
                      <p className="text-muted-foreground text-sm sm:text-base font-medium break-words">
                        {element.name}
                      </p>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}

export default MyApps
