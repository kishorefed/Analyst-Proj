import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import SignIn from "./pages/SignIn";
import ConversationPage from "./pages/ConversationPage";
import RequirmentPage from "./pages/RequirmentPage";
import AnalyticPage from "./pages/AnalyticPage";
import DocumentPage from "./pages/DocumentPage";
import { useAuthStore } from "./store";

function SignInOrRedirect() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  if (isAuthenticated) return <Navigate to="/conversation" replace />;
  return <SignIn />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInOrRedirect />} />
        <Route
          path="/conversation"
          element={
            <ProtectedRoute>
              <ConversationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/requirements"
          element={
            <ProtectedRoute>
              <RequirmentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <AnalyticPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/documents"
          element={
            <ProtectedRoute>
              <DocumentPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
