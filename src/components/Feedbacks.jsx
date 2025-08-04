import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => {
  const FeedbackCard = ({ id, testimonial }) => {
    return (
      <motion.div
        variants={fadeIn("", "spring", 0.5 * id, 0.75)}
        className="bg-black-200 px-10 py-5 rounded-3xl sm:w-[320px] w-full"
      >
        <p className="text-white text-[48px]">"</p>

        <div className="mt-1">
          <p className="text-white tracking-wider text-[18px]">
            {testimonial.testimonial}
          </p>

          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">@</span> {testimonial.name}
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {testimonial.designation} of {testimonial.company}
              </p>
            </div>

            <img className="w-10 h-10 rounded-full object-cover" src={testimonial.image} alt={`feedback_by-${testimonial.name}`} />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="mt-6 bg-black-100 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl
         min-h-[260px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.heroSubText}>What others say</p>
            <h3 className={styles.heroHeadText}>Feedback</h3>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-16 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, id) => (
            <FeedbackCard
              key={testimonial.name}
              id={id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
