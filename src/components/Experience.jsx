import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Experience = () => {
  const ExperienceCard = ({experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{background:'#1d1836',color:'#fff'}}
        contentArrowStyle={{borderRight:'7px solid #232631'}}
        date={experience.date}
        iconStyle={{background:experience.iconBg}}
        icon={
          <div className="w-full h-full flex justify-center items-center">
            <img 
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[20px] font-bold">
            {experience.title}
          </h3>
          <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point,id) =>(
            <li
              key={`experience-${id}`}
              className="text-secondary text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    )
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>What i have done</p>
        <h2 className={styles.heroHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience , id) =>(
            <ExperienceCard key={id} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
