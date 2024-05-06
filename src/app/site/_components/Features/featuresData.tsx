type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "Crafted for SaaS",
    description:
      "Build high-performing SaaS applications effortlessly. Designed for modern SaaS businesses.",
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "High-quality Design",
    description:
      "Create a beautiful and user-friendly interface that keeps your users engaged.  ",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Next.js 13 + TypeScript",
    description:
      "Deliver lightning-fast, scalable SaaS with Next.js 13, TypeScript, and a focus on clean code.",
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "Sanity Blog and Docs",
    description:
      "Effortlessly manage your blog, docs, and content with Sanity's powerful CMS pre-integrated into Ripple Pro",
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "DB, Auth and Stripe",
    description:
      "Focus on your core functionality - Ripple Pro handles databases, authentication, and Stripe payments.",
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "Regular Free Updates",
    description:
      "Stay ahead of the curve: Ripple Pro receives regular free updates with new features and bug fixes.",
  },
];

export default featuresData;
