import React from 'react'
import { Github, Linkedin } from 'lucide-react'
const CurrentTeamMember = (props) => {
    return (
        <div className="flex gap-5 items-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                <img src={props.src} alt={props.name} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
                <h3 className="text-base font-semibold text-gray-900">{props.name}</h3>
                <p className="text-xs text-gray-500 font-medium">{props.role}</p>
                {props.desc && <p className="text-sm text-gray-500 mt-1 line-clamp-2">{props.desc}</p>}
                <div className="flex gap-3 mt-3">
                    {props.linkedin && (
                        <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                            <Linkedin size={18} />
                        </a>
                    )}
                    {props.github && (
                        <a href={props.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                            <Github size={18} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CurrentTeamMember
