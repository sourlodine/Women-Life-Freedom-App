import '../App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Iamge from "../assets/freedom.webp";
import Shape1 from "./111_files/hov_shape_L.svg";



export default function Home() {
  const navigate = useNavigate();


  return (
    <div className="w-full mx-auto h-full min-h-screen container">
      <div className='flex flex-col w-full h-full min-h-screen items-center justify-center transition duration-700'>
        <div className='relative w-full flex items-center justify-center pt-28'>
          <div className='relative'>
            <img src={Iamge} alt='splash' className='w-[600px] mx-auto rounded-2xl' />
            <div className='w-full absolute top-[110%] flex items-center px-[50px] justify-center text-5xl font-bold my-4 -mt-40 bg-[#0003] backdrop-blur-sm'>
              <div className='text-[#1ca83b] drop-shadow-md shadow-[#1ca83b]' >
                Woman
              </div>
              <div className='text-white mx-3 bg-transparent drop-shadow-lg shadow-black'>
                Lif3
              </div>
              <div className='text-[#db0100] drop-shadow-md shadow-[#db0100]'>
                Fr33dom
              </div>
            </div>
          </div>
        </div>

        <p className='text-white text-3xl leading-10 pt-10'>
          A humanitarian effort to celebrate the brave women of Iran and support women across the globe through art and web3
        </p>
        <div className="items-center font-bold  overflow-hidden py-10">
          <button onClick={() => navigate("/mint")} className="mx-auto relative group bg-[#00FFA3] py-4 px-12 text-[16px] text-center leading-[22px] w-[200px] h-[60px] text-black font-bold hover:bg-[#00FFA3]/90 flex items-center">
            <span className="absolute top-[7px] left-[7px] block"><img src={Shape1} alt="Shape1" /></span>
            MINT NOW
            <span className="duration-300 -right-10 absolute top-[7px] group-hover:right-[7px] block rotate-90 "><img src={Shape1} alt="Shape1" /></span>
          </button>
        </div>
      </div>
    </div>
  )
}
