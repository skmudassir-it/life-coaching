import Link from "next/link";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-6 max-w-md">
        {/* Icon */}
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-muted">
          <FontAwesomeIcon
            icon={["fas", "compass"]}
            className="size-10 text-muted-foreground"
          />
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            404
          </h1>
          <h2 className="text-xl font-semibold text-foreground">
            Lost Your Bearings?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on course.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            render={
              <Link href="/">
                <FontAwesomeIcon icon={["fas", "arrow-right"]} className="size-3.5" />
                Back to Home
              </Link>
            }
          />
          <Button
            variant="outline"
            render={<Link href="/contact">Contact Us</Link>}
          />
        </div>
      </div>
    </div>
  );
}
