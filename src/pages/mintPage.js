import '../App.css';
import React, { useState } from 'react';
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
    if (e === false) newNumber = numberValue - 1;
    else newNumber = numberValue + 1;

    if (newNumber < 0) newNumber = 0
    setNumberValue(newNumber);
  }

  return (
    <>
      <div className="w-full mx-auto h-full min-h-screen ">
        <div className="lg:flex mx-auto max-w-[1200px] items-center justify-center h-full min-h-[calc(100vh-93px)] py-40 relative">
          <div className="lg:w-1/2 w-full relative block">
            <div className=" py-[110px] z-[1]">
              <div className='hidden lg:block'>
                <span className="absolute left-40 top-2 w-12 transform -translate-x-12 -translate-y-8">
                  <img src={Iamge1} alt="Iamge1" />
                </span>
                <span className="absolute left-[50%] -top-10 w-10 transform translate-x-12 -translate-y-8">
                  <img src={Iamge2} alt="Iamge2" />
                </span>
                <span className="absolute left-[37%] z-[5] top-80 w-10 transform -translate-x-3/4 -translate-y-1/2">
                  <img src={Iamge3} alt="Iamge3" />
                </span>
                <img className="absolute z-[2] left-24 -top-9 w-72" src={Items1} alt="Items1" />
                <img className="absolute z-[1] -left-1 top-28 w-56" src={Items2} alt="Items2" />
                <img className="absolute z-[3] left-72 -bottom-10 w-60" src={Items3} alt="Items3" />
              </div>
              <div className='lg:hidden mx-auto mb-72 mt-80'>
                <span className="ml-12 absolute left-20 top-32 w-12 transform -translate-x-12 -translate-y-8">
                  <img src={Iamge1} alt="Iamge1" />
                </span>
                <span className="ml-12 absolute left-[50%] top-36 w-10 transform translate-x-12 -translate-y-8">
                  <img src={Iamge2} alt="Iamge2" />
                </span>
                <span className="ml-12 absolute left-[37%] z-[3] bottom-10 w-10 transform -translate-x-3/4 -translate-y-1/2">
                  <img src={Iamge3} alt="Iamge3" />
                </span>
                <img className="sm:ml-12 absolute z-[2] left-3 sm:left-24 top-32 w-72" src={Items1} alt="Items1" />
                <img className="ml-12 sm:block hidden absolute z-[1] left-1 top-72 w-56" src={Items2} alt="Items2" />
                <img className="ml-12 sm:block hidden absolute z-[3] left-72 bottom-14 w-60" src={Items3} alt="Items3" />
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
                  <button className="flex min-w-[150px] h-[50px] buttonfx1 slideleft1 text-black items-center justify-center" onClick={() => navigate("/mint")} >
                    <span className="w-[15px] h-[15px] absolute left-0 top-0 m-2"><img src={Shape1} alt="Shape1" /></span>
                    <div className="px-5 py-1 flex items-center justify-center gap-3 text-sm font-bold">
                      MINT NOW
                    </div>
                    <span className="group-hover:right-0 duration-300 -right-10 w-[15px] h-[15px] absolute  top-0 m-2 rotate-90"><img src={Shape1} alt="Shape1" /></span>
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
              <img className=' w-14 mx-auto' src={SliderImage1} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage2} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage3} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage5} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage1} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage2} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage3} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage5} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage1} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage2} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage3} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage5} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage1} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage2} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage3} alt='SliderImage1' />
            </div>
            <div className='p-3'>
              <img className=' w-14 mx-auto' src={SliderImage5} alt='SliderImage1' />
            </div>
          </Slider>
        </div>
      </div >

    </>

  )
}
