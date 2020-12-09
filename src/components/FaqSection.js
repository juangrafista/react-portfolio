import React from 'react'

// styles
import styled from 'styled-components'
import { Layout } from '../styles'

import Toggle from './Toggle'

// animation
import { AnimateSharedLayout } from 'framer-motion'
import { scrollReveal } from '../animation'
import { useScroll } from './useScroll'

const FaqSection = () => {
  const [element, controls] = useScroll()

  return (
    <Faq
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I start'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, cumque.
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, cumque.
            </p>
          </div>
        </Toggle>
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, cumque.
            </p>
          </div>
        </Toggle>
        <Toggle title='What products do you offer?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, cumque.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  )
}

const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`

export default FaqSection
