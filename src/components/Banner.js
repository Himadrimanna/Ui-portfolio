import React from 'react';
import Image from '../assets/avatar2.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[90px]"
            >
              HIMADRI <span>MANNA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[46px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  'DEveloper',
                  2000,
                  'Graphic Designer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'VFX Artist',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a UI/UX designer also a passionate Graphic Designer, VFX
              artist and Web Developer.Currently,I'm a Final Year IT Engineering
              Student.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" smooth={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px]  gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/Himadrimanna"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/himadri-manna-902964rd/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/___hr.md___125___/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoInstagramAlt />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="h-[500px] items-center hidden lg:flex max-w-[320px] lg:max-w-[500px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
