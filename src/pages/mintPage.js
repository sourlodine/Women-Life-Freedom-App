import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { MdOutlineAdd } from "react-icons/md";
import abi from "../abi/abi.json";
import { useWallet } from "../contexts/WalletContext";
import { Contract, parseEther } from "ethers";
import LoadingModal from "../components/Loading";
import BgImage from "../assets/bg-woman.png";

import MintBG from "../assets/mint-bg-gif.gif";
import SliderImage1 from "../assets/nfts/nft01.png";
import SliderImage2 from "../assets/nfts/nft02.png";
import SliderImage3 from "../assets/nfts/nft03.png";
import SliderImage4 from "../assets/nfts/nft04.png";
import SliderImage5 from "../assets/nfts/nft05.png";
import SliderImage6 from "../assets/nfts/nft06.png";
import SliderImage7 from "../assets/nfts/nft07.png";
import SliderImage8 from "../assets/nfts/nft08.png";
import SliderImage9 from "../assets/nfts/nft09.png";
import SliderImage10 from "../assets/nfts/nft10.png";
import SliderImage11 from "../assets/nfts/nft11.png";
import SliderImage12 from "../assets/nfts/nft12.png";
import SliderImage13 from "../assets/nfts/nft13.png";
import SliderImage14 from "../assets/nfts/nft14.png";
import SliderImage15 from "../assets/nfts/nft15.png";
import SliderImage16 from "../assets/nfts/nft16.png";
import ImageGIF from "../assets/nfts/7wj17f.gif";

import Shape1 from "../assets/img/hov_shape_L_dark.svg";

const NFTImgs = [
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SliderImage4,
  SliderImage5,
  SliderImage6,
  SliderImage7,
  SliderImage8,
  SliderImage9,
  SliderImage10,
  SliderImage11,
  SliderImage12,
  SliderImage13,
  SliderImage14,
  SliderImage15,
  SliderImage16,
];

const settings = {
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
};

const budget = "0.025";

