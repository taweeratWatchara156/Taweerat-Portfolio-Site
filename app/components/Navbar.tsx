"use client";
import { motion } from "motion/react"
import { Pacifico } from 'next/font/google'
import { useEffect, useState } from "react";

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })

export default function Navbar() {
    const [width, setWidth] = useState(350);

    useEffect(() => {
        const updateWidth = () => {
            const isMedium = window.matchMedia("(max-width: 1024px)").matches;
            const isSmall = window.matchMedia("(max-width: 640px)").matches;
            setWidth(isSmall ? 220 : isMedium ? 300 : 350);
        };


        updateWidth();


        window.addEventListener("resize", updateWidth);
    })

    return (
        <div className="flex items-center justify-center sm:justify-between bg-transparent py-5">
            <motion.h1 className={`${pacifico.className} py-2 sm:py-0 text-2xl sm:text-3xl text-white pl-0 sm:pl-10 lg:pl-20`} initial={{ x: -200 }} animate={{ x: 0 }}>
                Taweerat
            </motion.h1>

            <motion.div className={`bg-white hidden sm:flex items-center rounded-tl-3xl overflow-x-hidden overflow-y-hidden h-10 sm:h-12 rounded-bl-3xl `} initial={{ width: 0 }} animate={{ width: width }}>
                <motion.div className="ml-5 flex text-[#3664ad] text-xs sm:text-sm font-bold gap-5 lg:gap-8 " initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1 }}>
                    <motion.button whileHover={{ scale: 1.05 }}>About Me</motion.button>
                    <motion.button whileHover={{ scale: 1.05 }}>Works</motion.button>
                    <motion.button whileHover={{ scale: 1.05 }}>Talk to me</motion.button>
                </motion.div>
            </motion.div>

            <motion.div className="fixed sm:hidden w-full flex text-sm text-white px-5 rounded-t-2xl justify-between py-3 font-semibold bottom-0 bg-[#3664ad]" initial={{ y: 250 }} animate={{ y: 0 }}>
                <motion.button whileHover={{ scale: 1.05 }}>About Me</motion.button>
                <motion.button whileHover={{ scale: 1.05 }}>Works</motion.button>
                <motion.button whileHover={{ scale: 1.05 }}>Talk to me</motion.button>
            </motion.div>
        </div>


    )
}
