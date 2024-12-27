import { Routes, Route } from "react-router-dom";
import ChecklistPage from "./pages/ChecklistPage";
import LoginPage from "./pages/LoginPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/checklist" element={<ChecklistPage />} />
        </Routes>
    );
}
