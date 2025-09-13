import React from 'react'
import dealbg from "../../assets/deal-bg.jpg"
function Deals() {
    return (
        <div className='w-full'>
            <div className="w-[90%] container mx-auto mt-15 h-70 rounded-2xl flex flex-col justify-center items-center" style={{
                backgroundImage: `url("${dealbg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} data-aos="zoom-in">
                <h2 className='text-yellow-400 text-lg'>Every day Shopping</h2>
                <h1 className='text-white font-bold text-4xl my-4'>Deal of the Day</h1>
                <button className='bg-yellow-400 p-2 w-40 rounded mt-5'>Shop Now</button>
            </div>
        </div>
    )
}

export default Deals