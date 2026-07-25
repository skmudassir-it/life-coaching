import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "@/components/SectionHeading";
import {
  Compass,
  TrendingUp,
  Heart,
  Target,
  Sparkles,
  Users,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Video,
  MessageCircle,
  CalendarCheck,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NorthStar Life Coaching services — one-on-one coaching, career transitions, leadership development, workshops, and more tailored to your needs.",
};

const individualServices = [
  {
    icon: Compass,
    title: "Life Purpose Coaching",
    badge: "Most Popular",
    description:
      "A deep-dive into discovering your core values, passions, and purpose. Perfect for anyone feeling lost, stuck, or at a crossroads.",
    includes: [
      "12 sessions over 3 months",
      "Values assessment & clarity exercises",
      "Personal mission statement",
      "90-day action roadmap",
      "Unlimited email support between sessions",
      "Progress tracking & accountability",
    ],
    price: "$2,400",
    duration: "3 months",
  },
  {
    icon: TrendingUp,
    title: "Career Transition Coaching",
    description:
      "Whether you're changing industries, launching a business, or seeking a promotion, get the clarity and strategy you need to make the leap.",
    includes: [
      "8 sessions over 2 months",
      "Career aptitude & strengths assessment",
      "Resume & LinkedIn overhaul",
      "Interview preparation & practice",
      "Networking strategy",
      "Negotiation coaching",
    ],
    price: "$1,800",
    duration: "2 months",
  },
  {
    icon: Users,
    title: "Executive & Leadership Coaching",
    description:
      "Develop authentic leadership presence, emotional intelligence, and the skills to inspire and lead high-performing teams.",
    includes: [
      "16 sessions over 4 months",
      "360-degree feedback assessment",
      "Leadership style profiling",
      "Executive presence coaching",
      "Difficult conversation practice",
      "Strategic thinking exercises",
    ],
    price: "$3,600",
    duration: "4 months",
  },
  {
    icon: Heart,
    title: "Relationship Coaching",
    description:
      "Build healthier communication patterns, set better boundaries, and cultivate deeper, more fulfilling connections in all areas of life.",
    includes: [
      "10 sessions over 3 months",
      "Communication style assessment",
      "Boundary-setting framework",
      "Conflict resolution toolkit",
      "Attachment style exploration",
      "Relationship vision board",
    ],
    price: "$2,100",
    duration: "3 months",
  },
  {
    icon: Sparkles,
    title: "Confidence & Mindset Intensive",
    description:
      "An accelerated program to silence your inner critic, reframe limiting beliefs, and build the unshakeable confidence to pursue your biggest goals.",
    includes: [
      "6 sessions over 6 weeks",
      "Limiting belief audit",
      "Cognitive reframing toolkit",
      "Visualization & affirmation practice",
      "Confidence-building challenges",
      "Graduation celebration session",
    ],
    price: "$1,350",
    duration: "6 weeks",
  },
  {
    icon: Target,
    title: "Goal Accelerator",
    description:
      "Short-term, laser-focused coaching to achieve a specific goal. Ideal for project launches, fitness targets, or any defined milestone.",
    includes: [
      "4 sessions over 1 month",
      "Goal definition & milestone setting",
      "Weekly action plans",
      "Obstacle anticipation & mitigation",
      "Accountability check-ins",
      "Wrap-up & lessons-learned session",
    ],
    price: "$900",
    duration: "1 month",
  },
];

const workshops = [
  {
    icon: GraduationCap,
    title: "Find Your North Star",
    description:
      "A half-day workshop to uncover your core values, identify what truly matters, and create a vision for a purpose-driven life.",
    details: "3 hours | Up to 20 participants | Virtual or in-person",
  },
  {
    icon: Briefcase,
    title: "Career Clarity Bootcamp",
    description:
      "An intensive full-day program for professionals considering a career pivot. Leave with a concrete action plan and renewed confidence.",
    details: "6 hours | Up to 15 participants | Virtual or in-person",
  },
  {
    icon: Users,
    title: "Authentic Leadership Lab",
    description:
      "A two-day immersive workshop for managers and executives focused on developing authentic, empathetic, and effective leadership skills.",
    details: "2 days | Up to 12 participants | In-person",
  },
  {
    icon: Heart,
    title: "Resilience & Well-Being",
    description:
      "Learn evidence-based techniques for building mental resilience, managing stress, and cultivating sustainable well-being.",
    details: "4 hours | Up to 30 participants | Virtual or in-person",
  },
];

