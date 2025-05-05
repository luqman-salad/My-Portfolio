import React from 'react'
import SectionHeader from './SectionHeader';
import { FaDiagramProject } from "react-icons/fa6";
import { FaHtml5,FaCss3Alt,FaReact,FaNodeJs   } from "react-icons/fa";
import { RiTailwindCssFill,RiNextjsFill  } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Project from './Project';


const Projects = () => {

  return (
    <div id='projects' className='mt-20'>
        <SectionHeader title="Side Project" Icon={FaDiagramProject}/>
        <div className='grid sm:grid-cols-2'>
        <Project
          MiniTitle="Assembly Game • 2025"
          Title='Assembly Endgame with winning and loss reactions'
          Tools={[
            <FaHtml5/>,
            <FaCss3Alt/>,
            <FaReact/>,
            <RiTailwindCssFill/>,
          ]}
          ProjectPic='/assemblyendgame.jpg'
          siteLink='https://luqman-salad.github.io/assemblyEndGame/'
        />
        <Project
          MiniTitle="Tenzies • 2025"
          Title='Tenzies: Roll, Match, and Freeze the Dice!'
          Tools={[
            <FaHtml5/>,
            <FaCss3Alt/>,
            <FaReact/>,
            <RiTailwindCssFill/>
          ]}
          ProjectPic='/tenzies.jpg'
          siteLink='https://luqman-salad.github.io/tenziess/'
        />
        
        </div>


        
    </div>
  )
}

export default Projects