export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  items: string[];
};

/**
 * Grouped to match how the work actually splits, and limited to things that
 * appear in a shipped repository or on the CV.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    blurb: 'Where most of the work gets written.',
    items: ['Python', 'C++', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    id: 'hpc',
    title: 'HPC & parallel computing',
    blurb: 'Running, tuning and measuring workloads on production clusters.',
    items: [
      'Slurm',
      'MPI (OpenMPI)',
      'HPL',
      'HPCG',
      'Apptainer / Singularity',
      'Strong & weak scaling',
      'Linux / module systems',
    ],
  },
  {
    id: 'ml',
    title: 'Machine learning & NLP',
    blurb: 'From dataset construction through evaluation and its caveats.',
    items: [
      'Transformers',
      'Hugging Face',
      'PyTorch',
      'LLM APIs & function calling',
      'scikit-learn',
      'spaCy',
      'Embeddings',
      'Model evaluation',
    ],
  },
  {
    id: 'data',
    title: 'Data engineering',
    blurb: 'Pipelines that keep running when the source pushes back.',
    items: [
      'Distributed workers',
      'Selenium / undetected-chromedriver',
      'Proxy rotation & rate limiting',
      'Checkpointing & recovery',
      'pandas',
      'ETL workflows',
    ],
  },
  {
    id: 'web',
    title: 'Web & APIs',
    blurb: 'Full-stack delivery for applications outside research.',
    items: ['Angular', 'Django', 'REST APIs', 'React', 'MySQL'],
  },
  {
    id: 'tools',
    title: 'Tooling',
    blurb: 'The everyday surface.',
    items: ['Git', 'GitHub', 'Jupyter', 'Matplotlib', 'codecarbon'],
  },
];
