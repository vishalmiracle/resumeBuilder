import { useResume } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Trash2, Plus, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ResumeForm() {
  const { 
    data, 
    updatePersonalInfo, 
    addEducation, 
    removeEducation, 
    updateEducation,
    addExperience, 
    removeExperience, 
    updateExperience,
    updateSkills 
  } = useResume();

  return (
    <div className="h-full overflow-y-auto p-6 space-y-8 bg-white/50 backdrop-blur-sm">
      <div>
        <h2 className="text-2xl font-bold font-heading mb-1">Edit Resume</h2>
        <p className="text-muted-foreground text-sm">Update your information to see real-time changes.</p>
      </div>

      <Accordion type="multiple" defaultValue={['personal']} className="w-full space-y-4">
        
        {/* Personal Info */}
        <AccordionItem value="personal" className="border rounded-xl px-4 bg-white shadow-sm">
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-semibold text-lg">Personal Information</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2 pb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input 
                  id="fullName" 
                  value={data.personalInfo.fullName} 
                  onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input 
                  id="jobTitle" 
                  value={data.personalInfo.jobTitle} 
                  onChange={(e) => updatePersonalInfo({ jobTitle: e.target.value })}
                  placeholder="Software Engineer"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  value={data.personalInfo.email} 
                  onChange={(e) => updatePersonalInfo({ email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  value={data.personalInfo.phone} 
                  onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="address">Location</Label>
                <Input 
                  id="address" 
                  value={data.personalInfo.address} 
                  onChange={(e) => updatePersonalInfo({ address: e.target.value })}
                  placeholder="City, Country"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input 
                  id="website" 
                  value={data.personalInfo.website} 
                  onChange={(e) => updatePersonalInfo({ website: e.target.value })}
                  placeholder="www.johndoe.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea 
                id="summary" 
                value={data.personalInfo.summary} 
                onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
                placeholder="Brief summary of your career..."
                className="h-32 resize-none"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Experience */}
        <AccordionItem value="experience" className="border rounded-xl px-4 bg-white shadow-sm">
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-semibold text-lg">Work Experience</span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-6">
            <div className="space-y-6">
              <AnimatePresence>
                {data.experience.map((exp, index) => (
                  <motion.div 
                    key={exp.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 p-4 rounded-lg bg-slate-50 border border-slate-100 relative group"
                  >
                    <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" onClick={() => removeExperience(exp.id)} className="text-destructive hover:text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Company</Label>
                        <Input 
                          value={exp.company} 
                          onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Position</Label>
                        <Input 
                          value={exp.position} 
                          onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
                          placeholder="Job Title"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input 
                          value={exp.startDate} 
                          onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                          placeholder="MM/YYYY"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input 
                          value={exp.endDate} 
                          onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                          placeholder="Present or MM/YYYY"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea 
                        value={exp.description} 
                        onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                        placeholder="Describe your responsibilities and achievements..."
                        className="h-24 resize-none"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <Button onClick={addExperience} variant="outline" className="w-full border-dashed border-2 py-6 text-muted-foreground hover:text-primary hover:border-primary">
                <Plus className="h-4 w-4 mr-2" /> Add Experience
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Education */}
        <AccordionItem value="education" className="border rounded-xl px-4 bg-white shadow-sm">
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-semibold text-lg">Education</span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-6">
            <div className="space-y-6">
              <AnimatePresence>
                {data.education.map((edu, index) => (
                  <motion.div 
                    key={edu.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 p-4 rounded-lg bg-slate-50 border border-slate-100 relative group"
                  >
                    <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" onClick={() => removeEducation(edu.id)} className="text-destructive hover:text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>School</Label>
                        <Input 
                          value={edu.school} 
                          onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                          placeholder="University Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Degree</Label>
                        <Input 
                          value={edu.degree} 
                          onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                          placeholder="Bachelor's, Master's, etc."
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input 
                          value={edu.startDate} 
                          onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                          placeholder="YYYY"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input 
                          value={edu.endDate} 
                          onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                          placeholder="YYYY"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input 
                        value={edu.location} 
                        onChange={(e) => updateEducation(edu.id, { location: e.target.value })}
                        placeholder="City, Country"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <Button onClick={addEducation} variant="outline" className="w-full border-dashed border-2 py-6 text-muted-foreground hover:text-primary hover:border-primary">
                <Plus className="h-4 w-4 mr-2" /> Add Education
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem value="skills" className="border rounded-xl px-4 bg-white shadow-sm">
          <AccordionTrigger className="hover:no-underline py-4">
            <span className="font-semibold text-lg">Skills</span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-6">
            <div className="space-y-4">
              <Label>Skills List (comma separated)</Label>
              <Textarea 
                value={data.skills.join(', ')} 
                onChange={(e) => updateSkills(e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                placeholder="React, TypeScript, Figma, Project Management..."
                className="h-24 resize-none"
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {data.skills.map((skill, index) => (
                  <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
}