const faq = [
  {
    question: "How do I know which program is right for me?",
    answer:
      "The best way is to book a free discovery call. We'll discuss your goals, challenges, and what you're looking for, and I'll recommend the program that fits best. There's no obligation to commit.",
  },
  {
    question: "What happens during a typical coaching session?",
    answer:
      "Sessions are 60 minutes via video call. We start with a check-in on progress since our last meeting, dive into the main topic or goal for the session, and end with clear action items and commitments for the week ahead.",
  },
  {
    question: "Is coaching covered by insurance?",
    answer:
      "Life coaching is generally not covered by health insurance. However, some employers offer coaching as part of their professional development or wellness benefits. I can provide receipts for flexible spending accounts (FSA/HSA) in some cases.",
  },
  {
    question: "Can I switch programs mid-way?",
    answer:
      "Yes, coaching is flexible. If your needs change or we discover a different focus would serve you better, we can adjust your program. Your growth is always the priority.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, all programs can be paid in monthly installments. I want coaching to be accessible, so let's discuss what works for your budget during our discovery call.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Coaching Programs Designed for Real Results
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every program is tailored to your unique journey. Whether you need clarity,
              confidence, or a complete career shift, there&apos;s a path that&apos;s right
              for you.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Coaching */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="One-on-One Coaching"
            title="Personalized Programs for Every Stage"
            description="Each program includes structured sessions, practical exercises, and ongoing support. Choose the path that matches where you are."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {individualServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="relative flex flex-col">
                  {service.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge>{service.badge}</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <Separator />
                    <div>
                      <p className="mb-2 text-sm font-semibold">What&apos;s Included:</p>
                      <ul className="space-y-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="size-4" />
                        {service.duration}
                      </div>
                      <span className="font-heading text-xl font-bold text-primary">
                        {service.price}
                      </span>
                    </div>
                  </CardContent>
                  <div className="border-t px-6 py-4">
                    <Button className="w-full" render={<Link href="/contact" />}>
                      Get Started
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y bg-muted/30 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Process"
            title="How Coaching Works"
            description="A clear, structured approach that adapts to your unique journey."
          />
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                icon: CalendarCheck,
                title: "Discovery Call",
                description:
                  "A free 30-minute conversation to explore your goals, answer your questions, and see if we're a fit.",
              },
              {
                step: "02",
                icon: Target,
                title: "Personalized Plan",
                description:
                  "We design a coaching roadmap tailored to your specific goals, timeline, and learning style.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Transform & Thrive",
                description:
                  "Through regular sessions, exercises, and accountability, we turn insight into lasting change.",
              },
            ].map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
                    <StepIcon className="size-7 text-primary" />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                      Step {step.step}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Session Format */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              { icon: Video, title: "Video Calls", desc: "60-minute sessions via Zoom or your preferred platform" },
              { icon: MessageCircle, title: "Ongoing Support", desc: "Unlimited email & messaging between scheduled sessions" },
              { icon: DollarSign, title: "Flexible Payment", desc: "Monthly payment plans available for all programs" },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="border-y bg-muted/30 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Workshops"
            title="Group Programs & Workshops"
            description="Interactive group experiences for teams and organizations. Custom programs available on request."
          />
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {workshops.map((workshop) => {
              const Icon = workshop.icon;
              return (
                <Card key={workshop.title}>
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{workshop.title}</CardTitle>
                    <CardDescription>{workshop.description}</CardDescription>
                  </CardHeader>
                  <div className="border-t px-6 py-3">
                    <p className="text-xs text-muted-foreground">{workshop.details}</p>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" render={<Link href="/contact" />}>
              Inquire About Workshops
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know before getting started."
          />
          <div className="mx-auto mt-16 max-w-3xl divide-y">
            {faq.map((item) => (
              <div key={item.question} className="py-6 first:pt-0 last:pb-0">
                <h3 className="font-heading text-lg font-semibold">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary/5 py-20 text-center sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s talk. In a free 30-minute call, we&apos;ll discuss your goals and
              find the right path forward — no commitment, no pressure.
            </p>
            <Button size="lg" render={<Link href="/contact" />}>
              Book Your Free Discovery Call
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
