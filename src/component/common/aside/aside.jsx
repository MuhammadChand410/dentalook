import { Link, useLocation } from "react-router-dom";
import { Ticket, Dashboard, Analytics, UserAudit, Leaderboard, Settings } from "../../../assets/icon";

// export default function Aside() {

const SIDEBAR_LINKS = [
  { id: 1, name: "Tickets", path: "/", Icon: Ticket },
  { id: 2, name: "Dashboard", path: "/dashboard", Icon: Dashboard },
  { id: 3, name: "Analytics", path: "/analytics", Icon: Analytics },
  { id: 4, name: "UserAudit", path: "/user-audit", Icon: UserAudit },
  { id: 5, name: "Leaderboard", path: "/leaderboard", Icon: Leaderboard },
  { id: 6, name: "Settings", path: "/settings", Icon: Settings },
];

// return (
//   <aside className="max-w-62 w-full">
export default function Sidebar({
  mobileOpen = false,
  onMobileClose = () => { },
  collapsed = false,
  setCollapsed = () => { },
}) {

  const { pathname } = useLocation();

  return (
    <aside
      className={`
                              fixed md:static z-100
                              top-0 left-0 h-full bg-white
                              transition-transform md:transition-all duration-300
                              ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
                              md:translate-x-0
                              ${collapsed ? "md:w-22" : "md:w-64"}
                              w-64
                           `}>
      <button
        onClick={() => {
          if (window.innerWidth < 768) {
            onMobileClose()
          } else {
            setCollapsed(!collapsed)
          }
        }}
        className={`
                               absolute top-6 transition-all duration-300
                               w-6 h-6 bg-white border border-gray-300 rounded-full
                               items-center justify-center shadow
                               hidden md:flex -right-3
                               ${mobileOpen ? "flex md:flex" : ""}  `}
        style={{
          display: mobileOpen ? "flex" : undefined
        }}
      >
        <span
          className={`
                        transition-transform duration-300
                        ${mobileOpen ? "rotate-180 md:rotate-0" : ""}
                      `}
        >
          {collapsed ? ">" : "<"}
        </span>
      </button>

      <nav className="grid gap-2 px-4 py-8">
        {SIDEBAR_LINKS.map(({ id, name, path, Icon }) => {
          const isActive = pathname === path;

          return (
            <Link
              key={id}
              to={path}
             className={ `group flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                                 ${isActive
                                        ? "bg-[#087BB3] text-white"
                                        : "text-[#63716E] hover:bg-gray-200 hover:text-gray-900"
                                    }`}
              // className={`rounded-xl text-sm font-medium px-3.5 py-2.5 flex items-center gap-2
              // ${isActive ? "bg-[#087BB3] text-white" : "bg-white text-[#63716E]"}`}
            >
              <Icon pathname={pathname} />

              <span
                className={`
                                        transition-all duration-300 whitespace-nowrap text-sm font-medium
                                         ${collapsed
                    ? "opacity-0 w-0 overflow-hidden"
                    : "opacity-100 w-auto"}
                             `}
              >
                {name}
              </span>
            </Link>

          );
        })}
      </nav>
    </aside>
  );
}
