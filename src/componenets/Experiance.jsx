import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import express from "../assets/express.png";

const Experiance = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      shadow: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      shadow: "shadow-blue-500",
    },
    {
      id: 3,

      src: javascript,
      title: "JavaScript",
      shadow: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      shadow: "shadow-blue-500",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next.js",
      shadow: "shadow-white",
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      shadow: "shadow-green-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      shadow: "shadow-sky-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      shadow: "shadow-gray-400",
    },
    {
      id: 9,
      src: express,
      title: "Express",
      shadow: "shadow-white",
    },
  ];

  return (
    <div
      name="experiance"
      className="bg-gradient-to-b from-gray-800 to-black
    w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
        w-full text-white"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i am familiar with</p>
        </div>
        <div
          className="w-full grid  grid-cols-2  sm:grid-cols-3 gap-8
        text-center py-8 px-12  sm:px-0"
        >
          {techs.map(({ id, src, title, shadow }) => (
            <div
              key={id}
              className={" shadow-md hover:scale-105 duration-500 py-2 rounded-lg " + shadow}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
