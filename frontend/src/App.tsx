import ProjectOverview from "./pages/projects/ProjectOverview.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "@/pages/navigation/Navbar.tsx";
import AboutOverview from "@/pages/about/AboutOverview.tsx";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";
import HeroOverview from "@/pages/hero/HeroOverview.tsx";
import Footer from "@/pages/footer/Footer.tsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="from-background to-background-transition min-h-screen flex-col items-center bg-radial-[at_50%_0%] from-50%">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <Navbar></Navbar>
          <main className="flex flex-col items-center">
            <HeroOverview></HeroOverview>
            <AboutOverview></AboutOverview>
            {/*<ExperienceOverview></ExperienceOverview>*/}
            <ProjectOverview></ProjectOverview>
          </main>
          <Footer></Footer>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
