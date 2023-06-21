import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className ="  bg-gray-900/90 p-4">
        <div className='max-w-[1240px] mx-auto py-[12px] px-4 items-center flex justify-between'>
            <div className='text-3xl  text-indigo-400'> 
                Imeet Tech
            </div>
            {
                toggle ?
                <AiOutlineClose onClick={ () => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                :
                <AiOutlineMenu  onClick={ () => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />

            }
            <ul className=' hidden md:flex text-white gap-10'>
                <li><NavLink to='/Imeet_Projects'> Home </NavLink></li>
                <li><NavLink to='/about'> About </NavLink></li>
                <li><NavLink to='/contact'> Contact </NavLink></li>
                <li><NavLink to='/register'> Sign Up </NavLink></li>
            </ul>
            {/* responsive menu  */}
            <ul className = {` duration-300 md:hidden  w-full h-screen text-white fixed bg-black left-0 top-[92px] 
                        ${toggle?'left-[0]' : 'left-[-100%]' } `}>
                <li className='p-5'><NavLink to='/Imeet_Projects'> Home </NavLink></li>
                <li className='p-5'><NavLink to='/about'> About </NavLink></li>
                <li className='p-5'><NavLink to='/contact'> Contact </NavLink></li>
                <li className='p-5'><NavLink to='/register'> Sign Up </NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header