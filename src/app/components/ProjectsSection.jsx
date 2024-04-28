"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Next.js (JavaScript) + Tailwind CSS",
    image: "/images/projects/next_portfolio_website.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JittapolSrisawang/next-portfolio-website",
    previewUrl: "https://next-portfolio-website-js.vercel.app",
  },
  {
    id: 2,
    title: "Hotel Booking Website",
    description:
      "Next.js (TypeScript) + Tailwind CSS + Ant Design + MongoDB + Clerk + Firebase + Stripe",
    image: "/images/projects/next_hotel_booking.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JittapolSrisawang/next-hotel-booking",
    previewUrl: "/images/projects/next_hotel_booking.jpg",
  },
  {
    id: 3,
    title: "Online Shop Website (Only Frontend)",
    description: "Vite + React.js (JavaScript) + Tailwind CSS",
    image: "/images/projects/react_online_shop.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JittapolSrisawang/react-online-shop",
    previewUrl: "https://react-online-shop-js.netlify.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
