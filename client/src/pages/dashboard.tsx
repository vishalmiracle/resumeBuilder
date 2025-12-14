import { Link, useLocation } from 'wouter';
import { useResume } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TemplateType } from '@/types/resume';
import { Check, ArrowRight, FileText, LayoutTemplate, Briefcase } from 'lucide-react';

const templates: { id: TemplateType; name: string; description: string; color: string }[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean split-layout with a sidebar. Perfect for tech and creative roles.',
    color: 'bg-slate-900',
  },
  {
    id: 'minimal',
    name: 'Classic Minimalist',
    description: 'Elegant top-down layout with serif typography. Best for traditional corporate roles.',
    color: 'bg-stone-200',
  },
  // Placeholder for future templates
  {
    id: 'professional',
    name: 'Executive',
    description: 'Bold headers and structured sections. Ideal for management positions.',
    color: 'bg-blue-900',
  },
];

export default function Dashboard() {
  const { setTemplate } = useResume();
  const [, setLocation] = useLocation();

  const handleSelectTemplate = (id: TemplateType) => {
    setTemplate(id);
    setLocation('/builder');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/50">
      <header className="px-6 py-6 border-b border-slate-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">R</div>
            <span className="font-heading font-bold text-xl tracking-tight">Resumify</span>
          </div>
          <Button variant="ghost" size="sm">About</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-slate-900 leading-tight">
            Build your professional resume in <span className="text-primary">minutes</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Choose a template, enter your details, and export a polished PDF. Completely free, no account required.
          </p>
          <Button size="lg" onClick={() => handleSelectTemplate('modern')} className="cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            Start Building Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="group overflow-hidden border-slate-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <div className={`h-48 ${template.color} relative flex items-center justify-center`}>
                 {/* Abstract visual for template thumbnail */}
                 <div className="w-32 h-40 bg-white shadow-2xl rounded opacity-90 transform group-hover:scale-105 transition-transform duration-500 flex flex-col p-2 gap-2">
                    <div className="w-full h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-full h-px bg-slate-100 mt-2"></div>
                    <div className="flex gap-1">
                        <div className="w-1/3 h-20 bg-slate-100 rounded"></div>
                        <div className="w-2/3 h-20 bg-slate-50 rounded"></div>
                    </div>
                 </div>
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {template.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">{template.description}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSelectTemplate(template.id)} className="cursor-pointer w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Select Template
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                    <LayoutTemplate className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Professional Templates</h3>
                <p className="text-slate-600 text-sm">Designed by experts to pass ATS systems and catch recruiters' eyes.</p>
            </div>
            <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Real-time Preview</h3>
                <p className="text-slate-600 text-sm">See changes instantly as you edit. No guessing how it will look.</p>
            </div>
            <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto">
                    <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Export to PDF</h3>
                <p className="text-slate-600 text-sm">Download high-quality PDFs ready for job applications.</p>
            </div>
        </div>
      </main>
    </div>
  );
}
