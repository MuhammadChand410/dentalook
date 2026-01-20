import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "../layouts/layouts";
import Dashboard from "../pages/dashboard/dashboard";
import Tickets from "../pages/tickets/tickets";
import Analytics from "../pages/analytics/analytics";
import AllTickets from "../pages/analytics/all-tickets";

export default function MyRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layouts />}>
                        <Route path="/" element={<Tickets />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/all-tickets" element={<AllTickets />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}