// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layouts from "../layouts/layouts";
// import Tickets from "../pages/tickets/tickets";
// import Analytics from "../pages/analytics/analytics";
// import UserAudit from "../pages/user-audit/user-audit";
// import Leaderboard from "../pages/leaderboard/leaderboard";
// import Setting from "../pages/setting/setting";

// import { lazy, Suspense } from "react";
// import Login from "../pages/login/login";
// const Dashboard = lazy(() => import("../pages/dashboard/dashboard"));

// export default function MyRoutes() {
//     return (
//         <>
//             <Suspense fallback={null}>
//                 <BrowserRouter>
//                     <Routes>
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/" element={<Layouts />}>
//                             <Route path="/" element={<Tickets />} />
//                             <Route path="/dashboard" element={<Dashboard />} />
//                             <Route path="/analytics" element={<Analytics />} />
//                             <Route path="/user-audit" element={<UserAudit />} />
//                             <Route path="/leaderboard" element={<Leaderboard />} />
//                             <Route path="/settings" element={<Setting />} />
//                         </Route>
//                     </Routes>
//                 </BrowserRouter>
//             </Suspense>
//         </>
//     )
// }

// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Tickets from "../pages/tickets/tickets";
// import Analytics from "../pages/analytics/analytics";
// import UserAudit from "../pages/user-audit/user-audit";
// import Leaderboard from "../pages/leaderboard/leaderboard";
// import Setting from "../pages/setting/setting";

// import { lazy, Suspense } from "react";

// import ProtectedRoute from "../pages/login/protected";
// import Login from "../pages/login/login";
// import Layouts from "../layouts/layouts";

// const Dashboard = lazy(() => import("../pages/dashboard/dashboard"));

// export default function MyRoutes() {
//     return (
//         <Suspense fallback={null}>
//             <BrowserRouter>
//                 <Routes>
//                     {/* Public route */}
//                     <Route path="/login" element={<Login />} />

//                     {/* Protected routes */}
//                     <Route
//                         path="/"
//                         element={
//                             <ProtectedRoute>
//                                 <Layouts />
//                             </ProtectedRoute>
//                         }
//                     >
//                         <Route path="/" element={<Tickets />} />
//                         <Route path="/dashboard" element={<Dashboard />} />
//                         <Route path="/analytics" element={<Analytics />} />
//                         <Route path="/user-audit" element={<UserAudit />} />
//                         <Route path="/leaderboard" element={<Leaderboard />} />
//                         <Route path="/settings" element={<Setting />} />
//                     </Route>
//                 </Routes>
//             </BrowserRouter>
//         </Suspense>
//     );
// }

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
// import Login from "../pages/login/login";

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
