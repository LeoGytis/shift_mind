import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  // Initialize with false - this helps prevent hydration mismatch
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      setMatches(media.matches);

      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }
  }, [query]);

  return matches;
};

export const useIsMobile = () => useMediaQuery("(max-width: 768px)");
