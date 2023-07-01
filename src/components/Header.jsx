import Dots from "../ui/Dots";

function Header() {
  return (
    <header className=" sm:flex  sm:justify-between sm:items-center mb-12">
      <div className="mb-6 sm:mb-0">
        <h1 className="font-bold text-2xl">Welcome back Isabella!</h1>
        <span className=" text-xl ">Check out today's weather information</span>
      </div>
      <div className="flex items-center gap-6 justify-between sm:justify-end ">
        <div className="flex items-center gap-[2px]">
          <Dots small={true} />
          <Dots small={true} />
          <Dots small={true} />
        </div>
        <img
          src="./user.jpg"
          alt="Profile image"
          className="h-16 aspect-square rounded-2xl"
        />
      </div>
    </header>
  );
}

export default Header;
