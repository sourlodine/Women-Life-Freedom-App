import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import Shape2 from "./111_files/title_shapes2.svg"
import conentIamge from "./111_files/hov_shape_L_dark.svg"

import Team1 from "../assets/teams/IMG_0279.png";
import SliderImage2 from "../assets/nfts/nft02.png";
import SliderImage3 from "../assets/nfts/nft03.png";
import SliderImage6 from "../assets/nfts/nft06.png";
import SliderImage8 from "../assets/nfts/nft08.png";
import SliderImage11 from "../assets/nfts/nft11.png";
import SliderImage14 from "../assets/nfts/nft14.png";
import SliderImage16 from "../assets/nfts/nft16.png";


export default function Team() {

  const teamData = [
    { name: "Teymour Davoudi", avatar: Team1, title: "Creator", description: "Iranian-American university student with a passion for web3 and blockchain technology.", twitter: "https://x.com/txymour?s=21", instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==", linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251" },
    { name: "Team2", avatar: SliderImage2, title: "Creator", description: "Iranian-American university student with a passion for web3 and blockchain technology.", twitter: "https://x.com/txymour?s=21", instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==", linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251" },
    { name: "Team3", avatar: SliderImage3, title: "Creator", description: "Iranian-American university student with a passion for web3 and blockchain technology.", twitter: "https://x.com/txymour?s=21", instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==", linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251" },
    { name: "Team4", avatar: SliderImage8, title: "Creator", description: "Iranian-American university student with a passion for web3 and blockchain technology.", twitter: "https://x.com/txymour?s=21", instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==", linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251" },
    { name: "Team5", avatar: SliderImage14, title: "Creator", description: "Iranian-American university student with a passion for web3 and blockchain technology.", twitter: "https://x.com/txymour?s=21", instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==", linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251" },
    { name: "Team6", avatar: SliderImage16, title: "Creator", description: "Iranian-American university student with a passion for web3 and blockchain technology.", twitter: "https://x.com/txymour?s=21", instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==", linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251" },
    { name: "Team7", avatar: SliderImage6, title: "Creator", description: "Iranian-American university student with a passion for web3 and blockchain technology.", twitter: "https://x.com/txymour?s=21", instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==", linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251" },
    { name: "Team8", avatar: SliderImage11, title: "Creator", description: "Iranian-American university student with a passion for web3 and blockchain technology.", twitter: "https://x.com/txymour?s=21", instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==", linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251" },
  ]
  return (
    <div className="w-full mx-auto h-full min-h-screen ">
      <div className="flex-col mx-auto container justify-center h-full min-h-screen relative pt-28 pb-5">
        <div className='pt-10'>
          <div className='justify-center items-center flex'>
            <img src={Shape2} alt='Shape2' className='' />
            <div className='text-white/80 text-[18px] font-bold px-5'>TEAM MEMBERS</div>
            <img src={Shape2} alt='Shape2' className='rotate-180' />
          </div>
          <div className='py-3 justify-center items-center flex text-white text-[48px] font-bold'>
            MEET THE CREW
          </div>
        </div>
        <div className='mt-6'>
          <div className='px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4 gap-8'>
            {teamData.map((item, index) => {
              return (
                <div key={index} className=''>
                  <div className='bg-[#ffffff0d] backdrop-blur-[10px] max-w-[100%] h-[300px] relative flex items-center justify-center flex-col group rounded-lg'>
                    <span className="w-[24px] h-[24px] absolute left-0 top-0 m-2 group-hover:opacity-100 opacity-0 duration-500"><img src={conentIamge} alt="conentIamge" /></span>
                    <span className="w-[24px] h-[24px] absolute right-0 top-0 m-2 rotate-90 group-hover:opacity-100 opacity-0 duration-500"><img src={conentIamge} alt="conentIamge" /></span>
                    <img src={item.avatar} alt='avartar' className='w-32 h-32 object-cover rounded-lg' />
                    <div className='text-[24px] leading-8 text-white mt-4 font-bold flex group-hover:hidden'>
                      {item.name}
                    </div>
                    <div className='text-[18px] text-white py-2 font-bold gap-2 flex items-center group-hover:hidden'>
                      {item.title}
                    </div>
                    <div className='font-semibold text-white text-sm px-3 group-hover:flex hidden duration-500 mt-[10px] h-20 overflow-hidden'>
                      {item.description}
                    </div>
                    <div className='justify-center items-center absolute -bottom-2 gap-5 text-white text-xl flex group-hover:opacity-100 opacity-0 duration-500'>
                      <Link to={item.twitter} className='bg-[#040C12] rounded-lg p-2'>
                        <AiOutlineTwitter />
                      </Link>
                      <Link to={item.instagram} className='bg-[#040C12] rounded-lg p-2'>
                        <AiOutlineInstagram />
                      </Link>
                      <Link to={item.linkedIn} className='bg-[#040C12] rounded-lg p-2'>
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}


          </div>
        </div>
      </div>
    </div >

  )
}
