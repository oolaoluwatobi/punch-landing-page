import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabList = [
  {
    id: 1,
    name: "Python Developer",
  },
  {
    id: 2,
    name: "Data Scientist",
  },
  {
    id: 3,
    name: "Shopify Developer",
  },
  {
    id: 4,
    name: "Shopify Developer",
  },
  {
    id: 5,
    name: "Front End Developer",
  },
  {
    id: 6,
    name: "Python Developer",
  },
  {
    id: 7,
    name: "MERN Stack Developer",
  },
  {
    id: 8,
    name: "Shopify Developer",
  },
  {
    id: 9,
    name: "Full Stack Developer",
  },
  {
    id: 12,
    name: "Full Stack Developer",
  },
  {
    id: 10,
    name: "Python Developer",
  },
  {
    id: 11,
    name: "Explore More",
  },
];

const FindingTheRightFitTab = () => {
  const renderTabs = TabList.map((tab) => {
    return (
      <p
        key={tab.id}
        className={`${
          tab.id === 7 || tab.id === 11
            ? "text-[#202229] "
            : "text-[#959595] hover:text-[#202229] transition-all hover:font-bold"
        } font-bold`}
      >
        {tab.name}
      </p>
    );
  });

  return (
    <div className="bg-[#F8F8F8] max-w-screen-lg w-full rounded-[15px] mx-auto">
      <Tabs
        defaultValue="itAndDevelopment"
        className="mx-auto w-fit px-8 pt-4 pb-7"
      >
        <div className="w-full my-4  flex">
          <TabsList className="mx-auto">
            <TabsTrigger value="itAndDevelopment">It & Development</TabsTrigger>
            <TabsTrigger value="designAndCreative">
              Design and Creative
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="itAndDevelopment">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-40 gap-y-4 ">
            {renderTabs}
          </div>
        </TabsContent>
        <TabsContent value="designAndCreative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-40 gap-y-4 ">
            {renderTabs}
            {renderTabs}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FindingTheRightFitTab;
