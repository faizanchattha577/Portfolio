import React from "react";
import eworker from "../assets/portfolio/eworker.jpg";
import {Link} from "react-scroll" 
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: eworker,
      href: "https://github.com/faizanchattha577/My-Project", // link to github

    },
    {
      id: 2,
      src: eworker,
      href: "https://github.com/faizanchattha577/My-Project", // link to github
    },
    {
      id: 3,
      src: eworker,
      href: "https://github.com/faizanchattha577/My-Project", // link to github
    },
    {
      id: 4,
      src: eworker,
      href: "https://github.com/faizanchattha577/My-Project", // link to github
    },
    {
      id: 5,
      src: eworker,
      href: "https://github.com/faizanchattha577/My-Project", // link to github
    },
    {
      id: 6,
      src: eworker,
      href: "https://github.com/faizanchattha577/My-Project", // link to github
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full
     h-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Portfolio</p>
          <p className="py-6">check out some of my work right here ...</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center " >
              
                
                <Link 
                href={href}
                target="_blank"
                rel="noreferrer" 
                 className="w-1/2px-6  py-3 duration-200 hover:scale-105"
                 >
                   Code
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
