import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "../layouts/layouts";
import Dashboard from "../pages/dashboard/dashboard";
import Tickets from "../pages/tickets/tickets";
import Analytics from "../pages/analytics/analytics";
import UserAudit from "../pages/user-audit/user-audit";
import Leaderboard from "../pages/leaderboard/leaderboard";
import Setting from "../pages/setting/setting";

export default function MyRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layouts />}>
                        <Route path="/" element={<Tickets />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/user-audit" element={<UserAudit />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/settings" element={<Setting />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}