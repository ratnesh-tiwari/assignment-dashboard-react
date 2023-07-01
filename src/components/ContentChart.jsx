import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import ChartHeader from "../ui/ChartHeader";
import { WiDaySunny } from "react-icons/wi";
import { AiOutlineCloud } from "react-icons/ai";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0
    }
  },
  plugins: {
    legend: {
      position: "top"
    },
    legend: {
      display: false //This will do the task
    }
  },
  tooltip: {
    display: false
  },
  scales: {
    y: {
      grid: {
        display: false,
        ticks: {
          display: false
        }
      },
      ticks: {
        display: false
      }
    }
  }
};

const labels = ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "  Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 10, max: 50 })),
      borderColor: "#5C9CE5",
      backgroundColor: "#5C9CE5"
    }
  ]
};

function ContentChart() {
  return (
    <div className=" bg-white rounded-[3.5rem] p-6">
      <div className="flex md:items-center justify-between flex-col md:flex-row">
        <h2 className="text-xl mb-4 md:mb-0">Upcoming hours</h2>
        <div className="flex gap-8 md:items-center flex-col md:flex-row">
          <div className="flex items-center gap-1 bg-[#f1f1f1] rounded-xl px-2 py-1 text-[#929292]">
            <span>Rain precipitation</span>
            <AiOutlineDown />
          </div>
          <div className="flex items-center gap-1 bg-[#f1f1f1] rounded-xl px-2 py-1 text-[#1a1a1a]">
            <span>Next days</span>
            <AiOutlineRight />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <ChartHeader temp="27" time="Now" icon={<WiDaySunny fontSize={24} />} />
        <ChartHeader
          temp="28"
          time="11:00"
          icon={<WiDaySunny fontSize={24} />}
        />
        <ChartHeader
          temp="28"
          time="12:00"
          icon={<AiOutlineCloud fontSize={24} />}
        />
        <ChartHeader
          temp="29"
          time="13:00"
          icon={<AiOutlineCloud fontSize={24} />}
        />
        <ChartHeader
          temp="30"
          time="14:00"
          icon={<WiDaySunny fontSize={24} />}
        />
        <ChartHeader
          temp="29"
          time="15:00"
          icon={<AiOutlineCloud fontSize={24} />}
        />
        <ChartHeader
          temp="29"
          time="16:00"
          icon={<AiOutlineCloud fontSize={24} />}
        />
        <ChartHeader
          temp="28"
          time="17:00"
          icon={<WiDaySunny fontSize={24} />}
        />
      </div>

      <div className=" max-h-40">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default ContentChart;
