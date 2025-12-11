import { mainStack } from '../../utils/stacks'
import { Experience } from '../../components/Experience'
import { IconLink } from '../../components/IconLink/IconLink'
import { SEO } from '../../components/SEO'
import { useLanguage } from '../../context/languageContext'
import { WorkExperience } from '../../components/WorkExperience'

export const About = () => {
  const { t } = useLanguage()

  return (
    <div className="container md:pt-3 w-full mx-auto poppins flex flex-wrap flex-col md:flex-row justify-center content-center items-center">
      <SEO
        title={t.about.name}
        description={t.about.description}
        name={t.about.name}
        type="website"
        image="profile.jpeg"
        url={window.location.href}
      />
      <div className="mx-5 md:mx-auto bg-[--color-1] rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5">
        <div className="w-full flex flex-col-reverse sm:flex-row justify-center">
          <div className="max-w-xl min-h-[200px] p-2 flex flex-col justify-center content-center">
            <div className="flex-shrink-0 mb-4 bg-[--color-4] w-full block sm:hidden rounded-xl">
              <img
                className="w-[175px] h-52 sm:w-48 object-cover object-top mx-auto bg-[--color-4] rounded-xl sm:rounded-3xl transform transition hover:scale-110 duration-700 ease-in-out"
                src="profile.jpeg"
                alt={t.about.name}
              />
            </div>

            <div className="tracking-wide text-4xl text-white font-bold">
              {t.about.greeting}{' '}
              <h1 className="text-[--color-2]">{t.about.name}</h1>
            </div>
            <p className="text-sm text-[--color-2] font-semibold mt-1">
              {t.about.title}
            </p>

            <p className="mt-2 px-3 pt-3 border-l-2 border-gray-500 text-white text-sm">
              {t.about.description}
            </p>

            <p className="mt-2 text-green-400 text-sm flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {t.about.available}
            </p>

            <div className="pt-4 m-2 flex gap-2 flex-wrap">
              {mainStack.map((tool, i) => {
                return (
                  <IconLink
                    key={tool.name + i}
                    item={tool}
                    className={{
                      a: 'h-[22px] min-w-[22px] flex justify-center items-center',
                      img: 'h-[24px] transition-all hover:h-[28px]',
                    }}
                  />
                )
              })}
            </div>
          </div>
          <div className="flex-shrink-0 hidden sm:block">
            <img
              className="w-32 sm:w-48 object-cover mx-auto sm:bg-[--color-4] rounded-xl sm:rounded-3xl transform rotate-12 transition hover:scale-110 duration-700 ease-in-out hover:rotate-6"
              src="profile.jpeg"
              alt={t.about.name}
            />
          </div>
        </div>
      </div>

      <WorkExperience />
      <Experience />
    </div>
  )
}
