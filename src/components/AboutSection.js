import React from 'react'
import home1 from '../img/home1.png'
// styled
import { Layout, Description, Hide, Image } from '../styles'
// Framed Motion
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>

        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt='music player' />
      </Image>
    </Layout>
  )
}

export default AboutSection
