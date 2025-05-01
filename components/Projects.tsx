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
          MiniTitle="ACME CORP • 2025"
          Title='DARK Saas Landing Page'
          Tools={[
            <FaHtml5/>,
            <FaCss3Alt/>,
            <FaReact/>,
            <FaNodeJs/>,
            <RiTailwindCssFill/>,
            <SiMongodb/>,
            <RiNextjsFill/>
          ]
          }
          ProjectPic='/nextjsweb.png'
        />
        <Project
          MiniTitle="ACME CORP • 2025"
          Title='DARK Saas Landing Page'
          Tools={[
            <FaHtml5/>,
            <FaCss3Alt/>,
            <FaReact/>,
            <FaNodeJs/>,
            <RiTailwindCssFill/>,
            <SiMongodb/>,
            <RiNextjsFill/>
          ]
          }
          ProjectPic='/nextjsweb.png'
        />
        <Project
          MiniTitle="ACME CORP • 2025"
          Title='DARK Saas Landing Page'
          Tools={[
            <FaHtml5/>,
            <FaCss3Alt/>,
            <FaReact/>,
            <FaNodeJs/>,
            <RiTailwindCssFill/>,
            <SiMongodb/>,
            <RiNextjsFill/>
          ]
          }
          ProjectPic='/techworld.png'
        />
        </div>


        
    </div>
  )
}

export default Projects