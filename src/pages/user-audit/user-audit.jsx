import { useState, useMemo } from "react";
import { SearchUserIcon } from "../../assets/icon";
import FilterHeader from "../../component/common/components";
const DROPDOWN_BUTTON = [
    { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:w-[100px] w-full grow" },
    { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:w-23 w-full grow" },
    { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:w-[92px] w-full grow" },
    { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:w-[122px] w-full grow" },
    { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:w-22 w-full grow" },
];
const employees = [
    {
        id: "EMP-0234",
        name: "Olivia Mason",
        avatar: "https://i.pravatar.cc/40?img=1",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0178",
        name: "Mahmoud Tayem",
        avatar: "https://i.pravatar.cc/40?img=2",
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0199",
        name: "Maria Hart",
        avatar: "https://i.pravatar.cc/40?img=3",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0234",
        name: "Laura Nilson",
        avatar: "https://i.pravatar.cc/40?img=1",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0178",
        name: "John Doe",
        avatar: "https://i.pravatar.cc/40?img=2",
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0199",
        name: "Navendhu Oray",
        avatar: "https://i.pravatar.cc/40?img=3",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0234",
        name: "Maria Hart",
        avatar: "https://i.pravatar.cc/40?img=1",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0178",
        name: "Mahmoud Tayem",
        avatar: "https://i.pravatar.cc/40?img=2",
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0199",
        name: "Maria Hart",
        avatar: "https://i.pravatar.cc/40?img=3",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0234",
        name: "Olivia Mason",
        avatar: "https://i.pravatar.cc/40?img=1",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0178",
        name: "Mahmoud Tayem",
        avatar: "https://i.pravatar.cc/40?img=2",
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0199",
        name: "Olivia Mason",
        avatar: "https://i.pravatar.cc/40?img=3",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0234",
        name: "Olivia Mason",
        avatar: "https://i.pravatar.cc/40?img=1",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0178",
        name: "Olivia Mason",
        avatar: "https://i.pravatar.cc/40?img=2",
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0199",
        name: "Maria Hart",
        avatar: "https://i.pravatar.cc/40?img=3",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0234",
        name: "Mahmoud Tayem",
        avatar: "https://i.pravatar.cc/40?img=1",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0178",
        name: "Navendhu Oray",
        avatar: "https://i.pravatar.cc/40?img=2",
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0199",
        name: "Maria Hart",
        avatar: "https://i.pravatar.cc/40?img=3",
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
];

export default function UserAudit() {
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const perPage = 6;

    const filtered = useMemo(() => {
        return employees.filter(
            (e) =>
                e.name.toLowerCase().includes(search.toLowerCase()) ||
                e.id.toLowerCase().includes(search.toLowerCase()) ||
                e.role.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const totalPages = Math.ceil(filtered.length / perPage);
    const data = filtered.slice((page - 1) * perPage, page * perPage);

    const toggleAll = (e) => {
        setSelected(e.target.checked ? data.map((e) => e.id) : []);
    };

    return (
        <div className="p-4 bg-[#F9FBFC] min-h-screen">
            <FilterHeader
                title="Users Audit"
                // subtitle="Monitor ticket volume, progress, and performance"
                dropdowns={DROPDOWN_BUTTON}
            />
            <div className="bg-white border border-[#E2E8F0] rounded-2xl  shadow p-8">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg text-[#17181A] font-bold">Employee List</h2>

                    <div className="flex items-center max-w-56 shadow-xs  w-full gap-2 bg-[#F7F7F7] rounded-lg px-2.5 py-2">
                        <SearchUserIcon />
                        <input
                            type="text"
                            placeholder="Search employee"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                            className="text-xs text-[#63716E] font-normal outline-none"
                        />
                    </div>

                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-275 w-full text-sm whitespace-nowrap">
                        <thead className="rounded-xl bg-[#F7F7F7]">
                            <tr>
                                <th className="px-4 py-3">
                                    <input type="checkbox" onChange={toggleAll} />
                                </th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Employee ID</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Name</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Role</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Region</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Clinic</th>
                                <th className="px-6 py-3 text-[#63716E] text-left"># Logins</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Tickets</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Last Login</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((emp) => (
                                <tr key={emp.id} className="border-b border-[#E5E6E6] hover:bg-[#087BB30D]">
                                    <td className="px-4 py-4">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-6 py-4 text-[#333]">{emp.id}</td>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={emp.avatar}
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <span className="font-medium text-[#333]">{emp.name}</span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 text-[#333]">{emp.role}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.region}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.clinic}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.logins}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.tickets}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.lastLogin}</td>
                                </tr>
                            ))}

                            {data.length === 0 && (
                                <tr>
                                    <td colSpan="9" className="text-center py-6 text-gray-400">
                                        No result found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-500">
                        Showing {(page - 1) * perPage + 1} to{" "}
                        {Math.min(page * perPage, filtered.length)} of{" "}
                        {filtered.length}
                    </p>

                    <div className="flex gap-1">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        >
                            ‹
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={`px-3 py-1 rounded ${page === i + 1
                                    ? "bg-[#087BB3] text-white"
                                    : "bg-gray-200"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            disabled={page === totalPages || totalPages === 0}
                            onClick={() => setPage((p) => p + 1)}
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


// import { useState, useMemo } from "react";

// const allEmployees = Array.from({ length: 48 }).map((_, i) => ({
//   id: `EMP-${1000 + i}`,
//   name: `Employee ${i + 1}`,
//   avatar: `https://i.pravatar.cc/40?img=${(i % 60) + 1}`,
//   role: i % 2 === 0 ? "Manager" : "Staff",
//   region: i % 3 === 0 ? "North" : "South",
//   clinic: "Dental Clinic",
//   logins: Math.floor(Math.random() * 100),
//   tickets: Math.floor(Math.random() * 10),
//   lastLogin: "27 Oct 2023",
// }));

// export default function UserAudit() {
//   const [search, setSearch] = useState("");
//   const [roleFilter, setRoleFilter] = useState("all");
//   const [regionFilter, setRegionFilter] = useState("all");
//   const [page, setPage] = useState(1);
//   const [selected, setSelected] = useState([]);

//   const perPage = 3;

//   // FILTER + SEARCH
//   const filtered = useMemo(() => {
//     return allEmployees.filter((e) => {
//       const matchSearch =
//         e.name.toLowerCase().includes(search.toLowerCase()) ||
//         e.id.toLowerCase().includes(search.toLowerCase());

//       const matchRole =
//         roleFilter === "all" || e.role === roleFilter;

//       const matchRegion =
//         regionFilter === "all" || e.region === regionFilter;

//       return matchSearch && matchRole && matchRegion;
//     });
//   }, [search, roleFilter, regionFilter]);

//   const totalPages = Math.ceil(filtered.length / perPage);
//   const data = filtered.slice((page - 1) * perPage, page * perPage);

//   // CHECKBOX
//   const toggleAll = (e) => {
//     setSelected(e.target.checked ? data.map((d) => d.id) : []);
//   };

//   const toggleOne = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="bg-white rounded-xl shadow p-5">

//         {/* HEADER */}
//         <div className="flex flex-wrap gap-3 justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Employee List</h2>

//           <div className="flex gap-2 flex-wrap">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setPage(1);
//               }}
//               className="border rounded-lg px-3 py-2 text-sm"
//             />

//             <select
//               value={roleFilter}
//               onChange={(e) => {
//                 setRoleFilter(e.target.value);
//                 setPage(1);
//               }}
//               className="border rounded-lg px-3 py-2 text-sm"
//             >
//               <option value="all">All Roles</option>
//               <option value="Manager">Manager</option>
//               <option value="Staff">Staff</option>
//             </select>

//             <select
//               value={regionFilter}
//               onChange={(e) => {
//                 setRegionFilter(e.target.value);
//                 setPage(1);
//               }}
//               className="border rounded-lg px-3 py-2 text-sm"
//             >
//               <option value="all">All Regions</option>
//               <option value="North">North</option>
//               <option value="South">South</option>
//             </select>
//           </div>
//         </div>

//         {/* TABLE */}
//         <div className="overflow-x-auto">
//           <table className="min-w-[1200px] w-full text-sm whitespace-nowrap">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-3">
//                   <input
//                     type="checkbox"
//                     onChange={toggleAll}
//                     checked={data.length > 0 && selected.length === data.length}
//                   />
//                 </th>
//                 <th className="px-6 py-3 text-left">ID</th>
//                 <th className="px-6 py-3 text-left">Name</th>
//                 <th className="px-6 py-3 text-left">Role</th>
//                 <th className="px-6 py-3 text-left">Region</th>
//                 <th className="px-6 py-3 text-left">Clinic</th>
//                 <th className="px-6 py-3 text-left">Logins</th>
//                 <th className="px-6 py-3 text-left">Tickets</th>
//                 <th className="px-6 py-3 text-left">Last Login</th>
//               </tr>
//             </thead>

//             <tbody>
//               {data.map((emp) => (
//                 <tr key={emp.id} className="border-b hover:bg-blue-50">
//                   <td className="px-4 py-4">
//                     <input
//                       type="checkbox"
//                       checked={selected.includes(emp.id)}
//                       onChange={() => toggleOne(emp.id)}
//                     />
//                   </td>

//                   <td className="px-6 py-4">{emp.id}</td>

//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={emp.avatar}
//                         className="w-8 h-8 rounded-full"
//                       />
//                       {emp.name}
//                     </div>
//                   </td>

//                   <td className="px-6 py-4">{emp.role}</td>
//                   <td className="px-6 py-4">{emp.region}</td>
//                   <td className="px-6 py-4">{emp.clinic}</td>
//                   <td className="px-6 py-4">{emp.logins}</td>
//                   <td className="px-6 py-4">{emp.tickets}</td>
//                   <td className="px-6 py-4">{emp.lastLogin}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* PAGINATION SLIDER */}
//         <div className="flex justify-between items-center mt-4">
//           <p className="text-sm text-gray-500">
//             Showing {(page - 1) * perPage + 1} to{" "}
//             {Math.min(page * perPage, filtered.length)} of{" "}
//             {filtered.length}
//           </p>

//           <div className="flex gap-1 items-center">
//             <button
//               disabled={page === 1}
//               onClick={() => setPage((p) => p - 1)}
//               className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//             >
//               ‹
//             </button>

//             {Array.from({ length: totalPages }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setPage(i + 1)}
//                 className={`px-3 py-1 rounded ${
//                   page === i + 1
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200"
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             ))}

//             <button
//               disabled={page === totalPages}
//               onClick={() => setPage((p) => p + 1)}
//               className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
