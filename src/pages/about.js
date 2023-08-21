import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Team1 from "../assets/teams/team1.png";
import Team2 from "../assets/teams/team2.png";
import conentIamge from "./111_files/hov_shape_L_dark.svg";

export default function About() {
  const [currentDropDown1, setCurrentDropDown1] = useState(false);
  const [currentDropDown2, setCurrentDropDown2] = useState(false);
  const [currentDropDown3, setCurrentDropDown3] = useState(false);
  const [currentDropDown4, setCurrentDropDown4] = useState(false);

  const dropDownText1 = () => {
    dropDownText(1);
    setCurrentDropDown1(!currentDropDown1);
  };

  const dropDownText2 = () => {
    dropDownText(2);
    setCurrentDropDown2(!currentDropDown2);
  };

  const dropDownText3 = () => {
    dropDownText(3);
    setCurrentDropDown3(!currentDropDown3);
  };

  const dropDownText4 = () => {
    dropDownText(4);
    setCurrentDropDown4(!currentDropDown4);
  };

  const dropDownText = (e) => {
    switch (e) {
      case 1:
        setCurrentDropDown2(false);
        setCurrentDropDown3(false);
        setCurrentDropDown4(false);
        break;
      case 2:
        setCurrentDropDown1(false);
        setCurrentDropDown3(false);
        setCurrentDropDown4(false);
        break;
      case 3:
        setCurrentDropDown1(false);
        setCurrentDropDown2(false);
        setCurrentDropDown4(false);
        break;
      case 4:
        setCurrentDropDown1(false);
        setCurrentDropDown2(false);
        setCurrentDropDown3(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full mx-auto py-5 lg:py-0 lg:h-screen max-w-[1200px]">
      <div className="gap-10 justify-center text-start flex flex-col lg:flex-row mt-44 px-6">
        <div className="w-full lg:w-1/2 justify-start">
          <div className="w-full text-start flex ga-8 mb-10">
            <div className="text-3xl text-white font-bold">THE STORY</div>
            <img src="./111_files/title_shapes.svg" alt="" />
          </div>
          <div className="text-white font-bold text-5xl mb-10">About us</div>
          <div className="text-lg text-white mb-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur cites of the word in classical
            literature.
          </div>

          <div className="text-lg text-white">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original a latin professor.
          </div>
        </div>
        <div className="w-full lg:w-1/2 justify-start gap-10 flex flex-col text-start">
          <div className="text-3xl text-white font-bold">FAQ</div>
          <div className="relative w-full mx-auto">
            <div
              onClick={() => dropDownText1()}
              className="cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[32px] py-[24px] font-bold text-[24px] mt-[10px]"
            >
              Wen Drop?
              <div className="text-[24px]">
                {currentDropDown1 ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div
              className={`${
                currentDropDown1 ? "py-[24px]" : ""
              } px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}
            >
              <span
                className={`${currentDropDown1 ? " h-full flex" : "hidden"}`}
              >
                We aim to have our first drop around mid-October or earlier.
              </span>
            </div>
            <div
              onClick={() => dropDownText2()}
              className="cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[32px] py-[24px] font-bold text-[24px] mt-[10px]"
            >
              Who is behind the project?
              <div className="text-[24px]">
                {currentDropDown2 ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div
              className={`${
                currentDropDown2 ? "py-[24px]" : ""
              } px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}
            >
              <span
                className={`${
                  currentDropDown2 ? " h-full flex" : "h-0 hidden"
                }`}
              >
                Please refer to the “team” page of the website.
              </span>
            </div>
            <div
              onClick={() => dropDownText3()}
              className="cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[32px] py-[24px] font-bold text-[24px] mt-[10px]"
            >
              How will the mint work?
              <div className="text-[24px]">
                {currentDropDown3 ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div
              className={`${
                currentDropDown3 ? "py-[24px]" : ""
              } px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}
            >
              <span
                className={`${
                  currentDropDown3 ? " h-full flex" : "h-0 hidden"
                }`}
              >
                We plan to hold a 24-hour open edition mint. Each token will
                cost of 0.05 ETH, and each mint will grant you one piece at
                random. Should you choose to mint several tokens, you will not
                receive a duplicate until you have minted more tokens than there
                are distinct pieces.
              </span>
            </div>
            <div
              onClick={() => dropDownText4()}
              className="cursor-pointer text-white/60 hover:text-white bg-[#ffffff0d] backdrop-filter h-[76px] flex items-center justify-between px-[32px] py-[24px] font-bold text-[24px] mt-[10px]"
            >
              What will happen to secondary royalties ?
              <div className="text-[24px]">
                {currentDropDown4 ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div
              className={`${
                currentDropDown4 ? "py-[24px]" : ""
              } px-[29px] text-start text-white/60 bg-[#ffffff0d] backdrop-filter duration-300`}
            >
              <span
                className={`${
                  currentDropDown4 ? " h-full flex" : "h-0 hidden"
                }`}
              >
                Royalties from secondary sales will be paid back equally among
                the artists who so kindly joined us in our effort.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
