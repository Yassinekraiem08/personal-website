declare global {
  interface EducationEntry extends CMSDocument {
    degree: string;
    description: string;
    endYear: number;
    gpa: number;
    image: Image;
    major: string;
    school: string;
    startYear: number;
  }

  interface CareerEntry extends CMSDocument {
    company: string;
    dateLabel?: string;
    department: string;
    team: string;
    description: string;
    endYear: number;
    image: Image;
    location?: string;
    startYear: number;
    title: string;
  }
}

export {};
