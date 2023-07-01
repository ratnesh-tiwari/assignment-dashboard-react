function Icon({ iconEl, bg = "#5C9CE5", iconColor = "#D9EAFD" }) {
  return (
    <div
      style={{ background: `${bg}`, color: `${iconColor}` }}
      className="w-10 text-2xl aspect-square grid place-content-center rounded-xl"
    >
      {iconEl}
    </div>
  );
}

export default Icon;
