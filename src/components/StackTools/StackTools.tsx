import { backend, databases, frontend, lenguages, servers, tools } from '../../utils/stacks'
import { StackCard } from './StackCard'
import { useLanguage } from '../../context/languageContext'

const NameTool = ({ children }: { children: string }) => (
  <b className="mx-auto text-green-400">{children}</b>
)

export const StackTools = () => {
  const { t } = useLanguage()

  return (
    <div className="mx-auto md:pt-16 max-w-[1500px]">
      <hr />
      {/* <h1 className='w-full my-10 py-10 tracking-wide bg-[--color-1] uppercase text-center text-5xl text-[--color-2] font-bold'>Languajes and herramientas</h1> */}

      <div className="w-full max-w-5xl h-auto justify-between flex flex-row flex-wrap">
        <StackCard
          title={t.skills.languages}
          description={
            <p></p>
          }
          toolList={lenguages}
        />
        <StackCard title={t.skills.databases} toolList={databases} />
        <StackCard
          title={t.skills.frontend}
          toolList={frontend}
        />
        <StackCard title={t.skills.servers} toolList={servers} />
        <StackCard
          title={t.skills.backend}
          toolList={backend}
        />
        <StackCard
          title={t.skills.tools}
          toolList={tools}
        />
      </div>
    </div>
  )
}
