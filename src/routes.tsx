import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChecklistPage from "./pages/ChecklistPage";
export default function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<ChecklistPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}
