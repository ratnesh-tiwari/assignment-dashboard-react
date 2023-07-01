import { useState } from "react";
import "./Temperature.css";

function Temperature() {
  const [centigrade, setCentigrate] = useState(true);
  const farhenhite = !centigrade;

  return (
    <fieldset className="flex gap-1 text-white font-sans">
      <label className="" htmlFor="centigrate">
        &deg;C
      </label>
      <div className="w-[48px]  h-[26px] relative ">
        <input
          type="checkbox"
          id="centigrate"
          checked={centigrade}
          onChange={() => setCentigrate(prev => !prev)}
          className=" opacity-0 cursor-pointer absolute z-[1] top-0 left-0 h-[26px] aspect-square"
        />
        <input
          type="checkbox"
          id="farhenhite"
          checked={farhenhite}
          onChange={() => setCentigrate(prev => !prev)}
          className=" opacity-0 cursor-pointer absolute z-[1] top-0 right-0 h-[26px] aspect-square"
        />
        <span className="h-4 w-full bg-[#DCDCDC]  absolute left-0 top-[5px] rounded-2xl"></span>
        <span
          id="slide"
          className=" transition-all duration-300 h-[26px] aspect-square bg-white rounded-full absolute left-0 top-0"
        ></span>
      </div>
      <label htmlFor="farhenhite">&deg;F</label>
    </fieldset>
  );
}

export default Temperature;
