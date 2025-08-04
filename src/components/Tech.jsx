import React from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
