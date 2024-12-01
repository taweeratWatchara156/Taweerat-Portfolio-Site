"use client";
import { faFacebook, faGithub, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { Pacifico } from 'next/font/google'
import { motion } from 'motion/react';

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })
const LottieAnimation = dynamic(() => import('./Lotties/TalkToMeAnimation'), { ssr: false });

export default function TalkToMe() {
    const contacts = [
        {
            icon: faFacebook,
            link: 'https://www.facebook.com/taweerat.poom'
        },
        {
            icon: faInstagram,
            link: 'https://www.instagram.com/taweeratzzz/'
        },
        {
            icon: faGithub,
            link: 'https://github.com/taweeratWatchara156'
        },
        {
            icon: faTiktok,
            link: 'https://www.tiktok.com/@taweeratzzz'
        }
    ]

    return (
        <div className="flex flex-col bg-white to-white py-5 md:py-10">
            <h1 className={`${pacifico.className} text-[#2a4f88] text-center text-2xl md:text-3xl lg:text-4xl mb-5`}>Talk to me</h1>
            <div className='flex'>
                {/* Left */}
                <div className='grid gap-2 sm:gap-4 px-3 md:px-0 md:pl-5 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] w-full md:w-1/2'>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className='flex justify-center items-center gap-5 flex-col p-3 md:p-5 border-[#2a4f88] rounded-lg border-2 text-[#2a4f88]'>
                        <FontAwesomeIcon icon={faPhone} className='text-2xl md:text-3xl lg:text-5xl' />
                        <span className='font-bold text-sm md:text-base lg:text-lg'>063-898-1155</span>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className='flex justify-center items-center gap-5 flex-col p-3 md:p-5 border-[#2a4f88] rounded-lg border-2 text-[#2a4f88]'>
                        <FontAwesomeIcon icon={faEnvelope} className='text-2xl mdtext-3xl lg:text-5xl' />
                        <span className='font-bold text-sm md:text-base lg:text-lg'>taweeratmain156@gmail.com</span>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className='flex justify-center items-center gap-5 flex-col p-3 md:p-5 border-[#2a4f88] rounded-lg border-2 text-[#2a4f88]'>
                        <FontAwesomeIcon icon={faLocationDot} className='text-2xl mdtext-3xl lg:text-5xl' />
                        <span className='font-bold text-sm md:text-base lg:text-lg text-center'>23, Lane Onnut 76/1, Road Onnut, Prawet District, Prawet Sub-District, Bangkok, 10250</span>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className='grid grid-cols-2 justify-center items-center gap-2 sm:gap-3 flex-col p-2 md:p-3 border-[#2a4f88] rounded-lg border-2 text-white'>
                        {
                            contacts.map((i, index) => {
                                return <a href={i.link} key={index} target='_blank' className='py-3 sm:py-1 md:py-3 flex bg-[#2a4f88] rounded-lg justify-center items-center h-full duration-200 hover:bg-white hover:text-[#2a4f88] border-[#2a4f88] border-2'>
                                    <FontAwesomeIcon icon={i.icon} className='text-2xl md:text-4xl' />
                                </a>
                            })
                        }
                    </motion.div>
                </div>
                {/* Right */}
                <div className='hidden relative md:flex w-1/2 justify-center'>
                    <motion.div className='bg-[#2a4f88] absolute top-0 left-0 w-full h-full z-40' initial={{ width: '100%' }} whileInView={{ width: '0%' }}></motion.div>
                    <LottieAnimation />
                </div>
            </div>
        </div>
    )
}
