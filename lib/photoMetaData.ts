export interface PhotoMeta {
    filename: string;
    label: string;
    location: string;
    category: "mountains" | "architecture" | "beach";
    journalSlug?: string;
}

export const photoMetaData: PhotoMeta[] = [
    {
        filename: "photo1.png", 
        label: "Tunnel View, Yosemite, CA",
        location: "Yosemite",
        category: "mountains",
        journalSlug: "Journal entries of Yosemite.",

    }, 
    {
        filename: "photo2.png", 
        label: "Bridalveil Falls, Yosemite, CA",
        location: "Yosemite",
        category: "mountains",
        journalSlug: "Journal entries of Yosemite.",

    },
    {
        filename: "photo3.png", 
        label: "Yosemite Meadow, Yosemite, CA",
        location: "Yosemite",
        category: "mountains",
        journalSlug: "Journal entries of Yosemite.",
    },
    {
        filename: "photo4.png", 
        label: "Tunnel View, Yosemite, CA",
        location: "Yosemite",
        category: "mountains",
        journalSlug: "Journal entries of Yosemite.",

    }, 
];