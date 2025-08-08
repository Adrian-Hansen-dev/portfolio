import { InfiniteScrollContainerProps } from "./types.tsx";
import { useInView } from "react-intersection-observer";

export default function InfiniteScrollContainer({
  children,
  onBottomReached,
  className,
}: InfiniteScrollContainerProps) {
  const { ref } = useInView({
    rootMargin: "50px",
    onChange: (inView) => {
      if (inView) {
        onBottomReached();
      }
    },
  });

  return (
    <div className={className}>
      {children}
      <div ref={ref} className="col-span-full" />
    </div>
  );
}
