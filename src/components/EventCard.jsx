import React from 'react';

const EventCard = (props) => {
    return (
        <div className="relative w-full max-w-sm mx-auto overflow-hidden group cursor-pointer rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl bg-gray-900 border border-gray-800">
            {/* Background Image with Gradient Overlay */}
            <div className="relative">
                <img
                    src={props.img}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={props.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>

            {/* Title (Always Visible) */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="font-bold text-lg sm:text-xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                    {props.name}
                </h2>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gray-900/90 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <h2 className="font-bold text-lg sm:text-xl text-emerald-400 mb-2">
                    {props.name}
                </h2>
                <p className="text-sm text-gray-200 leading-relaxed">
                    {props.desc}
                </p>
                <div className="h-1 w-16 bg-emerald-500 mt-3 rounded-full"></div>
            </div>
        </div>
    );
};

export default EventCard;