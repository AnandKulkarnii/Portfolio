import ChatApp from "../assets/ChatApp.jpeg";
import Binaco43 from "../assets/Binaco43-portfolio.jpg";
import PackedPath from "../assets/packedPathh.png";

function Projects() {
  const details = [
    {
      id: 1,
      name: "ChatApp",
      image: `url(${ChatApp})`,
      demo: "",
      code: "https://github.com/AnandKulkarnii/ChatApp",
    },
    {
      id: 2,
      name: "PackedPath",
      image: `url(${PackedPath})`,
      demo: "https://packed-path.netlify.app/",
      code: "https://github.com/AnandKulkarnii/PackedPath-TravalCompanion-",
    },
    {
      id: 3,
      name: "Binaco43",
      image: `url(${Binaco43})`,
      demo: "https://binaco43-restaurant.netlify.app/",
      code: "https://github.com/AnandKulkarnii/binaco43-restaurant",
    },
  ];

  const projectElements = details.map((project) => (
    <div
      key={project.id}
      style={{ backgroundImage: project.image }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover"
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">
          {project.name}
        </span>
        <div className="pt-8 text-center">
          {project.demo && (
            <a href={project.demo}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
          )}
          <a href={project.code}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#008080]">
            Projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectElements}
        </div>
      </div>
    </div>
  );
}

export default Projects;
