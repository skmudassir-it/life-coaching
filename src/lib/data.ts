// ──────────────────────────────────────────────
// NorthStar Life Coaching — Static Data
// ──────────────────────────────────────────────

import type {
  BlogPost,
  FAQItem,
  PricingPlan,
  ServiceItem,
  StatItem,
  TeamMember,
  Testimonial,
} from "@/lib/types";

// ── Services ──────────────────────────────────

export const services: ServiceItem[] = [
  {
    id: "one-on-one",
    title: "One-on-One Coaching",
    shortDescription:
      "Personalized sessions designed to uncover your strengths, clarify your goals, and build a roadmap to the life you want.",
    fullDescription:
      "Our flagship one-on-one coaching program pairs you with a dedicated coach who works closely with you to identify your values, overcome limiting beliefs, and create actionable strategies. Sessions are held weekly or bi-weekly and include personalized exercises, accountability check-ins, and progress tracking. Whether you're navigating a career transition, seeking greater life balance, or striving for personal growth, one-on-one coaching provides the structure and support you need to thrive.",
    icon: "compass",
    features: [
      "Weekly or bi-weekly 60-minute sessions",
      "Personalized growth plan with measurable milestones",
      "Unlimited email support between sessions",
      "Access to exclusive worksheets and resources",
      "Quarterly progress reviews and recalibration",
    ],
    price: "$350/month",
    cta: "Start Your Journey",
    href: "/contact?service=one-on-one",
  },
  {
    id: "group-coaching",
    title: "Group Coaching",
    shortDescription:
      "Connect with like-minded individuals in a supportive group setting where shared experiences fuel collective growth.",
    fullDescription:
      "Group coaching brings together 6–10 individuals on similar journeys, creating a powerful environment of shared learning and mutual accountability. Led by an experienced NorthStar coach, sessions combine guided discussions, peer feedback, and collaborative exercises. You'll gain diverse perspectives, build lasting connections, and realize you're not alone in your challenges. Groups meet weekly for 90 minutes over a 12-week program cycle.",
    icon: "users",
    features: [
      "12-week structured program with clear outcomes",
      "Weekly 90-minute group sessions (max 10 participants)",
      "Private online community for peer support",
      "Bi-weekly 15-minute individual check-ins",
      "Graduation certificate and alumni network access",
    ],
    price: "$199/month",
    cta: "Join a Group",
    href: "/contact?service=group-coaching",
  },
  {
    id: "career-transition",
    title: "Career Transition Coaching",
    shortDescription:
      "Navigate career changes with confidence — from discovering your calling to landing your dream role.",
    fullDescription:
      "Career Transition Coaching is designed for professionals at crossroads: changing industries, pursuing promotions, starting businesses, or returning to work after a hiatus. Our coaches help you articulate your unique value proposition, optimize your resume and LinkedIn presence, prepare for interviews, and negotiate offers. The program includes CliftonStrengths assessment, personal branding workshop, and a 90-day transition plan tailored to your goals.",
    icon: "briefcase",
    features: [
      "CliftonStrengths or similar assessment included",
      "Resume, LinkedIn, and personal branding overhaul",
      "Mock interviews with detailed feedback",
      "Salary negotiation strategy and practice",
      "90-day transition roadmap with milestone tracking",
    ],
    price: "$450/month",
    cta: "Accelerate Your Career",
    href: "/contact?service=career-transition",
  },
  {
    id: "leadership",
    title: "Leadership Development",
    shortDescription:
      "Develop the mindset, communication skills, and emotional intelligence to lead with authenticity and impact.",
    fullDescription:
      "Our Leadership Development program is built for emerging and established leaders who want to elevate their influence and effectiveness. Through a blend of coaching, 360-degree feedback, and real-world application, you'll strengthen your executive presence, master difficult conversations, build high-performing teams, and lead through change. The 6-month engagement includes a comprehensive leadership assessment, bi-weekly coaching sessions, and a capstone leadership project.",
    icon: "star",
    features: [
      "Comprehensive 360-degree leadership assessment",
      "Bi-weekly 75-minute executive coaching sessions",
      "Real-time shadow coaching for key meetings or presentations",
      "Emotional intelligence and communication mastery",
      "Capstone leadership project with measurable outcomes",
    ],
    price: "$650/month",
    cta: "Lead with Impact",
    href: "/contact?service=leadership",
  },
  {
    id: "wellness",
    title: "Wellness & Life Balance",
    shortDescription:
      "Reclaim your energy, reduce burnout, and design a life where your well-being and ambitions coexist harmoniously.",
    fullDescription:
      "Wellness & Life Balance coaching addresses the root causes of burnout and overwhelm. Our holistic approach examines sleep, nutrition, movement, stress management, relationships, and purpose to create a sustainable balance. You'll learn evidence-based techniques for resilience, boundary-setting, and mindful living. The program includes a wellness baseline assessment, customized habit-formation plan, and ongoing support to ensure lasting change.",
    icon: "heart",
    features: [
      "Holistic wellness baseline assessment",
      "Personalized habit-formation and energy management plan",
      "Stress reduction and mindfulness training",
      "Boundary-setting and time-audit workshop",
      "Monthly wellness check-ins for 6 months",
    ],
    price: "$275/month",
    cta: "Find Your Balance",
    href: "/contact?service=wellness",
  },
  {
    id: "relationship",
    title: "Relationship Coaching",
    shortDescription:
      "Strengthen communication, rebuild trust, and deepen connections in your personal and professional relationships.",
    fullDescription:
      "Relationship Coaching helps individuals and couples build healthier, more fulfilling connections. Whether you're working on communication patterns, navigating conflict, rebuilding after betrayal, or simply wanting to deepen intimacy, our certified relationship coaches provide a safe, non-judgmental space. Using evidence-based frameworks including Gottman Method and Imago techniques, we help you create the relationships you desire.",
    icon: "handshake",
    features: [
      "Individual or couples sessions (your choice)",
      "Communication and conflict-resolution frameworks",
      "Attachment style exploration and awareness",
      "Trust-rebuilding protocols for strained relationships",
      "Ongoing tools and practices for lasting change",
    ],
    price: "$300/month",
    cta: "Strengthen Your Bonds",
    href: "/contact?service=relationship",
  },
];

