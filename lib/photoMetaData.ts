export interface PhotoMeta {
    filename: string;
    title?: string;
    label: string;
    location: string;
    category: "mountains" | "architecture" | "beach" | "landscape" | "lake" | "desert" | "cityscapes" | "flowers";
    journalSlug?: string;
    isLocationCover?: boolean;
}

export const photoMetaData: PhotoMeta[] = [
    {
        filename: "photo1.png", 
        label: "Tunnel View, Yosemite, California",
        location: "Yosemite",
        category: "mountains",
        journalSlug: "Journal entries of Yosemite.",

    }, 
    {
        filename: "photo2.png", 
        label: "Bridalveil Falls, Yosemite, California",
        title: "Veiled Flow",
        location: "Yosemite",
        category: "mountains",
        journalSlug: "Journal entries of Yosemite.",

    },
    {
        filename: "photo3.png", 
        label: "Yosemite Meadow, Yosemite, California",
        title: "When Color Meets Stone",
        location: "Yosemite",
        category: "mountains",
        journalSlug: "Journal entries of Yosemite.",
        isLocationCover: true,
    },
    {
        filename: "photo4.png", 
        label: "Tunnel View, Yosemite, California",
        location: "Yosemite",
        category: "mountains",
        journalSlug: "Journal entries of Yosemite.",

    },
    {
        filename: "photo5.png", 
        label: "Anchorage, Alaska",
        title: "Through a picture frame",
        location: "Alaska",
        category: "landscape",
        journalSlug: "Journal entries of Alaska.",
    }, 
    {
        filename: "photo6.png", 
        label: "Anchorage, Alaska",
        title: "The Red Barn",
        location: "Alaska",
        category: "landscape",
        journalSlug: "Journal entries of Alaska.",
    }, 
    {
        filename: "photo7.png", 
        label: "Aialik Glacier, Seward, Alaska",
        location: "Alaska",
        category: "landscape",
        journalSlug: "Journal entries of Alaska.",
        isLocationCover: true,
    }, 
    {
        filename: "photo8.png", 
        label: "Aialik Glacier, Seward, Alaska",
        location: "Alaska",
        category: "landscape",
        journalSlug: "Journal entries of Alaska.",
    }, 
    {
        filename: "photo9.png", 
        label: "Denali National Park, Alaska",
        title: "Untamed and Majestic",
        location: "Alaska",
        category: "landscape",
        journalSlug: "Journal entries of Alaska.",
    }, 
    {
        filename: "photo10.png", 
        label: "Denali National Park, Alaska",
        location: "Alaska",
        category: "landscape",
        journalSlug: "Journal entries of Alaska.",
    }, 
    {
        filename: "photo11.png", 
        label: "Denali National Park, Alaska",
        location: "Alaska",
        category: "landscape",
        journalSlug: "Journal entries of Alaska.",
    }, 
    {
        filename: "photo12.png", 
        label: "Denali National Park, Alaska",
        title: "Crimson Wilderness",
        location: "Alaska",
        category: "landscape",
        journalSlug: "Journal entries of Alaska.",
    }, 
    {
        filename: "photo13.png", 
        label: "Denali National Park, Alaska",
        location: "Alaska",
        category: "landscape",
        journalSlug: "Journal entries of Alaska.",
    }, 
    {
        filename: "photo14.png", 
        label: "Lake Tahoe, California",
        title: "Blue Above, Blue Below",
        location: "Lake Tahoe",
        category: "lake",
        journalSlug: "Journal entries of Tahoe.",
        isLocationCover: true,
    }, 
    {
        filename: "photo15.png", 
        label: "Lake Tahoe, California",
        location: "Lake Tahoe",
        category: "lake",
        journalSlug: "Journal entries of Tahoe.",
    }, 
    {
        filename: "photo16.png", 
        label: "Death Valley, California",
        title: "Highway to Heat",
        location: "Death Valley",
        category: "desert",
        journalSlug: "Journal entries of Death Valley.",
        isLocationCover: true,
    }, 
    {
        filename: "photo17.png", 
        label: "Death Valley, California",
        location: "Death Valley",
        category: "desert",
        journalSlug: "Journal entries of Death Valley.",
    }, 
];