import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/custom/Loader.tsx";

export default function AboutOverview() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/user/1`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center p-4 md:max-w-5xl"
    >
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="text-muted-foreground bg-card flex aspect-square w-full items-center justify-center rounded-2xl">
            Canvas
          </div>
          <div>
            <h3 className="h2">
              {data.firstName} {data.lastName}
            </h3>
            <p className="p1 mb-3">{data.profession}</p>
            <p className="p2">{data.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
