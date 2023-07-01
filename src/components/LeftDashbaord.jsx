import ContainerSideNav from "../ui/ContainerSideNav";
import Icon from "../ui/Icon";
import { RiAddLine } from "react-icons/ri";
import Temperature from "../ui/Temperature";
import Dots from "../ui/Dots";
import { BiNavigation } from "react-icons/bi";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { WiDaySunny } from "react-icons/wi";

function LeftDashbaord() {
  return (
    <ContainerSideNav>
      <div className="flex justify-between items-center">
        <Icon iconEl={<RiAddLine />} bg="#fff" iconColor="#5C9CE5" />
        <div className="flex items-center gap-1">
          <Dots active={true} />
          <Dots />
          <Dots />
        </div>
        <Temperature />
      </div>

      <div className="text-light-blue-bg text-md sm:text-lg lg:text-base grid grid-cols-[1fr_auto] gap-2 mt-20">
        <div className="flex items-center gap-[2px] text-lg sm:text-xl lg:text-lg ">
          <BiNavigation />
          <h2>New Your, USA</h2>
        </div>
        <div className="flex items-center gap-2">
          <BsSunrise />
          <p>07:19</p>
        </div>
        <span className="text-[10px] sm:text-sm ">Today 28 Sept</span>
        <div className="flex items-center gap-2">
          <BsSunset />
          <p>19:32</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <AiOutlineLeft color="#9DC3EF" fontSize="32px" />
        <span className="text-white text-8xl">27&deg;</span>
        <AiOutlineRight color="#9DC3EF" fontSize="32px" />
      </div>

      <div className="text-light-blue-bg flex items-center justify-center gap-1 text-2xl mt-6  -translate-x-5 mb-12 sm:mb-16">
        <WiDaySunny fontSize="2rem" />
        <span>Sunny</span>
      </div>
    </ContainerSideNav>
  );
}

export default LeftDashbaord;
