export type Course = {
  slug: string;
  level: string;
  title: string;
  description: string;
  duration: string;
  format: string;
  tag?: string;
};

export const GERMAN_COURSES: Course[] = [
  {
    slug: 'a1',
    level: 'A1',
    title: 'German A1 — Beginner',
    description:
      'Build your first words, phrases, and everyday expressions. Perfect for absolute beginners starting their German journey.',
    duration: '6 weeks',
    format: 'Group · Online or in Berlin',
    tag: 'Most popular',
  },
  {
    slug: 'a2',
    level: 'A2',
    title: 'German A2 — Elementary',
    description:
      'Strengthen your foundation and start handling simple everyday situations with more confidence and vocabulary.',
    duration: '6 weeks',
    format: 'Group · Online or in Berlin',
  },
  {
    slug: 'b1',
    level: 'B1',
    title: 'German B1 — Intermediate',
    description:
      'Communicate confidently on familiar topics, work, and travel — a common milestone for residency and work permits.',
    duration: '8 weeks',
    format: 'Group · Online or in Berlin',
    tag: 'Visa-relevant',
  },
  {
    slug: 'b2',
    level: 'B2',
    title: 'German B2 — Upper Intermediate',
    description:
      'Discuss complex topics fluently, follow fast conversations, and prepare for academic or professional environments.',
    duration: '8 weeks',
    format: 'Group · Online or in Berlin',
  },
  {
    slug: 'c1',
    level: 'C1',
    title: 'German C1 — Advanced',
    description:
      'Refine nuance, precision, and style for university, leadership roles, and demanding professional settings.',
    duration: '10 weeks',
    format: 'Group · Online or in Berlin',
  },
  {
    slug: 'intensive',
    level: 'Intensive',
    title: 'Intensive German Course',
    description:
      'Accelerate your progress with daily lessons designed to move up a full level in a shorter timeframe.',
    duration: '4 weeks',
    format: 'Group · In Berlin',
    tag: 'Fast-track',
  },
];

export const OTHER_LANGUAGES = [
  {
    name: 'English',
    description: 'General and business English for work, study, and travel.',
    icon: 'en',
  },
  {
    name: 'French',
    description: 'From first words to confident conversation in French.',
    icon: 'fr',
  },
  {
    name: 'Spanish',
    description: 'Practical, conversation-first Spanish for real situations.',
    icon: 'es',
  },
  {
    name: 'Italian',
    description: 'Learn Italian with a focus on culture and everyday speech.',
    icon: 'it',
  },
];

export type ExamProgram = {
  name: string;
  short: string;
  description: string;
  levels: string;
};

export const EXAM_PROGRAMS: ExamProgram[] = [
  {
    name: 'Goethe-Zertifikat',
    short: 'Goethe-Institut',
    description:
      'Internationally recognized German exams accepted by universities, employers, and immigration authorities worldwide.',
    levels: 'A1 – C2',
  },
  {
    name: 'telc Deutsch',
    short: 'telc GmbH',
    description:
      'Practical, standardized exams widely used for visa applications, naturalization, and workplace requirements.',
    levels: 'A1 – C1',
  },
  {
    name: 'TestDaF',
    short: 'TestDaF-Institut',
    description:
      'The standard German exam for university admission, assessing academic language proficiency in one sitting.',
    levels: 'B2 – C1',
  },
  {
    name: 'DSH',
    short: 'University exam',
    description:
      'German university entrance exam preparation, tailored to the specific requirements of your target institution.',
    levels: 'B2 – C1',
  },
];

export type Feature = {
  title: string;
  description: string;
};

export const WHY_MANNSCHAFT: Feature[] = [
  {
    title: 'Experienced teachers',
    description:
      'Every instructor is a certified language educator with years of classroom and exam-coaching experience.',
  },
  {
    title: 'Small groups',
    description:
      'Classes are capped at 10 students so everyone gets speaking time and personal feedback every session.',
  },
  {
    title: 'Practical German',
    description:
      'Lessons center on real conversations — offices, appointments, and daily life — not just grammar drills.',
  },
  {
    title: 'Exam-focused preparation',
    description:
      'Dedicated modules for Goethe, telc, and TestDaF, with mock exams and targeted feedback along the way.',
  },
  {
    title: 'Flexible schedules',
    description:
      'Morning, evening, and weekend courses, plus online options, built around work and study commitments.',
  },
  {
    title: 'Personalized support',
    description:
      'A dedicated learning advisor tracks your progress and adjusts your path as your goals evolve.',
  },
];
