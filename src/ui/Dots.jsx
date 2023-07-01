function Dots({ active = false, small = false }) {
  if (small)
    return (
      <div className="bg-[#010101] h-[6px] aspect-square rounded-3xl"></div>
    );
  return (
    <div
      className={`${
        active ? "bg-white h-[10px] w-8" : `bg-[#9DC3EF] h-2  aspect-square`
      } rounded-3xl`}
    ></div>
  );
}

export default Dots;
