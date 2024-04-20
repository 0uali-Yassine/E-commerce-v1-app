import React from 'react';
import { NavLink } from 'react-router-dom';
import { VscChromeClose } from "react-icons/vsc";
import { useGlobalcontext } from '../../Context';

function Menubar() {
    const {handleMenuToggle,isMenuOpen} = useGlobalcontext();
  return (
    <div className={`menu_bar ${!isMenuOpen ? 'hidden':'flex'} w-[100%] min-h-full absolute`} >
        <div className='min-h-[100vh] w-[250px] bg-white  relative'>
            <VscChromeClose size={30} className='absolute top-0 right-0' onClick={handleMenuToggle}/>
            <nav className='bg-white flex justify-between items-center  p-[40px] w-[100%] h-auto '>
        
            <ul className=' w-[250px] flex flex-col justify-between text-gray-800 font-medium divine-y'  onClick={handleMenuToggle}>
                <NavLink to='/'  >
                <li className='transition-all hover:ml-2 hover:text-gray-800 hover:font-bold'>Shop</li>
                </NavLink>

                <NavLink to='/men' >
                <li  className='transition-all hover:ml-2 hover:text-gray-800 hover:font-bold'>Men</li>
                </NavLink>

                <NavLink to='/women'>
                <li className='transition-all hover:ml-2 hover:text-gray-800 hover:font-bold'>Women  </li>
                </NavLink>

                <NavLink to='/kids'  >
                <li  className='transition-all hover:ml-2 hover:text-gray-800 hover:font-bold'>Kids</li>
                </NavLink>
            </ul>
            </nav>
        </div>

        <div className='bg-gray-400 w-[80%] h-[100vh] opacity-[.8]' onClick={handleMenuToggle}></div>
      
    </div>
  )
}

export default Menubar;
