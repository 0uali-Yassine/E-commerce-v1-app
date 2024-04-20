import React,{useEffect,useState} from 'react';
import banner_men from "../assest/banner/banner_mens.png";
import banner_kids from "../assest/banner/banner_kids.png";
import banner_women from "../assest/banner/banner_women.png";
import all_product from "../data/all-products";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useGlobalcontext } from '../Context';

function Model({type}) {
    const {infoProduct} = useGlobalcontext();
    const [drop,setDrop] = useState(false);
    const [explore,setExplore] = useState(false);
    const [filtr,setFilter] = useState(false);
    //console.log(products)
    const [product,setProduct] = useState([]);
    
    let banner_model = "";
    if(type === "men"){
        banner_model = banner_men;
    }else if(type==="women"){

        banner_model = banner_women;
    }else{

        banner_model = banner_kids;
    }
    
    const handlDrop = ()=>{
      setDrop(prev =>!prev);
    }
  
    const handlExplore = ()=>{
      setExplore(prev => !prev);
    }
  
    const handlFilter = (e)=>{
      const name = e.target.getAttribute('name')
      if(name === 'lasted'){
        setFilter(true);
      }else if(name === 'lower'){
        setFilter(false);
        setProduct([...product].sort((a,b)=> a.new_price - b.new_price))
      }else{
        setFilter(false);
        setProduct([...product].sort((a,b)=> b.new_price - a.new_price))
      }
    }

    function showProduct(type){
        setProduct(all_product.filter(prudct => prudct.category === type));
    }

    useEffect(()=>{
        showProduct(type);
    },[type]);


  return (
    <div className='font-mono'>
      <header className='w-[80%] m-auto p-[20px]'>
        <img src={banner_model} alt="model" />
      </header>
      <main>
       <div className='flex justify-between p-[20px]'>
        <div>
            <p> <span className='font-bold'>Showing1-12</span> out of 54 Products</p>
          </div>
          <div>
            <ul className={`${drop ? null:'h-[25px]  overflow-hidden'}  p-[5px]  px-[15px]   border rounded-[20px] text-[12px] w-[100px] divide-y`}>
              <li onClick={handlDrop} className='flex justify-between cursor-pointer '>Sort By {drop ? <IoIosArrowUp className='self-center'/>:<IoIosArrowDown className='self-center'/> }</li>
              <li onClick={handlFilter} name='lasted' className='py-[4px] hover:bg-gray-100 cursor-pointer'>Lasted</li>
              <li onClick={handlFilter} name='lower' className='py-[4px] hover:bg-gray-100 cursor-pointer'>lower</li>
              <li onClick={handlFilter} name='highest' className='py-[4px] hover:bg-gray-100 cursor-pointer'>Highest</li>
            </ul>
          </div>
       </div>
       <div>
            <div className={`${filtr ? 'flex-wrap-reverse':' flex-wrap'}  ${explore ? 'h-auto overflow-auto':'h-[800px] overflow-hidden'} flex transition-all   justify-center gap-[20px] p-[20px]`}>
                  {
                    product.map(prodct => {
                      const {id,name,image,new_price,old_price} = prodct;
                          return (
                            <NavLink to='/product' key={id}>
                              <div onClick={()=> infoProduct(prodct)} key={id} className='w-[220px] h-auto group '>
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
              <div className='text-center mt-[20px]'>
               <button onClick={handlExplore} className='bg-gray-200 text-center  rounded-[20px] w-[100px] m-auto border'>{explore ? 'Disregard': 'Explore'}</button>
              </div>
       </div>
      </main>
    </div>
      
  )
}

export default Model;
