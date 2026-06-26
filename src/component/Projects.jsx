import React, { useState } from "react";
import projectsData from "../projects.json";

const categories = [
  "All",
  "Frontend Clone",
  "Frontend",
  "Java Web",
  "Java",
  "Spring Boot",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="py-24 bg-[#F4EFEB] px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8F6B4C] font-semibold mb-3">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#4E4036]">
            My Recent Work
          </h2>

          <p className="text-[#6D5C50] mt-4 max-w-2xl leading-relaxed">
            A collection of frontend, Java, and full-stack Spring Boot
            applications showcasing responsive UI development, backend
            engineering, and database integration.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-[#8F6B4C] text-white shadow-md"
                    : "bg-[#E9DDD1] text-[#5B4B40] border border-[#D8C1AA] hover:bg-[#DCC7B3]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#E9DDD1]
              border border-[#D8C1AA]
              rounded-2xl
              p-7
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#4E4036] mb-3">
                {project.title}
              </h3>

              <p className="text-[#6D5C50] leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1
                    bg-[#F4EFEB]
                    text-[#5B4B40]
                    rounded-full
                    text-xs
                    border border-[#DCC7B3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                bg-[#8F6B4C]
                text-white
                px-5
                py-2.5
                rounded-lg
                font-medium
                hover:bg-[#76563C]
                transition-all duration-300"
              >
                View on GitHub →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;