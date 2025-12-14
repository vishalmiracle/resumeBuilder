import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ResumeData, ResumeState, TemplateType, EducationItem, ExperienceItem } from '@/types/resume';
import { initialResumeData } from '@/data/initialData';
import { nanoid } from 'nanoid';

const ResumeContext = createContext<ResumeState | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern');

  const updatePersonalInfo = (info: Partial<ResumeData['personalInfo']>) => {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const addEducation = () => {
    const newItem: EducationItem = {
      id: nanoid(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    };
    setData((prev) => ({
      ...prev,
      education: [...prev.education, newItem],
    }));
  };

  const removeEducation = (id: string) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }));
  };

  const updateEducation = (id: string, itemData: Partial<EducationItem>) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, ...itemData } : item
      ),
    }));
  };

  const addExperience = () => {
    const newItem: ExperienceItem = {
      id: nanoid(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setData((prev) => ({
      ...prev,
      experience: [...prev.experience, newItem],
    }));
  };

  const removeExperience = (id: string) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id),
    }));
  };

  const updateExperience = (id: string, itemData: Partial<ExperienceItem>) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id ? { ...item, ...itemData } : item
      ),
    }));
  };

  const updateSkills = (skills: string[]) => {
    setData((prev) => ({
      ...prev,
      skills,
    }));
  };

  const setTemplate = (template: TemplateType) => {
    setSelectedTemplate(template);
  };

  return (
    <ResumeContext.Provider
      value={{
        data,
        selectedTemplate,
        updatePersonalInfo,
        addEducation,
        removeEducation,
        updateEducation,
        addExperience,
        removeExperience,
        updateExperience,
        updateSkills,
        setTemplate,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}
