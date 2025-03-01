import React, { Suspense } from "react";
import styled from "styled-components";

const AnalyticsLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-weight: bold;
  color: #6c757d;
`;

// Lazy load the remote analytics module
const RemoteAnalyticsModule = React.lazy(() =>
  import("analyticsApp/AnalyticsModule")
);

const RemoteAnalyticsWrapper = () => {
  return (
    <Suspense
      fallback={<AnalyticsLoader>Loading Analytics Module...</AnalyticsLoader>}
    >
      <RemoteAnalyticsModule />
    </Suspense>
  );
};

export default RemoteAnalyticsWrapper;
