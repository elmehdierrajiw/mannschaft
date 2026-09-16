export type VideoStory = {
  title: string;
  category: string;
  vimeoUrl: string;
};

// Swap these Vimeo URLs for the final videos — nothing else needs to change.
export const VIDEO_STORIES: VideoStory[] = [
  { title: 'Master BWL', category: 'Study', vimeoUrl: 'https://vimeo.com/273986143' },
  { title: 'Deutsche Sprache', category: 'Language', vimeoUrl: 'https://vimeo.com/273986143' },
  { title: 'Arbeit in Deutschland', category: 'Career', vimeoUrl: 'https://vimeo.com/273986143' },
  { title: 'Ausbildung', category: 'Training', vimeoUrl: 'https://vimeo.com/273986143' },
];

export function getVimeoId(url: string): string {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? match[1] : '';
}
