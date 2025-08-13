import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-4 md:mx-auto md:w-2/3 py-4 text-white font-mono">
      <Link to="/" className="text-3xl font-semibold  ">PRASAD/</Link>
      <div className="flex gap-2">
        {/*<div className=" text-xl py-1 px-3  text-white border-white border-2 text-center hover:bg-white hover:text-black">
          CODING
        </div>*/}
                
        <NavLink to="/blogs" className={({isActive}) => `py-1 px-4 border-2 hover:border-r-4 hover:border-l hover:border-t hover:border-b-4 border-white font-bold shadow-2xl ${isActive ? 'bg-white text-black' : ''}`}>BLOGS</NavLink>
        <div className="py-1 px-4 border-2 hover:border-r-4 hover:border-l hover:border-t hover:border-b-4 border-white font-bold shadow-2xl ">v0.0.2</div>
      </div>
    </div>
  );
};

export default Header;
