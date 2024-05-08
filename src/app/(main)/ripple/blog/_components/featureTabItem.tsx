import React from "react";
import Image from "next/image";

type FeatureTab = {
  title: string;
  
};

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title } = featureTab;

  return (
    <>
      <div className="flex items-center ">
        <div className="md:w-1/2">
          <h2 className="text-7xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          </div>
          </div>
    </>
  );
};

export default FeaturesTabItem;
