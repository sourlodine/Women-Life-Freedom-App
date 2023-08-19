import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Team1 from "../assets/teams/team1.png";
import Team2 from "../assets/teams/team2.png";
import conentIamge from "./111_files/hov_shape_L_dark.svg"

export default function About() {
  const [currentDropDown1, setCurrentDropDown1] = useState(false);
  const [currentDropDown2, setCurrentDropDown2] = useState(false);
  const [currentDropDown3, setCurrentDropDown3] = useState(false);
  const [currentDropDown4, setCurrentDropDown4] = useState(false);
  const [currentDropDown5, setCurrentDropDown5] = useState(false);
  const [currentDropDown6, setCurrentDropDown6] = useState(false);

  const dropDownText1 = () => {
    dropDownText(1);
    setCurrentDropDown1(!currentDropDown1)
  }

  const dropDownText2 = () => {
    dropDownText(2);
    setCurrentDropDown2(!currentDropDown2)
  }

  const dropDownText3 = () => {
    dropDownText(3);
    setCurrentDropDown3(!currentDropDown3)
  }

  const dropDownText4 = () => {
    dropDownText(4);
    setCurrentDropDown4(!currentDropDown4)
  }

  const dropDownText5 = () => {
    dropDownText(5);
    setCurrentDropDown5(!currentDropDown5)
  }

  const dropDownText6 = () => {
    dropDownText(6);
    setCurrentDropDown6(!currentDropDown6)
  }

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
      default:
        break;
    }
  }

  const teamData = [
    { name: "Teymour Davoudi", avatar: Team1, title: "Creator", description: "Iranian-American university student with a passion for web3 and blockchain technology", twitter: "https://x.com/txymour?s=21", instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==", linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251" },
    { name: "Harry Anderson", avatar: Team2, title: "Developer", description: "", twitter: "https://x.com/evilgon0214", instagram: "", linkedIn: "https://www.linkedin.com/in/evilgon/" },
    // { name: "Team3", avatar: SliderImage3, title: "Marketing Manager", description: "A marketing manager who has spent more than 3 years developing the NFT essential technology and market", twitter: "https://x.com/", instagram: "https://instagram.com/", linkedIn: "https://www.linkedin.com/" },
    // { name: "Team4", avatar: SliderImage8, title: "Designer", description: "Innovative professional passionate about designing digital products with cutting-edge design", twitter: "https://x.com/", instagram: "https://instagram.com/", linkedIn: "https://www.linkedin.com/" },

  ]

  return (
    <>
      <div className="w-full mx-auto h-full min-h-screen max-w-[1200px]">
        <div className='flex flex-col w-full h-full  justify-center px-5'>
          <div className='gap-10 justify-center text-start lg:flex mt-44 px-6'>
            <div className='w-full lg:w-1/2 justify-start mb-12'>
              <div className='w-full text-start flex ga-8 mb-10'>
                <div className='text-3xl text-white font-bold'>
                  THE STORY
                </div>
                <img src="./111_files/title_shapes.svg" alt='' />
              </div>
              <div className='text-white font-bold text-5xl mb-10'>
                About us
              </div>
              <div className='text-lg text-white mb-6'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.
              </div>

              <div className='text-lg text-white'>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original a latin professor.
              </div>
            </div>
            <div className='w-full lg:w-1/2 justify-end gap-10 flex flex-col text-start mb-12'>
              <div className='text-3xl text-white font-bold'>FAQ</div>
              <div className="relative w-full mx-auto">
                <div onClick={() => dropDownText1()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
                  What is MiNFT ?
                  <div className='text-[24px]'>
                    {currentDropDown1 ?
                      <FiMinus />
                      :
                      <FiPlus />}
                  </div>
                </div>
                <div className={`${currentDropDown1 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
                  <span className={`${currentDropDown1 ? " h-full flex" : "hidden"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>

                <div onClick={() => dropDownText2()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
                  How we can buy and invest NFT ?
                  <div className='text-[24px]'>
                    {currentDropDown2 ?
                      <FiMinus />
                      :
                      <FiPlus />}
                  </div>
                </div>
                <div className={`${currentDropDown2 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
                  <span className={`${currentDropDown2 ? " h-full flex" : "h-0 hidden"}`}>
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.
                  </span>
                </div>

                <div onClick={() => dropDownText3()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
                  Why we should choose MiNFT ?
                  <div className='text-[24px]'>
                    {currentDropDown3 ?
                      <FiMinus />
                      :
                      <FiPlus />}
                  </div>
                </div>
                <div className={`${currentDropDown3 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
                  <span className={`${currentDropDown3 ? " h-full flex" : "h-0 hidden"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>

                <div onClick={() => dropDownText4()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
                  Where we can buy and sell NFts ?
                  <div className='text-[24px]'>
                    {currentDropDown4 ?
                      <FiMinus />
                      :
                      <FiPlus />}
                  </div>
                </div>
                <div className={`${currentDropDown4 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
                  <span className={`${currentDropDown4 ? " h-full flex" : "h-0 hidden"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>

                <div onClick={() => dropDownText5()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
                  How secure is this token ?
                  <div className='text-[24px]'>
                    {currentDropDown5 ?
                      <FiMinus />
                      :
                      <FiPlus />}
                  </div>
                </div>
                <div className={`${currentDropDown5 ? "py-[24px]" : ""} px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
                  <span className={`${currentDropDown5 ? " h-full flex" : "h-0 hidden"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>

                <div onClick={() => dropDownText6()} className='cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[29px] py-[24px] font-bold text-[24px] mt-[10px]'>
                  What is your contract address ?
                  <div className='text-[24px]'>
                    {currentDropDown6 ?
                      <FiMinus />
                      :
                      <FiPlus />}
                  </div>
                </div>
                <div className={`${currentDropDown6 ? "py-[24px]" : ""} flex px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}>
                  <span className={`${currentDropDown6 ? " h-full flex" : "hidden"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col px-6 justify-center mb-14">
        <div className='flex  mb-10 justify-center w-full'>
          <div className='text-3xl text-white font-bold'>
            MEET THE ARTISTS
          </div>
          <img src="./111_files/title_shapes.svg" alt='' />
        </div>
        <div className='px-2 flex justify-center items-center'>
          {teamData.map((item, index) => {
            return (
              <div key={index} className='w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4'>
                <div className='bg-[#ffffff0d] backdrop-blur w-[270px] py-8 mx-auto relative flex items-center justify-center flex-col group rounded-lg'>
                  <span className="w-[24px] h-[24px] absolute left-0 top-0 m-2 group-hover:opacity-100 opacity-0 duration-500"><img src={conentIamge} alt="conentIamge" /></span>
                  <span className="w-[24px] h-[24px] absolute right-0 top-0 m-2 rotate-90 group-hover:opacity-100 opacity-0 duration-500"><img src={conentIamge} alt="conentIamge" /></span>
                  <img src={item.avatar} alt='avartar' className='w-32 h-32 object-cover rounded-lg' />
                  <div className='text-[24px] leading-8 text-white mt-4 font-bold flex'>
                    {item.name}
                  </div>
                  <div className='text-[18px] text-white py-2 font-bold gap-2 flex items-center'>
                    {item.title}
                  </div>
                  <div className='font-semibold text-white text-sm px-3 flex mt-[10px] h-20 overflow-hidden'>
                    {item.description}
                  </div>
                  <div className='justify-center items-center absolute -bottom-2 gap-5 text-white text-xl flex group-hover:opacity-100 opacity-0 duration-500'>
                    {item.twitter !== "" &&
                      <Link to={item.twitter} className='bg-[#040C12] rounded-lg p-2'>
                        <AiOutlineTwitter />
                      </Link>
                    }
                    {item.instagram !== "" &&
                      <Link to={item.instagram} className='bg-[#040C12] rounded-lg p-2'>
                        <AiOutlineInstagram />
                      </Link>
                    }
                    {item.linkedIn !== "" &&
                      <Link to={item.linkedIn} className='bg-[#040C12] rounded-lg p-2'>
                        <FaLinkedinIn />
                      </Link>
                    }
                  </div>
                </div>
              </div>
            )
          })}
          {/* <div className='w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 '>
            <div className='bg-[#ffffff0d] backdrop-blur w-[270px]  min-h-[350px] py-8 mx-auto relative flex items-center justify-center flex-col group rounded-lg'>
              <img src={Team1} alt='Avatar1' className='w-32 h-32 object-cover rounded-lg'  />
              <div className='items-center text-white'>
                <div className='flex gap-2 text-3xl font-blod items-center'>
                  Teymour Davoudi
                  <img src={AbIcon1} alt='AbIcon1' />
                </div>
                <div className='text-white'>
                  Creator
                </div>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 '>
            <div className='bg-[#ffffff0d] backdrop-blur w-[270px]  min-h-[350px] py-8 mx-auto relative flex items-center justify-center flex-col group rounded-lg'>
              <img src={Team2} alt='Avatar2' className='w-32 h-32 object-cover rounded-lg' />
              <div className='items-center text-white'>
                <div className='flex gap-2 text-3xl font-blod items-center'>
                  Harry Anderson
                  <img src={AbIcon2} alt='AbIcon2' />
                </div>
                <div className='text-white'>
                  Developer
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>

  )
}
