function ProgressBar({ value, size = "0%", fullSize = false }) {
  const multiValue = typeof value !== "string";
  if (multiValue) value = value.map(el => <span>{el}</span>);
  if (fullSize) size = "100%";

  return (
    <div className=" flex-1">
      {multiValue ? (
        <div className="text-[#DCDCDC] text-sm flex justify-between">
          {...value}
        </div>
      ) : (
        <span className="text-[#DCDCDC] text-sm ">{value}</span>
      )}
      <div className="h-3 w-full bg-[#DCDCDC] rounded-3xl">
        <div
          className="h-full bg-dark-blue-bg rounded-3xl"
          style={{ width: `${size}` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
