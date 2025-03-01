import { Card } from "@shared/ui-components/Card";
import styled from "styled-components";

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 1rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ChartCard = styled(Card)`
  min-height: 300px;
`;

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 250px;
  background: #f8f9fa;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
`;

const AnalyticsCharts = () => {
  return (
    <div>
      <h2>Performance Analytics</h2>
      <ChartsContainer>
        <ChartCard>
          <h3>Revenue Trend</h3>
          <ChartPlaceholder>
            {/* In a real app, you would use a charting library like Chart.js or Recharts */}
            Revenue Chart (Last 12 months)
          </ChartPlaceholder>
        </ChartCard>
        <ChartCard>
          <h3>Top Products</h3>
          <ChartPlaceholder>Top Products Chart</ChartPlaceholder>
        </ChartCard>
        <ChartCard>
          <h3>Customer Acquisition</h3>
          <ChartPlaceholder>Customer Acquisition Chart</ChartPlaceholder>
        </ChartCard>
        <ChartCard>
          <h3>Geographic Distribution</h3>
          <ChartPlaceholder>Geographic Distribution Chart</ChartPlaceholder>
        </ChartCard>
      </ChartsContainer>
    </div>
  );
};

export default AnalyticsCharts;
