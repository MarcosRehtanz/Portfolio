import { Routes, Route, Outlet } from 'react-router'
import { Nav } from './components/Nav/Nav'
import { About } from './pages/About/About'
import { Navigator } from './components/Navigator/Navigator'
import { pages } from './pages/pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <div className="flex flex-col justify-between min-w-screen min-h-screen bg-[--color-0]">
        {/* <!--Main--> */}
        <main className="min-h-screen flex flex-col justify-between">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <!--Nav--> */}
                  <Nav />
                  <Outlet />
                  <ToastContainer />
                  <Navigator />
                </>
              }
            >
              {pages?.map(({ name, path, Component }, i) => {
                return (
                  <Route key={name + i} path={path} Component={Component} />
                )
              })}
              <Route path="*" Component={About} />
            </Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
