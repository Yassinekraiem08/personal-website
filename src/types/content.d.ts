declare global {
  type RichContentBlock =
    | {
        type: 'paragraph';
        text: string;
      }
    | {
        type: 'heading';
        level?: 2 | 3;
        text: string;
      }
    | {
        type: 'list';
        style: 'bullet' | 'number';
        items: string[];
      }
    | {
        type: 'quote';
        quote: string;
        citation?: string;
        halfWidth?: boolean;
        floatRight?: boolean;
      }
    | {
        type: 'image';
        image: Image;
        fullWidth?: boolean;
      };
}

export {};
