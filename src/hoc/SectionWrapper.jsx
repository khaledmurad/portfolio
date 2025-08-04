import React from "react"
import { motion } from "framer-motion"
import {styles} from '../styles'
import { staggerContainer } from "../utils/motion"
 
export default function SectionWrapper(Component , id){
    return function HOC(){
        return(
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{once:true , amount:0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative`}
            >
                <span className="hash-span" id={id}>&nbsp;</span>
                <Component/>
            </motion.section>
        )
    }
}