"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function WorkItem({ item }: { item: any }) {
    const [detail, setDetail] = useState(false)

    return (
        <>
            <motion.div className="relative flex flex-col gap-2 md:gap-5 justify-center items-center cursor-pointer" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }} onClick={() => setDetail(!detail)}>
                <motion.div className="absolute w-full h-full bg-orange-500 origin-top" initial={{ width: '100%' }} whileInView={{ width: '0%' }}></motion.div>
                <Image src={item.image} alt="Taweerat" className="w-[300px] md:w-[500px] h-full rounded-l-3xl rounded-b-3xl" />
                <h1 className="text-sm sm:text-lg md:text-xl text-white">{item.name}</h1>
            </motion.div>

            <div className={`${detail ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-black z-30 opacity-25`}></div>

            <motion.div className="fixed inset-0 flex flex-col bg-white rounded-lg m-auto z-40 h-fit w-fit max-w-[90%] p-5" animate={{ scale: detail ? 1 : 0 }}>
                <FontAwesomeIcon
                    icon={faXmark}
                    className="absolute text-lg right-5 mb-3 duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    onClick={() => setDetail(!detail)}
                />
                <h1 className="font-bold text-sm sm:text-base md:text-xl text-[#2a4f88] text-center mb-3">" {item.name} "</h1>
                <Image
                    src={item.image}
                    alt="Image"
                    className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[600px] rounded-xl shadow-lg mx-auto"
                />
                <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2 mt-5 text-xs sm:text-base md:text-lg text-[#2a4f88]">
                        <h1 className="font-bold">Tools:</h1>
                        <ul className="flex gap-2 flex-wrap">
                            {item.tools.map((i: any, index: any) => (
                                <li key={index}>{i}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap  gap-0 sm:gap-2 text-xs sm:text-base md:text-lg text-[#2a4f88]">
                        <h1 className="font-bold">{item.link[0]}</h1>
                        <a href={item.link[1]} target="_blank" className="underline break-all">
                            {item.link[1]}
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-0 sm:gap-2 text-xs sm:text-base md:text-lg text-[#2a4f88]">
                        <h1 className="font-bold">Github:</h1>
                        <a href={item.github} target="_blank" className="underline break-all">
                            {item.github}
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
