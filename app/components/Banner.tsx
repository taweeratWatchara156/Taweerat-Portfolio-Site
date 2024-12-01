"use client";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import poom from '../../public/poom.png'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export default function Banner({ scrollToWorks, scrollToAboutMe}: { scrollToWorks: any, scrollToAboutMe: any}) {
    return (
        <div className="flex bg-transparent">
            {/* Left */}
            <div className="w-full sm:w-1/2 flex flex-col text-white gap-5 px-5 sm:px-0 sm:pl-10 lg:pl-20 py-10 sm:py-20">
                <motion.div className="flex flex-col gap-2 text-2xl lg:text-3xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
                    <h1>Hello, I'm</h1>
                    <h1 className="flex"><Typewriter options={{strings: ['Taweerat Watcharamanokarn', 'Poom'], autoStart: true, loop: true}}/> a</h1>
                    <h1>Student of DSR</h1>
                    <div className="text-xs lg:text-sm font-light mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa eligendi totam placeat error, vero porro neque voluptatibus saepe maxime labore nisi tenetur iure rem velit praesentium quia quaerat sed aperiam corrupti odit! Officia eveniet molestiae ratione dignissimos pariatur temporibus dolores consequatur modi laborum facere eos, fuga eius unde illo?</div>
                </motion.div>
                <motion.div className="flex text-sm sm:text-base" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <button onClick={() => scrollToWorks()} className="w-fit font-bold bg-orange-500 rounded-full py-3 h-fit lg:py-4 px-5 lg:px-7 hover:bg-orange-600 duration-200 active:scale-95">My Works</button>
                    <button onClick={() => scrollToAboutMe()} className="w-fit text-orange-400 py-3 lg:py-4 px-5 lg:px-7 h-fit font-bold flex items-center hover:scale-[102%] duration-200 active:scale-95"><FontAwesomeIcon icon={faUser} className="w-3 mr-2" /> About Me</button>
                </motion.div>
            </div>
            {/* Right */}
            <div className="hidden sm:block w-1/2 relative z-10">
                <Image src={poom} alt="poom" className="absolute  bottom-0 left-0 right-0 mx-auto flex w-[400px] lg:w-[450px]"></Image>
            </div>
        </div>
    )
}
