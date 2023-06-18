import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Header = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className ="  bg-gray-900/90 p-4">
        <div className='max-w-[1240px] mx-auto py-[12px] px-4 items-center flex justify-between'>
            <div className='text-3xl  text-indigo-600'> 
                Imeet Tech
            </div>
            {
                toggle ?
                <AiOutlineClose onClick={ () => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                :
                <AiOutlineMenu  onClick={ () => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />

            }
            <ul className=' hidden md:flex text-white gap-10'>
                <li>Home</li>
                <li>Company</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* responsive menu  */}
            <ul className = {` duration-300 md:hidden  w-full h-screen text-white fixed bg-black left-0 top-[92px] 
                        ${toggle?'left-[0]' : 'left-[-100%]' } `}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header