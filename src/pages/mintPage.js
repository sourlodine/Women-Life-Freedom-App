import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAdd } from "react-icons/md";
import { Contract, parseEther } from "ethers";

import { useWallet } from "../contexts/WalletContext";
import LoadingModal from "../components/Loading";
import { contractAddress, contractAbi, getRandomArbitrary } from "../utils";

import BgImage from "../assets/bg-woman.png";
import MintBG from "../assets/mint-bg.gif";
import ImageGIF from "../assets/mint.gif";
import Shape1 from "../assets/img/hov_shape_L_dark.svg";

const price = 0.025;
const token = "ETH";

export default function Mint() {
  const { provider, isActive, accounts } = useWallet();
  const menuDropdown = useRef(null);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [mintModal, setMintModal] = useState(false);
  const [contract, setContract] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [progressMint, setProgressMint] = useState(false);
  const [mintMsg, setMintMsg] = useState("");
  const [link, setLink] = useState("");
  const [pause, setPause] = useState(false);

  const nftMint = async () => {
    if (contract) {
      try {
        const tokenIds = [];
        const tokenAmounts = [];
        for (let i = 0; i < quantity; i++) {
          tokenIds.push(getRandomArbitrary(1, 6));
          tokenAmounts.push(1);
        }
        setProgressMint(true);
        const res = await contract.mintBatch(
          accounts[0],
          tokenIds,
          tokenAmounts,
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          {
            value: parseEther(totalPrice.toString()),
          }
        );
        console.log(res);
        setMintMsg("It has been successfully minted");
        setLink("https://goerli.etherscan.io/tx/" + res.hash);
      } catch (e) {
        setMintMsg(e.message);
      } finally {
        setProgressMint(false);
      }
    }
  };

  const getPause = async (contract) => {
    const res = await contract.pause();
    setPause(res);
  };

  useEffect(() => {
    if (provider) {
      const cont = new Contract(
        contractAddress,
        contractAbi,
        provider?.getSigner()
      );
      setContract(cont);
      getPause(cont);
    }
  }, [provider]);

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
        setQuantity(1);
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
    setQuantity(1);
    setMintMsg("");
  };

  const handleChangeQuantity = (action) => {
    let newQuantity = 0;
    if (action === false) newQuantity = quantity - 1;
    else newQuantity = quantity + 1;

    setQuantity(newQuantity);

    setTotalPrice(Math.floor(newQuantity * price * 1000) / 1000);
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
          <img
            src={BgImage}
            alt="BgImage"
            className="relative w-full max-w-[1120px] mx-auto opacity-20"
          />
        </div>
        <div className="lg:flex mx-auto max-w-[1200px] items-start justify-center h-full min-h-[calc(100vh-142px)] relative pt-52">
          <div className=" w-full px-4 mx-auto relative justify-center">
            <div className="text-white justify-center text-center top-0 mx-auto relative">
              <h1 className="text-[60px] font-bold pt-28 pb-10">Coming Soon</h1>
              <div className=" mx-auto flex justify-center  items-center flex-col sm:flex-row gap-8 lg:pt-20">
                <div className="items-center justify-center sm:justify-start flex sm:mr-[30px]">
                  <button
                    className="inline-block w-[60px] leading-[60px] text-white bg-[#ffffff0f] text-center font-bold cursor-pointer select-none"
                    onClick={() => handleChangeQuantity(false)}
                    disabled={quantity < 2 || pause}
                  >
                    -
                  </button>
                  <input
                    className="px-3 w-20 h-[60px] outline-none text-center bg-transparent border-[#ffffff0f] border-t-2 border-b-2 border-r-0"
                    type="umber"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    className="inline-block w-[60px] leading-[60px] text-white bg-[#ffffff0f] text-center font-bold cursor-pointer select-none"
                    onClick={() => handleChangeQuantity(true)}
                    disabled={pause}
                  >
                    +
                  </button>
                </div>
                <div className=" items-center font-bold justify-center flex sm:justify-start group overflow-hidden lg:py-5">
                  <button
                    className={`${
                      isActive || progressMint ? "buttonfx2 slideleft1" : ""
                    } flex min-w-[150px] h-[50px]  buttonfx1  text-black items-center justify-center disabled:cursor-not-allowed`}
                    onClick={() => setMintModal(true)}
                    disabled={!isActive || progressMint || pause}
                  >
                    <span className="w-[15px] h-[15px] absolute left-0 top-0 m-2">
                      <img src={Shape1} alt="Shape1" />
                    </span>
                    {progressMint ? (
                      <LoadingModal />
                    ) : (
                      <div className="px-5 py-1 flex items-center justify-center gap-3 text-sm font-bold">
                        MINT ({price} ETH)
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
      </div>
      {mintModal && (
        <div className="fixed z-50 w-full h-full min-h-screen top-0 bg-black/90 duration-300">
          <div className="w-full h-screen bg-cover flex md:px-8 py-20 justify-center items-center">
            <div
              ref={menuDropdown}
              className="bg-[#171C21] w-full max-w-[440px] metaMaskModal overflow-hidden relative mt-[50px]"
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
                          <div className="text-[16px] text-start text-white leading-5 font-semibold">
                            Remaining
                          </div>
                          <div className="text-[16px] text-start text-white leading-5 font-semibold">
                            2341/9999
                          </div>
                        </div>
                        <div className="flex items-center justify-between h-14 border-b-[1px] border-b-[#ffffff1a]">
                          <div className="text-[16px] text-start text-white leading-5 font-semibold">
                            Price
                          </div>
                          <div className="text-[16px] text-start text-white leading-5 font-semibold">
                            {price} {token}
                          </div>
                        </div>
                        <div className="flex items-center justify-between h-14 border-b-[1px] border-b-[#ffffff1a]">
                          <div className="text-[16px] text-start text-white leading-5 font-semibold w-[30%]">
                            Quantity
                          </div>

                          <div className="max-w-[106px] w-[40%] h-full flex items-center justify-between ">
                            <button
                              className="bg-transparent select-none cursor-pointer p-0 font-semibold text-base leading-[22px] text-center uppercase text-white disabled:cursor-not-allowed"
                              onClick={() => handleChangeQuantity(false)}
                              disabled={quantity < 2 || pause}
                            >
                              -
                            </button>
                            <input
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              className="max-w-[58px] w-full h-full border-l-[1px] border-l-[#ffffff1a] border-r-[1px] border-r-[#ffffff1a] flex items-center justify-center bg-transparent px-[19px] outline-none text-base leading-[22px] text-center uppercase text-white"
                            />
                            <button
                              className="bg-transparent select-none cursor-pointer p-0 font-semibold text-base leading-[22px] text-center uppercase text-white"
                              onClick={() => handleChangeQuantity(true)}
                              disabled={pause}
                            >
                              +
                            </button>
                          </div>

                          <div className="text-[16px] text-end text-white leading-5 font-semibold gap-1 w-[30%] flex">
                            <span className="w-[70%] overflow-hidden">
                              {totalPrice}
                            </span>
                            <span className="w-[30%]">{token}</span>
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
              mintMsg.includes("It has been successfully minted") ? (
                <div className="text-lime-600 justify-center">{mintMsg}</div>
              ) : (
                <div className="text-rose-600 justify-center">{mintMsg}</div>
              )}
              {link !== "" && (
                <Link to={link} className="text-gray-500 justify-center">
                  view on etherscan
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
