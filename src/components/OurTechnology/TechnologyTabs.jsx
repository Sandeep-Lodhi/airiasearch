import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Innovation from "./Technologies/Innovation";
import AutonomyControl from "./Technologies/AutonomyControl";
import SecurityPrivacy from "./Technologies/SecurityPrivacy";
import AIMachineLearning from "./Technologies/AIMachineLearning";
import "./TechnologyTabs.css";

const TechnologyTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Innovation",
    "Autonomy & Control",
    "Security and Privacy",
    "AI & Machine Learning",
  ];

  return (
    <div className="w-full h-screen bg-transparent text-white flex flex-col container mx-auto px-4">
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <div className="flex-1 w-full">
          <TabPanel className="w-full bg-transparent">
            <Innovation />
          </TabPanel>
          <TabPanel className="w-full bg-transparent">
            <AutonomyControl />
          </TabPanel>
          <TabPanel className="w-full bg-transparent">
            <SecurityPrivacy />
          </TabPanel>
          <TabPanel className="w-full bg-transparent">
            <AIMachineLearning />
          </TabPanel>
        </div>

        <div className="w-full">
          <TabList className="w-full flex flex-wrap justify-around bg-transparent">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={`flex-1 py-3 px-4 cursor-pointer relative text-center ${
                  activeTab === index ? "border-t-4 border-blue-500" : ""
                } ${index === tabs.length - 1 ? "sm:mr-0" : "sm:mr-2"} ${
                  index === 0 ? "sm:ml-0" : "sm:ml-2"
                }`}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </div>
      </Tabs>
    </div>
  );
};

export default TechnologyTabs;
