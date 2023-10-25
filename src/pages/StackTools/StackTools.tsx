import React from 'react'

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

            <section className="container md:pt-3 w-fit mx-auto font-[--font-1] flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
                <div className='mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5' >
                    <div className="w-full flex justify-center">
                        <div className="min-w-[200px] max-w-xs min-h-[200px] p-2 flex flex-col flex-wrap justify-start content-center">
                            <h1 className="w-full text-left tracking-wide text-4xl text-white font-bold">
                                Frontend
                            </h1>
                            <p className="mt-2 pl-3 pr-3 border-l-2 border-gray-500 indent-2 text-white"><br />
                                He adquirido la sólida práctica de la modularización en <b className={libraries}>React</b>, gestión de estados globales mediante <b className={libraries}>Redux</b> y <b className={libraries}>Apollo Client</b>, y diseño de interfaz con librerías como <b className={libraries}>Tailwind</b> y <b className={libraries}>Bootstrap</b>, respaldado por  <b className={libraries}>JavaScript</b> y  <b className={libraries}>TypeScript</b> para funcionalidades lógicas.
                            </p><br />
                        </div>
                        <div className={blockTech}>
                            <a className={linkCard} href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" className={imgCard} /> </a>
                            <a className={linkCard} href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" className={imgCard} /> </a>
                            <a className={linkCard} href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" className={imgCard} /> </a>
                            <a className={linkCard} href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" className={imgCard} /> </a>
                            <a className={linkCard} href="https://www.apollographql.com/docs/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg" alt="apollo" className={imgCard + changeWhite} /> </a>
                            <a className={linkCard} href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://upload.vectorlogo.zone/logos/typescriptlang/images/235f610f-bc79-428a-9511-b3de5c3b1208.svg" alt="bootstrap" className={imgCard} /> </a>
                            <a className={linkCard} href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className={imgCard} /> </a>
                            <a className={linkCard} href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className={imgCard} /> </a>
                            <a className={linkCard} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className={imgCard} /> </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container md:pt-3 w-fit mx-auto font-[--font-1] flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
                <div className='mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5' >
                    <div className="w-full flex justify-center">
                        <div className="min-w-[200px] max-w-xs min-h-[200px] p-2 flex flex-col flex-wrap justify-start content-center">
                            <h1 className="w-full text-left tracking-wide text-4xl text-white font-bold">
                                Backend
                            </h1>
                            <p className="mt-2 pl-3 pr-3 border-l-2 border-gray-500 indent-2 text-white"><br />
                                He adquirido la capacidad de desarrollar servidores sólidos en <b className={libraries}>Node.js</b> con <b className={libraries}>Express</b> y/o <b className={libraries}>Apollo GraphQL</b>, utilizando <b className={libraries}>Sequelize</b> como ORM para <b className={libraries}>PostgreSQL</b>. También soy competente en la preparación de pruebas con <b className={libraries}>Jest</b> y <b className={libraries}>Supertest.</b>
                            </p><br />
                        </div>
                        <div className={blockTech}>
                            <a className={linkCard} href="https://nodejs.org/es" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" className={imgCard} /> </a>
                            <a className={linkCard} href="https://expressjs.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="express" className={imgCard + changeWhite} /> </a>
                            <a className={linkCard} href="https://www.apollographql.com/docs/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg" alt="apollo" className={imgCard + changeWhite} /> </a>
                            <a className={linkCard} href="https://graphql.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="bash" className={imgCard} /> </a>
                            <a className={linkCard} href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg" alt="postgresql" className={imgCard} /> </a>
                            <a className={linkCard} href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" className={imgCard} /> </a>
                            <a className={linkCard} href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" className={imgCard} /> </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container md:pt-3 w-fit mx-auto font-[--font-1] flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
                <div className='mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5' >
                    <div className="w-full flex justify-center">
                        <div className="min-w-[200px] max-w-xs min-h-[200px] p-2 flex flex-col flex-wrap justify-start content-center">
                            <h1 className="w-full text-left tracking-wide text-4xl text-white font-bold">
                                Tools
                            </h1>
                            <p className="mt-2 pl-3 pr-3 border-l-2 border-gray-500 indent-2 text-white"><br />
                                He trabajado con la terminal de <b className={libraries}>Bash</b> y utilizo <b className={libraries}>Git</b> para el control de versiones. Además, tengo experiencia en diseño gráfico utilizando <b className={libraries}>Adobe Illustrator</b> y <b className={libraries}>Photoshop</b>. También he desarrollado videojuegos con <b className={libraries}>C#</b> en <b className={libraries}>Unity</b> como parte de mi experiencia en desarrollo de juegos.
                            </p><br />
                        </div>
                        <div className={blockTech}>
                            <a className={linkCard + changeWhite} href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" className={imgCard} /> </a>
                            <a className={linkCard} href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" className={imgCard} /> </a>
                            <a className={linkCard} href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" className={imgCard} /> </a>
                            <a className={linkCard} href="https://unity.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" className={imgCard + changeWhite} /> </a>
                            <a className={linkCard} href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" className={imgCard} /> </a>
                            <a className={linkCard} href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" className={imgCard} /> </a>
                        </div>
                    </div>
                </div>
            </section>

        </div >

    </div >)
}
