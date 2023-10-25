import React from 'react'
import { Link } from 'react-router-dom'

export const Nav: React.FC = (): JSX.Element => {

    return (<nav className="w-full container mx-auto bg-[--color-0]">
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                Juan <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"> Mansilla</span>
            </div>
            
            {/* 
            <ul className="leading-normal text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                <li className="py-2 lg:py-0 ">
                    <a
                        className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                        href="#"
                    >
                        Blog
                    </a>
                </li>
                <li className="py-2 lg:py-0 ">
                    <a
                        className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                        href="#"
                    >
                        Projects
                    </a>
                </li>
                <li className="py-2 lg:py-0 ">
                    <a
                        className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                        href="#"
                    >
                        Apps
                    </a>
                </li>
                <li className="py-2 lg:py-0 ">
                    <a
                        className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                        href="#"
                    >
                        Designs
                    </a>
                </li>
                <li className="py-2 lg:py-0 ">
                    <a
                        className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                        href="#"
                    >
                        My Journey
                    </a>
                </li>
                <li className="py-2 lg:py-0 ">
                    <a
                        className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                        href="#"
                    >
                        About
                    </a>
                </li>
            </ul>
            */}

            <div className="flex w-fit justify-end content-center">
                <a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-12 p-2 md:h-16 md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://www.linkedin.com/in/juan-marcos-mansilla">
                    <svg className="fill-current h-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                </a>
                <a
                    className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-12 p-2 md:h-16 md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                    href="https://github.com/MarcosRehtanz"
                >
                    <svg className="fill-current h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </nav>)
}