import React from 'react'
import { products } from '../../export'
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
function HomeProduct() {

    return (
        <div className='w-full bg-[#F3F4F6] text-center '>
            <br /><br />
            <h2 className='text-blue-800 text-xl' data-aos="zoom-in">Browse Collection </h2>
            <h1 className='font-semibold text-3xl' data-aos="zoom-in">Trending Products</h1>
            <div className="container mx-auto flex justify-evenly gap-4 flex-wrap">
                {
                    products.map((item) => (
                        <div className='w-80 rounded mt-10 bg-white p-3 cursor-pointer'>
                            <div>
                                <div className=' flex justify-center items-center gap-4 '>
                                    <FaEye size={25} color="white" className='bg-pink-500 rounded-full p-1.5'/>
                                    <FaHeart size={25} color="white" className='bg-pink-500 rounded-full p-1.5'/>
                                    <FaCartShopping size={25} color="white" className='bg-pink-500 rounded-full p-1.5'/>

                                </div>
                                <img src={item.img} alt="" className='' />
                            </div>
                            <p  className='text-gray-600 text-md'>{item.category}</p>
                            <h2 className='text-lg font-semibold my-3'>{item.name}</h2>
                            <span className='text-blue-900 font-bold mb-2'>{item.price}</span> 
                            <hr className='text-gray-200'/>
                            <div className='flex justify-between'>
                                <p>*</p>
                                <button className='text-white text-sm bg-green-500 p-1 mt-2 rounded'>SALE 14%</button>
                            </div>

                        </div>
                    ))
                }
             
            </div>
            <br />
               <div>
                    <button className='bg-blue-900 p-3 rounded text-white' data-aos="zoom-in">View More</button>
                </div><br /><br />
        </div>
    )
}

export default HomeProduct