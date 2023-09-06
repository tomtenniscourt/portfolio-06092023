import React, { useEffect, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 


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
  expanded: {
    zIndex: 2,
    scale: 3,
  },
};

  const buttonStyle = {
    color: "#ffffff",
    backgroundColor: "#007bff", 
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "20px",
  };

const Projects = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section3 = document.getElementById("section3");
      if (section3) {
        const { top, height } = section3.getBoundingClientRect();
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

  const handleItemClick = (index) => {
    setExpandedItem((prevItem) => (prevItem === index ? null : index));
  };

  return (
    <div class="project-content">
      <div id="projects-section">
        {isSectionVisible && (
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {[0, 1, 2, 3].map((index) => (
              <motion.li
                key={index}
                className={`item ${expandedItem === index ? "expanded" : ""}`}
                variants={item}
                onClick={() => handleItemClick(index)}
                whileHover={{ scale: 1.02 }}
              >
                {index === 0 && (
                  <div className="content-item-one">
                    <h2 className="item-h2">Tic Tac Toe</h2>
                    <p className="item-p">
                      A game of tic tac toe using simple JavaScript logic, that
                      can be played by two users.
                    </p>
                    <a
                      className="button-go-tictactoe"
                      href="https://tomtenniscourt.github.io/tic_tac_toe_200623/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to App
                    </a>
                  </div>
                )}
                {index === 1 && (
                  <div className="content-item-two">
                    <h2 className="item-h2">Dad Jokes</h2>
                    <p className="item-p">
                      Using a 3rd party API, a random 'Dad Joke' is generated on
                      the screen for the user.
                    </p>
                    <a
                      className="button-go-joke"
                      href="https://dad-joke-generator-phi.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to App
                    </a>
                  </div>
                )}
                {index === 2 && (
                  <div className="content-item-three">
                    <h2 className="item-h2">Weather App</h2>
                    <p className="item-p">
                      An application that an API to fetch weather information
                      for any given U.S. zip code
                    </p>
                    <a
                      className="button-go-weather"
                      href="https://my-project-2-47ihbr2ba-tomtenniscourt.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to App
                    </a>
                  </div>
                )}
                {index === 3 && (
                  <div className="content-item-four">
                    <h2 className="item-h2">Paint</h2>
                    <p className="item-p">
                      A JavaScript application that enables users to paint on a
                      blank canvas
                      <br />
                    </p>
                    <a
                      className="button-go-paint"
                      href="https://toms-paint-react-app.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to App
                    </a>
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Projects;
