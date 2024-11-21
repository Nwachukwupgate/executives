import React, { useState, ReactNode } from "react";
import CenterOnLgScreen from "@/common/utilities/CenterLgScreen";
import RolesPage from "@/features/projects/Create/RolesPage";
import DeptPage from "@/features/projects/Create/DeptPage";
import MatPage from "@/features/projects/Create/MatPage";

interface Tab {
  id: string;
  label: string;
  component: ReactNode;
}

const TABS: Tab[] = [
  { id: "tab1", label: "Roles", component: <RolesPage /> },
  { id: "tab2", label: "Department", component: <DeptPage /> },
  { id: "tab3", label: "Materials", component: <MatPage /> },
];

type ContractorsProps = {};
const CreateSide: React.FC<ContractorsProps> = ({}) => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const tabStyle = (tabId: string) =>
    `cursor-pointer ${
      activeTab === tabId ? "text-blue-600 hover:text-blue-700" : "text-black hover:text-blue-700"
    }`;

  return (
    <CenterOnLgScreen className="py-8">
      <div className="bg-white min-h-[84svh] rounded-lg p-5">
        <section>
          <h1 className="font-bold text-xl py-2">Create Section</h1>
        </section>

        <div className="py-4">
          <nav className="bg-gray-light rounded-md w-full">
          <ol className="list-reset flex items-center space-x-2">
            {TABS.map((tab, index) => (
              <React.Fragment key={tab.id}>
                <li onClick={() => setActiveTab(tab.id)}>
                  <p className={tabStyle(tab.id)}>{tab.label}</p>
                </li>
                {index < TABS.length - 1 && (
                  <li>
                    <span className="text-gray-500"> &#62; </span>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </nav>

        <section className="outlet">
          {TABS.find((tab) => tab.id === activeTab)?.component}
        </section>
        </div>
      </div>
    </CenterOnLgScreen>
  );
};

export default CreateSide;
