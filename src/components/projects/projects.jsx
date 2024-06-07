import React, { useState } from "react";
import "./projects.css";
import generateqr from "../../assets/generateqr.png";
import magichotel from "../../assets/magichotel.png";
import shoppingMarket from "../../assets/shoppingMarket.png";
import portfolio from "../../assets/portfolio.png";
import musicsound from "../../assets/musicsound.jpeg";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      imageUrl: generateqr,
      imageAlt: "Generate QR",
      title: "Generate QR",
      description:
        "A web application that helps users create a qr image by link.",
      viewLink: "https://generate-qr-x6c6.vercel.app/",
      githubLink: "https://github.com/Anarodme/Generate-QR",
    },
    {
      imageUrl: magichotel,
      imageAlt: "Magic Hotel",
      title: "Magic Hotel",
      description:
        "A web application that helps users track their fitness activities.",
      viewLink: "https://magic-hotel-website.vercel.app/",
      githubLink: "https://github.com/Anarodme/Magic-Hotel-Website",
    },
    {
      imageUrl: shoppingMarket,
      imageAlt: "Shopping Market",
      title: "Shopping Market",
      description:
        "A web application that helps users manage their e-commerce store.",
      viewLink: "https://shopping-market-drab.vercel.app/",
      githubLink: "https://github.com/Anarodme/Shopping-Market",
    },
    {
      imageUrl: portfolio,
      imageAlt: "Portfolio",
      title: "Portfolio",
      description:
        "A web application that show a basic information of a assistant accountant.",
      viewLink: "http://www.mariarodme.com/",
      githubLink: "https://github.com/Anarodme/mariarodme",
    },
    {
      imageUrl: musicsound,
      imageAlt: "Musicsound",
      title: "Musicsound",
      description:
        "A web application for music playback and online podcast transmissions.",
      viewLink: "https://github.com/Anarodme/musicsound",
      githubLink: "https://github.com/Anarodme/musicsound",
    },
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="projects"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              My Projects
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out some of the projects I've worked on.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {(showAll ? allProjects : allProjects.slice(0, 3)).map(
            (project, index) => (
              <ProjectCard
                key={index}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                title={project.title}
                description={project.description}
                viewLink={project.viewLink}
                githubLink={project.githubLink}
              />
            )
          )}
        </div>
        <div className="text-center">
          <button
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={toggleShowAll}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  imageUrl,
  imageAlt,
  title,
  description,
  viewLink,
  githubLink,
}) => {
  return (
    <div className="group rounded-lg bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950 dark:hover:bg-gray-800">
      <a href="#" className="block">
        <img
          src={imageUrl}
          width="550"
          height="310"
          alt={imageAlt}
          className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
        />
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
          <div className="mt-4 flex justify-between">
            <a
              href={viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              View
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Projects;
