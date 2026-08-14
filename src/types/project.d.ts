declare global {
  interface ProjectEntry extends CMSDocument {
    codeLink?: string;
    description: string;
    demoLink?: string;
    images?: Image[];
    kind?: string;
    mainImage: Image;
    metrics?: string[];
    name: string;
    slug: Slug;
    startYear: number;
    tools: string[];
    whyItMatters?: string;
    body?: RichContentBlock[];
  }
}

export {};
