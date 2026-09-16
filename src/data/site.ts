export const SITE = {
  name: 'Mannschaft',
  fullName: 'Mannschaft Sprachzentrum',
  tagline: 'German language center',
  description:
    'Mannschaft Sprachzentrum is a modern language center specializing in German courses, exam preparation, and personalized language coaching for students and professionals.',
  url: 'https://mannschaft-sprachzentrum.pages.dev',
  email: 'info@mannschaft-sprachzentrum.com',
  phone: '+49 30 1234 5678',
  phoneHref: '+493012345678',
  address: 'Friedrichstraße 68, 10117 Berlin, Germany',
  social: {
    instagram: 'https://instagram.com/mannschaft.sprachzentrum',
    facebook: 'https://facebook.com/mannschaft.sprachzentrum',
    linkedin: 'https://linkedin.com/company/mannschaft-sprachzentrum',
    youtube: 'https://youtube.com/@mannschaft-sprachzentrum',
  },
};

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'German Courses', href: '/german-courses/' },
  { label: 'Language Courses', href: '/language-courses/' },
  { label: 'Exam Preparation', href: '/exam-preparation/' },
  { label: 'Courses & Programs', href: '/courses/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

export const FOOTER_COURSE_LINKS: NavLink[] = [
  { label: 'German A1–C1', href: '/german-courses/' },
  { label: 'Exam Preparation', href: '/exam-preparation/' },
  { label: 'Language Courses', href: '/language-courses/' },
  { label: 'Intensive Courses', href: '/courses/#intensive' },
  { label: 'Conversation Classes', href: '/courses/#conversation' },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Imprint', href: '/legal/imprint/' },
  { label: 'Privacy Policy', href: '/legal/privacy/' },
  { label: 'Terms', href: '/legal/terms/' },
];
