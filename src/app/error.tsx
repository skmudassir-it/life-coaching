"use client";

// ──────────────────────────────────────────────
// NorthStar Life Coaching — Error Boundary
// ──────────────────────────────────────────────

import { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-6 max-w-md">
        {/* Icon */}
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-destructive/10">
          <FontAwesomeIcon
            icon={["fas", "bolt"]}
            className="size-10 text-destructive"
          />
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Something Went Wrong
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            We encountered an unexpected error. Our team has been notified, but
            you can try again or return to the homepage.
          </p>
          {error.digest && (
            <p className="text-xs text-muted-foreground font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={reset}>
            <FontAwesomeIcon icon={["fas", "arrow-right"]} className="size-3.5" />
            Try Again
          </Button>
          <Button
            variant="outline"
            render={<Link href="/">Back to Home</Link>}
          />
        </div>
      </div>
    </div>
  );
}
