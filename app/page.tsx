"use client";
import { useEffect, useMemo, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import WhoAmI from "./components/WhoAmI";
import TopScrollProgress from "./components/TopScrollProgress";
import MySkill from "./components/MySkill";
import MyWorks from "./components/MyWorks";
import TalkToMe from "./components/TalkToMe";
import Footer from "./components/Footer";

export default function page() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engin) => {
      await loadSlim(engin)
    }).then(() => setInit(true))
  }, [])

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#3664ad",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      fullScreen: {
        enable: false,
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className="h-screen flex flex-col">
      <TopScrollProgress/>
      {/* Navbar and banner */}
      <div className="flex flex-col relative">

        {init && (
          <div className="absolute inset-0 w-full z-0 ">
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
              className="w-full h-full"
            />
          </div>
        )}

        <div className="z-10">
          <Navbar />
          <Banner />
        </div>
      </div>
      <WhoAmI/>
      <MySkill/>
      <MyWorks/>
      <TalkToMe/>
      <Footer/>
    </div>
  )
}
