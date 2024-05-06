import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import myResume from "../assets/company/SAKHAWAT_ HOSEN_WEB_DEVOLOPER_MY_RESUME (1).pdf"


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sakhawat</span>
          </h1>
          <p className={`$ text-xl font-bold mt-2 text-white-100`}>
         Professional Junior MERN stack Developer <br className='sm:block hidden' />
          Knock of building applications with <br className='sm:block hidden'  /> front and back end operations.
          </p>
          <div>
      <button  className="mt-2 p-2 rounded bg-white hover:bg-sky-700 text-black font-bold"> <a href={myResume}  download>Get Resume</a></button>
      </div>
        </div>
        
      </div>
      

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
