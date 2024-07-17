import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, FreeMode } from 'swiper/modules';




const MyApps = () => {
  const [apps, setApps] = useState([]);

  const domain = process.env.BACKEND_URL;

  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        `${domain}/api/v1/softwareapplication/getall`,
        { withCredentials: true }
      );
      setApps(data.softwareApplications);
    };
    getMyApps();
  }, []);
  return (
    <>
      {apps && apps.length !== 0 && <div className="w-full flex flex-col gap-8 sm:gap-12">
        <h1 className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit">
          TECHNOLOGIES
        </h1>
  
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            style={{
              "--swiper-pagination-color": "#FFBA08",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "6px"
            }}
            breakpoints={{

              // when window width is >= 480px
              480: {
                slidesPerView: 3,
                spaceBetween: 30

              },
              576: {
                slidesPerView: 4,
                spaceBetween: 30

              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 50

              }
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper w-full"
          >
            {apps &&
              apps.map((element) => {
                return (
                  <SwiperSlide>
                    <Card className="h-fit w-full p-7 flex flex-col justify-center items-center gap-3" key={element._id}>
                      <img
                        src={element.svg && element.svg.url}
                        alt="skill"
                        className="h-12 sm:h-24 w-auto"
                      />
                      <p className="text-muted-foreground text-center">
                        {element.name}
                      </p>
                    </Card>
                  </SwiperSlide>
                );
              })}
          </Swiper>
      
      </div>}
    </>
  );
};

export default MyApps;
