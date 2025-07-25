'use client'

import React from 'react'

import { motion} from 'framer-motion'
// import snap from './Snap.png'
import Image from 'next/image'

const Homepage = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
        <div className="w-full h-full gap-10 flex items-center justify-center">
            <div className="flex flex-col text-6xl/normal font-semibold justify-center 
            p-10 rounded-xl relative bg-white/30 text-neutral-900 backdrop-blur-2xl overflow-hidden">
                <div className='flex items-center  text-center p-2 z-10'>
                    <div className='relative inline-block p-4 bg-neutral-300/40 overflow-hidden rounded-xl'>
                        <span className='relative z-10 text-neutral-300/80 font-bold'>Beautify</span>
                        <motion.div
                            className="absolute w-44 h-24 bg-pink-500 blur-2xl -top-10 -left-10 " 
                            />
                        <motion.div 
                            className="absolute w-52 h-52 bg-violet-600 blur-2xl top-20 -right-10 "></motion.div>
                        <motion.div 
                            className="absolute w-44 h-44 bg-amber-500 blur-2xl top-0 right-0 "></motion.div>
                        <div className="absolute w-44 h-44 bg-fuchsia-800 blur-3xl top-20 -left-10 "></div>
                    </div> 
                    <span className='ml-4'>your</span>
                </div>
                <div className='text-center'>code before sharing</div> 
                {/* <div className="absolute -bottom-20 -right-10 h-52 w-52 bg-violet-500 -z-10 blur-3xl"></div> */}
            </div>
        <Image src={'/Snap.png'} width={500} height={500} alt='aasdsad' />
        </div>
    </div>
  )
}

export default Homepage