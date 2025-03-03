import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const items = ["Home", "About", "Events", "Contact", "Resources"]

    return (
        <>
            <nav className='flex flex-row justify-between items-center p-4 bg-black text-white shadow-md'>
                <img src='/logo.jpg' alt='Logo' className='h-[64px] w-auto' />
                <div className='flex flex-row gap-6'>
                    {items.map((item, key) => (
                        <NavLink
                            key={key}
                            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                            className={({ isActive }) =>
                                `relative text-lg font-medium transition-all duration-300 ease-in-out
                                 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-pink-400
                                 before:transition-all before:duration-300 before:ease-in-out 
                                 hover:before:w-full hover:before:left-0 hover:scale-105 hover:text-pink-400
                                 ${isActive ? "text-pink-400 font-bold" : ""}`
                            }
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar
