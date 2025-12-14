import { nanoid } from 'nanoid';
import { ResumeData } from '@/types/resume';

export const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: 'Alex Morgan',
    jobTitle: 'Senior Product Designer',
    email: 'alex.morgan@example.com',
    phone: '(555) 123-4567',
    address: 'San Francisco, CA',
    website: 'alexmorgan.design',
    summary: 'Creative and detail-oriented Product Designer with over 5 years of experience in building user-centric digital products. Passionate about solving complex problems through elegant design solutions and improving user experiences.',
  },
  education: [
    {
      id: '1',
      school: 'University of Design Arts',
      degree: 'Bachelor of Fine Arts in Interaction Design',
      startDate: '2015',
      endDate: '2019',
      location: 'New York, NY',
    },
  ],
  experience: [
    {
      id: '1',
      company: 'TechFlow Solutions',
      position: 'Senior UI/UX Designer',
      startDate: '2021',
      endDate: 'Present',
      description: 'Leading the design team for the core product. implemented a new design system that improved development velocity by 30%. Conducted user research and usability testing to iterate on key features.',
    },
    {
      id: '2',
      company: 'Creative Studio X',
      position: 'Product Designer',
      startDate: '2019',
      endDate: '2021',
      description: 'Collaborated with cross-functional teams to design and launch mobile applications for various clients. Created high-fidelity mockups and interactive prototypes.',
    },
  ],
  skills: ['Figma', 'React', 'TypeScript', 'UI/UX Design', 'Prototyping', 'Design Systems', 'User Research'],
};
