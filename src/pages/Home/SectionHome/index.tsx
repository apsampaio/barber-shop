import { RevealAnimation } from "../../../components/RevealAnimation";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SectionHome: React.FC = () => {
  const ref = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current && !ref.current.played) {
      ref.current.play();
    }
  }, [ref]);

  const handleOpenAgenda = () => {
    window.open(
      "https://chat.inbarberapp.com/?id=5df4b82e-d424-402e-b29d-d8d766d79b2c",
      "_blank"
    );
  };

  return (
    <div className="flex">
      <section className="relative w-full h-screen pb-6 bg-slate-900">
        {/* Background Video */}
        <div
          className="absolute top-0 left-0
        w-screen h-screen overflow-hidden z-10 sm:w-half"
        >
          <video
            src="/barber-shop/background_boy.mp4"
            className="w-screen h-screen blur-sm brightness-50 object-fill"
            playsInline
            autoPlay
            loop
            muted
            ref={ref}
          />
        </div>
        {/* Content */}
        <div
          className="absolute w-full h-full z-20 px-4 pb-6
        flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <div className="flex w-full items-center justify-center relative mt-12">
            <img
              src="/barber-shop/logo.png"
              alt="logo"
              className="sm:h-80 h-52 absolute z-20 rounded-full"
            />
            <div className="w-full h-60 opacity-5"></div>
          </div>
          {/* Title */}
          <div className="flex flex-col items-center justify-center flex-1">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="text-white text-center 
              font-title font-bold tracking-wider text-5xl sm:text-7xl mb-4"
            >
              BOY BARBERSHOP
            </motion.h1>
            <motion.p
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1.25,
                ease: "easeInOut",
                type: "keyframes",
              }}
              className="text-primary opacity-80 font-title uppercase font-bold
              text-center text-xl sm:text-2xl tracking-wider"
            >
              Mantenha o visual sempre em dia
            </motion.p>
            {/* Button */}
            <RevealAnimation width="100%">
              <button
                onClick={handleOpenAgenda}
                className="bg-primary border-2 p-4 mt-12 
              flex w-full items-center justify-center
              gap-2 outline-none border-none"
              >
                <p className="text-white text-xl font-bold uppercase tracking-wider font-inter">
                  agendar
                </p>
              </button>
            </RevealAnimation>
          </div>
        </div>
      </section>
      <section
        className="bg-[url('/barber-shop/background.png')] bg-repeat-x bg-cover bg-left
       w-full hidden sm:block"
      ></section>
    </div>
  );
};

export { SectionHome };
