import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Blog post data — in production this would come from a CMS or MDX files
const posts: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    author: string;
    content: string[];
  }
> = {
  "finding-clarity-in-times-of-transition": {
    title: "Finding Clarity in Times of Transition: A Practical Guide",
    excerpt:
      "Major life transitions can feel disorienting. Here's a step-by-step framework for navigating uncertainty and finding your footing when everything feels up in the air.",
    date: "July 15, 2026",
    readTime: "6 min read",
    category: "Personal Growth",
    author: "Alex Morgan",
    content: [
      "Life has a way of throwing us into transition when we least expect it. A career change, the end of a relationship, a move to a new city, or even a personal awakening — transitions are universal, yet each one feels uniquely disorienting.",
      "In my years of coaching, I've noticed that the period of transition — the messy middle between what was and what will be — is where the most profound growth happens. But only if we learn to navigate it skillfully.",
      "Most of us respond to uncertainty with one of two strategies: we either grasp for control (over-planning, over-analyzing, frantically searching for answers) or we freeze (procrastinating, numbing out, avoiding decisions). Neither response serves us well.",
      "What if there was a third way? A way to move through transition with clarity, self-compassion, and even a sense of curiosity? Here's the framework I've developed over a decade of coaching clients through every kind of transition.",
      "Step 1: Name What You're Leaving Behind",
      "Before you can move forward, you need to honor what you're leaving. Take time to acknowledge the chapter that's ending — the lessons learned, the relationships formed, the version of yourself you're releasing. Journal about it. Talk to a trusted friend. Give yourself permission to grieve what needs grieving.",
      "Step 2: Get Clear on Your Core Values",
      "Transitions often shake loose our assumptions about what matters. This is actually a gift — an opportunity to rebuild your life on a foundation you consciously choose. Spend time identifying your top 3-5 core values. Not what society says should matter, not what your parents prioritized, but what genuinely lights you up.",
      "Step 3: Create Your North Star Vision",
      "Don't worry about the how yet. Focus on the what and the why. What kind of life do you want to be living a year from now? How do you want to feel? What does a typical day look like? Be specific and vivid. This vision becomes your compass when the path gets foggy.",
      "Step 4: Take Micro-Actions",
      "The gap between where you are and where you want to be can feel overwhelming. Close it with tiny, consistent actions. Want a new career? Have one informational interview this week. Want better health? Walk for 10 minutes today. Micro-actions build momentum, and momentum builds confidence.",
      "Step 5: Build Your Support System",
      "You don't have to navigate transition alone. Surround yourself with people who believe in your vision — a coach, a mentor, a community of like-minded individuals. The right support system doesn't just cheer you on; it holds you accountable and reflects back your own potential when you can't see it yourself.",
      "Step 6: Practice Radical Self-Compassion",
      "Transitions are messy. You'll take two steps forward and one step back. You'll have days where everything clicks and days where nothing makes sense. This is normal. This is human. Treat yourself with the same kindness you'd offer a dear friend going through a difficult time.",
      "The most important thing I want you to know is this: you are not lost. You are in transition. And transition, by its very nature, is temporary. The clarity you're seeking isn't something you find — it's something you build, one intentional choice at a time.",
      "If you're in the midst of a transition and could use some guidance, I'd love to help. Book a free discovery call and let's explore what's possible together.",
    ],
  },
  "the-imposter-syndrome-antidote": {
    title: "The Imposter Syndrome Antidote: 5 Strategies That Actually Work",
    excerpt:
      "Feel like a fraud despite your accomplishments? You're not alone. Learn five evidence-backed strategies to quiet your inner critic and own your success.",
    date: "June 28, 2026",
    readTime: "8 min read",
    category: "Mindset",
    author: "Alex Morgan",
    content: [
      "You know the feeling. You're sitting in a meeting, and despite your qualifications, experience, and track record, a voice in your head whispers: \"They're going to find out you don't belong here.\" This is imposter syndrome, and it affects an estimated 70% of people at some point in their careers.",
      "I see imposter syndrome in my coaching practice constantly — and not from people who are actually imposters. I see it in CEOs, surgeons, published authors, and award-winning designers. The higher people climb, the more likely they are to feel like they don't deserve to be there.",
      "Here's the good news: imposter syndrome isn't a permanent condition. It's a pattern of thinking, and patterns can be changed. Here are five strategies that my clients have found genuinely effective.",
      "1. Name It to Tame It",
      "When that imposter feeling arises, pause and label it: \"This is imposter syndrome talking.\" This simple act of naming creates distance between you and the thought. You are not the thought; you're the person observing the thought. Research in neuroscience shows that labeling emotions reduces their intensity by activating the prefrontal cortex.",
      "2. Collect Your Evidence",
      "Imposter syndrome has terrible memory. It forgets every success and amplifies every flaw. Create an \"evidence file\" — a document (or folder) where you collect positive feedback, accomplishments, thank-you notes, and wins. When the imposter voice gets loud, revisit your evidence file. Let data, not feelings, tell the story.",
      "3. Reframe Failure as Data",
      "Imposter syndrome interprets every mistake as proof of fraudulence. Flip the script: mistakes are data points, not verdicts. Ask yourself: \"What can I learn from this? What would I do differently next time?\" This transforms setbacks from identity threats into growth opportunities.",
      "4. Share Your Experience",
      "Imposter syndrome thrives in silence and isolation. When you share how you're feeling with trusted colleagues or mentors, something magical happens: they almost always respond with \"Me too.\" Normalizing the experience strips it of its power. You realize you're not uniquely flawed — you're human.",
      "5. Take Action Despite the Feeling",
      "The most powerful antidote to imposter syndrome is action. Courage isn't the absence of fear; it's moving forward despite it. Each time you take a step that scares you — speak up in a meeting, apply for a stretch role, share your creative work — you prove to yourself that you can handle the discomfort. Over time, the volume on the imposter voice gets quieter.",
      "Here's what I want you to remember: feeling like an imposter doesn't mean you are one. It means you're pushing beyond your comfort zone, which is exactly where growth happens. The people who never feel imposter syndrome are the ones who never challenge themselves. So in a way, your imposter syndrome is evidence that you're doing something right.",
      "If imposter syndrome is holding you back from the life and career you want, let's talk. Together, we can build the confidence and mindset shifts to help you own your brilliance.",
    ],
  },
  "designing-a-career-you-love": {
    title: "Designing a Career You Love: Beyond the Paycheck",
    excerpt:
      "A fulfilling career isn't about finding the perfect job — it's about designing work that aligns with your values, strengths, and vision for your life.",
    date: "June 12, 2026",
    readTime: "7 min read",
    category: "Career",
    author: "Alex Morgan",
    content: [
      "Most career advice starts with the wrong question. It asks: \"What job should I do?\" The better question is: \"What kind of life do I want, and what role does work play in that life?\"",
      "For years, I chased the \"right\" career path — the one with the impressive title, the growing salary, the LinkedIn-worthy trajectory. And for a while, it worked. I was successful on paper. But there was a persistent, nagging feeling that something was missing. I was building someone else's vision of success, not my own.",
      "The turning point came when I started asking different questions — not \"What should I do?\" but \"Who do I want to become?\" and \"What impact do I want to have?\"",
      "Designing a career you love isn't about finding a unicorn job that checks every box. It's about getting clear on what truly matters to you and then making intentional choices that bring your work life closer to that vision over time.",
      "Start with Values, Not Job Titles",
      "Before you update your resume or browse job boards, get crystal clear on your core values. What matters most to you? Autonomy? Creativity? Connection? Security? Impact? Your values are your compass. Any career decision that violates them will eventually feel hollow, no matter how impressive it looks on paper.",
      "Identify Your Zone of Genius",
      "Everyone has a zone of genius — the intersection of what you're naturally good at, what you love doing, and what the world needs. It's not always obvious because it often feels effortless to you (and we tend to undervalue what comes easily). Ask trusted colleagues and friends: \"When have you seen me at my best?\" Their answers might surprise you.",
      "Design Your Ideal Work Week",
      "Instead of searching for a job description, design your ideal work week. How many hours do you want to work? What percentage of your time is spent on different activities? Are you collaborating or working solo? Traveling or staying put? This exercise reveals what you're actually optimizing for.",
      "Prototype Before You Leap",
      "You don't need to quit your job and bet everything on a dream. Test your ideas in low-risk ways. Want to become a coach? Coach a few people for free. Curious about UX design? Take a short course and do a project. Prototyping gives you real data instead of anxious speculation.",
      "Remember: Your Career Is a Marathon, Not a Sprint",
      "The most fulfilling careers aren't built overnight. They evolve through experimentation, reflection, and course correction. Give yourself permission to not have it all figured out. The people who end up with careers they love aren't the ones who made perfect decisions — they're the ones who kept asking good questions and course-correcting along the way.",
      "Your career should support the life you want to live, not consume it. If you're ready to redesign your relationship with work, I'd be honored to help. Let's talk.",
    ],
  },
  "building-resilience-that-lasts": {
    title: "Building Resilience That Lasts: Lessons from Positive Psychology",
    excerpt:
      "Resilience isn't about gritting your teeth through hardship. It's a set of skills you can cultivate. Here's what the science says about bouncing back stronger.",
    date: "May 25, 2026",
    readTime: "5 min read",
    category: "Wellbeing",
    author: "Alex Morgan",
    content: [
      "We tend to think of resilience as something you either have or you don't — a fixed personality trait, like being born tall or short. But the science tells a different story. Resilience is a set of skills that anyone can learn and strengthen over time.",
      "Positive psychology, the scientific study of human flourishing, has identified several key factors that contribute to resilience. None of them are innate. All of them are trainable.",
      "1. Optimism (That's Actually Realistic)",
      "Resilient people aren't blindly positive — they're what researchers call \"realistic optimists.\" They acknowledge the difficulty of a situation while maintaining confidence that they can handle it and that things will eventually improve. Practice: When facing a challenge, write down the worst-case, best-case, and most-likely-case scenarios. This broadens your perspective and reduces catastrophic thinking.",
      "2. Strong Social Connections",
      "The single biggest predictor of resilience isn't grit or willpower — it's the quality of your relationships. People with strong social support networks recover faster from setbacks. Practice: Nurture your relationships proactively, not just in crisis. Schedule regular check-ins with the people who matter.",
      "3. A Sense of Purpose",
      "When you have a clear sense of why your life matters, individual setbacks feel smaller. Purpose provides the context that makes hardship meaningful. Practice: Define your personal mission statement. What impact do you want to have? What legacy do you want to leave?",
      "4. Emotional Agility",
      "Resilient people don't suppress difficult emotions — they move through them. They can experience fear, anger, or sadness without being consumed. Practice: When a difficult emotion arises, pause and name it. Observe where you feel it in your body. Breathe. Remind yourself that emotions are temporary visitors, not permanent residents.",
      "5. Growth Mindset",
      "People who believe that abilities can be developed through effort are more resilient than those who see abilities as fixed. Setbacks become learning opportunities rather than evidence of inadequacy. Practice: After a disappointment, ask: \"What did I learn? How can I grow from this?\"",
      "Building resilience is a lifelong practice, not a destination. Start with one of these areas and spend a few weeks intentionally strengthening it. Small, consistent efforts compound into profound change.",
      "Need support building your resilience toolkit? I'd love to help. Reach out anytime.",
    ],
  },
  "the-art-of-setting-boundaries": {
    title: "The Art of Setting Boundaries Without Guilt",
    excerpt:
      "Do you struggle to say no? Learn why boundaries are essential for healthy relationships and how to set them with clarity, kindness, and confidence.",
    date: "May 10, 2026",
    readTime: "6 min read",
    category: "Relationships",
    author: "Alex Morgan",
    content: [
      "If you're someone who struggles to say no, you know the cycle all too well. You say yes when you want to say no. You overextend yourself. You feel resentful. You beat yourself up for not having better boundaries. Then you do it again.",
      "Here's a truth that changed everything for me: boundaries aren't walls that keep people out. They're gates that you control — letting in what serves you and keeping out what doesn't. Boundaries are an act of self-respect, and paradoxically, they lead to healthier, more authentic relationships.",
      "Why We Struggle With Boundaries",
      "For most of us, the difficulty with boundaries comes from fear: fear of disappointing others, fear of conflict, fear of being seen as selfish or difficult. These fears are understandable, especially if you were raised to be agreeable or to put others' needs first. But the cost of weak boundaries is high: burnout, resentment, lost identity, and ironically, damaged relationships.",
      "How to Set Boundaries With Kindness and Clarity",
      "The key to effective boundaries is clarity plus compassion. You're not being mean; you're being honest. Here's a simple formula: Acknowledge + State + Offer Alternative.",
      "Example 1 (work): \"I appreciate you thinking of me for this project (acknowledge). I can't take on additional work right now as I'm at capacity (state). I'd be happy to revisit this next month or suggest someone else who might be available (offer).\"",
      "Example 2 (personal): \"I love spending time with you (acknowledge). I need tonight to recharge on my own (state). How about we get coffee this weekend instead? (offer).\"",
      "Start Small and Build",
      "If setting boundaries is new to you, start with low-stakes situations. Practice saying no to small requests before tackling bigger ones. Each time you honor your own needs, you build self-trust — and that self-trust makes the next boundary easier.",
      "Expect Pushback (and That's Okay)",
      "People who benefited from your lack of boundaries may resist when you start setting them. This doesn't mean you're doing it wrong. Stay kind, stay clear, and stay consistent. The people who truly care about you will adjust. The people who don't are revealing something important.",
      "Remember: every time you say no to something that drains you, you're saying yes to something that nourishes you. Boundaries aren't selfish — they're the foundation of sustainable generosity.",
      "Ready to build healthier boundaries in your life and relationships? Let's work on it together.",
    ],
  },
  "from-burnout-to-balance": {
    title: "From Burnout to Balance: A Leader's Guide to Sustainable Success",
    excerpt:
      "High achievers are especially vulnerable to burnout. Discover practical strategies for maintaining peak performance without sacrificing your wellbeing.",
    date: "April 22, 2026",
    readTime: "9 min read",
    category: "Leadership",
    author: "Alex Morgan",
    content: [
      "Burnout doesn't announce itself with a bang. It creeps in quietly — one extra hour at your desk, one skipped lunch, one \"I'll rest when this project is done\" at a time. And by the time you notice, you're running on fumes.",
      "The World Health Organization classifies burnout as an occupational phenomenon characterized by three dimensions: exhaustion, cynicism or mental distance from work, and reduced professional efficacy. Sound familiar? High achievers are especially susceptible because the very traits that drive success — ambition, perfectionism, dedication — also drive burnout when unchecked.",
      "The Traditional Approach Doesn't Work",
      "Most advice about burnout amounts to surface-level self-care: take a bath, do some yoga, take a vacation. These are lovely, but they don't address the root causes. Burnout isn't just about working too many hours; it's about a misalignment between your values and how you're spending your energy.",
      "Sustainable Success: A New Framework",
      "Here's what I teach my executive coaching clients — a framework for achieving at a high level without sacrificing your wellbeing.",
      "1. Energy Management Over Time Management",
      "Time is finite; energy is renewable. Instead of asking \"How can I fit more into my day?\" ask \"What gives me energy and what drains it?\" Schedule your most important work during your peak energy windows. Protect your energy with the same vigilance you protect your calendar.",
      "2. Define Success on Your Own Terms",
      "Much of burnout comes from chasing someone else's definition of success. Take time to define what success means to you — not your parents, not your peers, not society. Does it include spaciousness? Creativity? Time with family? Health? Build those into your definition explicitly.",
      "3. Build Deliberate Recovery Into Your Routine",
      "Elite athletes don't train 24/7 — they have structured recovery periods because that's when muscles actually grow. The same principle applies to knowledge work. Build micro-recovery moments into your day (a 5-minute walk between meetings), meso-recovery into your week (a tech-free Sunday), and macro-recovery into your year (a real vacation).",
      "4. Learn the Art of Strategic Quitting",
      "You can't do everything. The highest performers are ruthless about what they say no to. Regularly audit your commitments and ask: \"Is this aligned with my priorities? Does this energize me? What would happen if I stopped doing this?\" Quit the things that drain you without meaningful return.",
      "5. Cultivate a Rich Life Outside of Work",
      "Your identity cannot be solely your job title. Invest in relationships, hobbies, community, and personal growth. A rich life outside of work acts as a buffer — when work is hard, you have other sources of meaning and joy to sustain you.",
      "Burnout recovery isn't about doing less — it's about doing what matters, with intention and with boundaries. It's about building a life where success and wellbeing can coexist.",
      "If you're feeling the warning signs of burnout and want support navigating back to balance, I'm here. Let's talk.",
    ],
  },
  "the-power-of-values-based-living": {
    title: "The Power of Values-Based Living: Make Every Decision Easier",
    excerpt:
      "When you're clear on your values, decision-making becomes almost effortless. Here's how to identify your core values and align your life around them.",
    date: "April 8, 2026",
    readTime: "7 min read",
    category: "Personal Growth",
    author: "Alex Morgan",
    content: [
      "How many hours have you spent agonizing over decisions? Which job to take, which city to move to, whether to stay in or leave a relationship. The mental energy consumed by indecision is staggering — and most of it comes from one root cause: we're not clear on what we actually value.",
      "Values are the answer to the question: \"What kind of person do I want to be?\" They're not goals (which are achievements you can check off). They're directions — ongoing qualities you want to embody. When your decisions and actions align with your values, life feels meaningful and satisfying. When they don't, you feel off, even if everything looks good on paper.",
      "Finding Your Core Values",
      "Here's an exercise I do with every new coaching client: From a list of common values, select the 10 that resonate most. Then narrow to 5. Then narrow to your top 3. This is harder than it sounds. You'll want to keep everything. But the discipline of choosing forces you to confront what genuinely matters.",
      "Once you have your top values, define what each one means to you specifically. \"Freedom\" might mean financial independence to one person and creative autonomy to another. \"Connection\" might mean deep one-on-one friendships or being part of a large community. Your definitions are what make your values yours.",
      "Using Values as a Decision-Making Framework",
      "When faced with a decision, run it through your values filter: \"Does this choice move me toward or away from my core values?\" A job offer with a huge salary that requires 80-hour weeks might move you away from \"Family\" and \"Health.\" A modest pay cut for a role with creative freedom might move you toward \"Growth\" and \"Autonomy.\"",
      "Values also help you set priorities. When you have competing demands, ask: \"Which of these aligns most closely with my values right now?\" The answer won't always be the urgent thing — and that's exactly the point. Values help you choose the important over the merely urgent.",
      "The Daily Practice of Values-Aligned Living",
      "Living your values isn't a one-time decision. It's a daily practice. Each morning, connect with your values: \"Today, how can I embody courage? How can I practice compassion? How can I pursue growth?\" Each evening, reflect: \"Did my actions today align with my values? Where did I drift?\"",
      "Values-based living doesn't eliminate hard decisions, but it makes them clearer. It doesn't promise an easy path, but it promises a path you chose — consciously, intentionally, and aligned with who you truly want to be.",
      "Want help identifying your core values and building a life around them? Let's connect.",
    ],
  },
  "mindfulness-for-busy-people": {
    title: "Mindfulness for Busy People: 3-Minute Practices That Fit Your Day",
    excerpt:
      "Think you don't have time for mindfulness? These micro-practices take three minutes or less and can transform your relationship with stress and overwhelm.",
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Wellbeing",
    author: "Alex Morgan",
    content: [
      "I hear this all the time: \"I know mindfulness is good for me, but I just don't have the time.\" I get it. Between work, family, and the general chaos of modern life, finding 20 minutes to sit in silence feels like asking for the moon.",
      "But here's the thing: mindfulness doesn't require a meditation cushion, a silent room, or a big time commitment. It's simply the practice of bringing your full attention to the present moment — and you can do that in small doses throughout your day.",
      "Here are five three-minute mindfulness practices you can weave into even the busiest schedule.",
      "1. The Morning Three-Breath Pause",
      "Before you check your phone in the morning, take three intentional breaths. Feel the air moving in and out. Notice the weight of your body on the bed. Set an intention for the day. This takes 90 seconds and sets a completely different tone than starting with email.",
      "2. The Transition Ritual",
      "Between activities — finishing a meeting, arriving home, switching tasks — pause for 60 seconds. Close your eyes. Take a few deep breaths. Notice how you feel. This small reset prevents the mental residue from one activity bleeding into the next.",
      "3. The Mindful Sip",
      "Next time you drink coffee, tea, or water, give it your full attention for three sips. Notice the temperature, the taste, the sensation of swallowing. This transforms an automatic behavior into a moment of presence — and it's genuinely pleasurable.",
      "4. The Waiting Game",
      "We spend so much time waiting — in lines, at traffic lights, for meetings to start. Instead of reaching for your phone, use waiting as a cue for mindfulness. Notice your breath. Feel your feet on the ground. Observe your surroundings. That 30 seconds at a red light becomes a mini-meditation.",
      "5. The Gratitude Pause",
      "At the end of the day, take two minutes to identify three things you're grateful for. Be specific. Instead of \"I'm grateful for my family,\" try \"I'm grateful for the way my daughter laughed at breakfast this morning.\" Gratitude practice has been shown to increase happiness and resilience.",
      "The secret to a sustainable mindfulness practice isn't finding more time — it's weaving awareness into the time you already have. Start with one practice. Do it consistently for a week. Notice how it feels. Then add another.",
      "Mindfulness isn't another item for your to-do list. It's a different way of experiencing the life you're already living.",
      "Ready for more tools to bring presence and purpose into your daily life? Let's connect.",
    ],
  },
  "how-to-have-difficult-conversations": {
    title: "How to Have Difficult Conversations (Without Losing Your Cool)",
    excerpt:
      "Avoiding tough talks costs more than having them. A practical framework for navigating conflict, giving feedback, and speaking your truth with grace.",
    date: "March 5, 2026",
    readTime: "8 min read",
    category: "Leadership",
    author: "Alex Morgan",
    content: [
      "Most of us would rather do almost anything than have a difficult conversation. We'd rather stew in resentment for months, ghost someone, or send a passive-aggressive email than sit down and say what needs to be said.",
      "But here's the uncomfortable truth: the cost of avoidance is almost always higher than the cost of the conversation. Unspoken tensions fester. Misunderstandings compound. Relationships deteriorate. And the thing you're afraid to say grows bigger and scarier in your mind.",
      "The good news is that difficult conversations are a skill — one that can be learned, practiced, and mastered. Here's a framework that has helped hundreds of my coaching clients navigate tough talks with clarity, compassion, and confidence.",
      "Before the Conversation: Prepare Yourself",
      "The quality of a difficult conversation is largely determined before you even open your mouth. Take 10 minutes to prepare: What's the specific issue you need to address? What outcome do you want? What's your contribution to the situation? (Yes, you always have one.) What assumptions are you making about the other person's intentions?",
      "During the Conversation: The CARE Framework",
      "C — Clarify Your Intention: Start the conversation by stating your positive intention. \"I'm bringing this up because I value our relationship and want us to work together more effectively.\" This frames the conversation as collaborative, not adversarial.",
      "A — Ask Before Telling: Before launching into your perspective, ask questions. \"How are you seeing this situation? What's been your experience?\" This demonstrates respect and gives you critical information you might be missing.",
      "R — Reflect What You Hear: Paraphrase what the other person says to confirm understanding. \"So what I'm hearing is...\" This makes people feel heard and reduces defensiveness. You can disagree with someone while still making them feel understood.",
      "E — Express Your Experience: Use \"I\" statements. \"I feel frustrated when...\" not \"You always...\" Describe the specific behavior, how it impacts you, and what you'd like to see instead. Be clear, kind, and direct.",
      "After the Conversation: Follow Through",
      "Agree on specific next steps and a time to check in. If emotions ran high, a follow-up message acknowledging the difficulty of the conversation can go a long way toward repairing and strengthening the relationship.",
      "A final thought: having difficult conversations is an act of courage and care. When you avoid a tough talk, you're choosing short-term comfort over long-term connection. When you lean into it with skill and heart, you build trust, deepen relationships, and grow as a person.",
      "Need support navigating a difficult conversation in your life or work? Let's talk.",
    ],
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold">Post Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          Sorry, we couldn&apos;t find the blog post you&apos;re looking for.
        </p>
        <Button className="mt-6" render={<Link href="/blog" />}>
          <ArrowLeft className="size-4" />
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <article>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Button variant="ghost" size="sm" className="mb-6" render={<Link href="/blog" />}>
              <ArrowLeft className="size-4" />
              Back to Blog
            </Button>
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="size-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="size-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose-custom space-y-6 text-base leading-relaxed text-foreground/90">
              {post.content.map((paragraph, index) => {
                // Check if this is a subheading (ends with colon or appears to be a heading)
                const isSubheading =
                  paragraph.length < 60 &&
                  !paragraph.endsWith(".") &&
                  (paragraph.endsWith(":") || /^(Step \d|The |Before |During |After |A |\d+\.)/.test(paragraph));

                if (isSubheading) {
                  return (
                    <h2
                      key={index}
                      className="mt-10 font-heading text-xl font-bold tracking-tight text-foreground first:mt-0"
                    >
                      {paragraph}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <Separator className="my-12" />

            {/* Author Bio */}
            <div className="flex items-start gap-4 rounded-xl border bg-muted/30 p-6">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <User className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold">
                  Written by {post.author}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  ICF-certified life coach with over a decade of experience helping people
                  find clarity, purpose, and fulfillment. Based in San Francisco, coaching
                  clients worldwide.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 rounded-xl bg-primary/5 p-8 text-center">
              <h3 className="font-heading text-xl font-bold">Ready to go deeper?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reading is great. Action is transformative. Let&apos;s work together to
                turn these insights into real change in your life.
              </p>
              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button render={<Link href="/contact" />}>
                  Book a Free Discovery Call
                  <ArrowRight className="size-4" />
                </Button>
                <Button variant="outline" render={<Link href="/blog" />}>
                  More Articles
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
