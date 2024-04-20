import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import data_product from '../data/data_products';
import new_collections from '../data/new_collections';
import { useGlobalcontext } from '../Context';
import { NavLink } from 'react-router-dom';

function Shop() {
    const {infoProduct} = useGlobalcontext();
  return (
    <div>
        <header className='header_hero w-[100%] flex justify-between  h-[400px] bg-gradient-to-b p-[20px] from-purple-200 via-white  border'>
            <section className='hero_Content w-[400px] p-[40px] '>
                <h1 className='font-bold'>NEW ARRIVALS ONLY</h1>
                <div>
                    <div className='new_Content  flex w-[130px] justify-between'>
                        <h1 className='text-[3rem] font-bold'>new </h1>
                        <div className='bg-[url("./assest/icon/hand_icon.png")] self-center bg-cover bg-no-repeat w-[40px] h-[40px]'></div>
                    </div>
                    <h1 className='text-[3rem] font-bold'>collections for everyone</h1>
                </div>
                <button className='text-white mt-[20px] bg-red-500 rounded-[20px] py-[5px] px-[10px]'>Latest Collection <FaLongArrowAltRight style={{display:'inline'}}/> </button>
            </section>

            <section className='w-[400px]'>
                <div className='hero_img bg-[url("./assest/banner/hero_image.png")] bg-cover bg-no-repeat w-[300px] h-[59vh]'></div>
            </section>
        </header>
        <div className='flex flex-col mt-[30px] p-[20px]'>
           <div className='flex flex-col'>
                <h1 className='text-center font-bold text-[2rem] '>POPULAR IN WOMEN</h1>
                <span className='m-auto w-[100px] h-[3px] bg-black rounded-xl'></span>
           </div>
            <div className='flex flex-wrap justify-center gap-[20px] p-[20px]'>
                {
                    data_product.map(product => {
                        const {id,name,image,new_price,old_price} = product;
                        return (
                            <NavLink to='/product' key={id}>
                                <div onClick={()=> infoProduct(product)} key={id} className='w-[220px] h-auto group '>
                                    <div className='overflow-hidden'>
                                        <img src={image} alt="avatar" className='transition-all group-hover:scale-125 ' />
                                    </div>
                                    <p className='text-[14px] my-[10px]'>{name}</p>
                                    <div className='flex'>
                                        <p className='font-bold mr-[9px]'>${new_price}</p>
                                        <p className='text-gray-500'>${old_price}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
        <div className='hero_banner border flex justify-evenly w-[70%] mx-auto mt-[30px] h-auto p-[20px] bg-gradient-to-b  from-purple-200 via-white '>
                <div className='h-[100%] flex flex-col self-center'>
                    <h1 className='text-[3rem] font-bold'>Exclusive <br /> Offers For You</h1>
                    <p className='text-[15px]'>ONLY ON BEST SELLER SPRODUCTS</p>
                    <button className='bg-red-500 text-white mt-[20px] w-[150px] px-[10px] p-[5px] rounded-[20px]'>Check now</button>
                </div>
                <div className=' bg-[url("./assest/banner/exclusive_image.png")] bg-no-repeat bg-cover w-[200px] h-[300px]'></div>
        </div>
       

        <div className='flex flex-col mt-[30px] p-[20px]'>
           <div className='flex flex-col'>
                <h1 className='text-center font-bold text-[2rem] '>New COLLECTIONS</h1>
                <span className='m-auto w-[100px] h-[3px] bg-black rounded-xl'></span>
           </div>
            <div className='flex flex-wrap justify-center gap-[20px] p-[20px]'>
                {
                    new_collections.map(product => {
                        const {id,name,image,new_price,old_price} = product;
                        return (
                            <NavLink to='/product'>
                                <div onClick={ ()=> infoProduct(product)} key={id} className='w-[220px] h-auto group '>
                                    <div className='overflow-hidden'>
                                        <img src={image} alt="avatar" className='transition-all group-hover:scale-125 ' />
                                    </div>
                                    <p className='text-[14px] my-[10px]'>{name}</p>
                                    <div className='flex'>
                                        <p className='font-bold mr-[9px]'>${new_price}</p>
                                        <p className='text-gray-500'>${old_price}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>

        <div className='exclusive flex text-center p-[40px] h-[336px] justify-between  flex-col w-[70%] mx-auto mt-[30px]   bg-gradient-to-b  from-purple-200 via-white '>
                    <h1 className='text-[3rem]'>Get Exclusive Offers On Your Email</h1>
                    <p className='text-[13px]'>Sunscribe to our newsletter and stay updates</p>
                    <form onClick={(e)=> e.preventDefault()} className='w-[300px] relative m-auto'>
                        <input type="email" className='outline-0 w-[260px] text-[13px] py-[4px] px-[10px] border rounded-[20px]' placeholder='Your Email...' required/>
                        <button className='absolute right-[4px] top-[1px] mb-[45px] text-white text-[12px] bg-black px-[20px] py-[5px] rounded-[20px]'>Subscribe</button>
                    </form>
        </div>
    </div>
  )
}

export default Shop;