// ── Testimonials ──────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "BrightPath Media",
    avatar: "/images/testimonials/sarah.jpg",
    text: "Working with NorthStar was truly life-changing. My coach helped me see patterns I'd been blind to for years and gave me practical tools to break through them. Six months later, I've not only landed my dream role but also rebuilt my confidence and sense of purpose. I can't recommend them enough.",
    rating: 5,
  },
  {
    id: "t2",
    name: "James Okonkwo",
    role: "Founder & CEO",
    company: "ThriveTech Solutions",
    avatar: "/images/testimonials/james.jpg",
    text: "As a founder, I was burning out fast and didn't even realize it. My NorthStar coach helped me restructure my priorities, delegate effectively, and rediscover why I started my company in the first place. My team has noticed the difference, and our revenue grew 30% in the quarter after I started coaching.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Elena Rodriguez",
    role: "Registered Nurse",
    company: "Mercy General Hospital",
    avatar: "/images/testimonials/elena.jpg",
    text: "After 15 years in nursing, I felt completely drained and directionless. The group coaching program connected me with other healthcare professionals facing similar struggles. Together, we explored new possibilities, and I've since transitioned into healthcare education — a role that lights me up every day.",
    rating: 5,
  },
  {
    id: "t4",
    name: "David Chen",
    role: "Engineering Manager",
    company: "CloudScale Inc.",
    avatar: "/images/testimonials/david.jpg",
    text: "I came to NorthStar wanting to become a better leader for my team. The leadership coaching exceeded every expectation. I learned to communicate with clarity, handle difficult conversations with empathy, and inspire my team toward a shared vision. My direct reports' engagement scores have never been higher.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Michelle Park",
    role: "Freelance Designer",
    avatar: "/images/testimonials/michelle.jpg",
    text: "The wellness coaching program helped me break the feast-or-famine cycle I'd been trapped in for years. My coach taught me how to structure my days, set boundaries with clients, and prioritize my health. I'm now consistently booked, sleeping better, and actually enjoying my work again.",
    rating: 4,
  },
  {
    id: "t6",
    name: "Robert & Lisa Thompson",
    role: "Entrepreneurs",
    company: "Thompson Family Ventures",
    avatar: "/images/testimonials/robert-lisa.jpg",
    text: "We started relationship coaching at a low point in our marriage, and NorthStar gave us the tools to rebuild. Our coach was patient, non-judgmental, and incredibly skilled. A year later, our relationship is stronger than it's ever been, and we're communicating in ways we never thought possible.",
    rating: 5,
  },
];

// ── Team Members ──────────────────────────────

