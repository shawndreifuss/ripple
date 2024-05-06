type FeatureTab = {
  id: string;
  title: string;
  desc1: string;
  desc2: string;
  image: string;
  imageDark: string;
};

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Ripple Has Neat & Clean User Interface.",
    desc1: "Create a frictionless user experience with Ripple's intuitive and beautiful interface.",
    desc2: "",
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Ready to Use Pages You Need for a SaaS Business.",
    desc1: "Launch your SaaS faster with Ripple's pre-built landing pages, dashboards, and essential business pages.",
    desc2: "Get to market quicker - focus on what matters, not development time.",
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Functional Blog, DB, Auth and Many More",
    desc1: "Manage your content, users, payments, and more - all seamlessly integrated within Ripple.",
    desc2: "Ripple: The all-in-one platform to power your SaaS effectively.",
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;