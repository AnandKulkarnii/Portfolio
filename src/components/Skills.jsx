import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Javascript from '../assets/javascript.png'
import cpp from '../assets/c++.png'
import github from '../assets/github.png'


function Skills() {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#008080]">Skills</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-4'>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={cpp} alt="" />
                        <p className='my-4'>C++</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt="" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="" />
                        <p className='my-4'>ReactJS</p>
                    </div>
                    <div className='hover:scale-110 duration-500'> 
                        <img className='w-20 mx-auto' src={Tailwind} alt="" />
                        <p className='my-4'>TailwindCSS</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="" />
                        <p className='my-4'>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
