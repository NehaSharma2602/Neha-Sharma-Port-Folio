import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiHibernate,
  SiJavascript,
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
  { name: "Spring Data JPA", icon: <FaDatabase />, color: "text-amber-600" },
  { name: "Spring Security", icon: <FaShieldAlt />, color: "text-orange-600" },
  { name: "Hibernate", icon: <SiHibernate />, color: "text-green-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { name: "SQL", icon: <FaDatabase />, color: "text-purple-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-700" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#F4EFEB] px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#8F6B4C] mb-4 font-semibold">
            Skills & Tools
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#4E4036] mb-6">
            Technologies I Work With
          </h2>

          <p className="text-[#6D5C50] leading-relaxed max-w-md text-lg">
            I build modern, scalable, and secure web applications using Java,
            Spring Boot, Hibernate and related technologies while following clean
            coding practices and industry standards.
          </p>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center
              bg-[#E9DDD1]
              border border-[#D6BEA6]
              rounded-2xl
              p-6
              shadow-sm
              hover:bg-[#DCC7B3]
              hover:-translate-y-2
              hover:shadow-lg
              transition-all duration-300"
            >
              <div className={`text-4xl mb-4 ${skill.color}`}>
                {skill.icon}
              </div>

              <p className="text-[#4E4036] text-sm font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;