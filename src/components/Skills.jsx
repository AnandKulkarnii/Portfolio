function Skills() {
  const skillList = [
    {
      id: 1,
      name: "C++",
      image: "/assets/c++.png",
    },
    {
      id: 2,
      name: "JavaScript",
      image: "/assets/javascript.png",
    },
    {
      id: 3,
      name: "HTML",
      image: "/assets/html.png",
    },
    {
      id: 4,
      name: "CSS",
      image: "/assets/css.png",
    },
    {
      id: 5,
      name: "ReactJS",
      image: "/assets/react.png",
    },
    {
      id: 6,
      name: "TailwindCSS",
      image: "/assets/tailwind.png",
    },
    {
      id: 7,
      name: "NodeJS",
      image: "/assets/node.png",
    },
    {
      id: 8,
      name: "ExpressJS",
      image: "/assets/expressjs2.png",
    },
    {
      id: 9,
      name: "MongoDB",
      image: "/assets/mongo.png",
    },
    {
      id: 10,
      name: "Firebase",
      image: "/assets/firebase.png",
    },
    {
      id: 11,
      name: "Postman",
      image: "/assets/postman2.png",
    },
    {
      id: 12,
      name: "GitHub",
      image: "/assets/github.png",
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
              <img
                className="w-20 mx-auto"
                src={skill.image}
                alt={skill.name}
              />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
