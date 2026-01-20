import { Link, useLocation } from "react-router-dom";
import { Ticket, Dashboard, Analytics, UserAudit, Leaderboard, Settings } from "../../../assets/icon";

export default function Aside() {
  const { pathname } = useLocation();

  const SIDEBAR_LINKS = [
    { id: 1, name: "Tickets", path: "/", Icon: Ticket },
    { id: 2, name: "Dashboard", path: "/dashboard", Icon: Dashboard },
    { id: 3, name: "Analytics", path: "/analytics", Icon: Analytics },
    { id: 4, name: "UserAudit", path: "/user-audit", Icon: UserAudit },
    { id: 5, name: "Leaderboard", path: "/leaderboard", Icon: Leaderboard },
    { id: 6, name: "Settings", path: "/settings", Icon: Settings },
  ];

  return (
    <aside className="max-w-62 w-full">
      <nav className="grid gap-2 px-4 py-8">
        {SIDEBAR_LINKS.map(({ id, name, path, Icon }) => {
          const isActive = pathname === path;

          return (
            <Link
              key={id}
              to={path}
              className={`rounded-xl text-sm font-medium px-3.5 py-2.5 flex items-center gap-2
              ${isActive ? "bg-[#087BB3] text-white" : "bg-white text-[#63716E]"}`}
            >
              <Icon pathname={pathname} />
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
