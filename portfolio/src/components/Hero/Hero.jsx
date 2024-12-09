import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Container } from "./hero.js";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Illustration from "../../files/illustration.svg";
import linkedin from "../../files/linkedin.svg";
import githubIcon from "../../files/github.svg";
import Hello from "../../files/Hello.gif";

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const ImageAnimation = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{
        duration: 0.5,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export function Hero() {
  return (
    <Container id="home" style={{ minHeight: "100vh" }}>
      <div className="hero-text">
        <AnimatedSection>
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <h1>Abdella Boutaarourt</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <h3>Full Stack Developer</h3>
        </AnimatedSection>
        <AnimatedSection delay={0.6}>
          <p className="small-resume">
            Building Experience One Line of Code at a Time! 💻✨
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.8}>
          <BrowserRouter>
            <a href="mailto:your-email@example.com" className="button">
              Contact
            </a>
          </BrowserRouter>
        </AnimatedSection>
        <AnimatedSection delay={1}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/abdella-boutaarourt-8058b0289"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/AbdellaBoutaarourt"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </AnimatedSection>
      </div>
      <div className="hero-image">
        <ImageAnimation delay={1}>
          <img src={Illustration} alt="ILLUSTRATOR" />
        </ImageAnimation>
      </div>
    </Container>
  );
}
