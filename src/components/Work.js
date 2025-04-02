import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Img1 from '../assets/portfolio1.png';
import Img2 from '../assets/portfolio2.png';
import Img3 from '../assets/portfolio3.png';
import Img4 from '../assets/portfolio4.png';
import Img5 from '../assets/portfolio5.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Work = () => {
  return (
    <div className="py-8" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                For UI/UX Work<br />
                Checkout My
              </h2>
              <button className="btn btn-lg">
                <a
                  href="https://www.behance.net/himadrimanna"
                  target="_blank"
                  rel="noreferrer"
                >
                  Behance Work
                </a>
              </button>
            </div>
            {/* images */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/80 w-full h-full absolute z-10 transition-all duration-300"></div>
              <img
                href="https://github.com/Himadrimanna/Real-time-data-extraction.git'"
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-2 group-hover:bottom-36 transition-all duration-500 z-20 mr-2">
                <span className="lg:text-3xl text-gradient">
                  Real Time Data Extraction
                </span>
              </div>
              <div className="text-sm absolute text-justify -bottom-full left-2 group-hover:bottom-4 lg:group-hover:bottom-10 transition-all duration-500 z-20 mr-2">
                <span className="text-justify lg:line-clamp-none">
                  This app was built using Java and Java swing.A java library
                  called Jsoup Library is used to extract data from a stock
                  market website which is called web scrapping in industries.
                  You will be able to view real time data as the data in GUI
                  will be update automatically after the data in actual website
                  is updated
                </span>
                <a
                  href="https://github.com/Himadrimanna/Real-time-data-extraction"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            {/* image4 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/80 w-full h-full absolute z-10 transition-all duration-300"></div>
              <img
                href="https://github.com/Himadrimanna/Real-time-data-extraction.git'"
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt=""
              />
              <div className="absolute -bottom-full left-2 group-hover:bottom-36 transition-all duration-500 z-20 mr-2">
                <span className="lg:text-3xl text-gradient">
                  E Commerce Flutter App
                </span>
              </div>
              <div className="text-sm absolute text-justify -bottom-full left-2 group-hover:bottom-4 lg:group-hover:bottom-10 transition-all duration-500 z-20 mr-2">
                <span className="text-justify lg:line-clamp-none">
                  This app was built uisng Flutter and Firebase. It was my
                  personel project which, I made to enhance my skills on flutter
                  native or android application. It was a full fledged
                  e-commerce app with whishlist, cart, searching, payment option
                  and many more feature. As of now it was in building phase and
                  the work is left to be done.
                </span>
                <a
                  href="https://github.com/Himadrimanna/Real-time-data-extraction"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
          {/* image2 */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/80 w-full h-full absolute z-10 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-2 group-hover:bottom-36 transition-all duration-500 z-20 mr-2">
                <span className="lg:text-3xl text-gradient">
                  Amigo Chat App
                </span>
              </div>
              <div className="text-sm absolute text-justify -bottom-full left-2  group-hover:bottom-4 lg:group-hover:bottom-10 transition-all duration-500 z-20 mr-2">
                <span className="text-justify lg:line-clamp-none">
                  This app was built using React Js.This was the first website I
                  made trying to enhance my skills on React Js with a simple
                  Chat App. It is made with a encrypted Password system with RSA
                  algorithm. Technologies used in this project React JS, CSS,
                  Node JS and MongodB. This project was made during 5th sem in
                  my college as a miniproject.
                </span>
                <a
                  href="https://github.com/Himadrimanna/Chat-App.git"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            {/* image3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl  ">
              <div className="group-hover:bg-black/80 w-full h-full absolute z-10 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-2 group-hover:bottom-36 transition-all duration-500 z-20 mr-2">
                <span className="lg:text-3xl text-gradient">
                  Stock Market Prediction
                </span>
              </div>
              <div className="text-sm absolute text-justify -bottom-full left-2  group-hover:bottom-4 lg:group-hover:bottom-10 transition-all duration-500 z-20 mr-2">
                <span className="text-justify  lg:line-clamp-none">
                  This app was built using Python. It was a Machine Learning
                  Project where a model was created and trained with a
                  Historical Stock Market Data to Predict the future stock
                  price. The model was trained using linear regression model and
                  the predicted data is shown in the application which was made
                  by Html and CSS
                </span>
                <a
                  href="https://github.com/Himadrimanna/Stock_Market_prediction.git"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            {/* image5 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/80 w-full h-full absolute z-10 transition-all duration-300"></div>
              <img
                href="https://github.com/Himadrimanna/Real-time-data-extraction.git'"
                className="group-hover:scale-125 transition-all duration-500"
                src={Img5}
                alt=""
              />
              <div className="absolute -bottom-full left-2 group-hover:bottom-36 transition-all duration-500 z-20 mr-2">
                <span className="lg:text-3xl text-gradient">
                  VCET Hackathon Website
                </span>
              </div>
              <div className="text-sm absolute text-justify -bottom-full left-2 group-hover:bottom-8 lg:group-hover:bottom-12 transition-all duration-500 z-20 mr-2">
                <span className="text-justify  lg:line-clamp-none">
                  This app was built using React JS and is hosted on Firebase.
                  This is the official Hackathon website which was created by me
                  and my team for the VCET HACKATHON 2022. IT describes the
                  schedule, Sponsors, Timeline, Guidelines and a form to be
                  filled to participate in the Hackathon
                </span>
                <a
                  href="https://github.com/Himadrimanna/Real-time-data-extraction"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
