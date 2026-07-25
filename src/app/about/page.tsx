import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import {
  Compass,
  Heart,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  ArrowRight,
  Award,
  BookOpen,
  Globe,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NorthStar Life Coaching — our mission, values, and the experienced coach dedicated to helping you find clarity and purpose.",
};

const values = [
  {
    icon: Compass,
    title: "Authenticity",
    description:
      "We believe the most fulfilling lives are built on honesty with yourself about who you are, what you value, and what you truly want.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Real growth happens in an environment of genuine care. We meet you with empathy, curiosity, and unconditional positive regard.",
  },
  {
    icon: Lightbulb,
    title: "Empowerment",
    description:
      "You already have the answers within you. Our role is to ask the right questions and provide tools that unlock your innate wisdom.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Insight without action fades. Every session includes concrete action steps and accountability so your transformation becomes real.",
  },
  {
    icon: Globe,
    title: "Inclusivity",
    description:
      "We celebrate diversity in all its forms and are committed to creating a safe, respectful space for every client, regardless of background.",
  },
  {
    icon: Sparkles,
    title: "Growth Mindset",
    description:
      "We practice what we preach. We're lifelong learners who continuously invest in our own development to better serve you.",
  },
];

const timeline = [
  {
    year: "2013",
    title: "Coaching Journey Begins",
    description:
      "Earned certification from the International Coaching Federation and began one-on-one practice after a decade in corporate leadership.",
  },
  {
    year: "2015",
    title: "NorthStar Founded",
    description:
      "Launched NorthStar Life Coaching in San Francisco with a mission to help professionals find clarity and purpose in their careers and lives.",
  },
  {
    year: "2017",
    title: "500+ Clients Milestone",
    description:
      "Crossed the milestone of coaching over 500 individuals. Expanded to offer group workshops and corporate leadership programs.",
  },
  {
    year: "2020",
    title: "Virtual Coaching Expansion",
    description:
      "Pioneered a fully virtual coaching model reaching clients across the United States and internationally with the same depth of connection.",
  },
  {
    year: "2024",
    title: "Advanced Certifications",
    description:
      "Completed advanced certifications in Positive Psychology, NLP, and Executive Coaching. Published methodology in coaching journals.",
  },
];

const certifications = [
  "ICF Professional Certified Coach (PCC)",
  "Certified NLP Master Practitioner",
  "Certified Positive Psychology Coach",
  "MBTI Certified Practitioner",
  "Certified Executive Coach (CEC)",
  "Emotional Intelligence (EQ-i 2.0) Certified",
  "Certified Career Coach",
  "Certificate in Applied Neuroscience",
  "Certified Team Coach",
  "Certified Mindfulness Teacher",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              About NorthStar
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Guiding You Toward a Life of Purpose & Fulfillment
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m passionate about helping people reconnect with what truly matters,
              overcome the obstacles in their way, and build lives they&apos;re genuinely
              excited to wake up to.
            </p>
          </div>
        </div>
      </section>

      {/* Coach Bio */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
            {/* Photo placeholder */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/30 to-muted">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex size-24 items-center justify-center rounded-full bg-background/80 backdrop-blur">
                  <Users className="size-12 text-primary" />
                </div>
                <p className="mt-4 text-center font-heading text-lg font-semibold">
                  Your Coach
                </p>
                <p className="text-sm text-muted-foreground">Alex Morgan, PCC</p>
              </div>
            </div>
            <div className="space-y-6">
              <Badge variant="secondary">Meet Alex</Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Hi, I&apos;m Alex Morgan
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  After spending over a decade in corporate leadership roles — from
                  startup teams to Fortune 500 boardrooms — I discovered my true calling
                  wasn&apos;t climbing the ladder. It was helping others discover and walk
                  their own path.
                </p>
                <p>
                  In 2015, I left the corporate world and founded NorthStar Life Coaching.
                  Since then, I&apos;ve had the privilege of working with over 500
                  individuals — from C-suite executives to recent graduates, from
                  entrepreneurs to artists. Every single person has taught me something
                  new about resilience, courage, and the human capacity for change.
                </p>
                <p>
                  My coaching philosophy is simple: you already have the answers. My job
                  is to ask the right questions, provide structure and accountability, and
                  hold up a mirror so you can see your own brilliance more clearly.
                </p>
                <p>
                  When I&apos;m not coaching, you&apos;ll find me hiking the Marin
                  Headlands, attempting new recipes in my tiny San Francisco kitchen, or
                  curled up with a good book and my rescue dog, Luna.
                </p>
              </div>
              <Button render={<Link href="/contact" />}>
                Work With Me
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y bg-muted/30 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="The Principles That Guide Every Session"
            description="These six values form the foundation of every coaching relationship. They're not just words — they're commitments we make to you."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="flex flex-col items-center pt-6">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Journey"
            title="From Passion to Profession"
            description="A timeline of milestones that shaped NorthStar into what it is today."
          />
          <div className="relative mx-auto mt-16 max-w-3xl">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col gap-4 sm:flex-row ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-1 size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background sm:left-1/2" />
                  {/* Content */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <span className="font-heading text-lg font-bold text-primary">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-y bg-muted/30 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Credentials"
            title="Certifications & Expertise"
            description="Continuous learning is at the heart of great coaching. Here are some of the credentials that inform my practice."
          />
          <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg border bg-background p-4">
                <Award className="size-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center text-sm text-muted-foreground">
            <BookOpen className="mr-1 inline size-4" />
            Member of the International Coaching Federation (ICF) since 2013
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Write Your Next Chapter Together
            </h2>
            <p className="text-lg text-muted-foreground">
              The best way to know if we&apos;re a fit is to talk. Book a free 30-minute
              discovery call and we can explore what coaching could look like for you.
            </p>
            <Button size="lg" render={<Link href="/contact" />}>
              Start the Conversation
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
