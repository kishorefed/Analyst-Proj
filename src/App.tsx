import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import ConversationPage from "./pages/ConversationPage";
import RequirmentPage from "./pages/RequirmentPage";
import AnalyticPage from "./pages/AnalyticPage";
import DocumentPage from "./pages/DocumentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/conversation" element={<ConversationPage />} />
        <Route path="/requirements" element={<RequirmentPage />} />
        <Route path="/analytics" element={<AnalyticPage />} />
        <Route path="/documents" element={<DocumentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
