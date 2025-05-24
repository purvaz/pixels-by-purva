// This is the metadata file for the photos

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

// Interface for the MetaData object
export interface PhotoMeta {
    filename: string;
    title?: string;
    label: string;
    location: string;
    theme: Theme[]
    journalSlug?: string;
    isLocationCover?: boolean; // journeys page cover photo
    isGallery: boolean; // photo should be displayed on the showcase
}

// Metadata content
export const photoMetaData: PhotoMeta[] = [
    {
        filename: "photo1.png", 
        label: "Tunnel View, Yosemite, California",
        location: "Yosemite",
        theme: ["Mountain Vistas"],
        journalSlug: "Journal entries of Yosemite.",
        isGallery: true,

    }, 
    {
        filename: "photo2.png", 
        label: "Bridalveil Falls, Yosemite, California",
        title: "Veiled Flow",
        location: "Yosemite",
        theme: ["Mountain Vistas"],
        journalSlug: "Journal entries of Yosemite.",
        isGallery: false,

    },
    {
        filename: "photo3.png", 
        label: "Yosemite Meadow, Yosemite, California",
        title: "When Color Meets Stone",
        location: "Yosemite",
        theme: ["Mountain Vistas"],
        journalSlug: "Journal entries of Yosemite.",
        isLocationCover: true,
        isGallery: true,
    },
    {
        filename: "photo4.png", 
        label: "Tunnel View, Yosemite, California",
        location: "Yosemite",
        theme: ["Mountain Vistas"],
        journalSlug: "Journal entries of Yosemite.",
        isGallery: false,

    },
    {
        filename: "photo5.png", 
        label: "Anchorage, Alaska",
        title: "Through a picture frame",
        location: "Alaska",
        theme: ["Scenic Landscapes"],
        journalSlug: "Journal entries of Alaska.",
        isGallery: true,
    }, 
    {
        filename: "photo6.png", 
        label: "Anchorage, Alaska",
        title: "The Red Barn",
        location: "Alaska",
        theme: ["Scenic Landscapes"],
        journalSlug: "Journal entries of Alaska.",
        isGallery: true,
    }, 
    {
        filename: "photo7.png", 
        label: "Aialik Glacier, Seward, Alaska",
        location: "Alaska",
        theme: ["Scenic Landscapes"],
        journalSlug: "Journal entries of Alaska.",
        isGallery: true,
        isLocationCover: true,
    }, 
    {
        filename: "photo8.png", 
        label: "Aialik Glacier, Seward, Alaska",
        location: "Alaska",
        theme: ["Scenic Landscapes"],
        journalSlug: "Journal entries of Alaska.",
        isGallery: false,
    }, 
    {
        filename: "photo9.png", 
        label: "Denali National Park, Alaska",
        title: "Untamed and Majestic",
        location: "Alaska",
        theme: ["Scenic Landscapes"],
        journalSlug: "Journal entries of Alaska.",
        isGallery: true,
    }, 
    {
        filename: "photo10.png", 
        label: "Denali National Park, Alaska",
        location: "Alaska",
        theme: ["Scenic Landscapes"],
        journalSlug: "Journal entries of Alaska.",
        isGallery: false,
    }, 
    {
        filename: "photo11.png", 
        label: "Denali National Park, Alaska",
        location: "Alaska",
        theme: ["Scenic Landscapes"],
        journalSlug: "Journal entries of Alaska.",
        isGallery: false,
    }, 
    {
        filename: "photo12.png", 
        label: "Denali National Park, Alaska",
        title: "Crimson Wilderness",
        location: "Alaska",
        theme: ["Scenic Landscapes"],
        journalSlug: "Journal entries of Alaska.",
        isGallery: true,
    }, 
    {
        filename: "photo13.png", 
        label: "Denali National Park, Alaska",
        location: "Alaska",
        theme: ["Scenic Landscapes"],
        journalSlug: "Journal entries of Alaska.",
        isGallery: true,
    }, 
    {
        filename: "photo14.png", 
        label: "Lake Tahoe, California",
        title: "Blue Above, Blue Below",
        location: "Lake Tahoe",
        theme: ["Lakeside Views"],
        journalSlug: "Journal entries of Tahoe.",
        isGallery: true,
        isLocationCover: true,
    }, 
    {
        filename: "photo15.png", 
        label: "Lake Tahoe, California",
        location: "Lake Tahoe",
        theme: ["Lakeside Views"],
        journalSlug: "Journal entries of Tahoe.",
        isGallery: true,
    }, 
    {
        filename: "photo16.png", 
        label: "Death Valley, California",
        title: "Highway to Heat",
        location: "Death Valley",
        theme: ["Dust & Dunes"],
        journalSlug: "Journal entries of Death Valley.",
        isGallery: true,
        isLocationCover: true,
    }, 
    {
        filename: "photo17.png", 
        label: "Death Valley, California",
        location: "Death Valley",
        theme: ["Dust & Dunes"],
        journalSlug: "Journal entries of Death Valley.",
        isGallery: true,
    }, 
];