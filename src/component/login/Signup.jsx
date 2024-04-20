import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='font-mono h-[500px] flex bg-purple-200 p-[20px]'>
      <div className='bg-white max-w-[400px]   py-[20px] px-[40px] m-auto '>
        <form className='flex flex-col justify-between  mb-[10px] h-[222px]'>
          <h1 className='text-[2rem] font-bold'>Login</h1>
          <input type="text" placeholder='jhon_rosso' className='border p-[5px] outline-none' required/>
          <input type="email" placeholder='jhon@example.com' className='border p-[5px] outline-none' required/>
          <input type="password" placeholder='password' className='border p-[5px] outline-none'  required/>
          <button className='text-white bg-red-500 p-[5px] hover:bg-red-400'>Continue</button>
          
        </form>
        <p className='text-[14px] mb-[10px]'>Already have an account?<NavLink to='/login' className='text-red-500 font-bold'>Login here</NavLink></p>
        
        <label htmlFor='agree' className='text-[14px]'>
          <input id='agree' type="checkbox" className='mr-[4px]'/>
          By continuing, I agree to the terms of use & privacy policy.
        </label>
      
      </div>
    </div>
  )
}

export default Signup;
