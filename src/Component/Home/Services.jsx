import React from 'react'
import shipping from "../../assets/shipping.png"
import Return from "../../assets/return.png"
import payment from "../../assets/payment.png"
import gift from "../../assets/gift.png"


function Services() {
    const serviceData = [
        {
            icons: shipping,
            title: "Worldwide Shipping"
        },
        {
            icons: payment,
            title: "Secure Payment"
        },
        {
            icons: Return,
            title: "Return/Refund"
        }, {
            icons: gift,
            title: "Best Gift Voucher"
        }
    ]
    return (
        <div className='w-full'>
            <div className="container mx-auto mt-20 flex justify-evenly items-center flex-wrap gap-7 my-10">
                {
                    serviceData.map((item) => (
                        <div className='w-70  flex flex-col justify-center items-center gap-2 ' >
                            <img src={item.icons} alt="" className='w-20 h-20' />
                            <p className='font-semibold text-lg'>{item.title}</p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Services