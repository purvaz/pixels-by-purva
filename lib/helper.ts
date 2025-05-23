// Helper functions

import { PhotoMeta } from "./photoMetaData";

// Helper function for getting the theme cover and location details for the themes page
export function getThemeCovers(allPhotos: PhotoMeta[]): {
  theme: string;
  coverPhoto: PhotoMeta;
}[] {
  const themeMap = new Map<string, PhotoMeta>();

  allPhotos.forEach((photo) => {
    photo.theme.forEach((t) => {
      if (!themeMap.has(t)) {
        themeMap.set(t, photo);
      }
    });
  });

  return Array.from(themeMap.entries()).map(([theme, coverPhoto]) => ({
    theme,
    coverPhoto,
  }));
}
