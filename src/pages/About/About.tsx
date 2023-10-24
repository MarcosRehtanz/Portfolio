import React from 'react'
import Photo from '../../assets/Profile.png'

export const About = () => {
    return (<div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                Main
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                    Hero Message
                </span>
                to sell yourself!
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                Sub-hero message, not too long and not too short. Make it just right!
            </p>
        </div>

        {/* <!--Right Col--> */}
        <div className="w-full xl:w-3/5 p-12 overflow-hidden bg-gradient-to-br from-transparent via-transparent to-sky-950">
            <img className="mx-auto h-[500px] bg-purple-800 rounded-3xl
                transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                src={Photo} />
        </div>

        <div className="mx-auto md:pt-16">
            <h3>Languajes and herramientas</h3>
            <div className='w-full h-auto justify-around flex flex-row flex-wrap'>
                <div className='w-[480px] flex flex-row justify-center flex-wrap gap-4 m-4'>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" className='h-20 transition-all hover:h-24' /> </a>
                </div>

                <div className='w-[480px] flex flex-row justify-center flex-wrap gap-4 m-4'>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://nodejs.org/es" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="bash" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://expressjs.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="bash" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://www.apollographql.com/docs/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg" alt="bash" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://graphql.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="bash" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg" alt="postgresql" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" className='h-20 transition-all hover:h-24' /> </a>
                </div>

                <div className='w-[480px] flex flex-row justify-center flex-wrap gap-4 m-4'>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" className='h-20 transition-all hover:h-24' /> </a>
                    <a className='h-[100px] min-w-[100px] flex justify-center items-center' href="https://unity.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" className='h-20 transition-all hover:h-24' /> </a>
                </div>
            </div>

        </div>
    </div>)
}
