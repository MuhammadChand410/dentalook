import { useState } from "react";
import { HrIcon, OpenIcon, TimeIcon } from "../../assets/icon";
import { ChevronDown } from "lucide-react";


export default function AllTickets({ title, count, data, onRowClick }) {

    const [open, setOpen] = useState(true);

    return (
        <div className="mt-4 border-b border-[#EDEDED] last:border-none rounded-xl bg-white">
            <button onClick={() => setOpen(!open)} className="w-full">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[#EDEDED]">
                    <ChevronDown className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`} />
                    <span>{title}</span>
                    <span className="bg-[#2F80ED] text-white text-xs px-2 py-1 rounded-full">
                        {count}
                    </span>
                </div>
            </button>

            {open && (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm whitespace-nowrap table-auto">
                        <thead className="bg-white border-b border-[#EDEDED]">
                            <tr className="text-left text-gray-500">
                                <th className="px-4 py-3">Ticket Name</th>
                                <th className="px-4 py-3">Date Added</th>
                                <th className="px-4 py-3">RM</th>
                                <th className="px-4 py-3">DL PM</th>
                                <th className="px-4 py-3">Department</th>
                                <th className="px-4 py-3">Assignee</th>
                                <th className="px-4 py-3">Deadline</th>
                                <th className="px-4 py-3">Days Open</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-[#EDEDED] last:border-none text-center align-middle cursor-pointer hover:bg-gray-50"
                                    onClick={() => onRowClick(item)}

                                >
                                    <td className="p-4 flex gap-2 items-center text-[#131313] text-xs font-medium">
                                        <OpenIcon />
                                        {item.name}
                                    </td>

                                    <td className="text-[#131313] text-xs font-medium">
                                        {item.date}
                                    </td>

                                    <td className="text-[#131313] text-xs font-medium">
                                        {item.rm}
                                    </td>

                                    <td className="text-[#131313] text-xs font-medium">
                                        {item.dlpm}
                                    </td>

                                    <td className="flex justify-center items-center gap-1 text-[#131313] text-xs font-medium">
                                        <HrIcon />
                                        {item.dept}
                                    </td>

                                    <td>
                                        <div className="flex justify-center items-center gap-1">
                                            <img
                                                src="https://i.pravatar.cc/24"
                                                className="w-6 h-6 rounded-full"
                                            />
                                            <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">
                                                {item.assignee}
                                            </span>
                                            <span className="border border-[#BDBDBD] rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                                +
                                            </span>
                                        </div>
                                    </td>

                                    <td className="flex justify-center items-center gap-1 text-[#131313] text-xs font-medium">
                                        <TimeIcon />
                                        {item.deadline}
                                    </td>

                                    <td className="text-[#131313] text-xs font-medium">
                                        {item.days}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            )}
        </div>
    );
}


