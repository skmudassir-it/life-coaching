import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  BookOpen,
  Tag,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tips, and stories about personal growth, career development, mindset, and living a purpose-driven life from NorthStar Life Coaching.",
};

const posts = [
  {
    slug: "finding-clarity-in-times-of-transition",
    title: "Finding Clarity in Times of Transition: A Practical Guide",
    excerpt:
      "Major life transitions can feel disorienting. Here's a step-by-step framework for navigating uncertainty and finding your footing when everything feels up in the air.",
    date: "July 15, 2026",
    readTime: "6 min read",
    category: "Personal Growth",
    author: "Alex Morgan",
    image: null,
  },
  {
    slug: "the-imposter-syndrome-antidote",
    title: "The Imposter Syndrome Antidote: 5 Strategies That Actually Work",
    excerpt:
      "Feel like a fraud despite your accomplishments? You're not alone. Learn five evidence-backed strategies to quiet your inner critic and own your success.",
    date: "June 28, 2026",
    readTime: "8 min read",
    category: "Mindset",
    author: "Alex Morgan",
    image: null,
  },
  {
    slug: "designing-a-career-you-love",
    title: "Designing a Career You Love: Beyond the Paycheck",
    excerpt:
      "A fulfilling career isn't about finding the perfect job — it's about designing work that aligns with your values, strengths, and vision for your life.",
    date: "June 12, 2026",
    readTime: "7 min read",
    category: "Career",
    author: "Alex Morgan",
    image: null,
  },
  {
    slug: "building-resilience-that-lasts",
    title: "Building Resilience That Lasts: Lessons from Positive Psychology",
    excerpt:
      "Resilience isn't about gritting your teeth through hardship. It's a set of skills you can cultivate. Here's what the science says about bouncing back stronger.",
    date: "May 25, 2026",
    readTime: "5 min read",
    category: "Wellbeing",
    author: "Alex Morgan",
    image: null,
  },
  {
    slug: "the-art-of-setting-boundaries",
    title: "The Art of Setting Boundaries Without Guilt",
    excerpt:
      "Do you struggle to say no? Learn why boundaries are essential for healthy relationships and how to set them with clarity, kindness, and confidence.",
    date: "May 10, 2026",
    readTime: "6 min read",
    category: "Relationships",
    author: "Alex Morgan",
    image: null,
  },
  {
    slug: "from-burnout-to-balance",
    title: "From Burnout to Balance: A Leader's Guide to Sustainable Success",
    excerpt:
      "High achievers are especially vulnerable to burnout. Discover practical strategies for maintaining peak performance without sacrificing your wellbeing.",
    date: "April 22, 2026",
    readTime: "9 min read",
    category: "Leadership",
    author: "Alex Morgan",
    image: null,
  },
  {
    slug: "the-power-of-values-based-living",
    title: "The Power of Values-Based Living: Make Every Decision Easier",
    excerpt:
      "When you're clear on your values, decision-making becomes almost effortless. Here's how to identify your core values and align your life around them.",
    date: "April 8, 2026",
    readTime: "7 min read",
    category: "Personal Growth",
    author: "Alex Morgan",
    image: null,
  },
  {
    slug: "mindfulness-for-busy-people",
    title: "Mindfulness for Busy People: 3-Minute Practices That Fit Your Day",
    excerpt:
      "Think you don't have time for mindfulness? These micro-practices take three minutes or less and can transform your relationship with stress and overwhelm.",
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Wellbeing",
    author: "Alex Morgan",
    image: null,
  },
  {
    slug: "how-to-have-difficult-conversations",
    title: "How to Have Difficult Conversations (Without Losing Your Cool)",
    excerpt:
      "Avoiding tough talks costs more than having them. A practical framework for navigating conflict, giving feedback, and speaking your truth with grace.",
    date: "March 5, 2026",
    readTime: "8 min read",
    category: "Leadership",
    author: "Alex Morgan",
    image: null,
  },
];

const categories = [
  { name: "Personal Growth", count: 3 },
  { name: "Career", count: 1 },
  { name: "Mindset", count: 1 },
  { name: "Leadership", count: 2 },
  { name: "Wellbeing", count: 2 },
  { name: "Relationships", count: 1 },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Blog
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Insights for a More Purposeful Life
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Thoughts, tools, and stories about personal growth, career development,
              mindset, and living a life aligned with what truly matters.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid + Sidebar */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_280px]">
            {/* Posts */}
            <div className="grid gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full transition-shadow hover:shadow-md">
                    {/* Image placeholder */}
                    <div className="aspect-video w-full bg-gradient-to-br from-primary/10 to-secondary/20">
                      <div className="flex h-full items-center justify-center">
                        <BookOpen className="size-8 text-primary/40" />
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <div className="border-t px-6 py-3">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    <Tag className="mr-2 inline size-4" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={`/blog?category=${encodeURIComponent(cat.name.toLowerCase().replace(/\s+/g, "-"))}`}
                      className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <span>{cat.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {cat.count}
                      </Badge>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* About Author */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    <User className="mr-2 inline size-4" />
                    About the Author
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Alex Morgan is an ICF-certified life coach with over a decade of
                    experience helping people find clarity, purpose, and fulfillment.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full"
                    render={<Link href="/about" />}
                  >
                    Learn More
                    <ChevronRight className="size-3.5" />
                  </Button>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-heading text-base font-semibold">
                    Ready for Your Own Transformation?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Book a free discovery call and start your journey today.
                  </p>
                  <Button
                    size="sm"
                    className="mt-4 w-full"
                    render={<Link href="/contact" />}
                  >
                    Book Free Call
                    <ArrowRight className="size-3.5" />
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-y bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl space-y-4">
            <h2 className="font-heading text-2xl font-bold">Stay Inspired</h2>
            <p className="text-sm text-muted-foreground">
              Join our newsletter for weekly insights on personal growth, career development,
              and living with purpose. No spam, just thoughtful content.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="h-9 flex-1 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
