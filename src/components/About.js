import React from 'react';
import Countup from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import CV from '../assets/RESUME.pdf';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="text-justify mb-6">
              I firmly believe in perpetual personal growth, and I'm dedicated
              to continuously pushing boundaries. Technology impassions me, and
              I'm eager to continually challenge the existing limits of what can
              be achieved. I look forward to the trajectory of my career and am
              enthusiastically welcoming new prospects and possibilities.
            </h3>
            <div className="lg:flex gap-x-12 lg:gap-x-10 mb-1">
              <h2>
                Name :
                <span className="text-[20px] font-tertiary text-gradient mb-2">
                  {' '}
                  Himadri Manna
                </span>
              </h2>
              <h2>
                Location :
                <span className="text-[20px] font-tertiary text-gradient mb-2">
                  {' '}
                  Mumbai, India
                </span>
              </h2>
            </div>
            <div className="lg:flex gap-x-12 lg:gap-x-10 mb-8">
              <h2>
                Age :
                <span className="text-[20px] font-tertiary text-gradient mb-2">
                  {' '}
                  {inView ? (
                    <Countup start={0} end={21} duration={5} />
                  ) : null}{' '}
                  Years
                </span>
              </h2>
              <h2>
                Email :
                <span className="text-[20px] font-tertiary text-gradient mb-2">
                  {' '}
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=himadrimanna792@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    himadrimanna792@gmail.com
                  </a>
                </span>
              </h2>
            </div>
            <div>
              <button className="btn btn-lg">
                <a href={CV} download>
                  Download CV
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
