import React, { useEffect, useState, useRef } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { FaWallet, FaTwitter, FaDiscord } from "react-icons/fa";
import { MdClose, MdOutlineAdd } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai"
import { BiChevronRight } from "react-icons/bi"
import { ConnectButton } from '@rainbow-me/rainbowkit';


import Logo from "../../assets/logo.png";
import OpenSea from "../../pages/111_files/opensea.svg"
import conentIamge from "../../pages/111_files/hov_shape_L_dark.svg"
import MetaMask from "../../pages/111_files/MetaMask.svg"
import Coinbase from "../../pages/111_files/Formatic.svg"
import Trust from "../../pages/111_files/Trust_Wallet.svg"
import WalletConnect from "../../pages/111_files/WalletConnect.svg"



export default function Header() {
  const navigator = useNavigate();
  const [closeModal, setCloseModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);

  const menuDropdown = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuDropdown.current && !menuDropdown.current.contains(event.target)) {
        setCloseModal(false);
        setWalletModal(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuDropdown]);


  return (
    <div className="w-full z-[5] h-[90px] absolute">
      <div className="container">
        <div className="flex w-full mx-auto max-w-[1200px] px-10 lg:px-5 justify-between items-center">
          <Link to="/"><img src={Logo} alt="logo" className="py-2 w-32 h-24" /></Link>
          <div className="w-full mx-auto items-center flex pl-20">
            <div className="items-center w-full text-white hidden lg:flex font-semibold gap-32 justify-between">
              <div className="flex gap-7 justify-start">
                <Link to="/" className="cursor-pointer">HOME</Link>
                <Link to="/mint" className="cursor-pointer">MINT</Link>
                <Link to="/" className="cursor-pointer">TEAM</Link>
                <Link to="/about" className="cursor-pointer">ABOUT</Link>
              </div>
              <div className="flex items-center gap-5 justify-end ">
                <div><Link className="text-2xl" to="/" target="_blank"><img src={OpenSea} alt="opensea" /></Link></div>
                <div><Link className="text-2xl" to="/" target="_blank"><FaTwitter /></Link></div>
                <div><Link className="text-2xl" to="/" target="_blank"><FaDiscord /></Link></div>
                <button className="menu_bar"><i className="fa-solid fa-bars"></i></button>
              </div>
            </div>
          </div>
          <div className="text-white lg:hidden text-3xl mr-5" onClick={() => setCloseModal(true)}>
            <AiOutlineMenu />
          </div>
          <div className="p-2 justify-center text-white flex group" onClick={() => (setWalletModal(true), setCloseModal(false))}>
            <WalletButton />
          </div>

          {closeModal &&
            <div className="fixed z-50 w-full h-full min-h-screen top-0 bg-black/70 left-0">
              <div className="bg-black min-h-screen absolute top-0 right-0 lg:hidden py-8 px-5 w-72">
                <div className=" w-full flex justify-between items-center mb-10">
                  <div ><img src={Logo} alt="logo" /></div>
                  <div className="text-white float-right text-2xl" onClick={() => setCloseModal(false)}>
                    <MdClose />
                  </div>
                </div>
                <div className="text-white font-bold text-start text-lg px-5 mb-5">
                  <Link to="/" className="cursor-pointer">HOME</Link>
                  <Link to="/about" className="cursor-pointer">ABOUT</Link>
                  <Link to="/" className="cursor-pointer">ROADMAP</Link>
                  <Link to="/" className="cursor-pointer">TEAM</Link>
                </div>
                <div className="w-full">
                  <div className="flex mx-auto my-8 text-white gap-5 justify-center">
                    <div><Link className="text-2xl" to="/" target="_blank"><img src={OpenSea} alt="opensea" /></Link></div>
                    <div><Link className="text-2xl" to="/" target="_blank"><FaTwitter /></Link></div>
                    <div><Link className="text-2xl" to="/" target="_blank"><FaDiscord /></Link></div>
                  </div>
                  <div className="p-2 mt-6 justify-center w-full text-white flex" onClick={() => (setWalletModal(true), setCloseModal(false))}>
                    <WalletButton />
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      {
        walletModal &&
        <div className="fixed z-50 w-full h-full min-h-screen top-0 bg-black/90 transition-opacity">
          <div className="w-full h-screen bg-cover flex md:px-8 py-20 justify-center items-center" >
            <div className="bg-[#171C21] w-full max-w-[440px] metaMaskModal overflow-hidden relative mt-[50px] ">
              <div className="backdrop-filter-[5px] ">
                <div className="" >
                  <button className="bg-[#ffffff1a] w-20 h-20 absolute -top-10 -right-10 text-white rotate-45">
                    <div className="text-white" onClick={() => setWalletModal(false)}>
                      <div className="mt-12 ml-9 text-xl">
                        <MdOutlineAdd />
                      </div>
                    </div>
                  </button>
                  <div className="modal_header">
                    <div className="text-white text-[24px] mb-[26px] max-w-[280px] text-center leading-7 uppercase mx-auto font-bold">CONNECT WALLET</div>
                  </div>
                  <div className="modal_body text-center">
                    <p className="text-[#ffffffcc] text-[16px] leading-7 pb-6">Please select a wallet to connect for start Minting your NFTs</p>
                    <div className="connect-section">
                      <div className="bg-[#ffffff0d] px-[30px] py-[15px] backdrop-filter-[10px] text-left flex text-white/90 items-center mb-[20px] justify-between" onClick={() => connectToMetamask()}>
                        <img src={MetaMask} alt="MetaMask" className="" />
                        <div className="text-start w-[180px]">MetaMask</div>
                        <div className="text-xl">
                          <BiChevronRight />
                        </div>
                      </div>
                      <div className="bg-[#ffffff0d] px-[30px] py-[15px] backdrop-filter-[10px] text-left flex text-white/90 items-center mb-[20px] justify-between">
                        <img src={Coinbase} alt="" />
                        <div className="text-start w-[180px]">Coinbase</div>
                        <div className="text-xl">
                          <BiChevronRight />
                        </div>
                      </div>
                      <div className="bg-[#ffffff0d] px-[30px] py-[15px] backdrop-filter-[10px] text-left flex text-white/90 items-center mb-[20px] justify-between">
                        <img src={Trust} alt="" />
                        <div className="text-start w-[180px]">Trust Wallet</div>
                        <div className="text-xl">
                          <BiChevronRight />
                        </div>
                      </div>
                      <div className="bg-[#ffffff0d] px-[30px] py-[15px] backdrop-filter-[10px] text-left flex text-white/90 items-center mb-[20px] justify-between">
                        <img src={WalletConnect} alt="" />
                        <div className="text-start w-[180px]">WalletConnect</div>
                        <div className="text-xl">
                          <BiChevronRight />
                        </div>
                      </div>
                      <p className="text-[#ffffffcc] text-[16px] leading-7 text-center">
                        By connecting your wallet, you agree to our
                        <a href="https://uigaint.com/demo/html/bithu/index5.html#">
                          Terms of Service</a>
                        and our
                        <a href="https://uigaint.com/demo/html/bithu/index5.html#">Privacy Policy</a>.
                      </p>
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 -rotate-90"><img src={conentIamge} alt="" /></span>
                  <span className="absolute bottom-3 right-3 rotate-180"><img src={conentIamge} alt="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </div >
  )
}

const WalletButton = () => {
  return (
    <button className="flex min-w-[150px] h-[50px] bg-[#ffffff33] buttonfx slideleft items-center justify-center">
      <span className="w-[15px] h-[15px] absolute left-0 top-0 m-2"><img src={conentIamge} alt="" /></span>
      <div className="px-5 py-1 flex items-center justify-center  gap-3 text-sm font-bold">
        <FaWallet /> CONNECT
      </div>
      <span className="group-hover:right-0 duration-300 -right-10 w-[15px] h-[15px] absolute  top-0 m-2 rotate-90"><img src={conentIamge} alt="" /></span>
    </button>
  )
}