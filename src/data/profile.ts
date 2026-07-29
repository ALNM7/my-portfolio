export const profile = {
  name: 'Alfredo Navarrete Montes',
  shortName: 'Alfredo Navarrete',
  role: 'Software Engineer',
  focus: 'High-Performance Computing · Distributed Systems · Applied NLP',
  location: 'Puebla, Mexico',
  email: 'alfredonava794@gmail.com',
  github: 'https://github.com/ALNM7',
  githubHandle: 'ALNM7',
  linkedin: 'https://www.linkedin.com/in/alfredo-navarrete-montes-2997962b7/',
  linkedinHandle: 'alfredo-navarrete-montes',
  photo: '/hero.jpg',
  cv: '/CV_Alfredo_Navarrete.pdf',

  intro:
    'I work where measurement meets systems: benchmarking MPI workloads on HPC clusters, ' +
    'building crawlers that survive being rate-limited for weeks, and shipping NLP pipelines ' +
    'that have to answer a scoring server on a deadline.',

  bio: [
    'I am a final-year Information Technologies engineering student at BUAP, currently a research ' +
      'assistant at the Health Technologies Laboratory. In 2026 I built the BUAP team\'s submission ' +
      'pipeline for MentalRiskES at IberLEF, an early-detection task on Spanish clinical text, where we ' +
      'placed 6th overall and recorded the best early-detection score and the lowest energy consumption ' +
      'of any participating team.',
    'Before that I spent a semester at the University of New Mexico, splitting my time between the ' +
      'Anderson School of Management, where I built a distributed crawling pipeline for a Kickstarter ' +
      'research dataset, and the Center for Advanced Research Computing, where I ran HPL and HPCG ' +
      'benchmark campaigns on production clusters under Slurm.',
    'What connects these is a habit rather than a domain: state the metric, control the variables, ' +
      'publish the numbers with their caveats. Most of the engineering below exists because a result ' +
      'needed to be reproducible by someone other than me.',
  ],

  education: {
    degree: 'B.Eng. in Information Technologies',
    school: 'Benemérita Universidad Autónoma de Puebla (BUAP)',
    location: 'Puebla, Mexico',
    period: 'Expected December 2026',
    note:
      'Coursework completed at the University of New Mexico and revalidated: High Performance Computing, ' +
      'Information Systems Development, Computer-based Information Systems, Business Programming ' +
      'Fundamentals, Design of Large Programs.',
  },

  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Advanced. TOEFL ITP 560 · Duolingo English Test 120' },
  ],

  availability:
    'Graduating December 2026 and open to new-grad software engineering roles, research ' +
    'assistantships and internships in HPC, distributed systems and applied ML.',
} as const;

/** Headline numbers on the hero. Every one is traceable to a repo README or the CV. */
export const headlineStats = [
  {
    value: '2.95',
    unit: 'TFLOP/s',
    label: 'Peak HPL',
    detail: '128 MPI ranks, Hopper cluster (UNM CARC)',
  },
  {
    value: '6th',
    unit: 'of the field',
    label: 'MentalRiskES 2026',
    detail: 'IberLEF Task 1, best early-detection score (R10)',
  },
  {
    value: '5.3×',
    unit: 'throughput',
    label: 'HPL grid tuning',
    detail: '209 → 1,106 GFLOP/s at a fixed 32 ranks',
  },
  {
    value: '1',
    unit: 'accepted',
    label: 'CEUR-WS paper',
    detail: 'Co-authored, indexed in Scopus and DBLP',
  },
] as const;
