const Header = () => {
  return (
    <div className="flex justify-between px-4 md:mx-auto md:w-2/3 py-4 font-mono">
      <div className="text-3xl font-semibold  ">PRASAD/</div>
      <div className="flex gap-2">
        <div className=" text-xl py-1 px-3 bg-black hover:text-black hover:bg-white hover:border-2 hover:border-black text-white text-center ">
          CODING
        </div>
        <div className="py-1 px-4 border-2 hover:border-r-4 hover:border-l hover:border-t hover:border-b-4 border-black font-bold shadow-2xl ">v0.0.1</div>
      </div>
    </div>
  );
};

export default Header;
