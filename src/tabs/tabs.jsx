import React, { useState } from "react";
import { Content, TitleButton, TitleList, TitleText } from "./styled";

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleChengeActiveTab = (id) => () => {
    setActiveTab(id);
  };

  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((tab, idx) => (
            <TitleButton
              key={tab.title}
              active={idx === activeTab}
              onClick={handleChengeActiveTab(idx)}
            >
              <TitleText small active as="h2">
                {tab.title}
              </TitleText>
            </TitleButton>
          ))}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </div>
  );
};