export const team: TeamMember[] = [
  {
    id: "taylor",
    name: "Dr. Taylor Reed",
    title: "Founder & Lead Coach",
    bio: "Dr. Taylor Reed is an ICF Master Certified Coach (MCC) with over 15 years of experience in transformative coaching. Holding a PhD in Organizational Psychology from Stanford University, Taylor combines academic rigor with genuine compassion to help clients unlock their full potential. Before founding NorthStar, Taylor spent a decade leading leadership development programs at Fortune 500 companies and has coached over 2,000 individuals worldwide. Taylor's approach is grounded in positive psychology, cognitive behavioral techniques, and strengths-based development.",
    avatar: "/images/team/taylor.jpg",
    credentials: ["PhD, Organizational Psychology", "ICF Master Certified Coach (MCC)", "Gallup-Certified Strengths Coach"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/drtaylorreed",
      twitter: "https://twitter.com/drtaylorreed",
      email: "taylor@northstarlifecoaching.com",
    },
  },
  {
    id: "jordan",
    name: "Jordan Williams",
    title: "Senior Career & Leadership Coach",
    bio: "Jordan Williams brings 12 years of corporate leadership experience at companies like Google and Salesforce before transitioning to coaching. As an ICF Professional Certified Coach (PCC) and certified Executive Coach, Jordan specializes in career transitions, leadership development, and helping high-performers break through plateaus. Jordan is known for a direct yet supportive style that challenges clients while ensuring they feel fully supported. Outside of coaching, Jordan is an avid trail runner and volunteers with organizations supporting underrepresented professionals in tech.",
    avatar: "/images/team/jordan.jpg",
    credentials: ["ICF Professional Certified Coach (PCC)", "Certified Executive Coach (CEC)", "MBA, UC Berkeley Haas"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/jordanwilliams",
      email: "jordan@northstarlifecoaching.com",
    },
  },
  {
    id: "amara",
    name: "Amara Osei",
    title: "Wellness & Life Balance Coach",
    bio: "Amara Osei is a Board-Certified Health and Wellness Coach (NBC-HWC) and Registered Yoga Teacher (RYT-500) with a passion for holistic well-being. She holds a Master's in Integrative Health and has spent the last decade helping clients bridge the gap between ambition and self-care. Amara's approach blends mindfulness, habit science, and compassionate accountability. She believes that sustainable success comes not from pushing harder but from aligning your life with your deepest values. Amara is also a published author on the topic of mindful productivity.",
    avatar: "/images/team/amara.jpg",
    credentials: ["NBC-HWC Board-Certified Health Coach", "RYT-500 Yoga Teacher", "MS, Integrative Health"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/amaraosei",
      twitter: "https://twitter.com/amaraosei",
      email: "amara@northstarlifecoaching.com",
    },
  },
  {
    id: "marcus",
    name: "Marcus Chen",
    title: "Relationship & Communication Coach",
    bio: "Marcus Chen is a Licensed Marriage and Family Therapist (LMFT) and ICF Associate Certified Coach (ACC) specializing in relationship dynamics and communication. With a clinical background and training in the Gottman Method, Emotionally Focused Therapy (EFT), and Nonviolent Communication (NVC), Marcus brings deep expertise to both couples and individuals. He believes that the quality of our relationships determines the quality of our lives. Marcus has facilitated over 100 workshops on communication and conflict resolution and is known for creating a safe, warm environment where vulnerability leads to growth.",
    avatar: "/images/team/marcus.jpg",
    credentials: ["LMFT - Licensed Marriage & Family Therapist", "ICF Associate Certified Coach (ACC)", "Gottman Method Level 3 Trained"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/marcuschen",
      email: "marcus@northstarlifecoaching.com",
    },
  },
];

// ── Pricing Plans ─────────────────────────────

export const pricingPlans: PricingPlan[] = [
  {
    id: "discovery",
    name: "Discovery",
    description:
      "A single deep-dive session to gain clarity on a specific challenge or decision you're facing.",
    price: "$175",
    interval: "one-time",
    features: [
      "One 90-minute intensive session",
      "Pre-session reflection workbook",
      "Personalized action plan",
      "Two weeks of email follow-up support",
      "Session recording and notes",
    ],
    highlighted: false,
    cta: "Book Discovery Call",
    href: "/contact?plan=discovery",
  },
  {
    id: "growth",
    name: "Growth",
    description:
      "Ongoing coaching for those ready to commit to meaningful, sustained personal transformation.",
    price: "$350",
    interval: "/month",
    features: [
      "Four 60-minute sessions per month",
      "Personalized development plan",
      "Unlimited email and messaging support",
      "Monthly progress reports",
      "Access to resource library",
      "Quarterly goal recalibration",
      "Priority booking",
    ],
    highlighted: true,
    cta: "Start Growing",
    href: "/contact?plan=growth",
  },
  {
    id: "transformation",
    name: "Transformation",
    description:
      "An immersive 6-month partnership for deep, holistic transformation across all areas of life.",
    price: "$500",
    interval: "/month",
    features: [
      "Six 75-minute sessions per month",
      "Comprehensive life audit and 360° assessment",
      "Unlimited email, messaging, and voice support",
      "Weekly accountability check-ins",
      "Full resource library and custom materials",
      "Monthly progress reports and recalibration",
      "VIP scheduling and session flexibility",
      "Graduation celebration and alumni network",
    ],
    highlighted: false,
    cta: "Transform Your Life",
    href: "/contact?plan=transformation",
  },
];

