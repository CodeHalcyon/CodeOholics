import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-4'>
      <div className="overflow-hidden w-full">
        <img
          src={props.src}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          alt=""
        />
      </div>
      <h1 className='text-lg font-bold text-gray-900 text-center'>{props.heading}</h1>
      {props.desc && <p className='text-sm text-gray-500 text-center'>{props.desc}</p>}
    </div>
  )
}

export default Card
