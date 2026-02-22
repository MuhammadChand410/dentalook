import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layouts from "../layouts/layouts";
import ProtectedRoute from "../pages/login/protected";
import Analysis from "../pages/analytics";
import Ticket from "../pages/tickets";
import Dashbord from "../pages/dashboard";
import Leaderbooard from "../pages/leaderboard";
import Useraudit from "../pages/user-audit";
import Setings from "../pages/setting";
import Logiin from "../pages/login";
import DlVendor from "../pages/dl-vendor";

const Login = lazy(() => import("../pages/login/login"));
const Dashboard = lazy(() => import("../pages/dashboard/dashboard"));

export default function MyRoutes() {
  return (
    <>

      <Suspense fallback={null}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Logiin />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layouts />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Ticket />} />
              <Route path="/dashboard" element={<Dashbord />} />
              <Route path="/analytics" element={<Analysis />} />
              <Route path="/dl-vendor" element={<DlVendor />} />
              <Route path="/user-audit" element={<Useraudit />} />
              <Route path="/leaderboard" element={<Leaderbooard />} />
              <Route path="/settings" element={<Setings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
