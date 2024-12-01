"use client";
import { Pacifico } from 'next/font/google'
import ecomImage from '../../public/TaweeratShop.png'
import pokemonImage from '../../public/TaweeratPokedex.png'
import nbImage from '../../public/NumberBaseConverter.png'
import taweeratItemStacker from '../../public/TaweeratItemStacker.png'
import taweeratCoordinate from '../../public/TaweeratCoordinate.png'
import taweeratTools from '../../public/TaweeratTools.png'
import journie from '../../public/journie.png'
import WorkItem from './WorkItem';

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })

export default function MyWorks() {
  const works = [
    {
      name: "Ecommerce Site",
      image: ecomImage,
      tools: ['Next Js', 'MongoDB', 'Typescript', 'Tailwind', 'VSCode'],
      link: ['Link : ', 'https://taweerat-shop.netlify.app/'],
      github: 'https://github.com/taweeratWatchara156/Taweerat-Shop'
    },
    {
      name: "Pokemon Database",
      image: pokemonImage,
      tools: ['Next Js', 'Typescript', 'Tailwind', 'VSCode'],
      link:[ 'Link : ', 'https://prismatic-gumdrop-daa918.netlify.app' ],
      github: 'https://github.com/taweeratWatchara156/Taweerat-Next-Pokedex'
    },
    {
      name: "Number Base Converter",
      image: nbImage,
      tools: ['Next Js', 'Typescript', 'Tailwind', 'VSCode'],
      link:[ 'Link : ', 'https://nbbc.netlify.app/number-base-converter' ],
      github: 'https://github.com/taweeratWatchara156/Taweerat-Next-NumberBaseConverter'
    },
    {
      name: "Taweerat ItemStacker ( Plugin for reduce lag  )",
      image: taweeratItemStacker,
      tools: ['Java', 'InitelliJ'],
      link:[ 'Download : ', 'https://drive.google.com/file/d/1KZ7SNAzj-hzMADyUGpKHuGHFLp7AmWWM/view?usp=sharingr' ],
      github: 'https://github.com/taweeratWatchara156/TaweeratItemStacker'
    },
    {
      name: "Taweerat Coordinate ( Plugin for convenience )",
      image: taweeratCoordinate,
      tools: ['Java', 'InitelliJ'],
      link:[ 'Download : ', 'https://drive.google.com/file/d/1W9xmDeSghEjKXtbyeifhk3YhIi2XrOS3/view?usp=sharing' ],
      github: 'https://github.com/taweeratWatchara156/TaweeratCoordinate'
    },
    {
      name: "Taweerat Tools ( Plugin for convenience )",
      image: taweeratTools,
      tools: ['Java', 'InitelliJ'],
      link:[ 'Download : ', 'https://drive.google.com/file/d/1B9YCXPgcBiWp9O7fVZokoFdRP68X6BQu/view?usp=sharing' ],
      github: 'https://github.com/taweeratWatchara156/TaweeratTools'
    },
    {
      name: "Journie Prototype ( Mobile Only )",
      image: journie,
      tools: ['Next Js', 'Typescript', 'Tailwind', 'Clerk', 'Convex', 'VSCode'],
      link:[ 'Link : ', 'https://hackathon-home-m.netlify.app/host-trip/66SWR9' ],
      github: 'https://github.com/taweeratWatchara156/Hackathon-Home-M'
    }
  ]

  return (
    <div className="relative flex flex-col bg-[#2a4f88] py-5 md:py-10">
      <h1 className={`${pacifico.className} text-white text-center text-2xl md:text-3xl lg:text-4xl mb-5`}>My Works</h1>
      <div className='grid p-4 gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))]'>
        {
          works.map((w, index) => {
            return <WorkItem key={index} item={w}/>
          })
        }
      </div>
    </div>
  )
}
