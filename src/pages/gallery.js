import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Shape2 from "../assets/img/title_shapes2.svg";
import CheckImg from "../assets/img/ab-icon-image.png";

export default function Gallery() {
  const teamData = [
    {
      name: "DFI #1",
      img: "https://green-above-salamander-24.mypinata.cloud/ipfs/QmWoZmfxSPCg6SEYArvtmZyqETDy15McnujopuqhNvXTBi/DFI%20%231.jpg",
      title: "DFI",
    },
    {
      name: "DFI #2",
      img: "https://green-above-salamander-24.mypinata.cloud/ipfs/QmWoZmfxSPCg6SEYArvtmZyqETDy15McnujopuqhNvXTBi/DFI%20%232.jpg",
      title: "DFI",
    },
    {
      name: "In Her Power",
      img: "https://green-above-salamander-24.mypinata.cloud/ipfs/QmWoZmfxSPCg6SEYArvtmZyqETDy15McnujopuqhNvXTBi/In%20Her%20Power.png",
      title: "SoulCurryArt",
    },
    {
      name: "Lonely Light",
      img: "https://green-above-salamander-24.mypinata.cloud/ipfs/QmWoZmfxSPCg6SEYArvtmZyqETDy15McnujopuqhNvXTBi/Lonely%20Light.jpg",
      title: "0xMajid",
    },
    {
      name: "Organic Love",
      img: "https://green-above-salamander-24.mypinata.cloud/ipfs/QmWoZmfxSPCg6SEYArvtmZyqETDy15McnujopuqhNvXTBi/Organic%20Love.jpg",
      title: "Fabbriology",
    },
    {
      name: "Rosemare",
      img: "https://green-above-salamander-24.mypinata.cloud/ipfs/QmWoZmfxSPCg6SEYArvtmZyqETDy15McnujopuqhNvXTBi/Rosemare.jpg",
      title: "Shinnoak",
    },
  ];
  return (
    <div className="w-full mx-auto h-full min-h-screen ">
      <div className="flex-col mx-auto container justify-center h-full min-h-screen relative pt-28 pb-5">
        <div className="py-16">
          <div className="justify-center items-center flex">
            <img src={Shape2} alt="Shape2" className="" />
            <div className="text-white/80 text-[24px] font-bold px-5 uppercase">
              Gallery
            </div>
            <img src={Shape2} alt="Shape2" className="rotate-180" />
          </div>
        </div>
        <div className="mt-6 ">
          <div className="px-2 flex flex-wrap justify-center items-center">
            {teamData.map((item, i) => {
              return (
                <div key={i} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                  <div className="bg-[#ffffff0d] backdrop-blur w-[270px] py-8 mx-auto relative flex items-center justify-center flex-col group rounded-lg px-8">
                    <img
                      src={item.img}
                      alt="avartar"
                      className="w-[200px] h-[250px] object-cover rounded-lg"
                    />
                    <div className="w-full  py-4 text-white flex justify-between">
                      {item.name}
                      <img src={CheckImg} alt="check" />
                    </div>
                    <div className="w-full text-[18px] text-white py-2 gap-2 flex justify-between items-center">
                      <span>Aritst: </span>
                      <span className="font-bold">{item.title}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
