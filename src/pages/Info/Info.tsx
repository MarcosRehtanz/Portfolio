import React from 'react'
import { infoTools } from './infoTools'

export const Info = () => {

    const linkCard = 'h-[60px] min-w-[60px] flex justify-center items-center'
    const imgCard = 'h-12 transition-all hover:h-14'
    const changeWhite = ' invert'
    const blockTech = 'w-64 flex-shrink-0 flex flex-row flex-wrap justify-center content-center'
    const libraries = 'text-[--color-3]'

    return (<div>
        <div className='w-full h-auto justify-between flex flex-row flex-wrap gap-x-12'>

            <section className="container md:pt-3 w-fit mx-auto poppins">
                <div className='mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5' >
                    <div className="w-full flex flex-wrap flex-col justify-center content-center items-center">
                        <div className="min-w-[200px] max-w-full min-h-[200px] p-2 flex flex-col flex-wrap justify-start content-center">
                            <h1 className="w-full text-[--color-4] text-left tracking-wide text-4xl lg:text-6xl text-white font-bold">
                                Info de Desarrollo
                            </h1>
                            <p className="mt-2 pl-3 pr-3 border-l-2 border-gray-500 indent-2 text-white"><br />
                                Para el desarrollo de mi página web de portafolio, he optado por una combinación de tecnologías de vanguardia. React se encarga de la estructuración de la página, brindando una base sólida para la creación de componentes reutilizables y una experiencia de usuario dinámica. Tailwind CSS se ha convertido en mi elección para el estilado, aprovechando su eficiencia y potencial para crear diseños visualmente atractivos y responsivos de manera rápida. Además, he optado por TypeScript como lenguaje de programación, dada mi experiencia en Programación Orientada a Objetos (POO), lo que mejora la legibilidad del código y reduce los errores.
                                <br />
                                <br />
                                Los beneficios de esta combinación son notables. React permite una arquitectura modular y un flujo de trabajo eficiente, mientras que Tailwind CSS agiliza la creación de estilos personalizables sin necesidad de escribir CSS desde cero. TypeScript añade un nivel adicional de seguridad y claridad al código, lo que resulta en menos errores y una mejor colaboración en proyectos. En conjunto, estas tecnologías me permiten desarrollar una página web de portafolio atractiva, con un código limpio y mantenible, y una experiencia de usuario excepcional.
                            </p><br />
                        </div>
                        <div className={blockTech}>
                            {infoTools.map((tool, i) => {
                                return <a key={tool.name + i} className={linkCard + (tool.invert && changeWhite)} href={tool.url} target="_blank" rel="noreferrer">
                                    <img src={tool.src} alt={tool.name} className={imgCard} />
                                </a>
                            })}
                        </div>
                        <br />
                    </div>
                </div>
            </section>
        </div>
    </div>)
}
