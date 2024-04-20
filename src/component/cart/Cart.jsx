import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import { useGlobalcontext } from '../../Context';

function Cart() {
  const {cart,removeItem} = useGlobalcontext();
  return (
    <main className='font-mono'>
      <table className='table mx-auto my-[20px] w-[70%]'>
        <thead className='border'>
          <tr>
            <th className='font-bold bordere text-left'>Product</th>
            <th className='font-bold bordere text-left'>Title</th>
            <th className='font-bold bordere text-left w-[100px]'>Price</th>
            <th className='font-bold bordere text-left w-[100px]'>Quality</th>
            <th className='font-bold bordere text-left w-[100px]'>Total</th>
            <th className='font-bold bordere text-left w-[100px]'>Remove</th>
          </tr>
        </thead>
        <tbody className='divide-y'>
          {
            cart.data.length < 1 ? <tr><td>No Items</td></tr> : (
              cart.data.map(product => {
                const {id,name,image,new_price} = product;
                const amnt = cart.data.filter(itm => itm.id === id);
                return (
                      <tr key={id}>
                        <td>
                          <img src={image}  alt="avatar" className='w-[62px] h-[62px] p-[5px]' />
                        </td>
                        <td className=' text-left w-[335px] text-[13px]'>
                          {name}
                        </td>
                        <td>
                         ${new_price}
                        </td>
                        <td>
                          <input type="number" defaultValue={amnt[0].amnt}  min={1} max={7} className='border outline-none text-center' />
                        </td>
                        <td>
                          ${amnt[0].total}
                        </td>
                        <td>
                          <TiDeleteOutline className='text-[20px] ' onClick={()=> removeItem(id)}/>
                        </td>
                    </tr>
                )
              })
            )
          }
        </tbody>
      </table>
      <section className='section_total px-[20px] py-[60px] m-auto  w-[70%] flex justify-between'>
        <div className='w-[340px]'>
          <h1 className='text-[1.8rem] font-bold '>Cart Totals</h1>
          
          <div className='divide-y'>
            <div className='flex justify-between p-[5px]'>
              <h1 className='text-[13px]'>Subtotal</h1>
              <h1 className='text-[14px]'>${cart.Total}</h1>
            </div>
            <div className='flex justify-between p-[5px]'>
              <h1 className='text-[13px]'>Shipping Fee</h1>
              <h1 className='text-[14px]'>Free</h1>
            </div>
            <div className='flex justify-between p-[5px]'>
              <h1 className='text-[14px] font-bold'>Total</h1>
              <h1 className='text-[14px] font-bold'>${cart.Total}</h1>
            </div>
          </div>
          <button className='text-white text-[14px] mt-[20px] bg-red-500 px-[10px] py-[5px] hover:bg-red-400'>PROCEED TO CHECKOUT</button>
        </div>

        <div>
          <p className='text-[12px] text-gray-400 pb-[10px]'>If you have a promo code, Enter it here</p>
          <form onClick={(e)=> e.preventDefault()} className='flex w-[fit-content]'>
            <input type="text" placeholder='promo code' className='outline-none border p-[5px] bg-gray-300' />
            <button className='text-white bg-black px-[20px] py-[5px] mr-[3px]'>Submit</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Cart;
