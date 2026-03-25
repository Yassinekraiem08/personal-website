import { PortableTextBlock } from '@portabletext/types';

declare global {
  interface AboutEntry extends CMSDocument {
    body: PortableTextBlock[];
  }
}

export {};