// ── Stats ─────────────────────────────────────

export const stats: StatItem[] = [
  { label: "Clients Coached", value: "2,000", suffix: "+", icon: "users" },
  { label: "Client Satisfaction", value: "98", suffix: "%", icon: "heart" },
  { label: "Years of Experience", value: "15", suffix: "+", icon: "calendar" },
  { label: "Workshops Delivered", value: "500", suffix: "+", icon: "presentation" },
];

// ── FAQ ───────────────────────────────────────

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I know if coaching is right for me?",
    answer:
      "Coaching is ideal if you feel stuck, are navigating a transition, or want to accelerate your personal or professional growth. Unlike therapy, which often explores past experiences, coaching is forward-focused and action-oriented. If you're ready to invest in yourself, set meaningful goals, and be held accountable, coaching can be transformative. We offer a free 30-minute discovery call to help you decide if NorthStar is the right fit.",
  },
  {
    id: "faq-2",
    question: "How long does a typical coaching engagement last?",
    answer:
      "Most clients engage with us for 3–6 months, though some choose longer partnerships. We've found that meaningful, lasting change requires at least three months of consistent work. Our Growth and Transformation plans are designed as ongoing monthly commitments. We recommend a minimum 3-month commitment when you start, and we'll work with you to assess progress and adjust along the way.",
  },
  {
    id: "faq-3",
    question: "How are sessions conducted?",
    answer:
      "All sessions are conducted virtually via secure video conferencing (Zoom or Google Meet). This allows us to work with clients across time zones and eliminates travel time. Sessions are recorded (with your permission) so you can revisit insights. For local clients in Portland, limited in-person sessions can be arranged by request.",
  },
  {
    id: "faq-4",
    question: "What's the difference between coaching and therapy?",
    answer:
      "Therapy focuses on healing past trauma, treating mental health conditions, and understanding behavioral patterns rooted in the past. Coaching is forward-focused, designed for functional individuals who want to bridge the gap between where they are and where they want to be. Coaches do not diagnose or treat mental health conditions. Many clients work with both a therapist and a coach simultaneously for comprehensive support.",
  },
  {
    id: "faq-5",
    question: "Can I switch coaches if the fit isn't right?",
    answer:
      "Absolutely. The coach-client relationship is the foundation of successful coaching, and chemistry matters. If you feel that your coach isn't the right match, we'll facilitate a smooth transition to another member of our team at no additional cost. We want you to have the best possible experience.",
  },
  {
    id: "faq-6",
    question: "Do you offer corporate or group packages?",
    answer:
      "Yes! We offer customized coaching packages for organizations, including leadership development cohorts, team coaching, and wellness programs. Our group coaching program is also available for intact teams. Contact us for a customized proposal tailored to your organization's needs and budget.",
  },
  {
    id: "faq-7",
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours' notice for session cancellations or rescheduling. Sessions cancelled with less than 24 hours' notice are charged in full. We understand that emergencies happen, and we handle those on a case-by-case basis. For monthly plan cancellations, we require 30 days' written notice.",
  },
  {
    id: "faq-8",
    question: "Is coaching covered by insurance?",
    answer:
      "Coaching is generally not covered by health insurance, as it is not a medical or mental health treatment. However, some employers offer coaching as part of their professional development or wellness benefits. We can provide documentation for you to submit to your employer for reimbursement if applicable. We also offer flexible payment plans.",
  },
];

