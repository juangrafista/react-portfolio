import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      <motion.div layout>{toggle && children}</motion.div>
      <div className='faq-line' />
    </motion.div>
  )
}

export default Toggle
