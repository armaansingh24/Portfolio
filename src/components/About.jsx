import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.55)}
        className='w-full green-pink-gradient shadow-card p-[1px] rounded-[20px] '
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
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
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overiew</h2>
      </motion.div>
      <motion.p varients={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] maz-w-3xl leading-[30px]'>
        As a BCA graduate with a strong foundation in software development, I am currently engaged in building robust Enterprise Resource Planning (ERP) solutions. My expertise spans MERN, enabling me to contribute effectively to the development of innovative ERP systems.

        With a meticulous approach to problem-solving and a passion for creating efficient solutions, I thrive in the dynamic environment of ERP development. My experience in this field has honed my communication and collaboration skills, allowing me to effectively work within multidisciplinary teams to deliver high-quality software solutions.

        I am deeply committed to continuous learning and growth, and I am excited about the opportunity to further expand my skills and contribute meaningfully to the advancement of ERP technology.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  );
}

export default SectionWrapper(About, "about")