import { ResumeData } from '@/types/resume';

export function MinimalTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, education, experience, skills } = data;

  return (
    <div className="w-full h-full bg-white text-gray-900 font-serif p-10 max-w-[21cm] mx-auto" id="resume-preview">
      <header className="border-b-2 border-gray-900 pb-6 mb-8 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-2 font-serif">
          {personalInfo.fullName}
        </h1>
        <p className="text-sm uppercase tracking-widest text-gray-600 mb-4">{personalInfo.jobTitle}</p>
        
        <div className="flex justify-center flex-wrap gap-4 text-xs font-sans text-gray-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.address && <span>• {personalInfo.address}</span>}
          {personalInfo.website && <span>• {personalInfo.website}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-8">
          <p className="text-sm leading-7 text-justify text-gray-700 font-sans">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4 font-sans">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-base">{exp.position}</h3>
                  <span className="text-xs font-sans text-gray-500">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <div className="text-sm font-semibold text-gray-600 italic mb-2 font-sans">{exp.company}</div>
                <p className="text-sm text-gray-700 leading-relaxed font-sans whitespace-pre-wrap">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4 font-sans">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-base">{edu.school}</h3>
                  <span className="text-xs font-sans text-gray-500">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <p className="text-sm text-gray-700 font-sans">{edu.degree}</p>
                <p className="text-xs text-gray-500 font-sans mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4 font-sans">
            Skills
          </h2>
          <p className="text-sm leading-6 text-gray-700 font-sans">
            {skills.join(' • ')}
          </p>
        </section>
      )}
    </div>
  );
}
