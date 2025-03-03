import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className=' flex flex-col justify-center items-center gap-5 m-4  p-3'>
        <div>
          <img
            src={props.src}
            className="w-[500px] h-[300px] object-center object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:brightness-150 hover:shadow-lg"
            alt=""
          />

        </div>
        <div><h1 className='text-2xl font-bold text-cyan-300'>{props.heading}</h1></div>
        <div><p className='text-lg '>{props.desc}</p></div>
      </div>
    </>
  )
}

export default Card
