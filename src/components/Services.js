import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { RiFlutterFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FaNodeJs } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobepremierepro } from 'react-icons/si';
import { SiAdobeillustrator } from 'react-icons/si';
import { SiAdobeaftereffects } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { BiLogoFigma } from 'react-icons/bi';
import { SiAdobeaudition } from 'react-icons/si';
const services = [
  {
    name: 'Responsive WebSite Design',
    description:
      'I design websites that are both captivating and easy to navigate, ensuring they function smoothly on various devices and platforms.',
  },
  {
    name: 'Brand Designing',
    description:
      'I craft elegant Logos, flyers, posters, and various printed materials that align perfectly with brand specifications and design elements.',
  },
  {
    name: 'Social Media Handling',
    description:
      'I can manage your brands social media, especially on Instagram, to boost your online presence by creating eye-catching posts and engaging content.',
  },
  {
    name: 'UI/UX Design',
    description:
      'I design websites for a great user experience with clean layout, typography, and thoughtfully chosen colors for enhanced usability of the site.',
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* SKILLS */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-6"
          >
            <h2 className="h2 text-accent mb-6">What I have</h2>
            <h3 className="h3  ">Technical Skills</h3>
            <div className="flex lg:flex-row gap-6">
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <AiFillHtml5 />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">HTML</h3>
              </div>
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <DiCss3 />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">CSS</h3>
              </div>
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <SiTailwindcss />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  Tailwind CSS
                </h3>
              </div>
            </div>
            <div className="flex lg:flex-row gap-6">
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <FaReact />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  ReactJS
                </h3>
              </div>
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <TbBrandNextjs />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  NextJS
                </h3>
              </div>
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <FaNodeJs />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  NodeJS
                </h3>
              </div>
            </div>
            <div className="flex lg:flex-row gap-6">
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <FaJava />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">Java</h3>
              </div>
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <SiMongodb />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  MongoDB
                </h3>
              </div>
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <GrMysql />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">MYSQL</h3>
              </div>
            </div>
            <div className="flex lg:flex-row gap-6">
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <RiFlutterFill />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  Flutter
                </h3>
              </div>
            </div>
            <h3 className="h3 mb-4  ">Graphics and UI / UX Skills</h3>
            <div className="flex lg:flex-row gap-8">
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <SiAdobephotoshop />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  Photoshop
                </h3>
              </div>
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <SiAdobeillustrator />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  Illustrator
                </h3>
              </div>
            </div>
            <div className="flex lg:flex-row gap-6">
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <SiAdobepremierepro />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  Premiere Pro
                </h3>
              </div>
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <SiAdobeaftereffects />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  After Effects
                </h3>
              </div>
            </div>
            <div className="flex lg:flex-row gap-6">
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <SiAdobeaudition />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">
                  Adobe Audition
                </h3>
              </div>
              <div className="flex lg:flex-row">
                <div className="mt-2">
                  <BiLogoFigma />
                </div>
                <h3 className="text-justify  ml-2 mb-4 text-gradient">Figma</h3>
              </div>
            </div>
          </motion.div>
          {/* SERVICES */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className="items-center"
          >
            <h2 className="h2 text-accent mb-6">What I can give</h2>
            <h3 className="h3">Services</h3>
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 lg:h-[100px] h-[130px] mb-[20px] flex"
                    key={index}
                  >
                    <div className="max-w-[680px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-2 text-gradient">
                        {name}
                      </h4>
                      <p className="text-justify font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
