import React, { createContext, useContext, useEffect, useReducer, useState} from 'react';
import {reducer} from './reducer/reducer';
const Mycontext = createContext();
const initiale = {
  data:[],
  Amount:0,
  Total:0
}
function Context({children}) {
  const [productInfo,setProductInfo] = useState({});
  const [cart,dispatch] = useReducer(reducer,initiale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
 const test = {
  id:1,
  name:"yassine"
 }
 console.log(test);
 console.log(JSON.stringify(test));

  const infoProduct =(prodct) =>{
    setProductInfo(prodct);
  }
   
  const addToCart = (info) =>{
     dispatch({type:'addItems',payload:info})
  }

  const removeItem  = (id)=>{
    dispatch({type:'removeItem',payload:id})
  }


 
  useEffect(()=>{
    dispatch({type:'Amount_Total'});
  },[JSON.stringify(cart.data)]); // for not rendered based on reference just for the quality



  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body overflow
    document.body.style.overflow = isMenuOpen ? 'visible' : 'hidden';
  };
  

  return (
    <Mycontext.Provider value={{infoProduct,productInfo,addToCart,cart,removeItem,handleMenuToggle,isMenuOpen}}>
        {children}
    </Mycontext.Provider>
  )
}
export function useGlobalcontext(){
    return useContext(Mycontext);
}
export default Context;
