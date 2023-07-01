import "./CiruclarProgress.css";

function CircularProgessBar({ fill = 0 }) {
  if (fill) fill = fill * 2.5;
  return (
    <div className="relative text-[#DCDCDC]">
      <span className="absolute bottom-0 -left-4">0</span>
      <span className="absolute bottom-[50px] -left-1">10</span>
      <span className="absolute bottom-[92px] left-[80px]">20</span>
      <span className="absolute bottom-[50px] -right-1">30</span>
      <span className="absolute bottom-0 -right-6">40</span>
      <div className="semi" style={{ color: "#5C9CE5 " }}>
        <div
          style={{
            transform: `rotate(calc(1deg * (-45 + var(${fill}) * 1.8)))`
          }}
          className="inner"
        ></div>
      </div>
    </div>
  );
}

export default CircularProgessBar;
