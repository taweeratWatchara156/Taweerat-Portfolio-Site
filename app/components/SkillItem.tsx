"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function SkillItem({ item }: {item:any}) {
  return (
    <motion.div className="flex flex-col bg-white rounded-lg p-5 items-center">
        <Image src={item.icon} alt="" className="mb-3 md:mb-5 rounded-lg w-[50px] md:w-[100px]"/>
        <h1 className="text-base md:text-lg font-bold text-[#3664ad] mb-3 md:mb-5">{item.name}</h1>
        <p className="text-center text-sm md:text-base text-[#3664ad]">{item.description}</p>
    </motion.div>
  )
}
