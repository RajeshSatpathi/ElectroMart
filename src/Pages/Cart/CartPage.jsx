import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CiCircleRemove } from "react-icons/ci";
function CartPage() {
    const cartData = useSelector(state => state.cart);
    const [discountValue ,setdiscountValue] = useState("")
    // console.log(cartData)
    return (
        <div className='w-full bg-gray-100 mt-4'>
            <div className='w-full p-5 flex justify-evenly flex-wrap'>
                <div className='lg:w-[60%] w-full'>
                    <div className='w-full shadow-md rounded font-semibold uppercase text-sm
                     bg-white flex justify-between items-center p-3
                     '>
                        <div>
                            <h2>Product image</h2>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h2>Product Name</h2>
                        </div>
                        <div>
                            <h2> Quantity</h2>
                        </div>
                        <div>
                            <h2> Price</h2>
                        </div>
                        <div>
                            <h2> Delete</h2>
                        </div>
                    </div>
                    {
                        cartData.items.map((Product) => (
                            <div className='w-full shadow-md rounded font-semibold uppercase text-sm
                     bg-white flex justify-between items-center px-3 mt-3
                     '>
                                <div>

                                    <img src={Product.img} alt="" className='w-25 h-25' />
                                </div>
                                <div>
                                    <h2>{Product.name}</h2>
                                </div>
                                <div>
                                    <h2> {Product.quantity}</h2>
                                </div>
                                <div>
                                    <h2> {Product.price}</h2>
                                </div>
                                <div>
                                    <CiCircleRemove size={26} color='red' />
                                </div>
                            </div>
                        ))
                    }

                </div>
                {/* payment section */}
                <div className='lg:w-[30%] h-65 w-full bg-white rounded shadow-md p-4'>
                    <h2 className='font-semibold'>Summary</h2>
                    <div className='flex justify-between mt-4'>
                        <h2 className='text-sm  text-gray-400 font-semibold'>Total Quantity</h2>
                        <span >{cartData.totalQuantity}</span>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='text-sm  text-gray-400 font-semibold'>Total Amount</h2>
                        <span className='text-green-600'>{cartData?.totalPrice}</span>
                    </div>
                    <hr />
                    <div className='flex justify-between mt-3'>
                        <h2 className='text-sm  text-gray-400 font-semibold'>Discount</h2>
                        <span className='text-green-600'>
                            <input type="text" 
                            value={discountValue}
                            onChange={(e)=>setdiscountValue(e.target.value)}
                             className='border border-gray-200 text-gray-600 text-center bg-white mx-2 w-10'/>
                            %</span>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <h2 className='text-sm  text-gray-400 font-semibold'>Final Amount</h2>
                        <span className='text-green-600'>{cartData.totalPrice - (cartData.totalPrice * discountValue/100)}</span>
                    </div>
                    <button className='bg-purple-800 font-semibold uppercase mt-3
                     text-sm shadow-lg w-full text-white p-2'>Pay Now</button>
                </div>

            </div>
        </div>
    )
}

export default CartPage