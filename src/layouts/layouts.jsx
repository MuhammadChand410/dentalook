import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../component/common/header/header"
import Aside from "../component/common/aside/aside"
import Sidebar from "../component/common/aside/aside"


export default function Layouts() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="h-screen flex flex-col">


      <Header onMobileToggle={() => setMobileOpen(true)} />

      <div className="flex flex-1 overflow-hidden">

      
        <Sidebar
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <main className="flex-1 p-4 bg-[#F9FBFC] overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

