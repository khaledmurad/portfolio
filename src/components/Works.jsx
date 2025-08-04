import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const ProjectCard = ({ id, project }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", 0.5 * id, 0.75)}>
        <Tilt
          option={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white text-[20px] font-bold">{project.name}</h3>
            <p className="text-secondary text-[14px] font-semibold">{project.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag)=> (
             <p className={`text-[12px] ${tag.color}`}>#{tag.name}</p> 
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>My work</p>
        <h2 className={styles.heroHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          With the new Tab Multi-Select functionality, tabs become first-class
          citizens in the interface. A simple modifier when performing actions
          will split the interface to show multiple tabs at once. Works with the
          side bar, tab bar, Goto Anything and more!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project, id) => (
          <ProjectCard
            project={project}
            key={`project-${id}`}
            id={id}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
