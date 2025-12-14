import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'wouter';
import { ResumeForm } from '@/components/resume/ResumeForm';
import { ResumePreview } from '@/components/resume/ResumePreview';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';

export default function Builder() {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const printRef = useRef<HTMLDivElement>(null);

  const triggerPrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'My Resume',
    onAfterPrint: () => {
        toast({
            title: "Resume Exported",
            description: "Your resume has been successfully generated.",
        })
    }
  });

  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b bg-white flex items-center justify-between px-6 shrink-0 z-20">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Templates
            </Button>
          </Link>
          <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block"></div>
          <h1 className="font-heading font-semibold text-lg hidden md:block">Resume Builder</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => triggerPrint()} className="gap-2 shadow-sm">
            <Download className="h-4 w-4" /> Export PDF
          </Button>
        </div>
      </header>

      {/* Main Builder Area */}
      <div className="flex-1 overflow-hidden">
        {isMobile ? (
             <div className="h-full overflow-y-auto">
                 <div className="p-4">
                     <div className="mb-8">
                         <ResumeForm />
                     </div>
                     <div className="border-t pt-8">
                         <h3 className="font-bold mb-4">Preview</h3>
                         <div ref={printRef}>
                            <ResumePreview />
                         </div>
                     </div>
                 </div>
             </div>
        ) : (
            <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={40} minSize={30} maxSize={50} className="bg-white z-10 shadow-xl">
                <ResumeForm />
            </ResizablePanel>
            
            <ResizableHandle withHandle />
            
            <ResizablePanel defaultSize={60}>
                {/* 
                  The ref here captures the container around ResumePreview.
                  We need to ensure that when this is printed, it takes the size of the content.
                */}
                <div className="h-full overflow-hidden" ref={printRef}> 
                    <ResumePreview />
                </div>
            </ResizablePanel>
            </ResizablePanelGroup>
        )}
      </div>
    </div>
  );
}
