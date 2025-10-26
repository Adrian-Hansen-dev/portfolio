import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button.tsx";
import { scrollTo } from "@/util/scrollTo.tsx";

export default function HeroOverview() {
  return (
    <section
      id="hero"
      className="flex min-h-screen w-full scroll-mt-20 justify-center"
    >
      <div className="from-background dark:to-transition2 dark:via-transition to-transition via-transition2 absolute inset-0 -z-10 h-screen bg-linear-to-t from-0% via-50% to-100%">
        <svg
          className="fixed top-0 left-0 h-0 w-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <svg width="0" height="0">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              result="noise"
            />
            <feComposite
              in="SourceGraphic"
              in2="noise"
              operator="arithmetic"
              k1="0.4"
              k2="0.7"
              k3="0"
              k4="0"
            />
          </filter>
        </svg>

        <div className="absolute inset-0 -z-8 h-full w-full overflow-hidden blur-2xl [filter:url(#goo)_blur(20px)_url(#grain)]">
          <div className="animate-circle1 absolute top-[10%] left-[10%] h-[80%] w-[80%] origin-center bg-[radial-gradient(circle_at_center,rgba(var(--color1),0.8)_0,rgba(var(--color1),0)_50%)] opacity-100 mix-blend-hard-light"></div>
          <div className="animate-circle2 absolute top-[10%] left-[10%] h-[80%] w-[80%] origin-[calc(50%-400px)] bg-[radial-gradient(circle_at_center,rgba(var(--color2),0.8)_0,rgba(var(--color2),0)_50%)] opacity-100 mix-blend-hard-light"></div>
          <div className="animate-circle3 absolute top-[calc(10%+200px)] left-[calc(10%-500px)] h-[80%] w-[80%] origin-[calc(50%+400px)] bg-[radial-gradient(circle_at_center,rgba(var(--color3),0.8)_0,rgba(var(--color3),0)_50%)] opacity-100 mix-blend-hard-light"></div>
          <div className="animate-circle4 absolute top-[10%] left-[10%] h-[80%] w-[80%] origin-[calc(50%-200px)] bg-[radial-gradient(circle_at_center,rgba(var(--color4),0.8)_0,rgba(var(--color4),0)_50%)] opacity-70 mix-blend-hard-light"></div>
          <div className="animate-circle5 absolute top-[10%] left-[10%] h-[160%] w-[160%] origin-[calc(50%-800px)_calc(50%+200px)] bg-[radial-gradient(circle_at_center,rgba(var(--color5),0.8)_0,rgba(var(--color5),0)_50%)] opacity-100 mix-blend-hard-light"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-4 md:max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="h1 md:text-6xl"
        >
          An insight into my journey as a developer.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
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
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
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
      </div>
    </section>
  );
}
