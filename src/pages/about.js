import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMinus, FiPlus } from "react-icons/fi";

export default function About() {
  const [currentDropDown1, setCurrentDropDown1] = useState(false);
  const [currentDropDown2, setCurrentDropDown2] = useState(false);
  const [currentDropDown3, setCurrentDropDown3] = useState(false);
  const [currentDropDown4, setCurrentDropDown4] = useState(false);
  const [currentDropDown5, setCurrentDropDown5] = useState(false);


  const dropDownText1 = async () => {
    await dropDownText(1);
    await setCurrentDropDown1(!currentDropDown1)
  }

  const dropDownText2 = async () => {
    await dropDownText(2);
    await setCurrentDropDown2(!currentDropDown2)
  }

  const dropDownText3 = async () => {
    await dropDownText(3);
    await setCurrentDropDown3(!currentDropDown3)
  }

  const dropDownText4 = async () => {
    await dropDownText(4);
    await setCurrentDropDown4(!currentDropDown4)
  }

  const dropDownText5 = async () => {
    await dropDownText(5);
    await setCurrentDropDown5(!currentDropDown5)
  }

  const dropDownText = (e) => {
    switch (e) {
      case 1:
        setCurrentDropDown2(false);
        setCurrentDropDown3(false);
        setCurrentDropDown4(false);
        setCurrentDropDown5(false);
        break;
      case 2:
        setCurrentDropDown1(false);
        setCurrentDropDown3(false);
        setCurrentDropDown4(false);
        setCurrentDropDown5(false);
        break;
      case 3:
        setCurrentDropDown1(false);
        setCurrentDropDown2(false);
        setCurrentDropDown4(false);
        setCurrentDropDown5(false);
        break;
      case 4:
        setCurrentDropDown1(false);
        setCurrentDropDown2(false);
        setCurrentDropDown3(false);
        setCurrentDropDown5(false);
        break;
      case 5:
        setCurrentDropDown1(false);
        setCurrentDropDown2(false);
        setCurrentDropDown3(false);
        setCurrentDropDown4(false);
        break;
      default:
        break;
    }
  }

  return (
    <div className="w-full mx-auto py-5 lg:py-0  h-full min-h-screen max-w-[1200px]">
      <div className='gap-10 justify-center text-start flex flex-col lg:flex-row mt-44 px-6'>
        <div className='w-full lg:w-1/2 justify-start mb-12 gap-10 flex flex-col'>
          <div className='text-white font-bold text-3xl'>
            Our Story
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-lg text-white'>
              As the one-year anniversary of Mahsa Amini’s death rapidly approaches, thoughts of the people of Iran, especially those in my family who remain there, have raced through my head every day.
            </h3>
            <h3 className='text-lg text-white'>
              Enter Project 0xWLF.
            </h3>
            <h3 className='text-lg text-white'>
              Leveraging blockchain technology - which emphasizes the freedom to create and transact - is the best way I know how to help the people of Iran. 
            </h3>
            <h3 className='text-lg text-white'>
              This project will be their voice. 
            </h3>
            <h3 className='text-lg text-white text italic'>
              - Teymour Davoudi at Ethereum block 17978257
            </h3>
          </div>
        </div>
        <div className='w-full lg:w-1/2 justify-start gap-10 flex flex-col text-start mb-12'>
          <div className='text-3xl text-white font-bold'>FAQ</div>
          <div className="relative w-full mx-auto">
            <div onClick={() => dropDownText1()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter flex items-center justify-between px-[30px] py-[24px] font-bold text-[18px] lg:text-[24px] mt-[10px] '>
              Wen Drop?
              <div className='text-[24px]'>
                {currentDropDown1 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown1 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown1 ? " h-full flex" : "hidden"}`}>
                We aim to have our first drop around mid-October or earlier.
              </span>
            </div>
            <div onClick={() => dropDownText2()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter flex items-center justify-between px-[30px] py-[24px] font-bold text-[18px] lg:text-[24px] mt-[10px] '>
              Who is behind the project?
              <div className='text-[24px]'>
                {currentDropDown2 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown2 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown2 ? " h-full flex" : "h-0 hidden"}`}>
                Please refer to the “team” page of the website.
              </span>
            </div>
            <div onClick={() => dropDownText3()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter flex items-center justify-between px-[30px] py-[24px] font-bold text-[18px] lg:text-[24px] mt-[10px] '>
              How will the mint work?
              <div className='text-[24px]'>
                {currentDropDown3 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown3 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown3 ? " h-full flex" : "h-0 hidden"}`}>
                We plan to hold a 24-hour open edition mint. Each token will cost 0.025  ETH, and each mint will grant you one piece at random. If you choose to mint several tokens, you will not receive a duplicate until you have minted more tokens than there are distinct pieces.
                <br/>
                Our genesis drop will feature 6 pieces.
              </span>
            </div>
            <div onClick={() => dropDownText4()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter flex items-center justify-between px-[30px] py-[24px] font-bold text-[18px] lg:text-[24px] mt-[10px] '>
              What will happen to secondary royalties?
              <div className='text-[24px]'>
                {currentDropDown4 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown4 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown4 ? " h-full flex" : "h-0 hidden"}`}>
                Royalties from secondary sales will be paid back equally among the artists who so kindly joined us in our effort.
              </span>
            </div>
            <div onClick={() => dropDownText5()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter flex items-center justify-between px-[30px] py-[24px] font-bold text-[18px] lg:text-[24px] mt-[10px] '>
              Where will the funds be donated?
              <div className='text-[24px]'>
                {currentDropDown5 ?
                  <FiMinus />
                  :
                  <FiPlus />}
              </div>
            </div>
            <div className={`${currentDropDown5 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
              <span className={`${currentDropDown5 ? " h-full flex flex-col gap-4" : "h-0 hidden"}`}>
                We are excited to donate all proceeds to the Iranian Diaspora Collective’s “Keep Iran Online” initiative. Journalists are not allowed in Iran. Thus, social media is the only way Iranians can document and disseminate what’s really happening in Iran. In the face of regime crackdowns on internet connectivity, it is of paramount importance that we protect the connectivity of the young Iranians who are leading this movement.
                <p className='break-all list-inside'>
                  You can learn more at {' '}
                  <span>
                    <Link
                      className="text-blue-600 underline decoration-sky-500/30 break-words"
                      to="https://www.iraniandiasporacollective.com/connectivity/"
                      target="_blank"
                    >
                      iraniandiasporacollective.com
                    </Link >
                  </span>.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
