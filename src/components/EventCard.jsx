import React from 'react';

const EventCard = (props) => {
    return (
        <div className="group relative w-full mx-auto overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white border border-gray-200">
            <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                    src={props.img}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    alt={props.title}
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs text-gray-700 font-medium rounded">
                    {props.date}
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {props.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {props.description}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{props.venue}</span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
