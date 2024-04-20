import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { useGlobalcontext } from '../Context';

function Navbar() {
  const {cart,handleMenuToggle} = useGlobalcontext();
  const {Amount} = cart;

  return (
    <nav className='navbar bg-white flex justify-between items-center  px-[40px] w-[100%] h-auto border'>
      <RiMenu2Line size={30} className='menu  hidden' onClick={handleMenuToggle}/>
      <NavLink to='/' className='logo flex cursor-pointer'>
        <div className="bg-[url('./assest/logo/logo_big.png')] bg-cover bg-no-repeat w-[70px] h-[70px]"></div>
        <h1 className='self-center text-[2rem] font-medium'>SHOPPER</h1>
      </NavLink>
      <ul className='links w-[250px] flex justify-between text-gray-800 font-medium '>
        <NavLink to='/'  className='active'>
          <li className='relative '>
            Shop
          </li>
        </NavLink>

        <NavLink to='/men' >
         <li>Men</li>
        </NavLink>

        <NavLink to='/women' >
          <li>Women</li>
        </NavLink>

        <NavLink to='/kids' >
          <li>Kids</li>
        </NavLink>
      </ul>
      
      <div className="login_cart flex justify-between w-[120px]">
        <NavLink to='/login' className='flex'>
         <button className='text-gray-800 self-center font-medium border px-[15px] rounded-xl'>Login</button>
        </NavLink>
        <NavLink to='/cart'>
          <div className="cart self-center relative">
            <div className='w-[20px] h-[20px] text-[13px] font-medium bg-red-500 rounded-[50%] flex justify-center items-center absolute top-0 right-0'>{Amount}</div>
            <IoCartOutline className='' size={40}/>
          </div>
        </NavLink>
      </div>
      
    </nav>
  )
}

export default Navbar;
