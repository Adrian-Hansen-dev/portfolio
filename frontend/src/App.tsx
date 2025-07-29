import ProjectOverview from "./pages/projects/ProjectOverview.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProjectOverview></ProjectOverview>
      </QueryClientProvider>
    </>
  );
}

export default App;
