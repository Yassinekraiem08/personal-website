declare global {
  interface Image {
    _type?: string;
    src: string;
    alt: string;
    link?: string;
    caption?: string;
    floatRight?: boolean;
    aspectRatio?: number;
    contain?: boolean;
  }
}

export {};
