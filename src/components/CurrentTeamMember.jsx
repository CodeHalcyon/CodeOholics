import React from 'react'
import { Github, Linkedin, UserRound } from 'lucide-react'
const CurrentTeamMember = (props) => {
    return (
        <>
            <div className='flex gap-5 justify-center items-center w-[90%] p-6 m-auto bg-[#1e293b] text-white my-5 rounded-lg shadow-lg'>

                <div>
                    <div>
                        <UserRound size={150} strokeWidth={1.5} />
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>
                <div>

                    <h1 className='text-xl font-extrabold'>{props.name}</h1>
                    <p className='underline italic'>{props.role}</p>
                    <p>{props.desc}</p>
                    <div className='flex gap-2 mt-4'>
                        <a href="www.linkedin.com"><Linkedin size={24} color="#2d56fb" strokeWidth={1.5} /></a>
                        <a href='www.github.com'><Github size={24} strokeWidth={1.5} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentTeamMember
