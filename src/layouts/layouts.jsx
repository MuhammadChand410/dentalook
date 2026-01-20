import { Outlet } from "react-router-dom"
import Header from "../component/common/header/header"
import Aside from "../component/common/aside/aside"

export default function Layouts() {
  return (
    <div className="h-screen flex flex-col">

      <Header />

      <div className="flex flex-1 overflow-hidden">

        <Aside />
        <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div> 
  )
}

