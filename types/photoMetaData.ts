// // This is the interface type file for the photos

// Themes for theme page
export type Theme = 
    | "Mountain Vistas" 
    | "Architectural Details" 
    | "Coastal Scenes" 
    | "Scenic Landscapes" 
    | "Lakeside Views" 
    | "Dust & Dunes" 
    | "Cityscapes" 
    | "Floral Closeups"
    | "Visual Rhythm"
    | "Cascading Falls"
    | "Living Heritage"

// Interface for the MetaData object
export interface PhotoMeta {
    filename: string;
    title?: string;
    label: string;
    location: string;
    theme: Theme[]
    journalSlug?: string; // unique identifier of the journal entry
    isLocationCover?: boolean; // journeys page cover photo
    isGallery: boolean; // photo should be displayed on the showcase
}
