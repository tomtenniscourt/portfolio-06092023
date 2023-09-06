import React, { useEffect, useState } from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll


const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "React.js",
  "Ruby",
  "Ruby on Rails",
  "Bootstrap",
  "MongoDB",
  "PostgreSQL",
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 4,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section4 = document.getElementById("section4");
      if (section4) {
        const { top, height } = section4.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visiblePercentage = (viewportHeight - top) / height;

        setIsSectionVisible(visiblePercentage >= 0.55);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="skills-wrapper">

      <div className="skill-content">
        <div id="skills-section">
          {isSectionVisible && (
            <motion.ul
              className="skills-container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.li
                className={`skill-item`}
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <div className="skill-content-item">
                  <h2 className="item-h2">My Skills</h2>
                  <div className="skills-list-new">
                    {skills.map((skill, index) => (
                      <div className="skill-box-new" key={index}>
                        {skill}
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.li>
              <motion.li
                className={`skill-item`}
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <div className="skill-content-item">
                  <h2 className="item-h2">Who Am I?</h2>
                  <p className="skills-item-p">
                    I have just finished a three month intensive Software
                    Engineering course that taught the fundamentals of HTML5,
                    CSS, and JavaScript, in order to prepare myself for a career
                    in Software Engineering and Development. A collection of
                    some applications I have built can be seen below in the
                    projects section.
                    <br />
                    <br />
                    I am actively seeking job opportunities where I can make
                    meaningful contributions, continuously learn, and grow as a
                    professional. With a solid foundation as a trained full
                    stack engineer, I find the most fulfillment and joy working
                    on the front end of projects.
                    <br />
                    <br />
                    If you have or hear of any exciting opportunities that
                    aligns with my skills and experience, I would be thrilled to
                    hear from you! Please feel free to connect with me on{" "}
                    <a href="https://www.linkedin.com/in/tom-court/">
                      LinkedIn
                    </a>
                    , or contact me using the links below.
                  </p>
                </div>
              </motion.li>
            </motion.ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
