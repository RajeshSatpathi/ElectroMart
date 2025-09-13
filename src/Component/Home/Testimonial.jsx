import React, { useEffect } from 'react'
import Slider from "react-slick";
import aos from "aos"
import 'aos/dist/aos.css';
import { reviewdata } from "../../export"
import { FaStar } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Testimonial() {
    let settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
          responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
    useEffect(() => {
        aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    return (
        <div className='w-full  overflow-hidden text-center '>
            <br /><br />
            <h2 className='text-3xl mt-10 font-semibold'>Our Happy Customer Feedback</h2>
            <Slider {...settings} >
                {
                    reviewdata.map((item) => (
                        <div>
                            <div className=' w-full   lg:px-20 px-5 flex flex-col mt-5  justify-center  items-center'

                            >

                                <img src={item.img} alt="" className='lg:w-50 lg:h-50 w-30 rounded-full' />
                                <div className='flex gap-3 my-3'>
                                    <FaStar size={18} color='blue' />
                                    <FaStar size={18} color='blue' />
                                    <FaStar size={18} color='blue' />
                                    <FaStar size={18} color='blue' />

                                </div>
                                        <p className='lg:text-lg text-gray-700 text-sm'>{item.para}</p>

                                <div className='flex gap-2'>
                                    <FaQuoteLeft size={40} color='blue' />
                                    <div>
                                        <h2 className='font-semibold lg:text-lg mt-2'>{item.name}</h2>
                                        <h3 className='text-gray-700 text-md'>{item?.post}</h3>
                                    </div>
                                </div>




                            </div>
                        </div>
                    ))
                }



            </Slider>
        </div>


    )
}

export default Testimonial