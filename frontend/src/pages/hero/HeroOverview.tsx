import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button.tsx";
import { scrollTo } from "@/util/scrollTo.tsx";

export default function HeroOverview() {
  return (
    <section
      id="hero"
      className="flex min-h-screen w-full scroll-mt-20 flex-col justify-center p-4 md:mx-0 md:max-w-5xl"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="h1"
      >
        An insight into my journey as a developer.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.75,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mt-6 text-2xl"
      >
        A collection of projects I’ve built while learning and growing as a
        software engineer.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mt-6"
      >
        <Button
          variant="default"
          size="lg"
          onClick={() => scrollTo("projects")}
        >
          Explore projects
        </Button>
      </motion.div>
    </section>
  );
}
