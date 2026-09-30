export const contact = {
  email: 'marcos.rehtanz@gmail.com',
  cv: {
    es: 'CV_Juan_Mansilla_es.pdf',
    en: 'CV_Juan_Mansilla_en.pdf',
  },
}

export interface SpokenLanguage {
  name: { es: string; en: string }
  level: { es: string; en: string }
}

export const spokenLanguages: SpokenLanguage[] = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2 Intermedio', en: 'B2 Intermediate' } },
  { name: { es: 'Portugués', en: 'Portuguese' }, level: { es: 'B1 Intermedio', en: 'B1 Intermediate' } },
]

export interface EducationItem {
  institution: { es: string; en: string }
  degree: { es: string; en: string }
  start: string
  end: string
}

export const education: EducationItem[] = [
  {
    institution: { es: 'Henry Bootcamp', en: 'Henry Bootcamp' },
    degree: { es: 'Desarrollador Web Full Stack', en: 'Full Stack Web Developer' },
    start: '2023-07',
    end: '2023-10',
  },
  {
    institution: { es: 'Autodidacta', en: 'Self-taught' },
    degree: {
      es: 'Programación — Unity, C#, Java, Desarrollo de Videojuegos',
      en: 'Programming — Unity, C#, Java, Game Development',
    },
    start: '2020-01',
    end: '2023-06',
  },
]
