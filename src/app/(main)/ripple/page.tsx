import React from "react";
import Header from "@/app/site/_components/Header";
import Footer from "@/app/site/_components/Footer";

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
   {children}
   </>
  );
};

export default page;