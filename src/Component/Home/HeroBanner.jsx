import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dslr from "../../assets/dslr.jpg"
import earbuds from "../../assets/earbuds.jpg"
import headset from "../../assets/headset.jpg"
import Slider from "react-slick";
import aos from "aos"
import 'aos/dist/aos.css';
function HeroBanner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    useEffect(() => {
        aos.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 500,
            
        });
    }, [])
    return (
        <div className='w-full lg:h-[650px] h-[500px] overflow-hidden '>

            <Slider {...settings} >
                <div>
                    <div className='lg:h-[700px] h-[500px] lg:px-20 flex flex-col  items-start'
                        style={{
                            backgroundImage: `url("${dslr}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                        }}

                    >
                        <div data-aos="zoom-in" className='mt-20 px-3'>
                            <h2 className='border
                             border-yellow-400
                              p-2 text-yellow-400 rounded
                              lg:text-xl text-md text-center
                              ' >Get Upto Discount 80% off</h2> <br />
                            <h1 className='lg:text-8xl  my-5 text-5xl text-white font-bold'>DSLR 360 <br /> CEMERA</h1>
                            <p className='lg:text-3xl text-white my-5'>100% trusted Electronics Gadgets </p>

                        </div><br />
                        <button className=' mx-3
                         p-3 rounded bg-yellow-400 w-50 text-sm
                        ' data-aos="zoom-in">Online Collection</button>
                    </div>
                </div>
                <div>
                    <div className='lg:h-[700px] h-[500px] lg:px-20 flex flex-col  items-start'
                        style={{
                            backgroundImage: `url("${earbuds}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                        }}
                    >
                        <div data-aos="zoom-in" className='mt-20 px-3'>
                            <h2 className='border
                             border-yellow-400
                              p-2 text-yellow-400 rounded
                              lg:text-xl text-md text-center
                              ' >Get Upto Discount 80% off</h2> <br />
                            <h1 className='lg:text-8xl  my-5 text-5xl text-white font-bold'>WIRELESS <br /> EARBUDS</h1>
                            <p className='lg:text-3xl text-white my-5'>100% trusted Electronics Gadgets </p>

                        </div><br />
                        <button className=' mx-3
                         p-3 rounded bg-yellow-400 w-50 text-sm
                        ' data-aos="zoom-in">Online Collection</button>
                    </div>
                </div>
                <div>
                    <div className='lg:h-[700px] h-[500px] lg:px-20 flex flex-col  items-start'
                        style={{
                            backgroundImage: `url("${headset}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                        }}
                    >
                        <div data-aos="zoom-in" className='mt-20 px-3'>
                            <h2 className='border
                             border-yellow-400
                              p-2 text-yellow-400 rounded
                              lg:text-xl text-md text-center
                              ' >Get Upto Discount 80% off</h2> <br />
                            <h1 className='lg:text-8xl  my-5 text-5xl text-white font-bold'>WIRELESS <br /> HEADSET</h1>
                            <p className='lg:text-3xl text-white my-5'>100% trusted Electronics Gadgets </p>

                        </div><br />
                        <button className=' mx-3
                         p-3 rounded bg-yellow-400 w-50 text-sm
                        ' data-aos="zoom-in">Online Collection</button>
                    </div>
                </div>
            </Slider>
        </div>


    )
}

export default HeroBanner