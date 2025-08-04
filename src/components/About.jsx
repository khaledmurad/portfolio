import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
const About = () => {

  const ServiceCard = ({id , title , icon}) => {
    return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn('right','spring',0.5 * id , 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div 
            options={{
              max:45,scale:1,speed:450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-10 min-h-[260px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} 
            className="w-14 h-14 object-contain" />
            <h3 className="text-center font-bold text-white text-[20px]">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 px-4 text-secondary text-[17px] max-w-screen-2xl leading-[30px]">
        With the new Tab Multi-Select functionality, tabs become first-class
        citizens in the interface. A simple modifier when performing actions
        will split the interface to show multiple tabs at once. Works with the
        side bar, tab bar, Goto Anything and more!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service , id) => (
          <ServiceCard key={service.title} id={id} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About , 'about');
