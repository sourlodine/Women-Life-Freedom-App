import '../App.css';
import React, { useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi"
import Slider from "react-slick";

import Iamge1 from "./111_files/shape1.png";
import Iamge2 from "./111_files/shape2.png";
import Iamge3 from "./111_files/shape3.png";
import Items1 from "./111_files/item1.png";
import Items2 from "./111_files/item2.png";
import Items3 from "./111_files/item3.png";
import Shape1 from "./111_files/hov_shape_L.svg";


import SliderImage1 from "./111_files/slider-img.png";
import SliderImage2 from "./111_files/slider-img2.png";
import SliderImage3 from "./111_files/slider-img3.png";
import SliderImage5 from "./111_files/slider-img5.png";


const settings = {
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false
};

export default function Home() {
  const [numberValue, setNumberValue] = useState(1);

  const incrementValue = (e) => {
    console.log(numberValue)
    let newNumber;
    if (e == false) newNumber = numberValue - 1;
    else newNumber = numberValue + 1;

    if (newNumber < 0) newNumber = 0
    setNumberValue(newNumber);
  }

  return (
    <>
      <div className="w-full mx-auto h-full min-h-screen ">
        <div className="lg:flex mx-auto max-w-[1200px] items-center justify-center h-full min-h-[calc(100vh-93px)] py-40 relative">
          <div className="lg:w-1/2 w-full relative block">
            <div className=" py-[110px] z-10">
              <div className='hidden lg:block'>
                <span className="absolute left-40 top-2 w-12 transform -translate-x-12 -translate-y-8">
                  <img src={Iamge1} alt="" />
                </span>
                <span className="absolute left-[50%] -top-10 w-10 transform translate-x-12 -translate-y-8">
                  <img src={Iamge2} alt="" />
                </span>
                <span className="absolute left-[37%] z-50 top-80 w-10 transform -translate-x-3/4 -translate-y-1/2">
                  <img src={Iamge3} alt="" />
                </span>
                <img className="absolute banner-image z-20 left-24 -top-9 w-72" src={Items1} alt="image" />
                <img className="absolute banner-image z-10 -left-1 top-28 w-56" src={Items2} alt="image" />
                <img className="absolute banner-image z-30 left-72 -bottom-10 w-60" src={Items3} alt="image" />
              </div>
              <div className='lg:hidden mx-auto mb-72 mt-80'>
                <span className="ml-12 absolute left-20 top-32 w-12 transform -translate-x-12 -translate-y-8">
                  <img src={Iamge1} alt="" />
                </span>
                <span className="ml-12 absolute left-[50%] top-36 w-10 transform translate-x-12 -translate-y-8">
                  <img src={Iamge2} alt="" />
                </span>
                <span className="ml-12 absolute left-[37%] z-30 bottom-10 w-10 transform -translate-x-3/4 -translate-y-1/2">
                  <img src={Iamge3} alt="" />
                </span>
                <img className="sm:ml-12 absolute banner-image z-20 left-3 sm:left-24 top-32 w-72" src={Items1} alt="image" />
                <img className="ml-12 sm:block hidden absolute banner-image z-10 left-1 top-72 w-56" src={Items2} alt="image" />
                <img className="ml-12 sm:block hidden absolute banner-image z-30 left-72 bottom-14 w-60" src={Items3} alt="image" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full block px-2">
            <div className="text-white text-start md:ml-10">
              <h4 className="text-2xl font-bold mb-5">WHITELIST : <span className="text-rose-600">SOLDOUT</span></h4>
              <h1 className="text-[60px] font-bold mb-8">MINT IS LIVE NOW</h1>
              <div className="font-bold mb-10">
                <h5 className="text-xl mb-2">PUBLIC MINT END IN</h5>
                <div className=" text-3xl timer_1 flex items-center gap-2">
                  <div className="days">-366</div>
                  <span className='text-[#ffffff33] items-center'> : </span>
                  <div className="hours">23</div>
                  <span className='text-[#ffffff33] items-center'> : </span>
                  <div className="minutes">41</div>
                  <span className='text-[#ffffff33] items-center'> : </span>
                  <div className="seconds">46</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className='items-center flex mr-[30px]'>
                  <span className="inline-block w-[60px] leading-[60px] text-white bg-[#ffffff0f] text-center font-bold cursor-pointer select-none" onClick={() => incrementValue(false)}>-</span>
                  <input className='px-3 w-20 h-[60px] outline-none text-center bg-transparent border-[#ffffff0f] border-t-2 border-b-2 border-r-0' type='umber' value={numberValue} onChange={(e) => setNumberValue(e.target.value)} />
                  <span className="inline-block w-[60px] leading-[60px] text-white bg-[#ffffff0f] text-center font-bold cursor-pointer select-none" onClick={() => incrementValue(true)}>+</span>
                </div>
                <div className=" items-center font-bold group overflow-hidden">
                  <button className="relative bg-[#00FFA3] py-4 px-12 text-[16px] text-center leading-[22px] w-[200px] h-[60px] text-black font-bold hover:bg-[#00FFA3]/90 flex items-center" >
                    <span className="absolute top-[7px] left-[7px] block"><img src={Shape1} alt="" /></span>
                    MINT NOW
                    <span className="duration-300 -right-10 absolute top-[7px] group-hover:right-[7px] block rotate-90 "><img src={Shape1} alt="" /></span>
                  </button>
                </div>
              </div>
              <div className="text-white uppercase text-[18px] mt-14 font-bold">
                PUBLIC MINT 0.09 ETH + GAS <br /> FLOOR PRICE 2.08 ETH
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <Slider {...settings} className='items-center bg-slate-700 overflow-x-hidden flex justify-center'>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage1} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage2} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage3} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage5} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage1} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage2} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage3} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage5} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage1} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage2} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage3} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage5} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage1} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage2} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage3} />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage5} />
            </div>
          </Slider>
        </div>
      </div >

    </>

  )
}
