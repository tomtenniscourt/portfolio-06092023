import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 2.5,
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

const ContactForm = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section5 = document.getElementById("section5");
      if (section5) {
        const { top, height } = section5.getBoundingClientRect();
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

  const emailSubject = "Inquiry from Website";

  return (
    <>

      <div className="contact-form-section">
        <motion.div
          className="contact-container"
          variants={container}
          initial="hidden"
          animate={isSectionVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="contact-item"
            variants={item}
            whileHover={{ scale: 1.2 }}
          >
            <h2 className="contact-item-title">Get in touch!</h2>
            <p className="contact-item-text">
              Tom Court
              <br />
              London
              <br />
              EC1V.
              <br />
              <motion.a
                href="https://www.instagram.com/tomtenniscourt/"
                variants={item}
              >
                <motion.img
                  className="sm-profile"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
                  alt="Link to Instagram"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3,
                  }}
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tom-court/"
                variants={item}
              >
                <motion.img
                  className="sm-profile"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                  alt="Link to LinkedIn"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                  }}
                />
              </motion.a>
              <motion.a
                href="https://github.com/tomtenniscourt"
                variants={item}
              >
                <motion.img
                  className="sm-profile"
                  src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                  alt="Link to GitHub"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.7,
                  }}
                />
              </motion.a>
              <motion.a
                href={`mailto:tomcourt94@icloud.com?subject=${encodeURIComponent(
                  emailSubject
                )}`}
                variants={item}
              >
                <motion.img
                  className="email-profile"
                  src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
                  alt="Email Tom"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.9,
                  }}
                />
              </motion.a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactForm;