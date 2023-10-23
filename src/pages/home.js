import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import Shape1 from "../assets/img/hov_shape_L_dark.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full mx-auto h-full min-h-screen container">
      <div className="flex flex-col w-full h-full min-h-screen items-center justify-center">
        <div className="relative w-full flex items-center justify-center">
          <div className="w-full flex-col lg:flex-row flex items-center px-[50px] justify-center text-6xl sm:text-8xl font-bold my-4 bg-transparent">
            <span className="text-[#1ca83b] drop-shadow-md shadow-[#1ca83b]">
              Woman
            </span>
            <span className="text-white lg:mx-3 my-5 bg-transparent drop-shadow-lg shadow-black">
              Lif3
            </span>
            <span className="text-[#db0100] drop-shadow-md shadow-[#db0100]">
              Fr33dom
            </span>
          </div>
        </div>

        <p className="text-white text-3xl leading-10 pt-10 px-2">
          A humanitarian effort to celebrate and support Iranian women across
          the globe through art and web3
        </p>
        <div className="flex items-center my-10 gap-4">
          <button
            className="flex min-w-[150px] h-[50px] group buttonfx1 buttonfx2 slideleft1 items-center justify-center"
            onClick={() => navigate("/mint")}
          >
            <span className="w-[15px] h-[15px] absolute left-0 top-0 m-2">
              <img src={Shape1} alt="Shape1" />
            </span>
            <div className="px-5 py-1 flex items-center justify-center gap-3 text-sm font-bold uppercase">
              MINT NOW
            </div>
            <span className="group-hover:right-0 duration-300 -right-10 w-[15px] h-[15px] absolute top-0 m-2 rotate-90">
              <img src={Shape1} alt="Shape1" />
            </span>
          </button>
          <button
            className="flex min-w-[150px] h-[50px] group buttonfx1-1 buttonfx2 slideleft2 items-center justify-center"
            onClick={() => navigate("/gallery")}
          >
            <span className="w-[15px] h-[15px] absolute left-0 top-0 m-2">
              <img src={Shape1} alt="Shape1" />
            </span>
            <div className="px-5 py-1 flex items-center justify-center gap-3 text-sm font-bold uppercase">
              Gallery
            </div>
            <span className="group-hover:right-0 duration-300 -right-10 w-[15px] h-[15px] absolute top-0 m-2 rotate-90">
              <img src={Shape1} alt="Shape1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
