import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import {
  Star,
  Quote,
  ArrowRight,
  Briefcase,
  Heart,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what clients say about their experience with NorthStar Life Coaching. Real stories of transformation, clarity, and growth.",
};

const testimonials = [
  {
    quote:
      "Working with NorthStar was the single best investment I've ever made in myself. In six months, I left a career that drained me, launched my own consultancy, and rediscovered joy. I can't recommend this enough.",
    author: "Sarah Chen",
    role: "Founder, BrightPath Consulting",
    program: "Career Transition",
    icon: Briefcase,
  },
  {
    quote:
      "I was drifting through life without direction. My coach helped me identify my core values and align my daily actions with them. The transformation has been nothing short of remarkable. I wake up excited now.",
    author: "Marcus Johnson",
    role: "Product Leader, Tech",
    program: "Life Purpose",
    icon: Sparkles,
  },
  {
    quote:
      "The leadership coaching program completely changed how I show up for my team. I'm more confident, more empathetic, and more effective. My team's engagement scores prove it. Best professional development I've done.",
    author: "Priya Patel",
    role: "VP of Engineering",
    program: "Executive Coaching",
    icon: TrendingUp,
  },
  {
    quote:
      "I came to coaching skeptical about whether anyone could help me untangle the mess I was in. My coach created such a safe, non-judgmental space that I was able to be completely honest — maybe for the first time ever. That's where the real work began.",
    author: "David Kim",
    role: "Creative Director",
    program: "Life Purpose",
    icon: Heart,
  },
  {
    quote:
      "After my divorce, I felt like my whole identity had been erased. Coaching gave me the tools to rebuild myself from the ground up. Today I have a life I genuinely love, and I'm more 'me' than I've ever been.",
    author: "Rachel Torres",
    role: "Marketing Executive",
    program: "Confidence Intensive",
    icon: Heart,
  },
  {
    quote:
      "I was on the verge of burnout when I reached out. The coaching process helped me set boundaries, rediscover my priorities, and actually enjoy my work again. My only regret is not starting sooner.",
    author: "James O'Brien",
    role: "Software Engineering Manager",
    program: "Executive Coaching",
    icon: TrendingUp,
  },
  {
    quote:
      "I'd been wanting to start my own business for years but fear kept holding me back. My coach held me accountable and helped me break the big scary goal into manageable steps. Six months later, I launched. Two years later, I'm thriving.",
    author: "Amara Williams",
    role: "Founder, Root & Rise Wellness",
    program: "Career Transition",
    icon: Briefcase,
  },
  {
    quote:
      "What sets NorthStar apart is how deeply personal the coaching feels. It's not one-size-fits-all advice or generic motivation — it's a genuine partnership. Every session felt crafted exactly for where I was that week.",
    author: "Elena Voss",
    role: "Nonprofit Director",
    program: "Life Purpose",
    icon: Sparkles,
  },
  {
    quote:
      "As an introverted leader, I always felt like I had to pretend to be someone I wasn't. My coach helped me see that my quiet, thoughtful approach is actually a strength. Leading authentically has made all the difference.",
    author: "Tom Nakamura",
    role: "CTO, Fintech Startup",
    program: "Executive Coaching",
    icon: TrendingUp,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Real Stories, Real Transformation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nothing speaks louder than the experiences of people who&apos;ve walked
              this path. Here&apos;s what clients have to say about their journey with
              NorthStar Life Coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => {
              const Icon = t.icon;
              return (
                <Card key={t.author} className="flex flex-col">
                  <CardContent className="flex-1 pt-6">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-3.5" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {t.program}
                      </Badge>
                    </div>
                    <Quote className="mb-3 size-5 text-primary/30" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </CardContent>
                  <div className="border-t px-6 py-4">
                    <div className="mb-1 flex gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="border-y bg-primary/5 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { value: "98%", label: "Would Recommend" },
              { value: "94%", label: "Reported Goal Achievement" },
              { value: "4.9/5", label: "Average Client Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-lg text-muted-foreground">
              Your transformation starts with a single conversation. Book a free discovery
              call and let&apos;s explore what&apos;s possible together.
            </p>
            <Button size="lg" render={<Link href="/contact" />}>
              Start Your Journey
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
