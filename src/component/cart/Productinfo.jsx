import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useGlobalcontext } from '../../Context';
import { NavLink } from 'react-router-dom';

function Productinfo() {
  const {productInfo,addToCart} = useGlobalcontext();
  const {id,name,category,image,new_price,old_price} = productInfo;

  return (
    <div className=' p-[20px]'>
      
      <main className='main_info max-w-[1000px]  mx-auto mt-[46px] flex justify-between relative'>
        <div className=' flex items-center text-[14px] absolute top-[-44px] left-0'>Home <IoIosArrowForward className='mx-[3px]'/> Shop <IoIosArrowForward className='mx-[3px]'/> {category} <IoIosArrowForward className='mx-[3px]'/> {name}</div>
          <section className='images_info flex justify-between  w-[450px]'>
            <div className='multiplImage flex flex-col justify-between gap-[5px]'>
                <div className='  w-[100px] h-[115px]  p-[1px]'>
                  <img src={image}  className='w-[100%] h-[115px]' alt="avatar" />
                </div>
                <div  className=' w-[100px] h-[115px]  p-[1px]'>
                  <img src={image}  className='w-[100%] h-[115px]' alt="avatar" />
                </div>
                <div  className=' w-[100px] h-[115px] p-[1px] '>
                  <img src={image}  className='w-[100%] h-[115px]' alt="avatar" />
                </div>
                <div  className=' w-[100px] h-[115px] '>
                  <img src={image}  className='w-[100%] h-[115px]' alt="avatar" />
                </div>
            </div>
            <div className='w-[340px] h-[475px] ml-[10px] border '>
             <img src={image} className='w-[100%] h-[475px]' alt='avatar' />
            </div >
          </section>
          <section className='flex flex-col justify-between px-[30px]'>
            <h1 className='text-[2rem] font-bold'>{name}</h1>
            <div className='flex items-center'>
              <MdOutlineStar className='text-red-500'/>
              <MdOutlineStar className='text-red-500'/>
              <MdOutlineStar className='text-red-500'/>
              <MdOutlineStar className='text-red-500'/>
              <MdOutlineStar className='text-red-200'/>
              <span>(122)</span>
            </div>
            <h1 className='text-gray-400 font-bold line-through'>${old_price} <span className='text-red-500 font-bold no-underline	'>${new_price}</span></h1>
            <p className='text-[14px]'>A light,usually knitted,pullover shirt,close-filtring and witha round neckcline and shart sleeves,warm as an undershirt or outer garment.</p>
            <div>
              <h1 className='text-[16px] font-bold'>Select Size</h1>
              <div className='flex justify-between w-[219px]'>
                <label htmlFor="smal" className='border p-[5px] h-[40px] w-[40px] text-center hover:bg-gray-200 checked:bg-gray-400'>S</label>
                <input id="smal" name="size" type="radio" className='hidden' />
                <label htmlFor="medium" className='border p-[5px] h-[40px] w-[40px] text-center hover:bg-gray-200 checked:bg-gray-400'>M</label>
                <input id="medium" name="size" type="radio"  className='hidden'/>
                <label htmlFor="larg" className='border p-[5px] h-[40px] w-[40px] text-center hover:bg-gray-200 checked:bg-gray-400'>L</label>
                <input id="larg" name="size" type="radio" className='hidden' />
                <label htmlFor="xlarg" className='border p-[5px] h-[40px] w-[40px] text-center hover:bg-gray-200 checked:bg-gray-400'>XL</label>
                <input id="xlarg" name="size" type="radio" className='hidden' />
                <label htmlFor="doubleLarg" className='border p-[5px] h-[40px] w-[40px] text-center hover:bg-gray-200 checked:bg-gray-400'>XXL</label>
                <input id="doubleLarg" name="size" type="radio" className='hidden' />
              </div>
            </div>
            <NavLink to='/cart'>
              <button onClick={()=> addToCart(productInfo)} className='text-white  bg-red-500 w-[fit-content] px-[10px] py-[5px] hover:bg-red-400'>ADD TO CART</button>
            </NavLink>
            <div>
              <h1><span className='font-bold'>Category:</span>{category},T-shirt,Crop Top</h1>
              <h1><span className='font-bold'>Tags:</span>Modern,Latest</h1>
            </div>
          </section>
      </main>
    </div>
  )
}

export default Productinfo;
