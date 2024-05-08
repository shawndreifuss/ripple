"use client"
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { useParams } from "next/navigation";





const blogData = [
  {
    id: 1,
    title: "The Best Way to Learn Next.Js",
    paragraph:
    "Mastering Next.js: Your Ultimate Guide to Effective Learning",
    article: "In the realm of modern web development, Next.js stands out as a powerful framework for building React applications. Its robust features, including server-side rendering, static site generation, and seamless routing, make it a top choice for developers aiming to create dynamic and performant web experiences. However, mastering Next.js requires more than just understanding its syntax and basic functionalities. It involves diving deep into its core concepts, exploring advanced techniques, and harnessing its full potential to build cutting-edge web applications. This comprehensive guide will walk you through the essential steps to become proficient in Next.js development, covering everything from setting up your environment to deploying production-ready applications.  Understanding the Basics: Before delving into the intricacies of Next.js, it's crucial to grasp the fundamentals. Familiarize yourself with React.js, JavaScript, and basic web development concepts like HTML, CSS, and JavaScript (ES6+). Next.js builds upon React, so having a solid understanding of React principles is essential. Setting Up Your Environment: Get your development environment ready by installing Node.js and npm (Node Package Manager). Next.js projects are created using npm, which simplifies dependency management and project configuration. Install Next.js globally using npm to access its command-line interface (CLI) for creating and managing projects.Creating Your First Next.js App: Dive into hands-on learning by creating your first Next.js application. Use the Next.js CLI to bootstrap a new project, and explore the project structure to understand how Next.js organizes files and folders. Start with a basic 'Hello, World!' example and gradually add more features to get a feel for Next.js development.Understanding Pages and Routing: Next.js simplifies client-side and server-side routing with its intuitive file-based routing system. Learn how to create pages by adding files to the 'pages' directory and how Next.js automatically handles routing based on file names. Explore dynamic routes, nested routes, and route parameters to build dynamic and SEO-friendly applications.  Working with Data: Next.js provides robust data fetching capabilities, allowing you to fetch data from various sources like APIs, databases, and local files. Explore different data fetching methods, including static generation (getStaticProps and getStaticPaths), server-side rendering (getServerSideProps), and client-side data fetching (SWR). Master data fetching techniques to optimize performance and user experience.  Styling and Theming: Style your Next.js applications with ease using CSS modules, styled-components, or Tailwind CSS. Learn how to integrate popular CSS frameworks like Bootstrap or Material-UI into your Next.js projects and customize styles using global CSS files or CSS-in-JS solutions. Explore theming options to maintain consistency and create visually appealing user interfaces. Optimizing Performance: Performance optimization is crucial for delivering fast and responsive web experiences. Explore techniques like code splitting, lazy loading, and image optimization to reduce bundle size and improve page load times. Leverage Next.js features like automatic static optimization (Incremental Static Regeneration) to generate static pages at build time and ensure lightning-fast performance.Testing and Debugging: Ensure the reliability and stability of your Next.js applications by implementing robust testing strategies. Learn how to write unit tests, integration tests, and end-to-end tests using popular testing frameworks like Jest and React Testing Library. Use Next.js's built-in support for testing to write comprehensive test suites and debug issues effectively. Deployment and Hosting: Deploy your Next.js applications to production-ready environments using platforms like Vercel, Netlify, or AWS Amplify. Learn how to configure deployment settings, set up continuous integration and continuous deployment (CI/CD) pipelines, and monitor application performance using analytics and logging tools. Choose the right hosting solution based on your project requirements and scalability needs. Continuous Learning and Community Engagement: The field of web development is constantly evolving, and staying updated with the latest trends and technologies is essential. Engage with the Next.js community through forums, social media, and developer meetups to share knowledge, seek advice, and collaborate on projects. Embrace a growth mindset and commit to lifelong learning to master Next.js and excel in your web development journey.  By following these ten steps and immersing yourself in the world of Next.js development, you'll gain the knowledge, skills, and confidence to build powerful and scalable web applications with ease. Remember that mastery comes with practice, so keep coding, experimenting, and pushing the boundaries of what's possible with Next.js.}", 
   
     image: "/assets/blog.jpeg",
    author: {
      name: "Ripple",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Boost Your Coding Efficiency: Tips for Rapidly Improving Your Programming Speed",
      article: "Master Keyboard Shortcuts: Becoming proficient in keyboard shortcuts is crucial for boosting coding speed. By memorizing and consistently using shortcuts for common actions like copying, pasting, navigating between files, and invoking code snippets, developers can significantly reduce the time spent on repetitive tasks. Most modern Integrated Development Environments (IDEs) and code editors offer extensive shortcut options, allowing programmers to navigate and manipulate code more efficiently. Investing time in learning these shortcuts and incorporating them into your coding workflow can lead to substantial time savings and increased productivity. Use Code Templates and Snippets: Code templates and snippets are invaluable tools for accelerating the coding process. These pre-written code segments, which can range from simple code blocks to entire functions or classes, allow developers to quickly insert common patterns and structures into their codebase. By leveraging templates and snippets for tasks like creating new files, defining function signatures, or implementing design patterns, programmers can save time and effort, especially when working on repetitive tasks or starting new projects. Many code editors support customizable snippets and offer libraries of community-contributed snippets for various programming languages and frameworks. Learn Touch Typing: Touch typing, the ability to type without looking at the keyboard, is a fundamental skill for improving coding speed. By mastering touch typing techniques and building muscle memory for keyboard layouts, developers can type faster, more accurately, and with fewer errors. This skill enables programmers to focus more on the code itself rather than the act of typing, resulting in smoother and more efficient coding sessions. Many online resources and typing tutor programs are available to help individuals learn and practice touch typing, with interactive lessons and drills tailored to different skill levels. Familiarize Yourself with APIs and Libraries: Proficiency in using Application Programming Interfaces (APIs) and third-party libraries is essential for speeding up development tasks. Whether it's accessing data from web services, performing complex calculations, or implementing user interface components, understanding how to leverage existing APIs and libraries can save developers significant time and effort. By familiarizing themselves with popular libraries and frameworks relevant to their projects, programmers can take advantage of pre-built functionalities, avoid reinventing the wheel, and focus on solving higher-level problems. Practice Problem-Solving: Regular practice of coding exercises and challenges is essential for honing problem-solving skills and improving coding speed. Engaging in activities like coding competitions, algorithmic puzzles, or project-based learning helps developers sharpen their analytical thinking, algorithmic reasoning, and debugging abilities. By tackling a diverse range of problems and experimenting with different approaches, programmers can expand their coding repertoire, develop efficient problem-solving strategies, and become more adept at translating ideas into working code. Use Integrated Development Environments (IDEs): Integrated Development Environments (IDEs) are powerful tools that offer a wide range of features designed to streamline the coding process. Features like code auto-completion, syntax highlighting, code navigation, and built-in debugging tools enhance developers' productivity and efficiency. IDEs provide a unified environment for coding, testing, and debugging, eliminating the need to switch between multiple applications. Additionally, many IDEs support extensions and plugins that extend their functionality and adapt to developers' specific needs, further optimizing their coding workflow. Optimize Your Development Environment: Configuring your development environment for maximum productivity is crucial for improving coding speed. Customizing settings, organizing project files, and selecting the right tools and plugins can significantly enhance developers' efficiency and focus. By tailoring their development environment to suit their workflow preferences and project requirements, programmers can minimize distractions, reduce cognitive load, and streamline common tasks. Adopting a clean and organized workspace, setting up keyboard shortcuts, and utilizing version control systems like Git are examples of effective environment optimization strategies. Practice Code Refactoring: Regular code refactoring is essential for maintaining code quality and improving coding speed. Refactoring involves restructuring existing code to make it more readable, maintainable, and efficient without changing its external behavior. By eliminating code redundancies, improving naming conventions, and simplifying complex logic, developers can enhance code clarity and reduce the time spent on understanding and modifying code. Refactored codebases are easier to maintain, debug, and extend, enabling faster iterations and smoother collaboration among team members. Collaborate and Learn from Others: Collaboration and knowledge-sharing within the coding community are invaluable for accelerating learning and improving coding speed. Participating in code reviews, contributing to open-source projects, and engaging in online forums and communities allow developers to gain insights, exchange ideas, and receive constructive feedback from peers. By collaborating with others, programmers can learn new techniques, discover best practices, and broaden their perspectives on software development. Additionally, mentoring and teaching others can deepen their understanding of coding concepts and reinforce their mastery of programming skills. Take Regular Breaks and Stay Healthy: Prioritizing physical and mental well-being is crucial for sustaining coding speed and productivity in the long run. Taking regular breaks, staying hydrated, and practicing mindfulness techniques can help prevent burnout, maintain focus, and recharge cognitive resources. Engaging in physical activity, getting enough sleep, and adopting a balanced diet are essential for maintaining overall health and cognitive function. By incorporating healthy habits into their daily routines, developers can sustain their coding momentum, avoid fatigue, and achieve better long-term productivity. Remember, a healthy mind and body are the foundation of sustainable coding speed improvement.",
    image: "/assets/blog-1.jpeg",
    author: {
      name: "Ripple",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Ripple. The New Way",
    paragraph:
      "Pioneering the Future of Business with Innovative Design and Technology ",
    image: "/assets/blog-2.jpeg",
    article: "Ripple: Pioneering the Future of Business with Innovative Design and Technology. In today's fast-paced digital landscape, businesses are constantly seeking innovative solutions to stay ahead of the curve, streamline operations, and engage with their audience effectively. At the forefront of this revolution is Ripple, a dynamic company dedicated to revolutionizing the way businesses build their online presence, stay organized, and communicate with their customers. With a unique blend of cutting-edge technology and creative design, Ripple offers a comprehensive software platform that empowers businesses to thrive in the digital age. Empowering Businesses Through Innovative Technology. At the heart of Ripple's mission is a commitment to leveraging the latest advancements in technology to empower businesses of all sizes. Our proprietary software combines powerful features such as intuitive website builders, robust project management tools, and seamless communication channels to provide businesses with the tools they need to succeed in today's competitive market. Streamlining Operations and Enhancing Efficiency. Ripple's software is designed to streamline business operations and enhance efficiency across all departments. From project planning and task assignment to time tracking and resource management, our platform offers a centralized hub for all business activities, enabling teams to collaborate effectively and achieve their goals with ease. With automated workflows and customizable dashboards, Ripple helps businesses optimize their processes, reduce overhead costs, and maximize productivity. Creating Engaging Online Experiences. In the digital age, having a strong online presence is essential for business success. Ripple's intuitive website builders empower businesses to create stunning, mobile-responsive websites that captivate audiences and drive conversions. With drag-and-drop functionality, customizable templates, and advanced design features, our platform makes it easy for businesses to build professional-looking websites that reflect their brand identity and resonate with their target audience. Fostering Seamless Communication and Collaboration. Effective communication is the cornerstone of business success. Ripple's integrated communication tools facilitate seamless collaboration among team members, clients, and stakeholders, regardless of their location. From real-time messaging and video conferencing to file sharing and task assignment, our platform provides everything businesses need to stay connected and aligned, even in remote work environments. By fostering a culture of collaboration and transparency, Ripple helps businesses build stronger relationships and drive better outcomes. Driving Innovation Through Continuous Improvement. At Ripple, we believe that innovation is the key to staying ahead of the competition. That's why we're committed to continuously improving our software platform to meet the evolving needs of our customers. Through regular updates, feature enhancements, and user feedback, we ensure that Ripple remains at the forefront of technological innovation, empowering businesses to adapt, grow, and thrive in an ever-changing digital landscape. Inspiring Creativity and Empowering Entrepreneurs. Beyond our software platform, Ripple is dedicated to inspiring creativity and empowering entrepreneurs to pursue their passions and turn their ideas into reality. Through educational resources, mentorship programs, and community events, we support aspiring business owners and innovators on their journey to success. By providing the tools, resources, and support they need to succeed, Ripple is helping to create a future where anyone can build and grow a successful business, regardless of their background or expertise. Join the Ripple Revolution. As we look towards the future, Ripple remains committed to driving positive change and empowering businesses to reach new heights of success. Whether you're a startup looking to make your mark or an established enterprise seeking to innovate and grow, Ripple is here to help you achieve your goals and unlock your full potential. Join the Ripple revolution today and discover a new way to build, design, and create the business of the future.",
    author: {
      name: "Ripple",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];




const BlogDetailsPage = ( ) => { 
  
  const params = useParams();
console.log(params)
  // Initialize selectedBlog as null
  // let selectedBlog = null;

  // // Iterate over the blogData array to find the matching blog
  // for (let i = 0; i < blogData.length; i++) {
  //   if (blogData[i].id === Number(blogId)) {
  //     selectedBlog = blogData[i];
  //     break; // Exit the loop once the blog is found
  //   }
  // }

  return (
    <>
    {/* {selectedBlog ? ( */}

      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {/* { selectedBlog.title || "The Best Way to Learn Next.Js"} */}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          {/* By <span>{  selectedBlog.author.name || 'Ripple'}</span> */}
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        {/* { selectedBlog.publishDate ||"12th May 2021"} */}
                      </p>
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="18"
                            height="13"
                            viewBox="0 0 18 13"
                            className="fill-current"
                          >
                            <path d="M15.6375 0H1.6875C0.759375 0 0 0.759375 0 1.6875V10.6875C0 11.3062 0.309375 11.8406 0.84375 12.15C1.09687 12.2906 1.40625 12.375 1.6875 12.375C1.96875 12.375 2.25 12.2906 2.53125 12.15L5.00625 10.7156C5.11875 10.6594 5.23125 10.6312 5.34375 10.6312H15.6094C16.5375 10.6312 17.2969 9.87187 17.2969 8.94375V1.6875C17.325 0.759375 16.5656 0 15.6375 0ZM16.3406 8.94375C16.3406 9.3375 16.0312 9.64687 15.6375 9.64687H5.37187C5.09062 9.64687 4.78125 9.73125 4.52812 9.87187L2.05313 11.3063C1.82812 11.4187 1.575 11.4187 1.35 11.3063C1.125 11.1938 1.0125 10.9688 1.0125 10.7156V1.6875C1.0125 1.29375 1.32188 0.984375 1.71563 0.984375H15.6656C16.0594 0.984375 16.3687 1.29375 16.3687 1.6875V8.94375H16.3406Z" />
                            <path d="M12.2342 3.375H4.69668C4.41543 3.375 4.19043 3.6 4.19043 3.88125C4.19043 4.1625 4.41543 4.3875 4.69668 4.3875H12.2623C12.5435 4.3875 12.7685 4.1625 12.7685 3.88125C12.7685 3.6 12.5154 3.375 12.2342 3.375Z" />
                            <path d="M11.0529 6.55322H4.69668C4.41543 6.55322 4.19043 6.77822 4.19043 7.05947C4.19043 7.34072 4.41543 7.56572 4.69668 7.56572H11.0811C11.3623 7.56572 11.5873 7.34072 11.5873 7.05947C11.5873 6.77822 11.3342 6.55322 11.0529 6.55322Z" />
                          </svg>
                        </span>
                        50
                      </p>
                      <p className="flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                            className="fill-current"
                          >
                            <path d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z" />
                            <path d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z" />
                          </svg>
                        </span>
                        35
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      Design
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-02.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis enim lobortis scelerisque fermentum. Neque
                    sodales ut etiam sit amet. Ligula ullamcorper
                    <strong className="text-primary dark:text-white">
                      malesuada
                    </strong>
                    proin libero nunc consequat interdum varius. Quam
                    pellentesque nec nam aliquam sem et tortor consequat.
                    Pellentesque adipiscing commodo elit at imperdiet.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    <span className="text-primary underline dark:text-white">
                      Amet dictum sit amet justo
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Digital marketplace for Ui/Ux designers.
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Consectetur adipiscing elit in voluptate velit.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Mattis vulputate cupidatat.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Ligula ullamcorper malesuada proin
                    </li>
                  </ul>
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod incididunt utionals labore et dolore magna
                      aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                      etiam sit amet.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Info" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* ) : (
      <div>No blog found for the provided id</div>
    )} */}
    </>
  );
};

export default BlogDetailsPage;
