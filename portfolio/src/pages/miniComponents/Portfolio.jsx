import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);

  const truncateDescription = (element) => {
    const description = element.description;
    const maxLength = 40;

    // Truncate the description if it exceeds the max length
    if (description.length > maxLength) {
      const truncatedDescription = description.substring(0, maxLength) + "...";
      return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {truncatedDescription}</p>

    } else {
      return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {description}</p>
    }
  }





  const domain = process.env.BACKEND_URL;

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        `${domain}/api/v1/project/getall`,
        { withCredentials: true }
      );
      setProjects(data.projects);
    };
    getMyProjects();
  }, []);
  return (
    <>
      {projects && projects.length !==0 && <div>
        <div className="relative mb-12">
          <h1
            className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] 
          mx-auto w-fit font-extrabold about-h1"
            style={{
              background: "hsl(222.2 84% 4.9%)",
            }}
          >
            MY{" "}
            <span className="text-tubeLight-effect font-extrabold">
              WORKS
            </span>
          </h1>
          <h1
            className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
          tracking-[15px] mx-auto w-fit font-extrabold about-h1"
            style={{
              background: "hsl(222.2 84% 4.9%)",
            }}
          >
            MY <span className="text-tubeLight-effect font-extrabold">WORK</span>
          </h1>
          <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {viewAll
            ? projects &&
            projects.map((element) => {
              return (
                <Card className="h-fit p-7 flex flex-col justify-center items-center gap-3" key={element._id}>
                  <a href="#">
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.title}
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {element.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {truncateDescription(element)}</p>
                    <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
                      <Link to={element.gitRepoLink} target="_blank">
                        <Button className="rounded-[30px] flex items-center gap-2 flex-row">
                          <span>
                            <Github />
                          </span>
                          <span>Github</span>
                        </Button>
                      </Link>
                      <Link to={`/project/${element._id}`} key={element._id} >
                        <Button className="rounded-[30px] flex items-center gap-2 flex-row">
                          <span>
                            <ExternalLink />
                          </span>
                          <span>preview </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>



              );
            })
            : projects &&
            projects.slice(0, 9).map((element) => {
              return (
                <Card className="h-fit p-7 flex flex-col justify-center items-center gap-3" key={element._id}>
                  <a href="#">
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.title}
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {element.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {truncateDescription(element)}</p>
                    <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
                      <Link to={element.gitRepoLink} target="_blank">
                        <Button className="rounded-[30px] flex items-center gap-2 flex-row">
                          <span>
                            <Github />
                          </span>
                          <span>Github</span>
                        </Button>
                      </Link>
                      <Link to={`/project/${element._id}`} key={element._id} target="_blank">
                        <Button className="rounded-[30px] flex items-center gap-2 flex-row">
                          <span>
                            <ExternalLink />
                          </span>
                          <span>preview </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>


              );
            })}
        </div>
        {projects && projects.length > 9 && (
          <div className="w-full text-center my-9">
            <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
              {viewAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>}
    </>
  );
};

export default Portfolio;
