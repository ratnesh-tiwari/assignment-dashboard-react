function ChartHeader({ icon, temp, time }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[2px] ">
      <span className="text-xs">{time}</span>
      {icon}
      <span className=" font-semibold text-base">{temp}&deg;</span>
    </div>
  );
}

export default ChartHeader;
