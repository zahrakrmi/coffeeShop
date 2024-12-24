'use client'
import React from 'react'
import Header from './Header'
import {motion} from 'framer-motion'
import { Scale } from '@mui/icons-material'



const bgImage ={
    backgroundImage:`url('/bg-slate.png')`,
    backgroundSize:'cover',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat' ,
    height:'100vh',
    width:'100%'
}


const Hero = () => {
  return (
    <main style={bgImage} >
        <section className='min-h-[750px] w-full '>
            <div className="container mx-auto">
              {/* //////////header section//////// */}
              <Header/>
              {/* //////////hero section/////////// */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                  {/* ////////////text content section///////// */}
                  <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                    <motion.h1 initial={{opacity:0, y:-100}} animate={{opacity:1,y:0}} transition={{type:'spring',stiffness:'100',damping:10,delay:1}} className='text-7xl font-bold leading-tight ml-14'>Black Coffee Shop</motion.h1>
                    <motion.div className='relative'initial={{opacity:0, y:100}} animate={{opacity:1,y:0}} transition={{type:'spring',stiffness:'100',damping:10,delay:1.2}}>
                      <div className='relative z-10 space-y-4' >
                        <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                        <h2 className='text-sm opacity-55 leading-loose'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quam minus hic laudantium eveniet sapiente adipisci odit facilis quis debitis maiores doloribus culpa quas quae nesciunt distinctio voluptatem, vitae quos.
                        </h2>
                      </div>
                      <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                    </motion.div>
                  </div>
                  {/* //////hero image section/////// */}
                  <div className='relative'>
                    <motion.img initial={{opacity:0, Scale:0}}  animate={{opacity:1,Scale:1}} transition={{type:'spring',stiffness:'100',damping:10,delay:0.4}} src="./black.png" alt=""  className='relative h-[400px] z-40 md:h-[600px] img-shadow'/>
                    {/* /////////circle//////////// */}
                    <motion.div initial={{opacity:0, y:100}} animate={{opacity:1,y:0}} transition={{type:'spring',stiffness:'100',damping:10,delay:0.8}} className=' w-[180px] h-[180px] absolute top-24 -right-16 border-[20px] border-primary rounded-full z-10 '></motion.div>
                    {/* //////////big text/////////// */}
                    <motion.div initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{type:'spring',stiffness:'100',damping:10,delay:0.8}} className='absolute -top-20 left-[200px] z-[1]'>
                    <h2 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none'>Black Coffee</h2>
                    </motion.div>
                  </div>
                    {/* /////////text right//////// */}
                    <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1,y:0}} transition={{type:'spring',stiffness:'100',damping:10,delay:0.4}} className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                    <h1 className='text-7xl font-bold leading-tight ml-14 opacity-0'>Black Coffee Shop</h1>
                    <div className='relative'>
                      <div className='relative z-10 space-y-4'>
                        <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                        <h2 className='text-sm opacity-55 leading-loose'>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quam minus hic laudantium eveniet sapiente adipisci odit facilis quis 
                        </h2>
                      </div>
                      <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'></div>
                    </div>
                  </motion.div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero