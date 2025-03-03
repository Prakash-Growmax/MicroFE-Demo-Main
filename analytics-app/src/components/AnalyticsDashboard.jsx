import { Card } from "@shared/ui-components/Card";
// import { formatCurrency } from "@shared/utils/formatters";
import styled from "styled-components";

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const MetricCard = styled(Card)`
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0070f3;
  margin: 0.5rem 0;
`;

const MetricLabel = styled.div`
  color: #6c757d;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
`;

const AnalyticsDashboard = () => {
  // In a real app, this data would come from an API
  const metrics = [
    { id: 1, label: "Revenue", value: 135000, format: "currency" },
    { id: 2, label: "Orders", value: 1205, format: "number" },
    { id: 3, label: "Customers", value: 847, format: "number" },
    { id: 4, label: "Conversion Rate", value: 3.2, format: "percent" },
    { id: 5, label: "Profit Rate", value: 70, format: "percent" },
  ];

  const formatValue = (value, format) => {
    switch (format) {
      // case "currency":
      // return formatCurrency(value);
      case "percent":
        return `${value}%`;
      default:
        return value.toLocaleString();
    }
  };

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <DashboardGrid>
        {metrics.map((metric) => (
          <MetricCard key={metric.id}>
            <MetricLabel>{metric.label}</MetricLabel>
            <MetricValue>
              {formatValue(metric.value, metric.format)}
            </MetricValue>
          </MetricCard>
        ))}
      </DashboardGrid>
    </div>
  );
};

export default AnalyticsDashboard;
