import '../App.css';
import React, { useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";
import TitleShape1 from "./111_files/title_shapes.svg";

export default function FAQ() {
  const [currentDropDown1, setCurrentDropDown1] = useState(false);
  const [currentDropDown2, setCurrentDropDown2] = useState(false);
  const [currentDropDown3, setCurrentDropDown3] = useState(false);
  const [currentDropDown4, setCurrentDropDown4] = useState(false);
  const [currentDropDown5, setCurrentDropDown5] = useState(false);
  const [currentDropDown6, setCurrentDropDown6] = useState(false);

  const dropDownText = (e) => {
    switch (e) {
      case 1:
        setCurrentDropDown2(false);
        setCurrentDropDown3(false);
        setCurrentDropDown4(false);
        setCurrentDropDown5(false);
        setCurrentDropDown6(false);
        break;
      case 2:
        setCurrentDropDown1(false);
        setCurrentDropDown3(false);
        setCurrentDropDown4(false);
        setCurrentDropDown5(false);
        setCurrentDropDown6(false);
        break;
      case 3:
        setCurrentDropDown1(false);
        setCurrentDropDown2(false);
        setCurrentDropDown4(false);
        setCurrentDropDown5(false);
        setCurrentDropDown6(false);
        break;
      case 4:
        setCurrentDropDown1(false);
        setCurrentDropDown2(false);
        setCurrentDropDown3(false);
        setCurrentDropDown5(false);
        setCurrentDropDown6(false);
        break;
      case 5:
        setCurrentDropDown1(false);
        setCurrentDropDown2(false);
        setCurrentDropDown3(false);
        setCurrentDropDown4(false);
        setCurrentDropDown6(false);
        break;
      case 6:
        setCurrentDropDown1(false);
        setCurrentDropDown2(false);
        setCurrentDropDown3(false);
        setCurrentDropDown4(false);
        setCurrentDropDown5(false);
        break;
    }
  }

  return (
    <div className="w-full mx-auto h-full min-h-screen ">
      <div className="lg:flex container justify-center h-full min-h-screen relative py-28 px-10">
        <div className="lg:w-1/2 w-full flex flex-col text-start">
          <div className='w-full flex flex-col text-white'>
            <div className='flex items-center gap-5 justify-start font-bold py-5 text-xl'>
              QUESTIONS & ANSWERS
              <img src={TitleShape1} alt='TitleShape1' />
            </div>
            <div className='text-start text-5xl font-extrabold justify-start leading-[60px] py-5'>
              FREQUENTLY ASKED QUESTIONS
            </div>
          </div>
          <div className='w-full flex flex-col text-white text-start font-bold text-lg py-6'>
            <div className='justify-start'>
              Don't get your answer?
            </div>
            <div className='justify-start flex py-2'>
              Don't get your answer?
              <span className='text-[#00FFA3] mx-2'>
                Ask Here!
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mx-auto">
          <div className='relative'>

            <div onClick={() => (dropDownText(1), setCurrentDropDown1(!currentDropDown1))} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
              What is MiNFT ?
              <div className='text-[24px]'>
                {currentDropDown1 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown1 ? "h-full py-[24px]" : "h-0"} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown1 ? "flex" : "hidden"}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>

            <div onClick={() => (dropDownText(2), setCurrentDropDown2(!currentDropDown2))} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
              How we can buy and invest NFT ?
              <div className='text-[24px]'>
                {currentDropDown2 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown2 ? "h-full py-[24px]" : "h-0"} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown2 ? "flex" : "hidden"}`}>
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.
              </span>
            </div>

            <div onClick={() => (dropDownText(3), setCurrentDropDown3(!currentDropDown3))} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
              Why we should choose MiNFT ?
              <div className='text-[24px]'>
                {currentDropDown3 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown3 ? "h-full py-[24px]" : "h-0"} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown3 ? "flex" : "hidden"}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>

            <div onClick={() => (dropDownText(4), setCurrentDropDown4(!currentDropDown4))} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
              Where we can buy and sell NFts ?
              <div className='text-[24px]'>
                {currentDropDown4 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown4 ? "h-full py-[24px]" : "h-0"} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown4 ? "flex" : "hidden"}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>

            <div onClick={() => (dropDownText(5), setCurrentDropDown5(!currentDropDown5))} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
              How secure is this token ?
              <div className='text-[24px]'>
                {currentDropDown5 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown5 ? "h-full py-[24px]" : "h-0"} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown5 ? "flex" : "hidden"}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>

            <div onClick={() => (dropDownText(6), setCurrentDropDown6(!currentDropDown6))} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
              What is your contract address ?
              <div className='text-[24px]'>
                {currentDropDown6 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown6 ? "h-full  py-[24px]" : "h-0"} flex px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown6 ? "flex" : "hidden"}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}
