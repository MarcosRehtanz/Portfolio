import { useLanguage } from '../../context/languageContext'
import { experienceData } from '../../data/experience'

const formatDate = (dateStr: string, language: 'es' | 'en'): string => {
  const [year, month] = dateStr.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export const WorkExperience = () => {
  const { language, t } = useLanguage()

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        {t.sections.experience}
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-[--color-2] to-[--color-4]"></div>

        {experienceData.map((exp, index) => (
          <div
            key={exp.company + index}
            className={`relative flex items-start mb-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[--color-2] rounded-full border-2 border-[--color-0] z-10"></div>

            {/* Content card */}
            <div
              className={`ml-10 md:ml-0 md:w-[45%] ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}
            >
              <div className="bg-[--color-1] rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                  <span className="text-xs text-gray-400 bg-[--color-0] px-2 py-1 rounded">
                    {formatDate(exp.start, language)} -{' '}
                    {exp.end ? formatDate(exp.end, language) : t.experience.present}
                  </span>
                </div>

                <p className="text-[--color-2] font-semibold text-sm mb-1">
                  {exp.role[language]}
                </p>
                <p className="text-gray-400 text-xs mb-3">{exp.location[language]}</p>

                <ul className="text-gray-300 text-sm space-y-1 mb-3">
                  {exp.achievements[language].slice(0, 3).map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[--color-2] mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1">
                  {exp.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-[--color-4] text-gray-300 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.stack.length > 5 && (
                    <span className="text-xs text-gray-400">
                      +{exp.stack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
