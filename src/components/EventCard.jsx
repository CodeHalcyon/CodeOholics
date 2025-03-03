// import React from 'react';

// const EventCard = (props) => {
//   return (
//     <div className="relative w-90 overflow-hidden group cursor-pointer">
//       {/* Background Image */}
//       <img
//         src="https://placehold.co/400x200"
//         className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//         alt="Event"
//       />

//       {/* Title (Initially Visible, Hides on Hover) */}
//       <div className="absolute bottom-4 left-4 text-black px-3 py-1 rounded-lg transition-opacity duration-300 group-hover:opacity-0">
//         <h1 className="font-bold text-xl">{props.name}</h1>
//       </div>

//       {/* Description (Initially Hidden, Appears on Hover) */}
//       <div className="absolute inset-0 flex flex-col justify-end bg-black/70 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <h1 className="font-bold text-xl text-white">{props.name}</h1>
//         <p className="text-sm text-gray-200">
//           {props.desc}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EventCard;


import React from 'react';

const EventCard = (props) => {
    return (
        <div className="relative w-90 overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <img
                src="https://placehold.co/400x200"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 "
                alt="Event"
            />

            {/* Title (Initially Visible, Hides on Hover) */}
            <div className="absolute bottom-4 left-4 text-black px-3 py-1 rounded-lg transition-opacity duration-300 group-hover:opacity-0">
                <h1 className="font-bold text-xl">{props.name}</h1>
            </div>

            {/* Description (Initially Hidden, Appears on Hover) */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gray-900/80 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="font-bold text-xl text-cyan-300">{props.name}</h1>
                <p className="text-sm text-gray-300">
                    {props.desc}
                </p>
            </div>
        </div>
    );
};

export default EventCard;
