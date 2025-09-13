import React from 'react'
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"

function Advertise() {
    return (
        <div className='w-full  '>
            <div className='container mx-auto flex justify-evenly mt-20  flex-wrap px-3 gap-4'>
                <div className='lg:w-100 w-full h-60 rounded flex flex-col justify-center items-end px-4' style={{
                    backgroundImage: `url("${banner1}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                data-aos="zoom-in"
                >
                    <div>
                        <h3 className='text-yellow-300 border-yellow-300'>50% off</h3>
                        <h2 className='text-white text-3xl font-semibold'>Wireless <br /> Device</h2>
                        <button className='bg-yellow-400 p-2 text-sm rounded my-3'>Shop Now</button>
                    </div>

                </div>
                <div className='w-100 h-60 rounded flex flex-col justify-center items-end px-3' style={{
                    backgroundImage: `url("${banner2}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}    data-aos="zoom-in">
                    <div>
                        <h3 className='text-yellow-300 border-yellow-300'>50% off</h3>
                        <h2 className='text-white text-3xl font-semibold'>Wire <br /> Earbuds</h2>
                        <button className='bg-yellow-400 p-2 text-sm rounded my-3'>Shop Now</button>
                    </div>
                </div>
                <div className='w-100 h-60 rounded flex flex-col justify-center items-end px-3' style={{
                    backgroundImage: `url("${banner3}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}    data-aos="zoom-in">
                    <div>
                        <h3 className='text-yellow-300 border-yellow-300'>50% off</h3>
                        <h2 className='text-white text-3xl font-semibold'>Smart <br /> Watch</h2>
                        <button className='bg-yellow-400 p-2 text-sm rounded my-3'>Shop Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Advertise