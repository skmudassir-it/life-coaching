"use client";

// ──────────────────────────────────────────────
// NorthStar Life Coaching — Mobile Navigation
// ──────────────────────────────────────────────

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MAIN_NAV_LINKS, SITE_NAME } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
        <SheetHeader className="p-6 pb-4 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-lg font-bold">
            <FontAwesomeIcon
              icon={["fas", "compass"]}
              className="size-5 text-primary"
            />
            {SITE_NAME}
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col p-4 gap-1">
          {MAIN_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <FontAwesomeIcon
                  icon={["fas", "arrow-right"]}
                  className="size-3.5 ml-auto"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-background">
          <Button
            className="w-full"
            size="lg"
            render={
              <Link href="/contact" onClick={onClose}>
                <FontAwesomeIcon icon={["fas", "calendar-check"]} className="size-4" />
                Book a Free Discovery Call
              </Link>
            }
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
