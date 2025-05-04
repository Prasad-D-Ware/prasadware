import { VscGithubAlt } from "react-icons/vsc";
import { RiTwitterXFill } from "react-icons/ri";
import GitHubCalendar from "react-github-calendar";
import { FaLink } from "react-icons/fa6";

import { motion } from "motion/react";

const Home = () => {
  return (

    <motion.div 
    initial={{
        opacity : 0,
        filter : 'blur(10px)',
        scale : 0.97,
    }}

    animate={{
        opacity : 1,
        filter : 'blur(0px)',
        scale : 1,
    }}
    transition={{
        duration : 0.5,
        ease : "easeInOut"
    }}
    className="px-1 md:w-2/3 mx-4 md:mx-auto ">
        <div className="w-full border border-white "></div>
        <h2 className="font-extrabold text-2xl text-white mt-7">INIT</h2>
        <div className="md:flex justify-center items-center ">
            <div className="md:w-2/3 border-l-2 pl-5 mx-5 border-dashed border-white">
                <div className="font-semibold text-xl text-white">I'am Prasad Ware</div>
                <div className="text-white">Full-stack developer by day, curious tech adventurer by night! I love nothing more than diving headfirst into code, debugging (aka having existential crises), and building projects that usually start simple but somehow end up with features nobody asked for. My idea of a good time? Chasing the latest tech trends like they're Pokémon, and leveling up my skills faster than I can finish my coffee.</div>
            </div>
            <div className="md:w-1/3 mt-5 md:mt-0 flex flex-col justify-center md:justify-end items-center">
                <img src="/pfp.JPG" className="md:rounded-full w-2/3 hover:outline hover:outline-4 hover:outline-white" width={200}/>
                <div className="md:w-2/3 flex justify-center gap-4 mt-5 items-center text-white">
                    <a href="https://github.com/Prasad-D-Ware" target="_blank">
                        <VscGithubAlt size={25} /> 
                    </a>
                    <a href="https://x.com/prasadtwts" target="_blank">
                        <RiTwitterXFill size={25}/>
                    </a>
                </div>
            </div>
        </div>

        <h2 className="font-extrabold text-2xl mt-7 text-white">WORK</h2>
        <div className="mx-auto md:w-4/5 text-white">
            <GitHubCalendar  username="Prasad-D-Ware"/>
        </div>
        <h2 className="font-extrabold text-2xl mt-7 text-white">PROJECTS</h2>
        <div className="border-t border-b text-white px-5 border-white border-dashed py-3 mt-5 flex gap-4 items-center overflow-x-auto">
                <a className="flex items-center gap-1 hover:underline" href="https://solscope-liart.vercel.app/" target="_blank"><FaLink />SolScope Bot</a>
                <a className="flex items-center gap-1 hover:underline" href="https://aigrading.vercel.app/" target="_blank"><FaLink />GradeAI</a>
                <a className="flex items-center gap-1 hover:underline" href="https://solanatokendapp.vercel.app/" target="_blank"><FaLink />TokenDapp</a>
                <a className="flex items-center gap-1 hover:underline" href="https://solana-faucet-dapp.vercel.app/" target="_blank"><FaLink />SolFaucet</a>
                <a className="flex items-center gap-1 hover:underline" href="https://www.rasta-ai.com" target="_blank"><FaLink />Rasta.Ai </a>
                <a className="flex items-center gap-1 hover:underline" href="https://www.aiunika.com/" target="_blank"><FaLink />AiUnika </a>
                <a className="flex items-center gap-1 hover:underline" href="https://linkmetrics.vercel.app" target="_blank"><FaLink />LinkMetrics </a>
                <a className="flex items-center gap-1 hover:underline" href="https://pricehawk.vercel.app/" target="_blank"><FaLink />PriceHawk </a>
                {/* <a className="flex items-center gap-1 hover:underline" href="https://blogging-website-self.vercel.app/" target="_blank"><FaLink />BlogHub </a> */}
                <div className="bg-white h-3 w-3 rounded-full "></div> 
                <div className="bg-white h-3 w-3 rounded-full "></div> 
                <div className="bg-white h-3 w-3 rounded-full "></div> 
        </div>
        <h2 className="font-extrabold text-2xl mt-7 text-white">BLOGS</h2>
        <div className="md:w-2/3 border-l-2 pl-5 mx-5 border-dashed border-white">
                <div className="text-white mt-5">Will be starting soon..stay tuned</div>
        </div>
    </motion.div>
  );
};

export default Home;
