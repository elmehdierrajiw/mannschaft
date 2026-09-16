export type VideoStory = {
  title: string;
  category: string;
  videoUrl: string;
};

// Swap these video URLs for the final videos — nothing else needs to change.
// Supports YouTube (including Shorts) and Vimeo links.
export const VIDEO_STORIES: VideoStory[] = [
  { title: 'Hassan', category: 'Ausbildung zum Bäcker', videoUrl: 'https://www.youtube.com/shorts/5udTsiR5X4c' },
  { title: 'Youssef', category: 'Ausbildung zum Pflegefachmann', videoUrl: 'https://www.youtube.com/shorts/5udTsiR5X4c' },
  { title: 'Yahya', category: 'Ausbildung zum Fachinformatiker', videoUrl: 'https://www.youtube.com/shorts/5udTsiR5X4c' },
  { title: 'Taha', category: 'Ausbildung zum Berufskraftfahrer', videoUrl: 'https://www.youtube.com/shorts/5udTsiR5X4c' },
];

export type VideoPlatform = 'youtube' | 'vimeo' | '';

export function parseVideoUrl(url: string): { platform: VideoPlatform; id: string } {
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  if (youtubeMatch) return { platform: 'youtube', id: youtubeMatch[1] };

  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) return { platform: 'vimeo', id: vimeoMatch[1] };

  return { platform: '', id: '' };
}
