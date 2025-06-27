'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about'
      className='w-full px-4 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-4xl sm:text-5xl font-Ovo'
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20 my-12 lg:my-20'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-56 sm:w-72 md:w-80 rounded-3xl max-w-none'
        >
          <Image
            src={assets.user_image}
            alt='user'
            className='w-full rounded-3xl'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 w-full'
        >
          <p className='mb-10 font-Ovo text-center lg:text-left text-sm sm:text-base max-w-3xl mx-auto lg:mx-0'>
            I am a passionate Backend Developer and Cloud Enthusiast with a B.Tech in Computer Science and Engineering. I specialize in building robust, scalable applications using Spring Boot and deploying them efficiently on AWS cloud infrastructure. I'm experienced with MongoDB for backend data management and continuously sharpen my problem-solving skills through DSA practice. I also have a foundational understanding of React for UI development when needed.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto lg:mx-0'
          >
            {infoList.map(({ icon, iconDark, title, description, link }, index) => {
              const Card = (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                  key={index}
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className='w-7 mt-3'
                  />
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>
                    {title}
                  </h3>
                  <p className='text-gray-600 text-sm dark:text-white/80'>
                    {description}
                  </p>
                </motion.li>
              );

              return link ? (
                <a key={index} href={link} target='_blank' rel='noopener noreferrer'>
                  {Card}
                </a>
              ) : (
                Card
              );
            })}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className='my-8 text-gray-700 font-Ovo text-center lg:text-left dark:text-white/80'
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className='flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-5'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
