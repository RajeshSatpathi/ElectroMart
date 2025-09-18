// import React, { useState } from 'react'
import cat1 from "../../assets/cat1.jpg"
import cat3 from "../../assets/cat3.jpg"
import cat4 from "../../assets/cat4.jpg"
import cat5 from "../../assets/cat5.jpg"

function Categories({setcategoryName}) {
    

    const categoryData = [
        {
            img: cat1,
            name: "Portable Speakers"
        },

        {
            img: cat3,
            name: "EV Charging cable"
        },
        {
            img: cat4,
            name: "DVD Player slot"
        },
        {
            img: cat5,
            name: "360 Camera"
        },
    ]
    const handleClick = (categoryName) => {
        setcategoryName(categoryName)

    }

    return (
        <div className='w-full bg-[#F3F4F6] '>
            <br /><br />
            <div className='container mx-auto pt-20 pb-10 flex justify-evenly flex-wrap gap-4 '>

                <div data-aos="zoom-in">
                    <h2 className='text-purple-800'>Favorites Item</h2>
                    <h1 className='text-3xl'>Categoires</h1> <br />
                    <button className='bg-blue-900 text-white text-sm p-2 w-30 rounded'> View ALL</button>
                </div>
                {
                    categoryData.map((item) => (
                        <div className='w-40 text-center  cursor-pointer' data-aos="zoom-in" onClick={() => handleClick(item?.name)}>
                            <img src={item.img} alt="" className='rounded-full' /><br />
                            <p className='font-semibold'>{item.name}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Categories