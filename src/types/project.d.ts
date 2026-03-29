declare global {
  interface ProjectEntry extends CMSDocument {
    codeLink?: string;
    description: string;
    demoLink?: string;
    images?: Image[];
    mainImage: Image;
    name: string;
    slug: Slug;
    startYear: number;
    tools: string[];
    body?: RichContentBlock[];
  }
}

export {};
