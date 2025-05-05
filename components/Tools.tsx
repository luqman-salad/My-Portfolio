import React from 'react'
import SectionHeader from './SectionHeader'
import { FaTools } from "react-icons/fa";
import { FaHtml5,FaCss3Alt,FaReact,FaNodeJs   } from "react-icons/fa";
import { RiTailwindCssFill,RiNextjsFill  } from "react-icons/ri";
import { SiMongodb,SiJavascript,SiExpo, SiTypescript, SiShadcnui   } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


const Tools = () => {
    const tools = [
        {
            icon: <FaReact/>, 
            name: 'React', 
            style: {style: 'text-[#61DAFB]'}
        },
        {
            icon: <RiTailwindCssFill/>, 
            name: 'TailwindCSS',
            style: {style: 'text-[#38BDF8]'}
        },
        {
            icon: <SiTypescript />, 
            name: 'TypeScript', 
            style: {style: 'text-[#3178c6]'}
        },
        {
            icon: <FaHtml5/>, 
            name: 'HTML5', 
            style: {style: 'text-[#E34F26]'}
        },
        {
            icon: <SiJavascript/>, 
            name: 'JavaScript', 
            style: {style: 'text-[#F7DF1E]'}
        },
        {
            icon: <FaCss3Alt/>, 
            name: 'CSS3', 
            style: {style: 'text-[#1572B6]'}
        },
        {
            icon: <SiMongodb/>, 
            name: 'MongoDB', 
            style: {style: 'text-[#47A248]'}
        },
        {
            icon: <RiNextjsFill/>, 
            name: 'Nextjs', 
            style: {style: 'text-[#000000]'}
        },
        
        {
            icon: <FaReact/>, 
            name: 'React Native', 
            style: {style: 'text-[#61DAFB]'}
        },
        {
            icon: <SiExpo/>, 
            name: 'Expo', 
            style: {style: 'text-[#000000]'}
        },
        {
            icon: <BiLogoPostgresql/>, 
            name: 'PostgreSQL', 
            style: {style: 'text-[#336791]'}
        },
        
        {
            icon: <FaNodeJs/>, 
            name: 'Nodejs', 
            style: {style: 'text-[#339933]'}
        },
        {
            icon: <SiShadcnui  />, 
            name: 'ShadCN', 
            style: {style: 'text-[#000000]'}
        },
    ]
  return (
    <div>
        <SectionHeader title="Tech Stack & Tools" Icon={FaTools}/>
        <div className='mt-5 flex flex-wrap gap-3 justify-center'>
            {tools.map((tool, index) => (
                <div key={index} className='flex gap-2 items-center justify-center border border-gray-300 rounded-lg px-1 pr-2 py-2 hover:bg-cyan-800 hover:text-white transition'>
                    <span className={`text-4xl hover:text-white transition ${tool.style.style}`}>{tool.icon}</span>
                    <span>{tool.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tools