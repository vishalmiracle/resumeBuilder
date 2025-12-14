import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50">
      <Card className="w-full max-w-md mx-4 border-slate-200 shadow-xl">
        <CardContent className="pt-6 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-red-500" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold font-heading text-slate-900">Page Not Found</h1>
            <p className="text-slate-500">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>

          <Link href="/">
            <Button className="w-full gap-2">
              <ArrowLeft className="h-4 w-4" /> Return to Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
