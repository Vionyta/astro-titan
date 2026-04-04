export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Software Engineer",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Led the development of scalable web applications using Astro and React.",
      "Mentored junior developers and contributed to architectural decisions.",
      "Optimized application performance, reducing load times by 20%.",
    ],
  },
  {
    company: "Web Innovators LLC.",
    role: "Software Engineer",
    startDate: "Mar 2019",
    endDate: "Dec 2021",
    description: [
      "Developed and maintained client-side applications with a focus on user experience.",
      "Collaborated with design teams to implement responsive and accessible interfaces.",
      "Participated in code reviews and contributed to continuous integration processes.",
    ],
  },
  {
    company: "Digital Agency Co.",
    role: "Junior Developer",
    startDate: "Jul 2017",
    endDate: "Feb 2019",
    description: [
      "Assisted in the development of various marketing websites and landing pages.",
      "Gained foundational knowledge in front-end technologies and version control.",
    ],
  },
];
