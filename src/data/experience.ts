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
    title: 'Software Engineering Intern',
    org: 'IT Solutions, Volkswagen de México',
    location: 'Puebla, Mexico',
    period: 'Aug 2026 - Present',
    current: true,
    points: [
      'Developed a script with a two-flow architecture (ETL) that identifies CBD files by content, ' +
        'recognizing multiple template versions in English, Spanish and German, converts legacy .xls ' +
        'files to .xlsx and uploads them to AWS S3.',
      'Applied execution-time optimization strategies so the job handles large volumes of files in the ' +
        'background without interrupting the user.',
      'Implemented incremental state control with file fingerprints (modified date and size).',
      'Built the S3 upload stage using AWS CLI, working through the Zscaler corporate proxy, with ' +
        'rotating logs and failure-only alerts.',
      'Migrated authentication from a provisional technical user to IAM Roles Anywhere with a VW CA ' +
        'certificate and validated the upload in QAS and production. Coordinated with the S3 consumers ' +
        'and the AWS account administrator on naming, prefixes and permissions.',
    ],
    tags: ['PowerShell', 'VBScript', 'ETL', 'AWS S3', 'Power Automate', 'SharePoint'],
  },
  {
    title: 'Research Assistant',
    org: 'Health Technologies Laboratory, BUAP',
    location: 'Puebla, Mexico',
    period: 'Jan - Aug 2026',
    points: [
      'Participated in MentalRiskES 2026, the IberLEF shared task on early detection of mental-health ' +
        'risk from Spanish social-media text, as part of the BUAP research team.',
      'Won 1st place in the Task 1 early-detection category and placed 6th in the general category, with ' +
        'the best R10 score (MAE 0.889) and the lowest energy consumption among all participating teams.',
      'Built and operated the competition pipeline in Python, orchestrating GPT-4o-mini, GPT-4.1-nano and ' +
        'GPT-5-nano through the OpenAI API with mock and dry-run workflows.',
      'Co-authored the resulting paper, accepted for publication in CEUR-WS and indexed in Scopus and DBLP.',
    ],
    tags: ['Python', 'OpenAI API', 'NLP', 'codecarbon', 'Shared task'],
  },
  {
    title: 'Research Assistant',
    org: 'University of New Mexico, Anderson School of Management',
    location: 'Albuquerque, NM, USA',
    period: 'Aug - Dec 2025',
    points: [
      'Designed a distributed Python ETL pipeline that collected 150k+ Kickstarter campaign records, ' +
        'enabling large-scale analysis of customer behaviour.',
      'Developed automated scrapers to extract structured and unstructured data from six JS-rendered ' +
        'sub-pages per campaign, behind Cloudflare and bot protection.',
      'Ran the crawl as independent workers over 250 rotating proxies, using static sharding (82 dataset ' +
        'shards) instead of a message broker, so any worker could be restarted without affecting the others.',
      'Treated Cloudflare challenges, CAPTCHAs and HTTP 429 limits as normal states (rotate proxy, ' +
        'rebuild the browser profile, retry) and saved results after every row, so a crash lost at most ' +
        'one record.',
      'Built preprocessing workflows to clean and merge datasets for analysis and machine-learning ' +
        'experiments.',
      'Collaborated with graduate researchers at the Anderson School of Management on customer behaviour ' +
        'and market-trend analysis.',
    ],
    tags: ['Python', 'Selenium', 'Distributed systems', 'ETL', 'pandas'],
  },
  {
    title: 'HPC benchmarking campaigns',
    org: 'Center for Advanced Research Computing, University of New Mexico',
    location: 'Albuquerque, NM, USA',
    period: 'Aug - Dec 2025',
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
