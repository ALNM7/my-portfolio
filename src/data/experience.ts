export type Role = {
  title: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export const roles: Role[] = [
  {
    title: 'Research Assistant',
    org: 'Health Technologies Laboratory — BUAP',
    location: 'Puebla, Mexico',
    period: 'Jan 2026 — Present',
    current: true,
    points: [
      'Participated in MentalRiskES 2026, the IberLEF shared task on early detection of mental-health ' +
        'risk from Spanish social-media text, as part of the BUAP research team.',
      'Placed 6th overall in Task 1 and recorded the best early-detection score (R10, MAE 0.889) with the ' +
        'lowest energy consumption among all participating teams.',
      'Built and operated the competition pipeline in Python, orchestrating GPT-4o-mini, GPT-4.1-nano and ' +
        'GPT-5-nano through the OpenAI API with mock and dry-run workflows.',
      'Co-authored the resulting paper, accepted for publication in CEUR-WS and indexed in Scopus and DBLP.',
    ],
    tags: ['Python', 'OpenAI API', 'NLP', 'codecarbon', 'Shared task'],
  },
  {
    title: 'Research Assistant',
    org: 'University of New Mexico — Anderson School of Management',
    location: 'Albuquerque, NM, USA',
    period: 'Aug — Dec 2025',
    points: [
      'Designed a distributed Python scraping pipeline that collected 150k+ Kickstarter campaign records, ' +
        'enabling large-scale analysis of customer behaviour.',
      'Developed automated scrapers to extract structured and unstructured data from multiple online ' +
        'sources behind JS rendering and bot protection.',
      'Built preprocessing workflows to clean and merge datasets for analysis and machine-learning ' +
        'experiments.',
      'Collaborated with graduate researchers at the Anderson School of Management on customer behaviour ' +
        'and market-trend analysis.',
    ],
    tags: ['Python', 'Selenium', 'Distributed systems', 'ETL', 'pandas'],
  },
  {
    title: 'HPC benchmarking campaigns',
    org: 'Center for Advanced Research Computing — University of New Mexico',
    location: 'Albuquerque, NM, USA',
    period: 'Aug — Dec 2025',
    points: [
      'Benchmarked HPL on the Hopper cluster (32 cores/node, InfiniBand, GCC), tuning N, NB and the P×Q ' +
        'process grid through automated Slurm parameter sweeps.',
      'Raised throughput from 209 to 1,106 GFLOP/s at a fixed rank count by optimising process-grid shape, ' +
        'and reached 2.95 TFLOP/s on 128 MPI ranks.',
      'Ran CPU-only HPCG experiments on the Easley cluster, scaling from 1 to 128 cores across 4 nodes and ' +
        'analysing serial fraction and parallel efficiency for a GPU-vs-CPU study.',
      'Conducted strong and weak scaling analysis (Amdahl and Gustafson) and co-authored two technical ' +
        'reports in ACM format.',
    ],
    tags: ['Slurm', 'MPI', 'HPL', 'HPCG', 'Linux', 'Bash'],
  },
];
