export interface ResumeData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    summary: string;
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export type TemplateType = 'modern' | 'minimal' | 'professional';

export interface ResumeState {
  data: ResumeData;
  selectedTemplate: TemplateType;
  updatePersonalInfo: (data: Partial<ResumeData['personalInfo']>) => void;
  addEducation: () => void;
  removeEducation: (id: string) => void;
  updateEducation: (id: string, data: Partial<EducationItem>) => void;
  addExperience: () => void;
  removeExperience: (id: string) => void;
  updateExperience: (id: string, data: Partial<ExperienceItem>) => void;
  updateSkills: (skills: string[]) => void;
  setTemplate: (template: TemplateType) => void;
}
