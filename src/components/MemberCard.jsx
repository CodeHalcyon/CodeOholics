import React from 'react'
import { Linkedin, Instagram } from 'lucide-react'
const MemberCard = (props) => {
  return (
    <>
      <div className='bg-black/20 hover:bg-black text-white w-[300px] p-5 flex flex-col items-start gap-5 transition-all ease-in hover:rounded-2xl opacity-90 hover:opacity-100'>
        <div>
          <img src={props.src} alt="" />

          {/* <UserRound size={150} strokeWidth={1.5} /> */}
        </div>
        <div><h1 className='text-xl font-bold text-cyan-300'>{props.name}</h1>
          <h3 className='text-sm mb-3 text-purple-400 relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full'>
            Founder
          </h3>

          <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aut deleniti incidunt, magnam doloribus quia error in ut velit! Similique.</p></div>
        <div className='flex gap-4'>
          <a href={props.instagram} target='_blank'><Instagram size={24} strokeWidth={1.5} /></a>
          <a href={props.linkedin} target='_blank'><Linkedin size={24} color="#2d56fb" strokeWidth={1.5} /></a>
        </div>
      </div>
    </>
  )
}

export default MemberCard


