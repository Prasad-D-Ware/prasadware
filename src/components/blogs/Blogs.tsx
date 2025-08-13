import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="px-1 md:w-2/3 mx-4 md:mx-auto text-white">
      <div className="w-full border border-white "></div>
      <h2 className="font-extrabold text-2xl text-white mt-7">BLOGS</h2>
      <div className="md:w-2/3 border-l-2 pl-5 mx-5 border-dashed border-white">
        <div className="mt-5">
          <Link className="hover:underline" to="/blogs/rookie-understanding-of-ai">A Rookie’s Understanding of AI</Link>
          <div className="text-sm opacity-70">From Zero to "I Get it!"</div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;


