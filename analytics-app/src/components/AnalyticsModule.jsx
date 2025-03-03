import { useState } from "react";
import styled from "styled-components";
import AnalyticsCharts from "./AnalyticsCharts";
import AnalyticsDashboard from "./AnalyticsDashboard";

const Container = styled.div`
  padding: 1rem 2rem;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#0070f3" : "#495057")};
  border-bottom: ${(props) => (props.active ? "2px solid #0070f3" : "none")};

  &:hover {
    color: #0070f3;
  }
`;

const AnalyticsModule = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Container>
      <h1>Analytics Preview Module </h1>
      <TabsContainer>
        <Tab
          active={activeTab === "dashboard"}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </Tab>
        <Tab
          active={activeTab === "charts"}
          onClick={() => setActiveTab("charts")}
        >
          Charts & Reports
        </Tab>
      </TabsContainer>

      {activeTab === "dashboard" && <AnalyticsDashboard />}
      {activeTab === "charts" && <AnalyticsCharts />}
    </Container>
  );
};

export default AnalyticsModule;
