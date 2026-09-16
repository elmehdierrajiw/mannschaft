export type FaqItem = {
  question: string;
  answer: string;
  category?: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What levels of German do you teach?',
    answer:
      'We teach the full range from A1 (complete beginner) through B2 (upper-intermediate), following the Common European Framework of Reference (CEFR). New courses start every few weeks, so you can join at the right level after a short placement check.',
  },
  {
    question: 'How many students are in each class?',
    answer:
      'Group courses are capped at 10 students to make sure everyone gets real speaking practice and personal feedback. We also offer one-to-one and small private group lessons for a more tailored pace.',
  },
  {
    question: 'Do you offer online courses?',
    answer:
      'Yes. Most of our German and exam-preparation courses are available both online with live instructors and in person at our Berlin location, so you can choose whichever fits your routine.',
  },
  {
    question: 'How do I know which level to start at?',
    answer:
      'If you’re new to German, you’ll start at A1. If you already have some experience, we offer a free placement assessment to identify the right starting level before your first paid session.',
  },
  {
    question: 'Which exams do you prepare students for?',
    answer:
      'We offer dedicated preparation for the Goethe-Zertifikat, telc Deutsch, TestDaF, and DSH exams, including mock tests, exam strategy, and detailed feedback on writing and speaking sections.',
  },
  {
    question: 'Can I switch between course schedules?',
    answer:
      'Yes. Your learning advisor can help you move between morning, evening, weekend, or online formats as your availability changes, subject to space in the new group.',
  },
  {
    question: 'Do you provide official certificates?',
    answer:
      'You’ll receive a Mannschaft course completion certificate stating your level. For officially recognized certificates, we prepare you for and register you with independent exam bodies like Goethe-Institut or telc.',
  },
  {
    question: 'What does a typical course include?',
    answer:
      'Course fees include all class materials, progress assessments, access to our online practice portal, and ongoing support from your learning advisor throughout the program.',
  },
];
