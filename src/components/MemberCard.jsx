import React from 'react'
import { Linkedin, Instagram } from 'lucide-react'
const MemberCard = (props) => {
  return (
    <div className='group relative overflow-hidden rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg'>
      <div className="aspect-[3/4] overflow-hidden">
        <img src={props.src} alt={props.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900">{props.name}</h3>
        {props.role && <p className="text-xs text-gray-500 mt-0.5">{props.role}</p>}
        <div className="flex gap-3 mt-3">
          {props.instagram && (
            <a href={props.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Instagram size={16} />
            </a>
          )}
          {props.linkedin && (
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Linkedin size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default MemberCard
