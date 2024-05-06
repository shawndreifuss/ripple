import image1 from "@/../public/images/user/user-01.png";
import image2 from "@/../public/images/user/user-02.png";
type Testimonial = {
  id: number;
  name: string;
  destination?: string;
  image: any;
  content: string;
  designation: string;
};


export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Devid Smith",
    designation: "Founter @democompany",
    image: image1,
    content:
      "Built a custom SaaS solution perfectly with Ripple. Flexible & powerful! ",
  },
  {
    id: 2,
    name: "Jhon Abraham",
    designation: "Founter @democompany",
    image: image2,
    content: "Ripple's UI boosted user engagement by 20%! Love their platform. 10/10!",
  },
  {
    id: 3,
    name: "Devid Smith",
    designation: "Founter @democompany",
    image: image1,
    content:
      "Ripple's pre-builts saved us tons of time launching our MVP. We're now on our way to raising our seed round!",
  },
  {
    id: 4,
    name: "Jhon Abraham",
    designation: "Founter @democompany",
    image: image2,
    content:
      "Ripple manages content, users, payments - a breeze! Focus on content, not ops.  ",

  },
];
