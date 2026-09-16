export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  level: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priya Nair',
    role: 'Software Engineer, relocated from Bengaluru',
    quote:
      'I went from zero German to passing my B1 exam in eight months. The small class size meant I actually got to practice speaking every single lesson.',
    level: 'A1 → B1',
    initials: 'PN',
  },
  {
    name: 'Marco Alves',
    role: 'Master’s student, São Paulo',
    quote:
      'The TestDaF preparation was exactly what I needed for university admission. My tutor knew the exam format inside out and it showed in my score.',
    level: 'TestDaF prep',
    initials: 'MA',
  },
  {
    name: 'Elena Kowalski',
    role: 'Nurse, moved from Kraków',
    quote:
      'Mannschaft made B2 feel achievable. The teachers focused on real workplace conversations, which mattered far more to me than textbook dialogue.',
    level: 'B2 Intensive',
    initials: 'EK',
  },
  {
    name: 'Daniel Osei',
    role: 'Product Manager, Accra',
    quote:
      'Flexible evening classes let me keep working full-time while studying. My advisor checked in regularly and kept me on track for the Goethe exam.',
    level: 'Goethe C1',
    initials: 'DO',
  },
  {
    name: 'Haruka Sato',
    role: 'Exchange student, Osaka',
    quote:
      'The conversation course was the highlight of my week. It’s rare to find a class that’s this structured and this relaxed at the same time.',
    level: 'Conversation Course',
    initials: 'HS',
  },
  {
    name: 'Tomás Fernández',
    role: 'Consultant, Madrid',
    quote:
      'I needed A2 fast for a work transfer. The intensive track and daily homework feedback got me exam-ready in four weeks.',
    level: 'A2 Intensive',
    initials: 'TF',
  },
];
