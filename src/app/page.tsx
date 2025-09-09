'use client'
import Image from 'next/image'
import zerologomain from '../../public/zerologomain.png';
import BackgroundVideo from 'next-video/background-video';
import coolvid from '/videos/3051492-hd_1920_1080_25fps.mp4'
import LinkButton from './components/LinkButton';
import { faMedium, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { motion, stagger } from "motion/react"


export default function Home() {
  
  return (
    <div className="relative min-h-[100dvh] h-screen w-screen overflow-hidden bg-black/95 selection:bg-slate-300/30 selection:text-slate-900">
        <BackgroundVideo 
          controls={false} 
          src={coolvid}
          className="responsive-bg-video"
          >
          <div className='absolute inset-0 flex flex-col'>
            <div className='flex-1'>
              <div className='flex-none'>
                <div className='max-w-6xl mx-auto text-center space-y-8'>

                  <motion.div 
                    className='flex justify-center'
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 3.0, delay: 1.0, ease: "easeOut" }}
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
                    transition={{ duration: 3.0, delay: 3.0, ease: "easeOut" }}
                  >
                    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white'>
                      Frictionless and Stable Microtransactions
                    </h1>
                  </motion.div>
                </div>
              </div>
              <div className='flex-[2] text-white'>
                <motion.div 
                  className='flex flex-col mt-12 lg:flex-row items-center justify-center w-full'
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 3.0, delay: 5.0, ease: "easeOut"}}
                  >
                    <LinkButton icon={faXTwitter} label="X" />
                    <LinkButton icon={faMedium} label="Medium" />
                    <LinkButton icon={faDiscord} label="Discord" />
                </motion.div>
              </div>
            </div>
          </div>
        </BackgroundVideo>
    </div>
  );
}
