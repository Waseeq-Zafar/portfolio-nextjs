import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>   
        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>

        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>My latest work</motion.h2>

        <motion.p 
        
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5,delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I have worked on impactful backend-focused projects that demonstrate my skills in building scalable systems.

        One of my key projects is SWENS (Smart Workflow Engine & Notification System), a full-stack application designed to manage custom workflows and real-time task notifications. Built using Spring Boot, Kafka, and React, it supports multi-stage task pipelines, role-based transitions, and real-time alerts. The system is structured to scale and phase two will integrate GenAI for intelligent automation.

        I also developed a cloud-native Patient Management System using Spring Boot microservices, gRPC, Kafka, and MongoDB, with a strong focus on modularity and Infrastructure as Code using Docker Compose (YAML). It handles secure authentication, patient data flow, and billing, with an event-driven architecture to ensure loose coupling and extensibility.</motion.p>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 md:grid-cols-2 my-10 gap-5 dark:text-black'
        >
        {[
            {
            title: "SWENS",
            description: "Smart Workflow Engine & Notification System",
            bgImage: "/work-3.png",
            link: "https://github.com/Waseeq-Zafar/S.W.E.N.S"
            },
            {
            title: "Patient Management",
            description: "Cloud-native microservices project with gRPC and Kafka",
            bgImage: "./work-2.png", // put this in public/work2.png
            link: "https://github.com/Waseeq-Zafar/Patient-Management"
            }
        ].map((project, index) => (
            <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='h-80 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
                </div>
            </div>
            </motion.a>
        ))}
        </motion.div>



        {/* <motion.div 

            
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
            className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
            {workData.map((project,index)=>(
                <motion.div
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}} 
                
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style=   
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3  px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='fonst-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'> 
                            <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div> */}

        {/* <motion.a 
        
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 1.1}}
        href="" 
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
            Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/></motion.a> */}

    </motion.div>
  )
}

export default Work
