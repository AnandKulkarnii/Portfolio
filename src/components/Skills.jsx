function Skills() {
  const skillList = [
    {
      id: 1,
      name: "C++",
      image: "/src/assets/c++.png",
    },
    {
      id: 2,
      name: "HTML",
      image: "/src/assets/html.png",
    },
    {
      id: 3,
      name: "CSS",
      image: "/src/assets/css.png",
    },
    {
      id: 4,
      name: "JavaScript",
      image: "/src/assets/javascript.png",
    },
    {
      id: 5,
      name: "ReactJS",
      image: "/src/assets/react.png",
    },
    {
      id: 6,
      name: "TailwindCSS",
      image: "/src/assets/tailwind.png",
    },
    {
      id: 7,
      name: "GitHub",
      image: "/src/assets/github.png",
    },
  ];

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#008080]">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-4">
          {skillList.map((skill) => (
            <div key={skill.id} className="hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={skill.image} alt="" />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
