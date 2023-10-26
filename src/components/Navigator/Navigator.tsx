import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { pages } from './pages'

export const Navigator = () => {

    const location = useLocation().pathname

    return (<nav className="flex justify-center items-center sticky max-w-fit h-8 mb-2 bottom-2 mx-auto bg-slate-100 p-5 rounded-[40px] shadow-2xl">
        {
            pages.map((page, i) => {
                return <div key={page.name+i} className={`w-14 flex flex-col items-center rounded-full bg-slate-100 transition-all duration-500 scale-[0.5] ${page.path === location && 'scale-[1] -translate-y-2 shadow'}`}>
                    <Link to={page.path} className={`${page.path !== location && 'grayscale hover:brightness-75'} px-2 py-1 transition-all duration-500 z-[1] font-semibold`}> 
                        <img className={`${page.path === location ? `scale-75`:`scale-100 hover:scale-125`} transition-all duration-500`} src={page.src} alt={page.name}/>
                    </Link>
                </div>
            })
        }
    </nav>
    )
}
