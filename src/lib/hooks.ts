"use client";

// ──────────────────────────────────────────────
// NorthStar Life Coaching — Custom React Hooks
// ──────────────────────────────────────────────

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Tracks the current scroll position.
 * @returns The current vertical scroll position in pixels.
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollY;
}

/**
 * Returns true once the user has scrolled past a given threshold.
 * @param threshold - Pixel threshold to trigger the scrolled state.
 */
export function useScrolledPast(threshold: number = 50): boolean {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
}

/**
 * Tracks whether a media query matches.
 * @param query - CSS media query string (e.g., "(min-width: 768px)").
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/**
 * Convenience hooks for common breakpoints.
 */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

export function useIsTablet(): boolean {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}

export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}

/**
 * Detects whether the user prefers reduced motion.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/**
 * Tracks whether an element is visible in the viewport using IntersectionObserver.
 * @param options - IntersectionObserver options.
 * @returns A ref to attach to the target element and a boolean indicating visibility.
 */
export function useInView(
  options: IntersectionObserverInit = { threshold: 0.1 }
): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
}

/**
 * Debounces a value by a given delay.
 * @param value - The value to debounce.
 * @param delay - Delay in milliseconds.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Returns the previous value of a state or prop.
 * @param value - The current value.
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
