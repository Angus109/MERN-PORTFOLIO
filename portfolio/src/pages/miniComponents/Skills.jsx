import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const Skills = () => {
  const [skills, setSkills] = useState([]);

  const domain = process.env.BACKEND_URL;

  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        `${domain}/api/v1/skill/getall`,
        { withCredentials: true }
      );
      setSkills(data.skills);
    };
    getMySkills();
  }, []);
  return (
    <div className="w-full">
      {skills && skills.length !== 0 && <div className="w-full relative flex flex-col gap-8 sm:gap-12">
        <h1 className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit">
          FRAMEWORKS
        </h1>


        <Swiper
          slidesPerView={2}
          spaceBetween={50}
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
              // spaceBetween: 50

            },
            576: {
              slidesPerView: 3,
              // spaceBetween: 100
         
            },

            1024: {
              slidesPerView: 4,
              // spaceBetween: 100
     
            }
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper w-full py-10"
        >
          {skills &&
            skills.map((element) => {
              return (
                <SwiperSlide>
                  <Card key={element._id} className="h-fit w-full p-7 flex flex-col justify-center items-center">
                    <img
                      src={element.svg && element.svg.url}
                      alt="skill"
                      className="h-12 sm:h-24 w-auto"
                    />
                    <p className="text-muted-foreground text-center">
                      {element.title}
                    </p>
                  </Card>
                </SwiperSlide>
              );
            })}
        </Swiper>


      </div>}
    </div>
  );
};

export default Skills;
