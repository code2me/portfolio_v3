import React from "react";
import "./experience.css";
import { Data } from "@utils/constants";
import { BsPatchCheckFill } from "react-icons/bs";
import { useCursor } from "@hooks/useCursor";

const Experience = () => {
    const { setIsHovering } = useCursor();

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend ambient-light">
          <h3>Frontend Development</h3>
          <div
            className="experience__content"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {Data.Experience.Frontend.map((Array) => (
              <article className="experience_details" key={Array}>
                <BsPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>{Array[0]}</h4>
                  <small className="text-light">{Array[1]}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="experience__backend ambient-light"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            {Data.Experience.Backend.map((Array) => (
              <article className="experience_details" key={Array}>
                <BsPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>{Array[0]}</h4>
                  <small className="text-light">{Array[1]}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
