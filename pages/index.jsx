import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from "react-icons/ai"
import Image from "next/image"
import cartoonimage from "../public/akash-wave.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import { useState } from 'react'


export default function Home() {

  const [darkMood,setDarkMood] = useState(false)

  return (
    <div className={darkMood ? "dark" : ""}>
      <Head>
        <title>Portfolio Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-black'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Developed by Akash</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className=' dark:text-white cursor-pointer text-xl' onClick={()=>{setDarkMood(!darkMood)}}/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8  dark:text-white' href="#">Resume</a></li>
              </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl  dark:text-white'>Akash N</h2>
            <h3 className='text-2xl py-2 md:text-3xl  dark:text-white'>Developer and Designer</h3>
            <p className=' text-lg py-5 leading-8 text-grey-800 mx-auto max-w-xl  dark:text-white'>Freelancer providing services 
              for programming and design content needs. 
              Join me below and let's get cracking!</p>
          </div>
          <div className=' dark:text-white text-5xl flex justify-center gap-16 py-3 text-grey-600'>
              <AiFillTwitterCircle/>
              <AiFillLinkedin/>
              <AiFillYoutube/>
          </div>
            <div className=' dark:text-white relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96 '>
           <Image src={cartoonimage} layout="fill" objectFit='cover'/>
            </div>
        </section>
        

        <section>
          <div className='pt-10'>
            <h3 className='text-3xl py-1  dark:text-white'>Services I Offer</h3>
            <p className='text-lg py-2 leading-8 text-grey-800 -25 dark:text-white'>
              I'm beginning my journey as a freelance designer and developer, 
              and looking for remote works to improve and build my career.
              I'm more than happy to work with talanted people to create <span className='text-teal-500'>Digital Content </span> 
              for both business and consumer use.
            </p>
            <p className='text-lg py-2 leading-8 text-grey-800  dark:text-white'>
              I offer wide range of services, 
              incluidng Consulting,Designing and Programming
            </p>
          </div>
          
          <div className='lg:flex  gap-10  dark:text-white'>
            
            <div className='  text-center shadow-lg p-10 rounded-xl my-10 '>
             <center><Image src={design} width={100} height={100}  /> </center>
              <h3 className='text-xl font-medium pt-8 pb-2  dark:text-white'>Beautiful Designs</h3>
              <p className='py-2 text-md  dark:text-white'>Creating elegent design 
                 suited for your 
                needs following core design theory</p>
              <h4 className='py-4 text-teal-600  dark:text-white'>Design tools I use</h4>
              <p className='text-grey-800 py-1  dark:text-white'>Figma</p>
              <p className='text-grey-800 py-1  dark:text-white'>Illustrator</p>
              <p className='text-grey-800 py-1  dark:text-white'>Canva</p>
              
            </div>

            <div className='  text-center shadow-lg p-10 rounded-xl my-10 '>
             <center><Image src={code} width={100} height={100}  /> </center>
              <h3 className='text-xl font-medium pt-8 pb-2  dark:text-white'>Powerful Apps</h3>
              <p className='py-2 text-md  dark:text-white'>Creating elegent design 
                 suited for your 
                needs following core design theory</p>
              <h4 className='py-4 text-teal-600  dark:text-white'>Design tools I use</h4>
              <p className='text-grey-800 py-1  dark:text-white'>Figma</p>
              <p className='text-grey-800 py-1  dark:text-white'>Illustrator</p>
              <p className='text-grey-800 py-1  dark:text-white'>Canva</p>
              
            </div>
            <div className='  text-center shadow-lg p-10 rounded-xl my-10 '>
             <center><Image src={consulting} width={100} height={100}  /> </center>
              <h3 className='text-xl font-medium pt-8 pb-2  dark:text-white'>Beautiful Designs</h3>
              <p className='py-2 text-md  dark:text-white'>Creating elegent design 
                 suited for your 
                needs following core design theory</p>
              <h4 className='py-4 text-teal-600  dark:text-white'>Design tools I use</h4>
              <p className='text-grey-800 py-1  dark:text-white'>Figma</p>
              <p className='text-grey-800 py-1  dark:text-white'>Illustrator</p>
              <p className='text-grey-800 py-1  dark:text-white'>Canva</p>
              
            </div>
            
          </div>
        </section>


        <section>
          <div>
            <h3 className='text-3xl py-1  dark:text-white'>
              Portfolio
            </h3>
            <p className='text-md py-1 leading-8  dark:text-white'>
              I'm beginning my journey as a freelance designer and developer, 
              and looking for remote works to improve and build my career.
              I'm more than happy to work with talanted people to create <span className='text-teal-500'>Digital Content </span> 
              for both business and consumer use.
              I offer wide range of services, 
              incluidng <span className='text-teal-600'> Consulting,Designing and Programming</span> 
            </p>
           
          </div>


          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image 
              src={web1} 
              className="rounded-lg object-cover" 
              width={"100%"} 
              height={"100%"} 
              layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
              src={web2}
              className="rounded-lg object-cover" 
              width={"100%"} 
              height={"100%"} 
              layout="responsive"
              />
            </div >
            <div className='basis-1/3 flex-1'>
              <Image 
              src={web3}
              className="rounded-lg object-cover" 
              width={"100%"} 
              height={"100%"} 
              layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
              src={web4}
              className="rounded-lg object-cover" 
              width={"100%"} 
              height={"100%"} 
              layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
              src={web5}
              className="rounded-lg object-cover" 
              width={"100%"} 
              height={"100%"} 
              layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image 
              src={web6}
              className="rounded-lg object-cover" 
              width={"100%"} 
              height={"100%"} 
              layout="responsive"/>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