export default function Mint() {
  const [numberValue, setNumberValue] = useState(1);
  const [mintModal, setMintModal] = useState(false);
  const [walletStyle, setWalletStyle] = useState("ETH");
  const [remaining, setRemaining] = useState(budget);
  const { provider, isActive } = useWallet();
  const [contract, setContract] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [progressMint, setProgressMint] = useState(false);
  const [mintMsg, setMintMsg] = useState("");

  const nftMint = async () => {
    if (contract) {
      try {
        setProgressMint(true);
        await contract.publicSaleMint(numberValue, {
          value: parseEther(budget),
        });
        setMintMsg("It has been successfully minted.");
        setProgressMint(false);
      } catch (e) {
        setMintMsg(" User denied transaction signature.");
        setProgressMint(false);
      }
    }
  };

  useEffect(() => {
    if (provider) {
      const cont = new Contract(
        "0xaD67b7a89e7fDa003557D47EE79345916a5490b3",
        abi,
        provider?.getSigner()
      );
      setContract(cont);
    }
  }, [provider]);

  const menuDropdown = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuDropdown.current &&
        !menuDropdown.current.contains(event.target)
      ) {
        setMintModal(false);
        setNumberValue(1);
        setMintMsg("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuDropdown]);

  const closeMintModal = () => {
    setMintModal(false);
    setRemaining(budget);
    setNumberValue(1);
    setWalletStyle("ETH");
    setMintMsg("");
  };

  const incrementValue = (e) => {
    let newNumber = 0;
    let totalBudget = 0;
    if (e === false) newNumber = numberValue - 1;
    else newNumber = numberValue + 1;

    if (newNumber < 0) newNumber = 0;
    totalBudget = Math.round(newNumber * budget * 100) / 100;
    setNumberValue(newNumber);
    setRemaining(totalBudget.toFixed(2));
  };

  return (
    <>
      <div className="w-full mx-auto h-full min-h-screen pb-8">
        <div className="lg:w-1/2 w-full relative  hidden">
          <div className="w-full z-[1] rounded-md overflow-hidden">
            <img
              src={MintBG}
              alt="MintBG"
              className="w-full sm:w-[500px] mx-auto ImageB1 rounded-lg"
            />
          </div>
        </div>
        <div className="fixed justify-center w-full h-screen items-center flex flex-col">
          <img src={BgImage} alt="BgImage" className="relative w-full max-w-[1120px] mx-auto opacity-20" />
        </div>
        <div className="lg:flex mx-auto max-w-[1200px] items-start justify-center h-full min-h-[calc(100vh-142px)] relative pt-52">
          <div className=" w-full px-4 mx-auto relative justify-center">
            <div className="text-white justify-center text-center top-0 mx-auto relative">
              <h1 className="text-[60px] font-bold pt-28 pb-10">Coming Soon</h1>
              <div className=" mx-auto flex justify-center  items-center flex-col sm:flex-row gap-8 lg:pt-20">
                <div className="items-center justify-center sm:justify-start flex sm:mr-[30px]">
                  <span
                    className="inline-block w-[60px] leading-[60px] text-white bg-[#ffffff0f] text-center font-bold cursor-pointer select-none"
                    onClick={() => incrementValue(false)}
                  >
                    -
                  </span>
                  <input
                    className="px-3 w-20 h-[60px] outline-none text-center bg-transparent border-[#ffffff0f] border-t-2 border-b-2 border-r-0"
                    type="umber"
                    value={numberValue}
                    onChange={(e) => setNumberValue(e.target.value)}
                  />
                  <span
                    className="inline-block w-[60px] leading-[60px] text-white bg-[#ffffff0f] text-center font-bold cursor-pointer select-none"
                    onClick={() => incrementValue(true)}
                  >
                    +
                  </span>
                </div>
                <div className=" items-center font-bold justify-center flex sm:justify-start group overflow-hidden lg:py-5">
                  <button
                    className={`${isActive || progressMint ? "buttonfx2 slideleft1" : ""
                      } flex min-w-[150px] h-[50px]  buttonfx1  text-black items-center justify-center disabled:cursor-not-allowed`}
                    onClick={() => setMintModal(true)}
                    disabled={!isActive || progressMint}
                  >
                    <span className="w-[15px] h-[15px] absolute left-0 top-0 m-2">
                      <img src={Shape1} alt="Shape1" />
                    </span>
                    {progressMint ? (
                      <LoadingModal />
                    ) : (
                      <div className="px-5 py-1 flex items-center justify-center gap-3 text-sm font-bold">
                        MINT ({remaining}ETH)
                      </div>
                    )}
                    {isActive && (
                      <span className="group-hover:right-0 duration-300 -right-10 w-[15px] h-[15px] absolute  top-0 m-2 rotate-90">
                        <img src={Shape1} alt="Shape1" />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden">
          <Slider
            {...settings}
            className="items-center overflow-x-hidden flex justify-center"
          >
            {NFTImgs.map((item, index) => {
              return (
                <div className="pt-2" key={index}>
                  <img
                    className="w-32 rounded-sm mx-auto"
                    src={item}
                    alt="SliderImage1"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {mintModal && (
        <div className="fixed z-50 w-full h-full min-h-screen top-0 bg-black/90 transition-opacity">
          <div className="w-full h-screen bg-cover flex md:px-8 py-20 justify-center items-center">
            <div
              ref={menuDropdown}
              className="bg-[#171C21] w-full max-w-[440px] metaMaskModal overflow-hidden relative mt-[50px] "
            >
              <div className="backdrop-filter-[5px] ">
                <div>
                  <button className="bg-[#ffffff1a] w-20 h-20 absolute -top-10 -right-10 text-white rotate-45">
                    <div
                      className="text-white"
                      onClick={() => closeMintModal()}
                    >
                      <div className="mt-12 ml-9 text-xl">
                        <MdOutlineAdd />
                      </div>
                    </div>
                  </button>
                  <div className="modal_header">
                    <div className="text-white text-[24px] mb-[26px] max-w-[280px] text-center leading-7 uppercase mx-auto font-bold">
                      COLLECT YOUR NFT BEFORE END
                    </div>
                  </div>
                  <div className="modal_body text-center">
                    <div className="text-center">
                      <img
                        src={ImageGIF}
                        alt="SliderImage16"
                        className="max-w-[200px] mx-auto"
                      />
                    </div>

                    <div className="my-[30px] text-center">
                      <div>
                        <div className="flex items-center justify-between h-14 border-b-[1px] border-b-[#ffffff1a]">
                          <div className="text-[16px] text-right text-white leading-5 font-semibold">
                            Remaining
                          </div>
                          <div className="text-[16px] text-right text-white leading-5 font-semibold">
                            2341/9999
                          </div>
                        </div>
                        <div className="flex items-center justify-between h-14 border-b-[1px] border-b-[#ffffff1a]">
                          <div className="text-[16px] text-right text-white leading-5 font-semibold">
                            Price
                          </div>
                          <div className="text-[16px] text-right text-white leading-5 font-semibold">
                            {budget} {walletStyle}
                          </div>
                        </div>
                        <div className="flex items-center justify-between h-14 border-b-[1px] border-b-[#ffffff1a]">
                          <div className="text-[16px] text-right text-white leading-5 font-semibold">
                            Remaining
                          </div>

                          <div className="max-w-[106px] w-full h-full items-center justify-between flex">
                            <div
                              className="bg-transparent select-none cursor-pointer p-0 font-semibold text-base leading-[22px] text-center uppercase text-white"
                              onClick={() => incrementValue(false)}
                            >
                              -
                            </div>
                            <input
                              value={numberValue}
                              onChange={(e) => setNumberValue(e.target.value)}
                              className="max-w-[58px] w-full h-full border-l-[1px] border-l-[#ffffff1a] border-r-[1px] border-r-[#ffffff1a] flex items-center justify-center bg-transparent px-[19px] outline-none text-base leading-[22px] text-center uppercase text-white"
                            />
                            <div
                              className="bg-transparent select-none cursor-pointer p-0 font-semibold text-base leading-[22px] text-center uppercase text-white"
                              onClick={() => incrementValue(true)}
                            >
                              +
                            </div>
                          </div>

                          <div className="text-[16px] text-right text-white leading-5 font-semibold gap-1">
                            {remaining} {walletStyle}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" items-center w-full  font-bold justify-center flex sm:justify-start group overflow-hidden pt-5 sm:pt-0">
                      <button
                        className="flex min-w-[150px] w-full h-[50px] buttonfx1 buttonfx2 slideleft1 text-black items-center justify-center"
                        onClick={() => {
                          nftMint();
                        }}
                      >
                        <span className="w-[15px] h-[15px] absolute left-0 top-0 m-2">
                          <img src={Shape1} alt="Shape1" />
                        </span>
                        {progressMint ? (
                          <LoadingModal />
                        ) : (
                          <div className="px-5 py-1 flex items-center justify-center gap-3 text-sm font-bold">
                            MINT NOW
                          </div>
                        )}
                        <span className="group-hover:right-0 duration-300 -right-10 w-[15px] h-[15px] absolute  top-0 m-2 rotate-90">
                          <img src={Shape1} alt="Shape1" />
                        </span>
                      </button>
                    </div>
                    <p className="text-[#ffffffcc] text-[14px] leading-7 text-center py-2">
                      Presale & Whitelist : Soldout
                    </p>
                  </div>
                  <span className="absolute bottom-3 left-3 -rotate-90">
                    <img src={Shape1} alt="" />
                  </span>
                  <span className="absolute bottom-3 right-3 rotate-180">
                    <img src={Shape1} alt="" />
                  </span>
                </div>
              </div>
              {mintMsg !== "" &&
                mintMsg === "It has been successfully minted." ? (
                <div className="text-lime-600 justify-center">{mintMsg}</div>
              ) : (
                <div className="text-rose-600 justify-center">{mintMsg}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
