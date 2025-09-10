'use client'
import Image from 'next/image'
import zerologomain from '../../public/zerologomain.png';
import zerologo from '../../public/zerologo.png';
import BackgroundVideo from 'next-video/background-video';
import coolvid from '/videos/3051492-hd_1920_1080_25fps.mp4'
import LinkButton from './components/LinkButton';
import { faMedium, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { motion } from "motion/react"


export default function Home() {
  
  return (
    <div className="relative min-h-[100dvh] w-screen overflow-auto bg-black/95 selection:bg-slate-300/30 selection:text-slate-900 text-white hide-scrollbar" >
        <BackgroundVideo 
          controls={false} 
          src={coolvid}
          className="responsive-bg-video"
          />
          <div className='relative z-10 flex flex-col min-h-[100dvh]'>
            <div className='flex-1'>
              <div className='flex-none pt-8 md:pt-12 lg:pt-16 px-4'>
                <div className='max-w-6xl mx-auto text-center space-y-8'>

                  <motion.div 
                    className='flex justify-center'
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.0, delay: 1.0, ease: "easeOut" }}
                  >
                    <Image 
                    alt="zero logo" 
                    src={zerologomain} 
                    className='w-auto h-auto max-w-full'
                    priority
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.0, delay: 2.0, ease: "easeOut" }}
                  >
                    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
                      Frictionless and Stable Microtransactions
                    </h1>
                  </motion.div>
                </div>
              </div>
              <div className='flex-[2]'>
                <motion.div 
                  className='flex flex-col mt-12 lg:flex-row items-center justify-center w-full'
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.0, delay: 5.0, ease: "easeOut"}}
                  >
                    <LinkButton icon={faXTwitter} label="X" />
                    <LinkButton icon={faMedium} label="Medium" />
                    <LinkButton icon={faDiscord} label="Discord" />
                </motion.div>
              </div>
              <div className='flex-[3]'>
                <motion.div 
                  className='flex flex-col justify-center items-center mt-36'
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.0, delay: 6.0, ease: "easeOut" }}
                >
                  <div className="w-60 md:w-80 lg:w-120 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  <div>
                    <Image 
                      alt="zero logo" 
                      src={zerologo} 
                      className='mt-16 w-16 h-16 mx-auto'
                      priority
                    />
                    © 2025 Zero All rights reserved.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
    </div>
  );
}
