import ProjectOverview from "./pages/projects/ProjectOverview.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "@/pages/navigation/Navbar.tsx";
import AboutOverview from "@/pages/about/AboutOverview.tsx";
import ExperienceOverview from "@/pages/experience/ExperienceOverview.tsx";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-background flex min-h-screen justify-center">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <Navbar></Navbar>
          <main className="pt-18">
            <AboutOverview></AboutOverview>
            <ExperienceOverview></ExperienceOverview>
            <ProjectOverview></ProjectOverview>
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
