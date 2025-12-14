import { ResumeData } from '@/types/resume';

export function ModernTemplate({ data }: { data: ResumeData }) {
  const { personalInfo, education, experience, skills } = data;

  return (
    <div className="w-full h-full bg-white text-slate-800 font-sans shadow-lg" id="resume-preview">
      <div className="flex h-full min-h-[1000px]">
        {/* Sidebar */}
        <div className="w-1/3 bg-slate-100 p-8 border-r border-slate-200">
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-heading text-slate-900 leading-tight mb-2">
              {personalInfo.fullName}
            </h1>
            <p className="text-lg text-primary font-medium">{personalInfo.jobTitle}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="uppercase tracking-wider text-xs font-bold text-slate-500 mb-3 border-b border-slate-200 pb-1">
                Contact
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {personalInfo.email && (
                  <li className="break-all">
                    <span className="block text-xs text-slate-400">Email</span>
                    {personalInfo.email}
                  </li>
                )}
                {personalInfo.phone && (
                  <li>
                    <span className="block text-xs text-slate-400">Phone</span>
                    {personalInfo.phone}
                  </li>
                )}
                {personalInfo.address && (
                  <li>
                    <span className="block text-xs text-slate-400">Location</span>
                    {personalInfo.address}
                  </li>
                )}
                {personalInfo.website && (
                  <li>
                    <span className="block text-xs text-slate-400">Website</span>
                    {personalInfo.website}
                  </li>
                )}
              </ul>
            </div>

            {skills.length > 0 && (
              <div>
                <h3 className="uppercase tracking-wider text-xs font-bold text-slate-500 mb-3 border-b border-slate-200 pb-1">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white px-2 py-1 rounded text-xs font-medium text-slate-700 border border-slate-200 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {education.length > 0 && (
                <div>
                    <h3 className="uppercase tracking-wider text-xs font-bold text-slate-500 mb-3 border-b border-slate-200 pb-1">
                        Education
                    </h3>
                    <div className="space-y-4">
                        {education.map((edu) => (
                            <div key={edu.id}>
                                <div className="font-semibold text-slate-800 text-sm">{edu.school}</div>
                                <div className="text-xs text-slate-600">{edu.degree}</div>
                                <div className="text-xs text-slate-400 mt-0.5">
                                    {edu.startDate} - {edu.endDate}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-8">
          {personalInfo.summary && (
            <div className="mb-8">
              <h3 className="uppercase tracking-wider text-xs font-bold text-primary mb-3">
                Profile
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {personalInfo.summary}
              </p>
            </div>
          )}

          {experience.length > 0 && (
            <div>
              <h3 className="uppercase tracking-wider text-xs font-bold text-primary mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-4 border-l-2 border-slate-100">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-white"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-800">{exp.position}</h4>
                      <span className="text-xs text-slate-400 font-medium">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <div className="text-sm text-primary font-medium mb-2">{exp.company}</div>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
