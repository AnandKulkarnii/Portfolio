function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#008080]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I'm Anand, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Innovative and results-driven Computer Science graduate with over
              a year of hands-on experience in developing and testing web
              applications using MERN stack (MongoDB, ExpressJS, ReactJS,
              NodeJS). Proficient in C++ and object-oriented programming (OOP),
              with strong analytical and problem-solving skills. Efficient in
              Data Structures and Algorithms (DSA). Seeking an entry-level
              software developer position to contribute to cutting-edge projects
              and collaborate with dynamic teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
