// ──────────────────────────────────────────────
// NorthStar Life Coaching — Loading State
// ──────────────────────────────────────────────

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="flex flex-col items-center gap-4">
        {/* Animated compass icon */}
        <div className="relative animate-pulse">
          <FontAwesomeIcon
            icon={["fas", "compass"]}
            className="size-12 text-primary/40"
          />
        </div>

        {/* Loading text */}
        <div className="space-y-2 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Charting your course...
          </p>
          {/* Skeleton indicator */}
          <div className="flex items-center justify-center gap-1">
            <span className="sr-only">Loading</span>
            <span className="size-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:0ms]" />
            <span className="size-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:150ms]" />
            <span className="size-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    </div>
  );
}
