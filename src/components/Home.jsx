import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#008080] font-semibold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Anand Kulkarni
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a FullStack Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          with a passion for crafting visually appealing and user-friendly
          websites. Proficient in modern technologies, I bring a unique blend of
          design and technical skills to every project.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#008080] hover:border-[#008080]">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
//
