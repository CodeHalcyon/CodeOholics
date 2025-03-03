import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Section2 = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".L", {
        opacity: 0,
        y: 100
      },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".L",
            start: "top 75%",
            end: "top 60%"
          }
        })

      gsap.fromTo(".R",{
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".R",
          start: "top 50%",
          end: "top 60%"
        }
      })
    })
  })
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-5 p-5 bg-gray-800 text-white'>
        <div className='L flex flex-col justify-center items-start text-left max-w-2xl'>
          <h1 className='text-3xl font-bold text-purple-400'>Unlock your potential with CodeOholics</h1>
          <p className='mt-5 text-gray-300'>
            Join our thriving community and enhance your skills through hands-on experiences, mentorship, and real-world challenges.
          </p>
          <div className='mt-5'>
            <a
              className='border-2 p-2 w-[100px] block text-center hover:bg-purple-400 hover:text-white transition-all hover:w-[120px] hover:border-purple-500'
              href="https://www.google.com"
              target='_blank'
            >
              Join us
            </a>
          </div>
        </div>
        <div>
          <img src="/join.jpg" alt="Codeoholics" className="R rounded-lg shadow-lg w-[700px] h-[500px] object-cover" />
        </div>
      </div>
    </>
  )
}

export default Section2
