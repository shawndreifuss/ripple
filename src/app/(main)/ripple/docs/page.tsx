import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Ripple Saas",
  description: "This is Docs page for Ripple",
  
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to Ripple Documentation</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  This document serves as a simple template to showcase a sample
                  layout and format. It is solely created for demonstration
                  purposes and is not intended for any official use.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Please visit:{" "}
                  <b>
                    <a href="https://github.com/shawndreifuss">
                    https://github.com/shawndreifuss
                    </a>
                  </b>{" "}
                  to check out the real docs, setup guide and even video
                  instructions
                </p>
                <br /><br /><br />
                <p>
    <div className="container mx-auto py-8 px-4">
      <section>
        <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
        <p className="mb-4">
          Welcome to Ripple, your all-in-one solution for building and managing your SaaS applications.
          Below are the steps to get started with Ripple.
        </p>
        <ol className="list-decimal pl-4">
          <li>Install Prisma:</li>
          <code className="block bg-gray-100 p-2 rounded-md mb-2">
            bun install @prisma/cli
          </code>
          <li>Install Bun:</li>
          <code className="block bg-gray-100 p-2 rounded-md mb-2">
            bun install @bun/client
          </code>
          <li>Install Stripe:</li>
          <code className="block bg-gray-100 p-2 rounded-md mb-2">
            bun install stripe
          </code>
          <li>Install Clerk:</li>
          <code className="block bg-gray-100 p-2 rounded-md mb-2">
            bun install @clerk/clerk-sdk-node
          </code>
          <li>Install Tailwind CSS:</li>
          <code className="block bg-gray-100 p-2 rounded-md mb-2">
            bun install tailwindcss
          </code>
          <li>Install Next.js:</li>
          <code className="block bg-gray-100 p-2 rounded-md mb-2">
            bun install next
          </code>
          <li>Install Vercel:</li>
          <code className="block bg-gray-100 p-2 rounded-md mb-2">
            bun install -g vercel
          </code>
          <li>Install TypeScript:</li>
          <code className="block bg-gray-100 p-2 rounded-md mb-2">
            bun install typescript
          </code>
          <li>Install Upload Thing:</li>
          <code className="block bg-gray-100 p-2 rounded-md mb-2">
            npm install upload-thing
          </code>
        </ol>
      </section>
    </div>
</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

