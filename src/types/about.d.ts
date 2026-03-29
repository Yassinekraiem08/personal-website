declare global {
  interface AboutEntry extends CMSDocument {
    body: RichContentBlock[];
  }
}

export {};