// ── Blog Posts ────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "bp-1",
    slug: "finding-your-north-star-setting-meaningful-life-goals",
    title: "Finding Your North Star: A Framework for Setting Meaningful Life Goals",
    excerpt:
      "Discover a practical framework for identifying what truly matters to you and setting goals that align with your core values and long-term vision.",
    content: "",
    author: "Dr. Taylor Reed",
    authorAvatar: "/images/team/taylor.jpg",
    category: "Goal Setting",
    tags: ["goals", "purpose", "values", "planning"],
    publishedAt: "2026-07-15T09:00:00Z",
    readingTime: 7,
    featuredImage: "/images/blog/north-star-framework.jpg",
  },
  {
    id: "bp-2",
    slug: "five-signs-youre-ready-for-a-career-change",
    title: "5 Signs You're Ready for a Career Change (And What to Do Next)",
    excerpt:
      "Feeling restless at work? Here are five clear indicators it's time to explore new professional horizons, plus actionable steps to navigate the transition.",
    content: "",
    author: "Jordan Williams",
    authorAvatar: "/images/team/jordan.jpg",
    category: "Career",
    tags: ["career", "transition", "professional growth", "fulfillment"],
    publishedAt: "2026-07-08T09:00:00Z",
    readingTime: 5,
    featuredImage: "/images/blog/career-change-signs.jpg",
  },
  {
    id: "bp-3",
    slug: "the-burnout-recovery-playbook",
    title: "The Burnout Recovery Playbook: 7 Science-Backed Strategies",
    excerpt:
      "Burnout isn't just exhaustion — it's a systemic collapse of your motivation and well-being. Here are seven research-backed strategies to recover and build resilience.",
    content: "",
    author: "Amara Osei",
    authorAvatar: "/images/team/amara.jpg",
    category: "Wellness",
    tags: ["burnout", "wellness", "self-care", "mental health", "resilience"],
    publishedAt: "2026-06-28T09:00:00Z",
    readingTime: 8,
    featuredImage: "/images/blog/burnout-recovery.jpg",
  },
  {
    id: "bp-4",
    slug: "leading-with-emotional-intelligence",
    title: "Leading with Emotional Intelligence: The Key to Modern Leadership",
    excerpt:
      "Technical skills get you promoted, but emotional intelligence makes you an exceptional leader. Learn the five components of EQ and how to develop each one.",
    content: "",
    author: "Jordan Williams",
    authorAvatar: "/images/team/jordan.jpg",
    category: "Leadership",
    tags: ["leadership", "emotional intelligence", "management", "communication"],
    publishedAt: "2026-06-20T09:00:00Z",
    readingTime: 6,
    featuredImage: "/images/blog/emotional-intelligence.jpg",
  },
  {
    id: "bp-5",
    slug: "the-art-of-difficult-conversations",
    title: "The Art of Difficult Conversations: A Step-by-Step Guide",
    excerpt:
      "Avoiding tough conversations damages relationships and stifles growth. Master the art of addressing conflict with empathy, clarity, and confidence.",
    content: "",
    author: "Marcus Chen",
    authorAvatar: "/images/team/marcus.jpg",
    category: "Communication",
    tags: ["communication", "relationships", "conflict", "emotional intelligence"],
    publishedAt: "2026-06-12T09:00:00Z",
    readingTime: 6,
    featuredImage: "/images/blog/difficult-conversations.jpg",
  },
  {
    id: "bp-6",
    slug: "morning-routine-high-performers",
    title: "The Morning Routine That High Performers Swear By",
    excerpt:
      "How you start your morning sets the tone for your entire day. Discover the morning habits of top performers and how to design a routine that works for you.",
    content: "",
    author: "Amara Osei",
    authorAvatar: "/images/team/amara.jpg",
    category: "Wellness",
    tags: ["habits", "productivity", "wellness", "routine"],
    publishedAt: "2026-05-30T09:00:00Z",
    readingTime: 5,
    featuredImage: "/images/blog/morning-routine.jpg",
  },
];

// ── Client Logos (for social proof section) ───

export const clientLogos: string[] = [
  "/images/clients/google.svg",
  "/images/clients/microsoft.svg",
  "/images/clients/salesforce.svg",
  "/images/clients/adobe.svg",
  "/images/clients/nike.svg",
  "/images/clients/airbnb.svg",
];

// ── Core Values ───────────────────────────────

export const coreValues = [
  {
    title: "Authenticity",
    description:
      "We believe real growth starts with honesty. We create a space where you can show up as your true self, without pretense or judgment.",
    icon: "shield",
  },
  {
    title: "Empowerment",
    description:
      "We don't give you answers — we help you find your own. Our mission is to equip you with the tools and confidence to navigate life independently.",
    icon: "bolt",
  },
  {
    title: "Compassion",
    description:
      "Every journey is unique, and every challenge is valid. We meet you where you are with empathy, patience, and unwavering support.",
    icon: "heart",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest professional standards. Our coaches pursue ongoing education, supervision, and personal development.",
    icon: "star",
  },
];
