import { BiChevronRight } from "react-icons/bi";
export const ConnectButton = ({
  name,
  connector,
  isActivating,
  modalFunc,
  connectFunc,
  logo,
}) => {
  const handleWalletConnect = () => {
    connectFunc(connector);
    modalFunc(false);
  };

  return (
    <div
      className="bg-[#ffffff0d] px-[30px] py-[15px] backdrop-filter-[10px] text-left flex text-white/90 items-center mb-[20px] justify-between hover:bg-[#ffffff5b] cursor-pointer"
      onClick={handleWalletConnect}
    >
      {logo && <img src={logo} alt={name} />}
      <div className="text-start w-[180px]">{name}</div>
      <div className="text-xl">
        <BiChevronRight />
      </div>
    </div>
  );
};
