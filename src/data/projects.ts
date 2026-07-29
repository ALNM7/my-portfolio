import type { Project, SideProject } from './types';

/**
 * Every figure below is taken from the linked repository's README (or, where
 * noted, the accompanying report). Bounds reported as bounds, team work
 * attributed, caveats kept.
 */
export const projects: Project[] = [
  {
    id: 'mentalriskes',
    title: 'MentalRiskES 2026: LLM early-detection pipeline',
    tagline:
      'Round-based LLM pipeline for the IberLEF shared task on early detection of mental-health risk in Spanish.',
    org: 'Health Technologies Laboratory, BUAP',
    period: 'Jan 2026 - Present',
    repo: 'https://github.com/ALNM7/mentalriskes-2026-llm-pipeline',
    contribution:
      'Built and operated the competition pipeline for the BUAP team; co-authored the resulting paper.',
    stack: ['Python', 'OpenAI API', 'Function calling', 'codecarbon', 'IberLEF server client'],
    metrics: [
      { value: '6th', label: 'Task 1, overall' },
      { value: '0.889', unit: 'MAE', label: 'Best R10 early detection' },
      { value: 'Lowest', label: 'Energy use in the field' },
    ],
    summary:
      'MentalRiskES is an IberLEF shared task on spotting mental-health risk in Spanish conversational ' +
      'text as early as possible. It runs as a live, round-based simulation: the organisers\' server ' +
      'releases one patient message at a time, and a system has to answer before the next round is ' +
      'released. I built the pipeline the BUAP team submitted with: the orchestration, the server ' +
      'client, the energy accounting and the failure handling.',
    sections: [
      {
        heading: 'The task',
        body: [
          'Two subtasks were addressed, and each round requires three prediction runs per task, so a ' +
            'round only closes after six successful POSTs.',
        ],
        bullets: [
          'Task 1: predict, for each round, how the patient would answer three standardized clinical ' +
            'questionnaires: GAD-7 (anxiety, 7 items), PHQ-9 (depression, 9 items) and CompACT-10 ' +
            '(acceptance and values, 10 items). Scoring rewards identifying risk both accurately and early.',
          'Task 2: given the patient\'s last message and three candidate therapist responses, choose the ' +
            'most clinically appropriate one.',
        ],
      },
      {
        heading: 'Why function calling rather than parsing text',
        body: [
          'A questionnaire prediction is a fixed-length integer array, not prose. Every LLM call goes ' +
            'through the OpenAI API\'s function-calling interface, so the model returns schema-validated ' +
            'structured data: an array of the right length for Task 1, one of exactly three labels for ' +
            'Task 2. That removes an entire class of submission failures: there is no free-text response ' +
            'to regex, and a malformed answer is caught at the boundary instead of at the scoring server.',
          'Prompts are assembled from the patient\'s accumulated message history plus the official ' +
            'questionnaire item text, so each round sees the full conversation so far rather than just the ' +
            'newest message.',
        ],
      },
      {
        heading: 'Never losing a round',
        body: [
          'The competition advances whether or not your system answered, so an unhandled API error costs a ' +
            'round permanently. Each of the three runs per round can be configured with a different model, ' +
            'per-patient history is persisted to disk between rounds, and if an OpenAI call still fails ' +
            'after retries the pipeline falls back to a conservative default (all-zero questionnaire ' +
            'answers, first response option), so a round is degraded rather than lost.',
        ],
      },
      {
        heading: 'Energy as a first-class result',
        body: [
          'The task requires reporting energy consumption alongside predictions. Every prediction run is ' +
            'wrapped in a codecarbon EmissionsTracker and the measurement is submitted with the round.',
          'That constraint drove the model choice. Running small models (gpt-4o-mini, then gpt-4.1-nano ' +
            'and gpt-5-nano) rather than large ones produced the lowest energy consumption of any ' +
            'participating team, and it did not cost us proportional early-detection accuracy: the same ' +
            'submission recorded the best R10 score in the field.',
        ],
      },
      {
        heading: 'Handling sensitive data',
        body: [
          'The competition dataset is real patient messages about anxiety and depression together with real ' +
            'GAD-7, PHQ-9 and CompACT-10 responses. None of it is in the repository. The only data file ' +
            'checked in is a fictional example that reproduces the input/output format, which is enough to ' +
            'run the whole Task 1 / Task 2 flow locally in dry-run mode with no competition token, no API ' +
            'key and no network calls.',
        ],
      },
    ],
    tables: [
      {
        caption: 'Official results: MentalRiskES 2026, Task 1',
        head: ['Result', 'Value'],
        rows: [
          ['Overall placement', '6th'],
          ['Early detection (R10)', 'Best of all participating teams, MAE 0.889'],
          ['Energy consumption', 'Lowest of all participating teams'],
          ['Publication', 'Accepted at CEUR-WS (indexed in Scopus and DBLP)'],
        ],
      },
    ],
  },

  {
    id: 'hpl',
    title: 'HPL benchmark scaling on the Hopper cluster',
    tagline:
      'Automated Slurm parameter sweeps over N, NB and P×Q, and what the process-grid shape alone is worth.',
    org: 'Center for Advanced Research Computing, University of New Mexico',
    period: 'Aug - Dec 2025',
    repo: 'https://github.com/ALNM7/hpl-benchmark-scaling-unm-carc',
    contribution:
      'Three-person project across three CARC clusters. The Hopper cluster (this repository, its sweeps ' +
      'and its results) was my individual contribution.',
    stack: ['Slurm', 'MPI', 'HPL', 'Python', 'Bash', 'GCC', 'InfiniBand'],
    metrics: [
      { value: '2.95', unit: 'TFLOP/s', label: 'Peak, 128 ranks' },
      { value: '5.3×', label: 'From grid shape alone' },
      { value: '32→128', label: 'MPI ranks swept' },
    ],
    summary:
      'HPL solves a large dense system Ax = b by LU decomposition with partial pivoting across MPI ranks, ' +
      'and it is the benchmark behind the TOP500 ranking. Its reported GFLOP/s is famously sensitive to ' +
      'three knobs: matrix size N, block size NB, and the shape of the P×Q process grid. This project ' +
      'measures how sensitive, on real hardware, by sweeping all three under Slurm and parsing every run ' +
      'into one dataset.',
    sections: [
      {
        heading: 'Environment',
        body: [
          'Hopper at UNM CARC: 32 cores per node, InfiniBand interconnect, GCC toolchain, Slurm scheduler.',
        ],
      },
      {
        heading: 'Method',
        body: [
          'N was set to roughly 80% of available RAM for a given rank count, as large as possible without ' +
            'the run dying on memory. NB was swept over 64, 96, 128, 160, 192, 224, 256 and 288. Grid ' +
            'shapes covered every valid P×Q factorisation of the rank count, from tall (2×16) through ' +
            'near-square (8×4) to fully wide (32×1), which isolates communication-shape cost from ' +
            'everything else.',
          'The awkward part is operational rather than numerical: Slurm will not let you change --nodes ' +
            'once a job is queued. So the sweep driver generates a separate parameter CSV and a separate ' +
            'job array per node count, sized to the number of valid P×Q combinations at that rank count, ' +
            'and submits them as independent arrays. Raw HPL .out files are kept and parsed into a ' +
            'consolidated CSV, so every plotted point traces back to a preserved run.',
        ],
      },
      {
        heading: 'What the numbers say',
        body: [
          'Block size has a clear optimum and a cliff. Medium blocks balance computation against ' +
            'communication; past NB=192 performance collapses to under a third of peak.',
          'Process-grid shape turned out to be the single largest effect measured. At a fixed N=60,992, ' +
            'NB=128 and 32 ranks, on the same hardware, with the same problem and the same rank count, a 2×16 grid ' +
            'reaches ~209 GFLOP/s and an 8×4 grid reaches ~1,106 GFLOP/s. Nothing changed except how the ' +
            'ranks were arranged.',
          'Weak scaling behaves as Gustafson\'s Law predicts. Holding 8×8 and NB=160 while growing N from ' +
            '86,242 to 90,000 to 100,242, runtime rose from about 232–234 s to about 390 s, while achieved ' +
            'throughput stayed flat in the 1.7–1.8 TFLOP/s band.',
        ],
      },
    ],
    charts: [
      {
        kind: 'bar',
        title: 'Block-size sweep',
        caption: 'N = 60,992 · P×Q = 4×8 · 32 ranks',
        unit: 'GFLOP/s',
        bars: [
          { label: 'NB 64', value: 746 },
          { label: 'NB 96', value: 935 },
          { label: 'NB 128', value: 950, peak: true },
          { label: 'NB 192', value: 765 },
          { label: 'NB 256–288', value: 300, display: '<300', muted: true },
        ],
        footnote:
          'The README reports NB 256–288 as a bound ("below 300") rather than a point measurement; it is ' +
          'drawn here at the bound.',
      },
      {
        kind: 'bar',
        title: 'Process-grid shape: same problem, same ranks',
        caption: 'N = 60,992 · NB = 128 · 32 ranks',
        unit: 'GFLOP/s',
        bars: [
          { label: '2×16', value: 209, note: 'worst' },
          { label: '8×4', value: 1106, peak: true, note: 'best' },
        ],
        footnote:
          'Grids 4×8, 16×2 and 32×1 were also swept; the README publishes the extremes of the range.',
      },
      {
        kind: 'bar',
        title: 'Best run per rank count',
        unit: 'GFLOP/s',
        bars: [
          { label: '32 ranks', value: 1110, note: 'N = 60,992' },
          { label: '64 ranks', value: 1840, note: 'N = 86,242' },
          { label: '128 ranks', value: 2950, peak: true, note: 'N = 121,984' },
        ],
        footnote:
          'Higher absolute performance needs more ranks and a bigger problem, but only with the right NB ' +
          'and grid shape, as the two charts above show.',
      },
    ],
    tables: [
      {
        caption: 'Larger problem sizes',
        head: ['Ranks', 'N', 'Grid', 'Best NB', 'Result'],
        rows: [
          ['64', '86,242', '8×8', '160', '~1.83 TFLOP/s'],
          ['128', '121,984', '16×8', '160–192', '~2.67 TFLOP/s'],
        ],
        footnote:
          'The 2.95 TFLOP/s headline is the best single 128-rank run recorded across the whole campaign; ' +
          '2.67 TFLOP/s is the best from this specific NB sweep. Both appear in the report.',
      },
    ],
  },

  {
    id: 'hpcg',
    title: 'HPCG scaling: CPU campaign in a GPU-vs-CPU study',
    tagline:
      'Where multi-node CPU scaling stops paying for itself on a memory-bound sparse solver.',
    org: 'Easley cluster, UNM CARC',
    period: 'Aug - Dec 2025',
    repo: 'https://github.com/ALNM7/hpcg-gpu-cpu-scaling-carc',
    contribution:
      'Three-person study. I designed and ran the CPU-only experiments (problem-size sweep, multi-node ' +
      'scaling, strong-scaling and efficiency analysis) and produced the CPU dataset. The GPU runs were ' +
      'my teammate Yaw Danso\'s; they appear here because the comparison is the point of the study.',
    stack: ['MPI (OpenMPI)', 'Slurm', 'HPCG 3.1', 'Apptainer', 'Python', 'Intel Xeon Gold'],
    metrics: [
      { value: '101.6', unit: 'GFLOP/s', label: 'CPU peak, 128 cores' },
      { value: '55.95×', label: 'Max CPU speedup' },
      { value: '58%', label: 'Efficiency at 128 cores' },
    ],
    summary:
      'HPCG is the deliberate counterweight to HPL: a sparse conjugate-gradient solver whose performance ' +
      'is bounded by memory bandwidth rather than peak floating-point rate, which makes it a much better ' +
      'proxy for real scientific workloads. My half of this study asked how far CPU-only scaling gets you ' +
      'on that kind of workload before communication and bandwidth eat the gains.',
    sections: [
      {
        heading: 'Hardware',
        body: [
          'CPU side (mine): Intel Xeon Gold 6438Y+ nodes, up to 64 cores each, InfiniBand, general and ' +
            'debug partitions. GPU side (teammate): NVIDIA L40S, 48 GB GDDR6, PCIe Gen4, l40s partition.',
        ],
      },
      {
        heading: 'CPU findings',
        body: [
          'Single-core throughput peaks near a 96³ problem at 1.90 GFLOP/s and falls off as the matrix ' +
            'grows, a cache and memory-bandwidth ceiling visible well before any parallelism is involved.',
          'Scaling out, the best CPU configuration reached 101.6 GFLOP/s on 128 cores across 4 nodes, a ' +
            '55.95× speedup. But parallel efficiency at that point is 58%: scaling holds up well inside a ' +
            'single node and degrades once inter-node communication, NUMA effects and shared memory ' +
            'bandwidth come into play.',
        ],
      },
      {
        heading: 'Why the comparison matters',
        body: [
          'Placed next to the GPU runs, the CPU curve makes the architectural argument concrete. A single ' +
            'L40S beats a single CPU core by roughly 88×, and three GPUs beat all 128 CPU cores by about ' +
            '4.5×, while holding 95.7% strong-scaling efficiency against the CPU side\'s 58%. For a ' +
            'memory-bound sparse kernel, aggregate memory bandwidth on one node beats spreading the same ' +
            'work across four.',
        ],
      },
      {
        heading: 'Reproducibility',
        body: [
          'The CPU workflow is checked in as scripts, not prose: an hpcg.dat generator, a Slurm job array ' +
            'that builds reference HPCG 3.1.0 if needed and validates that the requested process count ' +
            'actually fits the allocation, a sweep wrapper that overrides --nodes/--ntasks on the sbatch ' +
            'command line, and a parser that consolidates raw benchmark output into the CSVs behind every ' +
            'figure. All measured values in the repo come from real Easley runs.',
        ],
      },
    ],
    charts: [
      {
        kind: 'bar',
        title: 'Throughput by configuration',
        caption: 'Fixed 128³ problem: CPU runs mine, GPU runs my teammate\'s',
        unit: 'GFLOP/s',
        bars: [
          { label: '1 CPU core', value: 1.82 },
          { label: '128 CPU cores', value: 101.6, peak: true, note: '4 nodes' },
          { label: '1 GPU', value: 159.98, muted: true },
          { label: '3 GPUs', value: 460, muted: true },
        ],
        footnote:
          'Muted bars are the GPU experiments run by Yaw Danso. The problem-size sweep records 1.87 ' +
          'GFLOP/s for a single core at 128³; the comparison uses 1.82 as its baseline. Both numbers are ' +
          'in the report and are kept as reported.',
      },
      {
        kind: 'bar',
        title: 'Parallel efficiency',
        caption: 'Where the scaling actually holds',
        unit: '%',
        bars: [
          { label: 'CPU, 128 cores', value: 58, peak: true },
          { label: 'GPU, 2', value: 96.4, muted: true },
          { label: 'GPU, 3', value: 95.7, muted: true },
        ],
        footnote:
          'CPU efficiency degrades with inter-node communication; GPU efficiency stays flat because the ' +
          'work stays on one node.',
      },
    ],
    tables: [
      {
        caption: 'CPU results (my experiments)',
        head: ['Measurement', 'Value'],
        rows: [
          ['Best single-core throughput', '1.90 GFLOP/s near 96³'],
          ['Best multi-node throughput', '101.6 GFLOP/s on 128 cores, 4 nodes'],
          ['Maximum speedup', '55.95×'],
          ['Parallel efficiency at 128 cores', '58%'],
        ],
      },
    ],
  },

  {
    id: 'crawler',
    title: 'Distributed Kickstarter crawling pipeline',
    tagline:
      'A crawler designed around being blocked: static sharding, proxy rotation and per-row checkpoints.',
    org: 'Anderson School of Management, University of New Mexico',
    period: 'Aug - Dec 2025',
    repo: 'https://github.com/ALNM7/distributed-crawling-architecture',
    stack: [
      'Python',
      'undetected-chromedriver',
      'Selenium',
      'pandas',
      'PyYAML',
      'Proxy rotation',
    ],
    metrics: [
      { value: '82', label: 'Dataset shards processed' },
      { value: '6', label: 'Sub-pages per campaign' },
      { value: '1 row', label: 'Maximum work lost on crash' },
    ],
    summary:
      'Built to support a large-scale analysis of Kickstarter campaign behaviour at UNM\'s Anderson School ' +
      'of Management. Every campaign requires visiting six JS-rendered sub-pages (story, creator, ' +
      'rewards, updates, community, FAQs and comments) behind Cloudflare. The interesting engineering ' +
      'here is not extraction; it is staying alive across weeks of a site that actively does not want to ' +
      'be crawled.',
    sections: [
      {
        heading: 'Static partitioning instead of a broker',
        body: [
          'Workers are plain OS processes launched independently. Each is assigned a slice of the dataset ' +
            'shards by dataset_id % workers, and a slice of the proxy pool by proxy_index % workers.',
          'With a fixed, known set of shards, modulo assignment beats standing up Celery or Redis for a ' +
            'project this size: no broker to operate, and each worker\'s state is fully self-contained. Any ' +
            'single worker can be killed and restarted without touching the others, and a block against one ' +
            'worker\'s proxy slice cannot spread to the rest.',
        ],
      },
      {
        heading: 'Treating rate limiting as a normal state',
        body: [
          'Kickstarter pushes back in four distinct ways: a Cloudflare JS challenge, a CAPTCHA page, an ' +
            'HTML "throttled" message, and a genuine HTTP 429 with Retry-After. The 429 is read directly ' +
            'off Chrome\'s DevTools performance log rather than inferred from page content.',
          'All four are checked after every navigation, and none is treated as fatal. The response is to ' +
            'rotate to the next proxy, rebuild the browser profile and retry. On top of that each worker ' +
            'rests for a configured interval after every batch, a self-imposed limit independent of ' +
            'whatever the site enforces.',
        ],
      },
      {
        heading: 'Checkpointing over batching',
        body: [
          'Because one campaign means six page loads and can fail halfway through, results are written ' +
            'after every successful row rather than at the end of a shard, using atomic writes (temp file, ' +
            'then replace). It costs I/O and buys the property that matters at this scale: a killed worker ' +
            'resumes having lost at most the row it was on.',
        ],
      },
      {
        heading: 'Scope and ethics',
        body: [
          'The repository ships the pipeline and architecture, not the dataset. The collected data belongs ' +
            'to the research effort and republishing scraped Kickstarter data may conflict with the site\'s ' +
            'terms, so only a two-row illustrative input example is included.',
          'The crawler reads only publicly visible project pages, with no login, payment or non-public ' +
            'content, and backs off rather than hammering a page that is already signalling it is ' +
            'throttled.',
        ],
      },
    ],
    caveats: [
      'The repository deliberately claims shard count rather than row count: run logs were not published ' +
        'with the code, so 82 shards is what is verifiable from the repo itself.',
    ],
  },

  {
    id: 'emotions',
    title: 'Spanish emotion classification with RoBERTuito',
    tagline:
      'Fine-tuning a Spanish-only transformer on a 1,860-example survey corpus, and reporting what that ' +
      'does and does not prove.',
    org: 'NLP research project, BUAP',
    period: '2025',
    repo: 'https://github.com/ALNM7/fine-tuned-transformers-emotions',
    stack: ['PyTorch', 'Hugging Face Transformers', 'RoBERTuito', 'scikit-learn', 'spaCy'],
    metrics: [
      { value: '83.3%', label: 'Fine-tuned classifier head' },
      { value: '96.0%', label: 'SVM on fine-tuned embeddings' },
      { value: '1,860', label: 'Labelled examples' },
    ],
    summary:
      'Six-way emotion classification (happiness, sadness, disgust, anger, fear, surprise) over short ' +
      'autobiographical texts in Spanish. Most emotion-classification tooling targets English and ' +
      'transfers poorly to Spanish, where syntax, informal register and culturally specific expression all ' +
      'differ. The base model is RoBERTuito, a RoBERTa pretrained from scratch on roughly 500 million ' +
      'Spanish tweets, chosen over a multilingual model because its whole pretraining budget and ' +
      'vocabulary go to one language.',
    sections: [
      {
        heading: 'The corpus',
        body: [
          'A custom survey rather than a public benchmark: 341 respondents, mostly computer-science ' +
            'students at BUAP, each answering 12 open-ended prompts, two per emotion. The design makes the ' +
            'dataset balanced by construction, around 682 raw answers per emotion.',
          'After dropping empty, very short (under three words) and boilerplate answers, 1,860 examples ' +
            'remain, split 1,488 / 372 stratified with seed 42.',
        ],
      },
      {
        heading: 'Two architectures, two numbers',
        body: [
          'A TF-IDF pipeline with classical classifiers (SVM, KNN, Naive Bayes, trees, random forest) ' +
            'serves as the non-transformer baseline.',
          'The headline comparison is three setups evaluated on the same 372-example held-out set. ' +
            'Off-the-shelf RoBERTuito embeddings fed to an SVM, with no task-specific training, reach ' +
            '75.8%. Fine-tuning RobertaForSequenceClassification end to end gives 83.3% accuracy and 0.833 ' +
            'F1 macro, which is the fine-tuned transformer\'s own performance. Using the fine-tuned model ' +
            'purely as a feature extractor and training a separate SVM on its CLS embeddings gives 96.0% ' +
            'accuracy and 0.96 F1 macro.',
          'These are two different architectures, not two readings of the same model. The 96% figure was ' +
            'checked against 5-fold and 10-fold stratified cross-validation, 94.4% (±1.3%) and 94.6% ' +
            '(±1.8%), so it is not a lucky split, but it is also not the same claim as the 83.3%.',
        ],
      },
    ],
    charts: [
      {
        kind: 'bar',
        title: 'Accuracy by setup',
        caption: 'Same 372-example held-out test set',
        unit: '%',
        bars: [
          { label: 'Pretrained + SVM', value: 75.8, note: 'no fine-tuning' },
          { label: 'Fine-tuned head', value: 83.3, note: 'end-to-end' },
          { label: 'Fine-tuned emb. + SVM', value: 96.0, peak: true, note: 'two-stage' },
        ],
      },
    ],
    tables: [
      {
        caption: 'Fine-tuning hyperparameters, as run',
        head: ['Parameter', 'Value'],
        rows: [
          ['Base model', 'pysentimiento/robertuito-base-uncased'],
          ['Epochs', '8; best checkpoint by validation F1 macro was epoch 4'],
          ['Batch size', '16'],
          ['Learning rate', '2e-5'],
          ['Weight decay', '0.1'],
          ['Warmup steps', '200'],
          ['Max sequence length', '128'],
          ['Precision', 'fp16'],
        ],
      },
      {
        caption: 'Per-class results: SVM on fine-tuned embeddings (62 test examples per class)',
        head: ['Emotion', 'Precision', 'Recall', 'F1'],
        rows: [
          ['Felicidad', '0.95', '0.98', '0.97'],
          ['Tristeza', '1.00', '0.95', '0.98'],
          ['Disgusto', '0.94', '0.97', '0.95'],
          ['Ira', '0.97', '0.94', '0.95'],
          ['Miedo', '0.98', '0.97', '0.98'],
          ['Sorpresa', '0.92', '0.95', '0.94'],
        ],
      },
    ],
    caveats: [
      '1,860 examples from 341 respondents is small for fine-tuning a transformer; results are sensitive ' +
        'to the specific split.',
      'The split is at example level, not grouped by respondent, so one person\'s writing style can appear ' +
        'in both train and test. That can inflate metrics relative to a respondent-disjoint split.',
      'The same 372-example set is used to select the best epoch and to report the final result, and again ' +
        'to evaluate the SVM. Common with small data, but not an independent held-out set.',
      'The domain is narrow (first-person survey answers to fixed prompts from BUAP students in their ' +
        'early twenties), and there is a register gap against RoBERTuito\'s Twitter pretraining.',
      'The dataset contains real personal narratives. It is included for reproducibility only and is not ' +
        'covered by the repository\'s MIT licence.',
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    title: 'Liora: full-stack e-commerce',
    description:
      'Storefront with product catalog, cart and checkout, built on an Angular front end against a ' +
      'Django REST backend with MySQL.',
    stack: ['Angular', 'Django REST', 'MySQL', 'TypeScript'],
    repo: 'https://github.com/ALNM7/liora-ecommerce-fullstack',
  },
  {
    title: 'Vision-based nutrition analysis',
    description:
      'Web app that identifies food from a photo and returns nutritional information by integrating the ' +
      'LogMeal API, split across a client and a backend service.',
    stack: ['TypeScript', 'JavaScript', 'REST API', 'LogMeal API'],
    repo: 'https://github.com/ALNM7/vision-based-nutrition-analysis_webapp',
  },
];
