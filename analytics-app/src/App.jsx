import { AuthProvider, useAuth } from "@shared/auth/AuthContext";
import { Header } from "@shared/ui-components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AnalyticsModule from "./components/AnalyticsModule";

function AppContent() {
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { path: "/", label: "Dashboard" },
    { path: "/reports", label: "Reports" },
  ];

  return (
    <div>
      <Header
        appName="Analytics Application"
        navLinks={navLinks}
        isAuthenticated={isAuthenticated}
        onLogout={logout}
      />
      <Routes>
        <Route path="/*" element={<AnalyticsModule />} />
      </Routes>
    </div>
  );
}

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
