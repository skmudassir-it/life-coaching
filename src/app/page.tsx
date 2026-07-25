import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import {
  Compass,
  Target,
  Heart,
  Users,
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CalendarCheck,
  Quote,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Clarity & Direction",
    description:
      "Feeling stuck or uncertain about your next chapter? Together we'll uncover what truly matters to you and create a roadmap for a meaningful, purpose-driven life.",
  },
  {
    icon: TrendingUp,
    title: "Career Transitions",
    description:
      "Navigate career pivots with confidence. Whether you're changing industries, launching a business, or seeking advancement, I'll help you align work with purpose.",
  },
  {
    icon: Heart,
    title: "Relationship Coaching",
    description:
      "Build deeper connections and healthier communication patterns. Learn to set boundaries, express needs, and cultivate fulfilling relationships in every area of life.",
  },
  {
    icon: Target,
    title: "Goal Achievement",
    description:
      "Transform big dreams into achievable milestones. We'll break down your vision with accountability structures that keep you moving forward, week by week.",
  },
  {
    icon: Sparkles,
    title: "Mindset & Confidence",
    description:
      "Silence your inner critic and build unshakeable self-belief. Using proven techniques, we'll reframe limiting beliefs and cultivate a mindset of possibility.",
  },
  {
    icon: Users,
    title: "Leadership Coaching",
    description:
      "Develop authentic leadership presence. Learn to inspire teams, navigate difficult conversations, and lead with empathy, clarity, and conviction.",
  },
];

const testimonials = [
  {
    quote:
      "Working with NorthStar was the single best investment I've ever made in myself. In six months, I left a career that drained me, launched my own consultancy, and rediscovered joy. I can't recommend this enough.",
    author: "Sarah Chen",
    role: "Founder, BrightPath Consulting",
  },
  {
    quote:
      "I was drifting through life without direction. My coach helped me identify my core values and align my daily actions with them. The transformation has been nothing short of remarkable.",
    author: "Marcus Johnson",
    role: "Product Leader, Tech",
  },
  {
    quote:
      "The leadership coaching program completely changed how I show up for my team. I'm more confident, more empathetic, and more effective. My team's engagement scores prove it.",
    author: "Priya Patel",
    role: "VP of Engineering",
  },
];

const stats = [
  { value: "500+", label: "Clients Coached" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Certifications" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="mr-1 size-3" />
              Transform Your Life Today
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Find Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                True North
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Professional life coaching that helps you gain clarity, overcome what holds you
              back, and build a life aligned with your deepest values and aspirations.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" render={<Link href="/contact" />}>
                Book Your Free Discovery Call
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" render={<Link href="/about" />}>
                Learn More
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Coaching Tailored to You"
            description="Whether you're navigating a career transition, seeking deeper purpose, or striving to become a better leader, I offer personalized coaching to meet you exactly where you are."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" variant="outline" render={<Link href="/services" />}>
              Explore All Services
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="border-y bg-muted/30 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
            {/* Image placeholder */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-background/80 backdrop-blur">
                    <Compass className="size-10 text-primary" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">Your North Star awaits</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Badge variant="secondary">Meet Your Coach</Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                A partner in your journey toward a more fulfilling life
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                With over a decade of coaching experience and credentials from the International
                Coaching Federation (ICF), I've helped hundreds of individuals unlock their
                potential and create lasting change. My approach blends evidence-based
                psychology with practical, actionable strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ICF Certified", "NLP Practitioner", "Positive Psychology", "MBTI Certified", "Trained Coach"].map(
                  (cert) => (
                    <Badge key={cert} variant="outline">
                      <ShieldCheck className="mr-1 size-3" />
                      {cert}
                    </Badge>
                  )
                )}
              </div>
              <Button render={<Link href="/about" />}>
                Learn More About Me
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What Clients Are Saying"
            description="Real stories from people who have transformed their lives through coaching."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.author} className="relative flex flex-col">
                <CardContent className="flex-1 pt-6">
                  <Quote className="mb-3 size-6 text-primary/40" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </CardContent>
                <div className="border-t px-6 py-4">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1 text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" render={<Link href="/testimonials" />}>
              Read More Stories
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-y bg-primary/5">
        <div className="container relative mx-auto px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-6">
            <CalendarCheck className="mx-auto size-12 text-primary" />
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              The first step is a free, no-obligation discovery call. We&apos;ll discuss where
              you are, where you want to be, and whether we&apos;re a good fit to work together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button size="lg" render={<Link href="/contact" />}>
                Schedule Your Free Call
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="ghost" render={<Link href="/services" />}>
                Browse Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
