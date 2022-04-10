import React from 'react'
import Popular from '../../components/popular/Popular'
import Vagies from '../../components/vagies/Vagies'
import {motion} from 'framer-motion'
import './Home.css'
const Home = () => {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
       <Vagies/>
      <Popular/>
     
    </motion.div>
  )
}

export default Home