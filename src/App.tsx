import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ResumeProvider } from "@/lib/store";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Builder from "@/pages/builder";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/builder" component={Builder} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResumeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ResumeProvider>
    </QueryClientProvider>
  );
}

export default App;
