"use client"

import { motion } from "motion/react"
import { useScroll } from "motion/react"

export default function TopScrollProgress() {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div className="fixed top-0 left-0 w-full p-[6px] bg-[#12223a] z-20" style={{scaleX:scrollYProgress, originX:0}}></motion.div>
    )
}
