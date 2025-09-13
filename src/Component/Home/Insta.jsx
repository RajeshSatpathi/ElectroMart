import React from 'react'
import insta1 from "../../assets/insta-1.jpg"
import insta2 from "../../assets/insta-2.jpg"
import insta3 from "../../assets/insta-3.jpg"
import insta4 from "../../assets/insta-4.jpg"
import insta5 from "../../assets/insta-5.jpg"
import insta6 from "../../assets/insta-6.jpg"


function Insta() {
    const imgData = [
        {
            img: insta1
        },
        {
            img: insta2
        },
        {
            img: insta3
        },
        {
            img: insta4
        },
        {
            img: insta5
        },
        {
            img: insta6
        },
    ]
    return (
        <div className='w-full  mt-15'>
            <div className='flex justify-center items-center flex-col'>
                <h2 className='text-blue-700 text-xl'>Our Follow on Shop</h2>
                <h1 className='lg:text-4xl font-semibold'>Follow On Instagram</h1>
            </div><br /><br />
            <div className='container mx-auto w-[90%] flex justify-evenly flex-wrap gap-5' data-aos="zoom-in">
                {
                    imgData.map((item) => (
                        <img src={item.img} alt="" className='w-50 h-50 rounded-lg'/>

                    ))
                }
            </div>
        </div>
    )
}

export default Insta