import React from 'react'
import { Routes, Route } from 'react-router'

import { Nav } from './components/Nav/Nav'
import { About } from './pages/About/About'
import { StackTools } from './pages/StackTools/StackTools'

function App() {

  return (<>
    <div className='min-w-screen min-h-screen bg-[--color-0]'>
      {/* <!--Nav--> */}
      <Nav />

      {/* <!--Main--> */}
      <main>
        <Routes>
          <Route path='/' Component={About} />
          <Route path='/tools' Component={StackTools} />
        </Routes>
      </main>


      {/* <!--Footer--> */}
      {/* <footer className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; App 2020</a>
        - Template by
        <a className="text-gray-500 no-underline hover:no-underline" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a>
      </footer> */}
    </div>
  </>)
}

export default App
