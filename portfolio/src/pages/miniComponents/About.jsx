import React, { useEffect, useState } from "react";
import axios from "axios";



const About = () => {
  const [user, setUser] = useState([]);
  const domain = process.env.BACKEND_URL;


  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        `${domain}/api/v1/user/portfolio/me`,
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);


  return (
    <>
      {user && user.length !==0 && <div className="w-full flex flex-col overflow-x-hidden">
        <div className="relative">
          <h1
            className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
            style={{
              background: "hsl(222.2 84% 4.9%)",
            }}
          >
            ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
          </h1>
          <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
        </div>

        <div className="flex flex-row gap-5 text-center justify-center ">
          <span class="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">mobile</span>
          <span class="inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">web</span>
          <span class="inline-block px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full">mern stack</span>
        </div>

        <div>
          <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
            <div className="flex justify-center items-center">
              <img
                src={user.avatar && user.avatar.url}

                alt="avatar"
                className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
              />

            </div>
            <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Technologies</h5>
              <p>
                MongoD || Express.js || React.js || Node.js || TYpescript || php
              </p>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Experience</h5>
              <p>
                {user.aboutMe}
              </p>
            </div>
          </div>
        </div>
        {console.log(user)}
      </div>}
    </>

  );
};

export default About;
