import React from "react";
import { Content, TitleButton, TitleList, TitleText } from "./styled";

export const Tabs = ({ tabs, activeTab = 0 }) => {
  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((tab, idx) => {
            if (idx === activeTab) {
              return (
                <TitleButton active key={tab.title}>
                  <TitleText small active>
                    {tab.title}
                  </TitleText>
                </TitleButton>
              );
            } else {
              return (
                <TitleButton key={tab.title}>
                  <TitleText small>{tab.title}</TitleText>
                </TitleButton>
              );
            }
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </div>
  );
};
