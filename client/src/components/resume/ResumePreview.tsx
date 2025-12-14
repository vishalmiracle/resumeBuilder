import { useResume } from '@/lib/store';
import { ModernTemplate } from './templates/ModernTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';

export function ResumePreview() {
  const { data, selectedTemplate } = useResume();

  // Scale the preview to fit the container if needed, or just let it scroll
  // For now, we'll just render it. The print library handles the rest.
  
  return (
    <div className="w-full h-full bg-slate-500/10 overflow-auto p-8 flex justify-center items-start">
      <div 
        className="bg-white shadow-2xl transition-all duration-300 origin-top transform"
        style={{ 
          width: '210mm', 
          minHeight: '297mm',
          // A4 Size
        }}
      >
        {selectedTemplate === 'modern' && <ModernTemplate data={data} />}
        {selectedTemplate === 'minimal' && <MinimalTemplate data={data} />}
        {selectedTemplate === 'professional' && <ModernTemplate data={data} />} {/* Fallback for now */}
      </div>
    </div>
  );
}
