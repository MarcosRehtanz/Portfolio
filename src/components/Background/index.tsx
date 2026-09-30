import { useLanguage } from '../../context/languageContext'
import { education, spokenLanguages } from '../../data/profile'

const formatYear = (dateStr: string) => dateStr.split('-')[0]

export const Background = () => {
  const { language, t } = useLanguage()

  return (
    <div className="w-full max-w-4xl mx-auto p-4 grid gap-6 md:grid-cols-2">
      <section className="bg-[--color-1] rounded-lg p-4 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">
          {t.sections.education}
        </h2>
        <ul className="space-y-3">
          {education.map((item) => (
            <li key={item.institution.en}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-white font-bold">
                  {item.institution[language]}
                </h3>
                <span className="text-xs text-gray-400 bg-[--color-0] px-2 py-1 rounded">
                  {formatYear(item.start)} - {formatYear(item.end)}
                </span>
              </div>
              <p className="text-gray-300 text-sm">{item.degree[language]}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[--color-1] rounded-lg p-4 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">
          {t.sections.languages}
        </h2>
        <ul className="space-y-3">
          {spokenLanguages.map((lang) => (
            <li
              key={lang.name.en}
              className="flex items-center justify-between gap-2"
            >
              <span className="text-white font-bold">{lang.name[language]}</span>
              <span className="text-[--color-2] text-sm font-semibold">
                {lang.level[language]}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
