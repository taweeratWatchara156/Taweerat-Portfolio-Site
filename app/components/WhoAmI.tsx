"use client"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from 'next/dynamic'
import { motion, useInView } from "motion/react"
import { Pacifico } from 'next/font/google'
import { useEffect, useRef, useState } from "react";

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })
const LottieAnimation = dynamic(() => import('./Lotties/WhoAmIAnimation'), { ssr: false });


export default function WhoAmI() {

    const leftContainer = useRef(null)
    const isLeftInView = useInView(leftContainer)
    const [show, setShow] = useState(false)

    return (
        <div className="flex flex-col pt-5 sm:pt-10">
            <h1 className={`${pacifico.className} text-[#2a4f88] text-center text-2xl md:text-3xl lg:text-4xl`}>Who Am I ?</h1>

            <div className="flex flex-col sm:flex-row" ref={leftContainer}>
                {/* Left */}
                <motion.div className="w-full sm:w-1/2 flex justify-center" animate={{ scale:isLeftInView ? 1 : 0 }}>
                    <LottieAnimation/>
                </motion.div>

                {/* Right */}
                <div className="relative hidden sm:flex w-full sm:w-1/2 text-[#2a4f88] py-0 px-5 sm:px-0 sm:pr-10 lg:pr-20 text-xs md:text-sm lg:text-lg font-bold items-center text-center">
                    <motion.div className="absolute top-0 bottom-0 my-auto z-10 left-0 w-[100%] h-[50%] bg-[#2a4f88]" initial={{width: "100%" }} whileInView={{width:"0%"}}></motion.div>
                    <p className="relative">
                        Hi, my name is Taweerat Watcharamanokarn, or you can call me Poom. I'm a high school student at Debsirinromklao School, and I’m currently in 12th grade. I really love everything about technology; it motivates me a lot. If advanced technology didn’t exist, I wouldn’t be the person I am today.
                        As for my hobbies, I enjoy coding, playing guitar, and exploring new things that excite me. When it comes to coding, I started learning my first programming language in 9th grade. Back then, I just wanted to make a Minecraft mod. It was really hard for me at the time, but that didn’t stop me. I kept learning and improving, and even though it’s still challenging, I’m very happy with my progress.
                    </p>
                </div>

                <div className="relative flex sm:hidden flex-col w-full text-[#2a4f88] py-0 px-5 text-xs font-bold items-center text-center">
                    <div className={`flex flex-col mx-auto cursor-pointer`} onClick={() => setShow(!show)}>
                        <span>{show ? 'Hide text' : 'Show text'}</span>
                        <FontAwesomeIcon icon={show ? faCaretUp : faCaretDown} className="text-xl" />
                    </div>
                    <motion.p animate={{ height: show ? 'auto' : 0 }}className="overflow-y-hidden h-0">
                        Hi, my name is Taweerat Watcharamanokarn, or you can call me Poom. I'm a high school student at Debsirinromklao School, and I’m currently in 12th grade. I really love everything about technology; it motivates me a lot. If advanced technology didn’t exist, I wouldn’t be the person I am today.
                        As for my hobbies, I enjoy coding, playing guitar, and exploring new things that excite me. When it comes to coding, I started learning my first programming language in 9th grade. Back then, I just wanted to make a Minecraft mod. It was really hard for me at the time, but that didn’t stop me. I kept learning and improving, and even though it’s still challenging, I’m very happy with my progress.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}
