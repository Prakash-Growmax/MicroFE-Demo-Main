import { AuthProvider, useAuth } from "@shared/auth/AuthContext";
import { Header } from "@shared/ui-components/Header";
import PropTypes from "prop-types"; // Import PropTypes
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import styled from "styled-components";
import InventoryModule from "./components/InventoryModule";
import Login from "./components/Login";
import RemoteAnalyticsWrapper from "./components/RemoteAnalyticsWrapper";
import SalesModule from "./components/SalesModule";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;
// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is required
};

// The main application content
const AppContent = () => {
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { path: "/", label: "Dashboard" },
    { path: "/inventory", label: "Inventory" },
    { path: "/sales", label: "Sales" },
    { path: "/analytics", label: "Analytics" },
  ];

  return (
    <AppContainer>
      <Header
        appName="Enterprise Application"
        navLinks={navLinks}
        isAuthenticated={isAuthenticated}
        onLogout={logout}
      />
      <MainContent>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <InventoryModule />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inventory"
            element={
              <ProtectedRoute>
                <InventoryModule />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sales"
            element={
              <ProtectedRoute>
                <SalesModule />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <RemoteAnalyticsWrapper />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MainContent>
    </AppContainer>
  );
};

// The root App component with providers
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
