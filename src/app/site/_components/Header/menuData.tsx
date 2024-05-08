
type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/ripple/about",
  },
  {
    id: 31,
          title: "Blog",
          newTab: false,
          path: "/ripple/blog",
      },
  {
    id: 2.1,
    title: "Pricing",
    newTab: false,
    path: "/#pricing",
  },
  {
    id: 2.3,
    title: "Docs",
    newTab: false,
    path: "/ripple/docs",
  },
  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
