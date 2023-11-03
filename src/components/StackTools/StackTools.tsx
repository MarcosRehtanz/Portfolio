import React from 'react'
import { backend, frontend, tools } from './stack'

export const StackTools = () => {

    const sectionTools = 'w-[320px] min-h-[300px] rounded-t  rounded-b-2xl bg-[--color-4] flex flex-row justify-center content-start flex-wrap gap-4 m-4'
    const tittleCard = 'w-full bg-[--color-2] rounded-t text-center text-5xl font-normal font-mono'
    const linkCard = 'h-[60px] min-w-[60px] flex justify-center items-center'
    const imgCard = 'h-12 transition-all hover:h-14'
    const changeWhite = ' invert'
    const blockTech = 'w-64 flex-shrink-0 flex flex-row flex-wrap justify-center content-center'
    const libraries = 'text-[--color-2]'

    return (<div className="mx-auto md:pt-16">
        <hr />
        {/* <h1 className='w-full my-10 py-10 tracking-wide bg-[--color-1] uppercase text-center text-5xl text-[--color-2] font-bold'>Languajes and herramientas</h1> */}

        <div className='w-full h-auto justify-between flex flex-row flex-wrap gap-x-12'>

            <section className="container md:pt-3 w-fit mx-auto font-[--font-1]">
                <div className='mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5' >
                    <div className="w-full flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
                        <div className="min-w-[200px] max-w-xs min-h-[200px] p-2 flex flex-col flex-wrap justify-start content-center">
                            <h1 className="w-full text-left tracking-wide text-4xl text-white font-bold">
                                Frontend
                            </h1>
                            <p className="mt-2 pl-3 pr-3 border-l-2 border-gray-500 indent-2 text-white"><br />
                                He adquirido la sólida práctica de la modularización en <b className={libraries}>React</b>, gestión de estados globales mediante <b className={libraries}>Redux</b> y <b className={libraries}>Apollo Client</b>, y diseño de interfaz con librerías como <b className={libraries}>Tailwind</b> y <b className={libraries}>Bootstrap</b>, respaldado por  <b className={libraries}>JavaScript</b> y  <b className={libraries}>TypeScript</b> para funcionalidades lógicas.
                            </p><br />
                        </div>
                        <div className={blockTech}>
                            {frontend.map((tool, i) => {
                                return <a key={tool.name+i} className={linkCard + (tool.invert && changeWhite)} href={tool.url} target="_blank" rel="noreferrer">
                                    <img src={tool.src} alt={tool.name} className={imgCard} />
                                </a>
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container md:pt-3 w-fit mx-auto font-[--font-1]">
                <div className='mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5' >
                    <div className="w-full flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
                        <div className="min-w-[200px] max-w-xs min-h-[200px] p-2 flex flex-col flex-wrap justify-start content-center">
                            <h1 className="w-full text-left tracking-wide text-4xl text-white font-bold">
                                Backend
                            </h1>
                            <p className="mt-2 pl-3 pr-3 border-l-2 border-gray-500 indent-2 text-white"><br />
                                He adquirido la capacidad de desarrollar servidores sólidos en <b className={libraries}>Node.js</b> con <b className={libraries}>Express</b> y/o <b className={libraries}>Apollo GraphQL</b>, utilizando <b className={libraries}>Sequelize</b> como ORM para <b className={libraries}>PostgreSQL</b>. También soy competente en la preparación de pruebas con <b className={libraries}>Jest</b> y <b className={libraries}>Supertest.</b>
                            </p><br />
                        </div>
                        <div className={blockTech}>
                            {backend.map((tool, i) => {
                                return <a key={tool.name+i} className={linkCard + (tool.invert && changeWhite)} href={tool.url} target="_blank" rel="noreferrer">
                                    <img src={tool.src} alt={tool.name} className={imgCard} />
                                </a>
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container md:pt-3 w-fit mx-auto font-[--font-1]">
                <div className='mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5' >
                    <div className="w-full flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
                        <div className="min-w-[200px] max-w-xs min-h-[200px] p-2 flex flex-col flex-wrap justify-start content-center">
                            <h1 className="w-full text-left tracking-wide text-4xl text-white font-bold">
                                Tools
                            </h1>
                            <p className="mt-2 pl-3 pr-3 border-l-2 border-gray-500 indent-2 text-white"><br />
                                He trabajado con la terminal de <b className={libraries}>Bash</b> y utilizo <b className={libraries}>Git</b> para el control de versiones. Además, tengo experiencia en diseño gráfico utilizando <b className={libraries}>Adobe Illustrator</b> y <b className={libraries}>Photoshop</b>. También he desarrollado videojuegos con <b className={libraries}>C#</b> en <b className={libraries}>Unity</b> como parte de mi experiencia en desarrollo de juegos.
                            </p><br />
                        </div>
                        <div className={blockTech}>
                            {tools.map((tool, i) => {
                                return <a key={tool.name+i} className={linkCard + (tool.invert && changeWhite)} href={tool.url} target="_blank" rel="noreferrer">
                                    <img src={tool.src} alt={tool.name} className={imgCard} />
                                </a>
                            })}
                        </div>
                    </div>
                </div>
            </section>

        </div >

    </div >)
}
