
const Home = () => {
  return (
    <div className="px-1  md:w-2/3 mx-4 md:mx-auto ">
        <div className="w-full border border-black "></div>
        <h2 className="font-extrabold text-2xl mt-7">INIT</h2>
        <div className="md:flex justify-center items-center ">
            <div className="md:w-2/3">
                <div className="font-semibold text-xl">I'am Prasad Ware</div>
                <div>Full-stack developer with a passion for learning and exploring new technologies. I find that creating projects and experimenting with code is one of the most rewarding ways to spend my time. Whether it's building new applications or diving into the latest advancements in tech, I'm always eager to expand my skills and deepen my understanding of the tech world.</div>
            </div>
            <div className="md:w-1/3 mt-5 md:mt-0 flex justify-center md:justify-end items-center">
                <img src="/pfp.JPG" className="md:rounded-full w-full md:w-2/3 " width={200}/>
            </div>
        </div>
    </div>
  );
};

export default Home;
