import { LuDroplets } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { FiCloudRain } from "react-icons/fi";
import { BiSun } from "react-icons/bi";
import { CiTempHigh } from "react-icons/ci";
import { FiUmbrella } from "react-icons/fi";
import Icon from "../ui/Icon";
import ProgressBar from "../ui/ProgressBar";
import CircularProgessBar from "../ui/CircularProgessBar";

function Features() {
  return (
    <div className="leading-none mt-8">
      <h3 className="text-lg font-bold mb-7 leading-none">
        More details of today's weather
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
        <div className="bg-white rounded-[3.5rem] p-6">
          <div className="flex items-center justify-between">
            <h3>Humidity</h3>
            <Icon iconEl={<LuDroplets />} />
          </div>
          <p className="text-center mb-2 ">
            <strong className="text-2xl">82%</strong> bad
          </p>
          <div className="flex gap-1">
            <ProgressBar value="good" fullSize={true} />
            <ProgressBar value="normal" fullSize={true} />
            <ProgressBar value="bad" size="24%" />
          </div>
        </div>
        <div className="bg-white rounded-[3.5rem] p-6 flex flex-col justify-between relative">
          <div className="flex items-center justify-between">
            <h3>Wind</h3>
            <Icon iconEl={<FaWind />} />
          </div>
          <div className="flex gap-1 justify-center">
            <CircularProgessBar />
          </div>
          <p className="font-bold text-center text-2xl absolute bottom-5 left-2/4 -translate-x-2/4">
            8 km/h
          </p>
        </div>
        <div className="bg-white rounded-[3.5rem] p-6">
          <div className="flex items-center justify-between">
            <h3>Precipitatio</h3>
            <Icon iconEl={<FiCloudRain />} />
          </div>
          <p className="font-bold text-center text-2xl mb-2">1.4 cm</p>
          <div className="flex gap-1">
            <ProgressBar value="0" fullSize={true} />
            <ProgressBar value="10" size="84%" />
            <ProgressBar value="20" />
            <ProgressBar value="30" />
            <ProgressBar value="40" />
            <ProgressBar value="50" />
            <ProgressBar value="60" />
            <ProgressBar value="70" />
            <ProgressBar value="80" />
            <ProgressBar value="90" />
          </div>
        </div>
        <div className="bg-white rounded-[3.5rem] p-6">
          <div className="flex items-center justify-between">
            <h3>UV index</h3>
            <Icon iconEl={<BiSun />} />
          </div>
          <p className="text-center mb-2">
            <strong className="text-2xl">4</strong> medium
          </p>
          <div className="flex  gap-1">
            <ProgressBar value="0-2" fullSize={true} />
            <ProgressBar value="3-5" size="44%" />
            <ProgressBar value="6-7" />
            <ProgressBar value="8-10" />
            <ProgressBar value="11+" />
          </div>
        </div>
        <div className="bg-white rounded-[3.5rem] p-6">
          <div className="flex items-center justify-between">
            <h3>Feel Like</h3>
            <Icon iconEl={<CiTempHigh />} />
          </div>
          <p className="font-bold text-center text-2xl mb-2">30&deg;</p>
          <div className="flex gap-1">
            <ProgressBar value={["0°", "25°", "50°"]} size="66%" />
          </div>
        </div>
        <div className="bg-white rounded-[3.5rem] p-6">
          <div className="flex items-center justify-between">
            <h3>Chance of rain</h3>
            <Icon iconEl={<FiUmbrella />} />
          </div>
          <p className="font-bold text-center text-2xl mb-2">42%</p>
          <div className="flex gap-1">
            <ProgressBar
              value={["0%", "25%", "50%", "75%", "100%"]}
              size="48%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
