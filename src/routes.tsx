import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ChecklistPage from "./pages/ChecklistPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/checklist" element={<ChecklistPage />} />
        </Routes>
    );
}
