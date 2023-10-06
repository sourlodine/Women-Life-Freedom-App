import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Shape2 from "../assets/img/title_shapes2.svg";

import Team1 from "../assets/teams/team1.png";
import Team2 from "../assets/teams/team2.png";

export default function Team() {
  const teamData = [
    {
      name: "Teymour Davoudi",
      avatar: Team1,
      title: "Creator",
      description:
        "American-Iranian university student with a passion for web3 and blockchain technology",
      twitter: "https://x.com/txymour?s=21",
      instagram: "https://instagram.com/teyymour?igshid=MjEwN2IyYWYwYw==",
      linkedIn: "https://www.linkedin.com/in/teymour-davoudi-6332b7251",
    },
    {
      name: "Harry Anderson",
      avatar: Team2,
      title: "Developer",
      description: "",
      twitter: "https://x.com/evilgon0214",
      instagram: "",
      linkedIn: "https://www.linkedin.com/in/evilgon/",
    },

    // { name: "Team3", avatar: SliderImage3, title: "Marketing Manager", description: "A marketing manager who has spent more than 3 years developing the NFT essential technology and market", twitter: "https://x.com/", instagram: "https://instagram.com/", linkedIn: "https://www.linkedin.com/" },
    // { name: "Team4", avatar: SliderImage8, title: "Designer", description: "Innovative professional passionate about designing digital products with cutting-edge design", twitter: "https://x.com/", instagram: "https://instagram.com/", linkedIn: "https://www.linkedin.com/" },
  ];
  return (
    <div className="w-full mx-auto h-full min-h-screen ">
      <div className="flex-col mx-auto container justify-center h-full min-h-screen relative pt-28 pb-5">
        <div className="py-16">
          <div className="justify-center items-center flex">
            <img src={Shape2} alt="Shape2" className="" />
            <div className="text-white/80 text-[24px] font-bold px-5">
              TEAM MEMBERS
            </div>
            <img src={Shape2} alt="Shape2" className="rotate-180" />
          </div>
        </div>
        <div className="mt-6 ">
          <div className="px-2 flex flex-wrap justify-center items-center">
            {teamData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
                >
                  <div className="bg-[#ffffff0d] backdrop-blur w-[270px] py-8 mx-auto relative flex items-center justify-center flex-col group rounded-lg">
                    <img
                      src={item.avatar}
                      alt="avartar"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="text-[24px] leading-8 text-white mt-4 font-bold flex">
                      {item.name}
                    </div>
                    <div className="text-[18px] text-white py-2 font-bold gap-2 flex items-center">
                      {item.title}
                    </div>
                    <div className="font-semibold text-white text-sm px-3 flex mt-[10px] h-20 overflow-hidden">
                      {item.description}
                    </div>
                    <div className="justify-center items-center absolute -bottom-2 gap-5 text-white text-xl flex ">
                      {item.twitter !== "" && (
                        <Link
                          to={item.twitter}
                          className="bg-[#040C12] rounded-lg p-2"
                        >
                          <AiOutlineTwitter />
                        </Link>
                      )}
                      {item.instagram !== "" && (
                        <Link
                          to={item.instagram}
                          className="bg-[#040C12] rounded-lg p-2"
                        >
                          <AiOutlineInstagram />
                        </Link>
                      )}
                      {item.linkedIn !== "" && (
                        <Link
                          to={item.linkedIn}
                          className="bg-[#040C12] rounded-lg p-2"
                        >
                          <FaLinkedinIn />
                        </Link>
                      )}
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
