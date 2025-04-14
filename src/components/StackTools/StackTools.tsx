import { backend, databases, frontend, lenguages, servers, tools } from '../../utils/stacks'
import { StackCard } from './StackCard'

const NameTool = ({ children }: { children: string }) => (
  <b className="mx-auto text-green-400">{children}</b>
)

export const StackTools = () => {
  return (
    <div className="mx-auto md:pt-16 max-w-[1500px]">
      <hr />
      {/* <h1 className='w-full my-10 py-10 tracking-wide bg-[--color-1] uppercase text-center text-5xl text-[--color-2] font-bold'>Languajes and herramientas</h1> */}

      <div className="w-full max-w-5xl h-auto justify-between flex flex-row flex-wrap gap-x-12">
        <StackCard
          title="Lenguajes"
          description={
            <p></p>
          }
          toolList={lenguages}
        />
        <StackCard title="Bases de Datos" toolList={databases} />
        <StackCard
          title="Frontend"
          toolList={frontend}
        />
        <StackCard title="Servidores" toolList={servers} />
        <StackCard
          title="Backend"
          toolList={backend}
        />
        <StackCard
          title="Tools"
          toolList={tools}
        />
      </div>
    </div>
  )
}
