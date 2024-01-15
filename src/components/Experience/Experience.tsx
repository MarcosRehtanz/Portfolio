import React from 'react'
import projects from '../../utils/projects'
import { ProyectCard } from './ProjectCard/ProjectCard'


export const Experience = () => {

    return (<div className='w-full p-3 flex flex-col items-center'>
        <h1 className="w-full col-start-1 col-end-3 tracking-wide text-4xl text-white text-center font-bold">
            Proyectos
        </h1>
        <br />
        {projects.map((p, i) => {
            return (
                <ProyectCard
                    key={p.title.replace(' ','') + i}
                    proyect={p}
                />
            )
        })

        }

    </div>)
}
