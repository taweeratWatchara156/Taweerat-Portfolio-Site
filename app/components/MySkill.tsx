"use client";
import { Pacifico } from 'next/font/google'
import SkillItem from './SkillItem'
import reactIcon from '../../public/physics.png'
import javaIcon from '../../public/java.png'
import jsIcon from '../../public/js.png'
import tsIcon from '../../public/typescript.png'
import figmaIcon from '../../public/figma.png'
import cSharpIcon from '../../public/c-sharp.png'
import pythonIcon from '../../public/python.png'
import { motion } from 'motion/react';

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })

export default function MySkill() {
    const skills = [
        {
            name: "React",
            icon: reactIcon,
            description: "Lorem ipsum dolor sit amet."
        },
        {
            name: "Java",
            icon: javaIcon,
            description: "Lorem ipsum dolor sit amet."
        },
        {
            name: "Javascript",
            icon: jsIcon,
            description: "Lorem ipsum dolor sit amet."
        },
        {
            name: "Typescript",
            icon: tsIcon,
            description: "Lorem ipsum dolor sit amet."
        },
        {
            name: "Figma",
            icon: figmaIcon,
            description: "Lorem ipsum dolor sit amet."
        },
        {
            name: "C#",
            icon: cSharpIcon,
            description: "Lorem ipsum dolor sit amet."
        },
        {
            name: "Python",
            icon: pythonIcon,
            description: "Lorem ipsum dolor sit amet."
        },
    ]

    return (
        <div className="flex flex-col bg-gradient-to-b from-white to-[#2a4f88] py-5 md:py-10">
            <h1 className={`${pacifico.className} text-[#2a4f88] text-center text-2xl md:text-3xl lg:text-4xl mb-5`}>My Skill</h1>
            <div className='grid p-4 gap-4 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))]'>
                {
                    skills.map((s, index) => {
                        return <motion.div key={index} initial={{scale:0}} whileInView={{scale:1}}><SkillItem item={s}/></motion.div>
                    })
                }
            </div>
        </div>
    )
}
