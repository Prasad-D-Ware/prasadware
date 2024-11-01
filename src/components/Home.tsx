import { VscGithubAlt } from "react-icons/vsc";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import GitHubCalendar from "react-github-calendar";
const Home = () => {
  return (
    <div className="px-1 md:w-2/3 mx-4 md:mx-auto ">
        <div className="w-full border border-black "></div>
        <h2 className="font-extrabold text-2xl mt-7">INIT</h2>
        <div className="md:flex justify-center items-center ">
            <div className="md:w-2/3 border-l-2 pl-5 mx-5 border-dashed border-gray-600 ">
                <div className="font-semibold text-xl text-gray-600">I'am Prasad Ware</div>
                <div className="text-gray-600">Full-stack developer with a passion for learning and exploring new technologies. I find that creating projects and experimenting with code is one of the most rewarding ways to spend my time. Whether it's building new applications or diving into the latest advancements in tech, I'm always eager to expand my skills and deepen my understanding of the tech world.</div>
            </div>
            <div className="md:w-1/3 mt-5 md:mt-0 flex flex-col justify-center md:justify-end items-center">
                <img src="/pfp.JPG" className="md:rounded-full w-full md:w-2/3 hover:outline hover:outline-4 hover:border-black" width={200}/>
                <div className="md:w-2/3 flex justify-center gap-4 mt-5 items-center">
                   <VscGithubAlt size={20} href="https://github.com/Prasad-D-Ware" target="_blank"/> 
                    <RiTwitterXFill size={20}/>
                    <RiLinkedinBoxFill size={20}/>
                </div>
            </div>
        </div>

        <h2 className="font-extrabold text-2xl mt-7">WORK</h2>
        <div className="mx-auto md:w-4/5 ">
            <GitHubCalendar  username="Prasad-D-Ware"/>
        </div>
    </div>
  );
};

export default Home;
