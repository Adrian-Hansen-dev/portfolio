import React from "react";

export interface InfiniteScrollContainerProps {
  children: React.ReactNode;
  onBottomReached: () => void;
  className?: string;
}
