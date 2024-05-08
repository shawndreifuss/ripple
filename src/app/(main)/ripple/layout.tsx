import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/app/site/_components/Header";
import Footer from "@/app/site/_components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
   <Header/>
   {children}
   <Footer />
   </>
  );
};

export default layout;
