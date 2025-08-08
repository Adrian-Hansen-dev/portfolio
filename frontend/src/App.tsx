import ProjectOverview from "./pages/projects/ProjectOverview.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="flex justify-center">
      <QueryClientProvider client={queryClient}>
        <ProjectOverview></ProjectOverview>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
