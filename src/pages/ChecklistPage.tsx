import { lazy, Suspense } from "react";

const Checklist = lazy(() => import("../features/checklist/components/Checklist"));

export default function ChecklistPage() {
    return (
        <div>
            <h1>My Checklist</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Checklist />
            </Suspense>
        </div>
    );
}
