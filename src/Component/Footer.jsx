import React from 'react'
import pay1 from "../assets/pay-1.jpg"
import pay2 from "../assets/pay-2.jpg"
import pay3 from "../assets/pay-3.jpg"
import pay4 from "../assets/pay-4.jpg"

function Footer() {
  return (
    <div className='w-full  bg-[#F3F4F6] mt-10 px-5'>
      <br /><br />
      <div className='container mx-auto  flex justify-evenly flex-wrap '>
        <div className='lg:w-100 w-full'>
          <h2 className='text-xl my-2'> <span className='text-blue-700 uppercase font-extrabold  '>Electro</span>Mart</h2>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel aperiam facilis atque ullam pariatur.Nemo eligendi
            officiis exercitationem officia reprehenderit.</p><br />
          <span className='font-semibold text-lg'>Download Our App</span>
          <div>

          </div>
        </div>
        <div>
          <h3 className='text-md font-semibold'>Usefull Links</h3>
          <p className='text-gray-700'>Home</p>
          <p className='text-gray-700'>About</p>
          <p className='text-gray-700'>Product</p>
          <p className='text-gray-700'>Services</p>
          <p className='text-gray-700'>Contact</p>
        </div>
        <div>
          <h3 className='text-md font-semibold'>Usefull Links</h3>
          <p className='text-gray-700'>Home</p>
          <p className='text-gray-700'>About</p>
          <p className='text-gray-700'>Product</p>
          <p className='text-gray-700'>Services</p>
          <p className='text-gray-700'>Contact</p>
        </div>
        <div>
          <h3 className='text-md font-semibold'>Usefull Links</h3>
          <p className='text-gray-700'>Home</p>
          <p className='text-gray-700'>About</p>
          <p className='text-gray-700'>Product</p>
          <p className='text-gray-700'>Services</p>
          <p className='text-gray-700'>Contact</p>
        </div>

      </div>
      <br />
      <hr className='text-gray-300 ' />
      <div className='container mx-auto flex justify-evenly mt-5 flex-wrap'>
        <div className='flex gap-4 mt-4'>
          <img src={pay1} alt="" className='w-15 h-10 rounded' />
          <img src={pay2} alt="" className='w-15 h-10 rounded' />
          <img src={pay3} alt="" className='w-15 h-10 rounded' />
          <img src={pay4} alt="" className='w-15 h-10 rounded' />
        </div>
        <div className='p-2 '>
          <input type="text" className='p-3 bg-white border-none  md:w-80 w-50' />
          <button className='bg-blue-900 text-white p-3 rounded'>SUBMIT</button>
        </div>
        <div>
          <p className='text-md '>© 2025 Power by Dev-R</p>

        </div>
      </div>
    </div>
  )
}

export default Footer