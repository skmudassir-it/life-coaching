import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  MessageCircle,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NorthStar Life Coaching. Book a free discovery call, ask a question, or reach out to start your coaching journey.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@northstarcoaching.com",
    href: "mailto:hello@northstarcoaching.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA 94105",
    href: "https://maps.google.com/?q=San+Francisco+CA+94105",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon–Fri: 9 AM – 6 PM PT",
    href: null,
  },
];

const benefits = [
  "Understand what coaching can do for you",
  "Discuss your specific goals and challenges",
  "Get a feel for my coaching style and approach",
  "Ask any questions with zero pressure",
  "Walk away with at least one actionable insight",
  "Decide if we're a good fit — no obligation",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;re ready to begin coaching or just curious to learn more,
              I&apos;d love to hear from you. Fill out the form or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name *
                        </label>
                        <Input id="firstName" placeholder="Jane" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name *
                        </label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="jane@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="(555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="interest" className="text-sm font-medium">
                        I&apos;m Interested In *
                      </label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="discovery">Free Discovery Call</SelectItem>
                          <SelectItem value="life-purpose">Life Purpose Coaching</SelectItem>
                          <SelectItem value="career">Career Transition Coaching</SelectItem>
                          <SelectItem value="executive">Executive Coaching</SelectItem>
                          <SelectItem value="confidence">Confidence Intensive</SelectItem>
                          <SelectItem value="relationship">Relationship Coaching</SelectItem>
                          <SelectItem value="goal">Goal Accelerator</SelectItem>
                          <SelectItem value="workshop">Workshop / Group Program</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me a bit about yourself, what you're looking for, and any questions you have..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button className="w-full sm:w-auto" size="lg">
                      <Send className="size-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6 lg:col-span-2">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div key={item.title} className="flex gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.title}</p>
                          <p className="text-sm font-medium">{item.value}</p>
                        </div>
                      </div>
                    );
                    if (item.href) {
                      return (
                        <Link key={item.title} href={item.href} className="block rounded-md transition-colors hover:bg-muted/50">
                          {content}
                        </Link>
                      );
                    }
                    return content;
                  })}
                </CardContent>
              </Card>

              {/* Discovery Call Card */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6 space-y-4">
                  <CalendarCheck className="size-8 text-primary" />
                  <div>
                    <h3 className="font-heading text-base font-semibold">
                      Book a Discovery Call
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A free 30-minute conversation to explore your goals and see if
                      we&apos;re a good fit.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Schedule Now
                    <ArrowRight className="size-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Chat */}
              <Card>
                <CardContent className="flex items-center gap-3 pt-6">
                  <MessageCircle className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Prefer a quick chat?</p>
                    <p className="text-xs text-muted-foreground">
                      Call or text (555) 123-4567 during business hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="border-y bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-2xl font-bold">Based in San Francisco, Serving Clients Worldwide</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              All coaching sessions are conducted virtually, so you can work with me from
              anywhere in the world. I primarily serve clients in Pacific, Mountain, Central,
              and Eastern time zones.
            </p>
            {/* Map placeholder */}
            <div className="mt-8 aspect-[2/1] w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/20">
              <div className="flex h-full flex-col items-center justify-center">
                <MapPin className="size-10 text-primary/50" />
                <p className="mt-2 text-sm text-muted-foreground">San Francisco Bay Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
