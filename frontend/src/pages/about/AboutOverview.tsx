import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/custom/Loader.tsx";

export default function AboutOverview() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/user/1");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <section
      id="about"
      className="bg-card my-4 h-screen w-full scroll-mt-20 rounded-2xl p-10 md:mx-0 md:max-w-5xl"
    >
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <h2 className="h2">
            {data.firstName} {data.lastName}
          </h2>
          <h3 className="h3">{data.profession}</h3>
          <p className="p">{data.description}</p>
        </>
      )}
    </section>
  );
}
