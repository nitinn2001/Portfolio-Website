import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from "../utils/motion"
import {SectionWrapper} from "../hoc"

const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn('right','spring',0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

        <div 
        options={{
          max:45,
          scale:1,
          speed:450
        }} 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    Hello! I’m Nitin Jeyakumar, a Master of Science in Information Systems graduate student from the University of Illinois at Chicago. I hold a Bachelor of 
    Science in Computer Science and am passionate about developing software solutions that address real-world challenges. My technical skills include Python, JavaScript, React, Node.js, MongoDB, SQL, and API development.
    I also have a solid grasp of data structures and algorithms, which enhances my problem-solving and coding efficiency.

    <br />
    <br />

    I am particularly fascinated by cloud technology and am dedicated to expanding my expertise in cloud platforms like AWS.
    I have hands-on experience in building full stack applications and working on impactful projects.
    Currently, I am focused on advancing my skills as a software engineer fellow at Headstarter, where I continue to grow and apply my expertise in innovative ways.

    <br />
    <br />
    If you are seeking a committed and skilled developer with a strong foundation in software development 
    and a drive for continuous learning, I would be excited to discuss how my background can support your next project. Let’s connect and explore potential collaborations!      

    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard
        key={service.title} 
        index={index}
        title={service.title} 
        icon={service.icon} 
      />
      ))}
    </div>
    
    </>
  )
}

export default SectionWrapper(About,'about')