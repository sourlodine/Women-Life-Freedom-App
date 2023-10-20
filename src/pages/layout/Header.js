import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaWallet, FaTwitter, FaDiscord } from "react-icons/fa";
import { MdClose, MdOutlineAdd } from "react-icons/md";
import { AiOutlineMenu, AiFillInstagram } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import { useWallet } from "../../contexts/WalletContext";
import { getName, shortenAddress } from "../../utils";
import { ConnectButton } from "../../components/Buttons";

import Logo from "../../assets/logo.png";
import OpenSea from "../../assets/img/opensea.svg";
import conentIamge from "../../assets/img/hov_shape_L_dark.svg";
import MetamaskImg from "../../assets/img/MetaMask.svg";
import CoinbaseImg from "../../assets/img/Formatic.svg";
import TrustwalletImg from "../../assets/img/Trust_Wallet.svg";
import WalletConnectImg from "../../assets/img/WalletConnect.svg";

export default function Header() {
  const {
    isActivating,
    handleConnect,
    handleDisconnect,
    accounts,
    isActive,
    ENSNames,
    metaMaskConnector,
    coinbaseConnector,
    trustwalletConnector,
    walletconnectConnector,
  } = useWallet();
  // const name = getName(connector);
  const [menuModal, setMenuModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
        setMenuModal(false);
        setWalletModal(false);
        setLogoutModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuDropdown]);

  const handleWalletConnect = () => {
    setWalletModal(true);
    setMenuModal(false);
  };

  const logoutWallet = () => {
    handleDisconnect();
    setLogoutModal(!logoutModal);
    setMenuModal(false);
  };

  const WalletButton = useCallback(() => {
    if (isActive)
      return (
        <div
          className="p-2 justify-center text-white flex flex-col relative group "
          onClick={() => setLogoutModal(true)}
        >
          <button className="flex min-w-[150px] h-[50px] buttonfx slideleft items-center justify-center">
            <span className="w-[15px] h-[15px] absolute left-0 top-0 m-2">
              <img src={conentIamge} alt="conentIamge" />
            </span>
            <div className="px-5 py-1 flex items-center justify-center  gap-3 text-sm font-bold">
              <FaWallet />{" "}
              {accounts?.length === 0
                ? "None"
                : shortenAddress(ENSNames?.[0] ?? accounts?.[0])}
            </div>
            <span className="group-hover:right-0 duration-300 -right-10 w-[15px] h-[15px] absolute  top-0 m-2 rotate-90">
              <img src={conentIamge} alt="conentIamge" />
            </span>
          </button>
        </div>
      );
    else
      return (
        <div
          className="p-2 justify-center text-white flex group "
          onClick={() => handleWalletConnect()}
        >
          <button className="flex min-w-[150px] h-[50px] buttonfx slideleft items-center justify-center">
            <span className="w-[15px] h-[15px] absolute left-0 top-0 m-2">
              <img src={conentIamge} alt="conentIamge" />
            </span>
            <div className="px-5 py-1 flex items-center justify-center  gap-3 text-sm font-bold">
              <FaWallet /> CONNECT
            </div>
            <span className="group-hover:right-0 duration-300 -right-10 w-[15px] h-[15px] absolute  top-0 m-2 rotate-90">
              <img src={conentIamge} alt="conentIamge" />
            </span>
          </button>
        </div>
      );
  }, [accounts, isActive, ENSNames]);

  const LogoutButton = () => {
    return (
      <div
        ref={menuDropdown}
        className="bg-[#171C21] w-full max-w-[250px] z-[10] logoutModal absolute left-0 top-16 rounded-lg"
      >
        <div className="">
          <div className="pt-3">
            <div
              className="bg-[#ffffff0d] p-[15px] rounded-lg backdrop-filter-[10px] text-left flex text-white/90 items-center  justify-between hover:bg-[#ffffff5b] cursor-pointer"
              onClick={() => logoutWallet()}
            >
              <div className="text-start w-[180px]">Logout</div>
              <div className="text-xl">
                <FiLogOut />
              </div>
            </div>
          </div>
          <span className="absolute bottom-3 left-3 -rotate-90">
            <img src={conentIamge} alt="conentIamge" className="w-4" />
          </span>
          <span className="absolute bottom-3 right-3 rotate-180">
            <img src={conentIamge} alt="conentIamge" className="w-4" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full z-[5] h-[90px] absolute">
      <div className="container">
        <div className="flex w-full mx-auto max-w-[1200px] py-2 px-10 lg:px-5 justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-48" />
          </Link>
          <div className="w-full mx-auto items-center flex pl-20">
            <div className="items-center w-full text-white hidden lg:flex font-semibold gap-32 justify-between">
              <div className="flex gap-7 justify-start">
                <Link to="/" className="cursor-pointer">
                  HOME
                </Link>
                <Link to="/mint" className="cursor-pointer">
                  MINT
                </Link>
                <Link to="/team" className="cursor-pointer">
                  TEAM
                </Link>
                <Link to="/about" className="cursor-pointer">
                  ABOUT
                </Link>
              </div>
              <div className="flex items-center gap-5 justify-end ">
                <div>
                  <Link
                    className="text-2xl"
                    to="https://opensea.io/collection/project0xwlf"
                    target="_blank"
                  >
                    <img src={OpenSea} alt="opensea" />
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-2xl"
                    to="https://twitter.com/0x_WLF"
                    target="_blank"
                  >
                    <FaTwitter />
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-2xl"
                    to="https://instagram.com/0x_wlf?igshid=NTc4MTIwNjQ2YQ=="
                    target="_blank"
                  >
                    <AiFillInstagram />
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-2xl"
                    to="https://discord.com/"
                    target="_blank"
                  >
                    <FaDiscord />
                  </Link>
                </div>
                <button className="menu_bar">
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="text-white lg:hidden text-3xl mr-5 cursor-pointer"
            onClick={() => setMenuModal(true)}
          >
            <AiOutlineMenu />
          </div>
          <div className="relative">
            <div className="hidden md:flex flex-col">
              <WalletButton />
              {logoutModal && <LogoutButton />}
            </div>
          </div>

          {menuModal && (
            <div className="fixed z-[8] w-full h-full min-h-screen top-0 bg-black/70 left-0">
              <div
                ref={menuDropdown}
                className="bg-black min-h-screen absolute top-0 right-0 lg:hidden py-8 px-5 w-72"
              >
                <div className=" w-full flex justify-between items-center mb-10">
                  <div>
                    <img src={Logo} alt="logo" className="w-20" />
                  </div>
                  <div
                    className="text-white float-right text-2xl cursor-pointer"
                    onClick={() => setMenuModal(false)}
                  >
                    <MdClose />
                  </div>
                </div>
                <div className="text-white font-bold text-start text-lg px-5 mb-5 flex flex-col">
                  <Link
                    to="/"
                    className="cursor-pointer"
                    onClick={() => setMenuModal(false)}
                  >
                    HOME
                  </Link>
                  <Link
                    to="/mint"
                    className="cursor-pointer"
                    onClick={() => setMenuModal(false)}
                  >
                    MINT
                  </Link>
                  <Link
                    to="/team"
                    className="cursor-pointer"
                    onClick={() => setMenuModal(false)}
                  >
                    TEAM
                  </Link>
                  <Link
                    to="/about"
                    className="cursor-pointer"
                    onClick={() => setMenuModal(false)}
                  >
                    ABOUT
                  </Link>
                </div>
                <div className="w-full">
                  <div className="flex mx-auto my-8 text-white gap-5 justify-center">
                    <div>
                      <Link
                        className="text-2xl"
                        to="https://opensea.io/"
                        target="_blank"
                        onClick={() => setMenuModal(false)}
                      >
                        <img src={OpenSea} alt="opensea" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="text-2xl"
                        to="https://twitter.com/0x_WLF"
                        target="_blank"
                        onClick={() => setMenuModal(false)}
                      >
                        <FaTwitter />
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="text-2xl"
                        to="https://instagram.com/0x_wlf?igshid=NTc4MTIwNjQ2YQ=="
                        target="_blank"
                        onClick={() => setMenuModal(false)}
                      >
                        <AiFillInstagram />
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="text-2xl"
                        to="https://discord.com/"
                        target="_blank"
                        onClick={() => setMenuModal(false)}
                      >
                        <FaDiscord />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:hidden relative justify-center">
                  <WalletButton />
                  {logoutModal && <LogoutButton />}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {walletModal && (
        <div className="fixed z-50 w-full h-full min-h-screen top-0 bg-black/90 transition-opacity">
          <div className="w-full h-screen bg-cover flex md:px-8 py-20 justify-center items-center">
            <div
              ref={menuDropdown}
              className="bg-[#171C21] w-full max-w-[440px] metaMaskModal overflow-hidden relative mt-[50px] "
            >
              <div className="backdrop-filter-[5px] ">
                <div className="">
                  <button className="bg-[#ffffff1a] w-20 h-20 absolute -top-10 -right-10 text-white rotate-45">
                    <div
                      className="text-white"
                      onClick={() => setWalletModal(false)}
                    >
                      <div className="mt-12 ml-9 text-xl">
                        <MdOutlineAdd />
                      </div>
                    </div>
                  </button>
                  <div className="modal_header">
                    <div className="text-white text-[24px] mb-[26px] max-w-[280px] text-center leading-7 uppercase mx-auto font-bold">
                      CONNECT WALLET
                    </div>
                  </div>
                  <div className="modal_body text-center">
                    <p className="text-[#ffffffcc] text-[16px] leading-7 pb-6">
                      Please connect your wallet with one of the options below
                      to mint your NFTs.
                    </p>
                    <div className="connect-section">
                      <ConnectButton
                        name={getName(metaMaskConnector)}
                        connector={metaMaskConnector}
                        isActivating={isActivating}
                        modalFunc={setWalletModal}
                        connectFunc={handleConnect}
                        logo={MetamaskImg}
                      />
                      <ConnectButton
                        name={getName(coinbaseConnector)}
                        connector={coinbaseConnector}
                        isActivating={isActivating}
                        modalFunc={setWalletModal}
                        connectFunc={handleConnect}
                        logo={CoinbaseImg}
                      />
                      <ConnectButton
                        name={getName(trustwalletConnector)}
                        connector={trustwalletConnector}
                        isActivating={isActivating}
                        modalFunc={setWalletModal}
                        connectFunc={handleConnect}
                        logo={TrustwalletImg}
                      />
                      <ConnectButton
                        name={getName(walletconnectConnector)}
                        connector={walletconnectConnector}
                        isActivating={isActivating}
                        modalFunc={setWalletModal}
                        connectFunc={handleConnect}
                        logo={WalletConnectImg}
                      />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 -rotate-90">
                    <img src={conentIamge} alt="conentIamge" />
                  </span>
                  <span className="absolute bottom-3 right-3 rotate-180">
                    <img src={conentIamge} alt="conentIamge" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
