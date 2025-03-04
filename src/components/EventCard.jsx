// import React from 'react';
// const EventCard = (props) => {
//     return (
//         <div className="relative w-90 overflow-hidden group cursor-pointer">
//             {/* Background Image */}
//             <img
//                 src={props.img}
//                 className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 "
//                 alt="Event"
//             />  

//             {/* Title (Initially Visible, Hides on Hover) */}
//             <div className="absolute bottom-4 left-4 text-purple-400 bg-black px-3 py-1 rounded-lg transition-opacity duration-300 group-hover:opacity-0">
//                 <h1 className="font-bold text-xl">{props.name}</h1>
//             </div>

//             {/* Description (Initially Hidden, Appears on Hover) */}
//             <div className="absolute inset-0 flex flex-col justify-end bg-gray-900/80 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <h1 className="font-bold text-xl text-cyan-300">{props.name}</h1>
//                 <p className="text-sm text-gray-300">
//                     {props.desc}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default EventCard;


import React from 'react';

const EventCard = (props) => {
    return (
        <div className="relative w-full max-w-sm mx-auto overflow-hidden group cursor-pointer rounded-lg shadow-lg">
            {/* Background Image */}
            <img
                src={props.img}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                alt="Event"
            />

            {/* Title (Visible by default, hidden on hover) */}
            <div className="absolute bottom-4 left-4 text-purple-400 bg-black px-3 py-1 rounded-lg transition-opacity duration-300 group-hover:opacity-0">
                <h1 className="font-bold text-lg sm:text-xl">{props.name}</h1>
            </div>

            {/* Description (Hidden by default, appears on hover) */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gray-900/80 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="font-bold text-lg sm:text-xl text-cyan-300">{props.name}</h1>
                <p className="text-sm sm:text-base text-gray-300">
                    {props.desc}
                </p>
            </div>
        </div>
    );
};

export default EventCard;
