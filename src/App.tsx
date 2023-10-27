import React from 'react'
import { Routes, Route } from 'react-router'

import { Nav } from './components/Nav/Nav'
import { About } from './pages/About/About'
import { Games } from './pages/Games/Games'
import { Navigator } from './components/Navigator/Navigator'
import { Info } from './pages/Info/Info'

function App() {

  return (<>
    <div className='flex flex-col justify-between min-w-screen min-h-screen pb-1 bg-[--color-0]'>
      {/* <!--Nav--> */}
      <Nav />

      {/* <!--Main--> */}
      <main>
        <Routes>
          <Route path='/' Component={About} />
          <Route path='/games' Component={Games} />
          <Route path='/info' Component={Info} />
          <Route path='*' Component={About} />
        </Routes>
      </main>

      <Navigator />
    </div>
  </>)
}

export default App
