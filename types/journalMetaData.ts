 // This is the interface type file for the journal entries

export interface JournalMeta {
    slug: string; // unique identifier for a journal entry
    title: string;
    excerpt: string;
    blob: string;
    date: string; // ISO format (e.g., "2025-06-02")
    images: string[];
    
    tags?: string[]; // (future enhancement for filtering)
    theme?: string; // match a visual theme if relevant (future enhancement for filtering)
    readingTime?: string; // optional like "3 min read" (future enhancement)
}
  