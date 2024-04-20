import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";

function Footer() {
  return (
    <footer className='flex flex-col justify-between h-[300px] mt-[20px] font-mono p-[20px]  ' >
        <div className='flex w-[200px m-auto cursor-pointer'>
          <div className='bg-[url("./assest/logo/logo_big.png")] bg-no-repeat bg-cover w-[100px] h-[100px] m-auto'></div>
          <h1 className='text-[2rem] font-medium self-center'>SHOPPER</h1>
        </div>
        <ul className='flex justify-between m-auto w-[400px] text-[14px]'>
          <li className='cursor-pointer'>Company</li>
          <li className='cursor-pointer'>Products</li>
          <li className='cursor-pointer'>Officer</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className='flex justify-between w-[100px] m-auto'>
          <FaInstagram size={20} style={{cursor:'pointer'}}/>
          <FaWhatsapp size={20} style={{cursor:'pointer'}}/>
          <ImPinterest2 size={20} style={{cursor:'pointer'}}/>
        </div>
        <hr className='w-[60%] m-auto h-[3px] font-bold bg-gray-200 rounded-lg'/>
        <p className='text-[13px] text-center'>Copyright@2023-ALL Right Reserved.</p>
    </footer>
  )
}

export default Footer;
