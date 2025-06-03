// Helper functions

import type { PhotoMeta, Theme } from "@/types/photoMetaData";

// Helper function for getting the theme cover and location details for the themes page
export function getThemeCovers(allPhotos: PhotoMeta[]): {
  theme: Theme;
  coverPhoto: PhotoMeta;
}[] {
  const themeMap = new Map<string, PhotoMeta>();

  allPhotos.forEach((photo) => {
    photo.theme.forEach((t) => {
      if (!themeMap.has(t as Theme)) {
        themeMap.set(t as Theme, photo);
      }
    });
  });

  return Array.from(themeMap.entries()).map(([theme, coverPhoto]) => ({
    theme: theme as Theme,
    coverPhoto,
  }));
}
