import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AllTickets() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Received Tickets");

    const options = [
        { label: "Received Tickets", value: "today" },
        { label: "This Week", value: "week" },
        { label: "This Month", value: "month" },
    ];
    // const TICKETS_HEADER = [
    //     { id: 1, text: 'Ticket Name', },
    //     { id: 2, text: 'Ticket Name', },
    //     { id: 3, text: 'Ticket Name', },
    //     { id: 4, text: 'Ticket Name', },
    //     { id: 5, text: 'Ticket Name', },
    // ]
    const data = Array(7).fill({
        name: "Project X dashboard UI prototype",
        date: "Fri Aug 15",
        rm: "Mandi",
        dlpm: "Aspire",
        dept: "HR",
        assignee: "+1",
        deadline: "15th July 2025",
        days: "12 Days",
    });
    return (
        <div>
            <div className="relative ">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full rounded-lg bg-white text-sm border border-[#E0E0E0]">
                    <div className="flex gap-2 items-center px-3 py-2 border-b border-[#E0E0E0]">
                        <ChevronDown className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`} />
                        <span>{selected}</span>
                        <span className="text-white text-sm font-semibold px-2 py-1 rounded-full bg-[#2F80ED]">3</span>
                    </div>
                    {open && (
                        <div className="">
                            {/* <div className="grid grid-cols-5">
                                {TICKETS_HEADER.map(card =>
                                    <div className="px-7 py-2 bg-[#F7F7F7] border border-[#E2E8F0]" key={card.id}>
                                        <p className="text-[#7F7F7F] text-sm font-normal">{card.text}</p>
                                    </div>
                                )}
                            </div> */}
                            <div className="bg-white rounded-xl overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-white border-b">
                                        <tr className="text-left text-gray-500">
                                            <th className="p-4">Ticket Name</th>
                                            <th>Date Added</th>
                                            <th>RM</th>
                                            <th>DL PM</th>
                                            <th>Department</th>
                                            <th>Assignee</th>
                                            <th>Deadline</th>
                                            <th>Days Open</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.map((item, i) => (
                                            <tr key={i} className="border-b last:border-none">
                                                <td className="p-4 flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                    {item.name}
                                                </td>
                                                <td>{item.date}</td>
                                                <td>{item.rm}</td>
                                                <td>{item.dlpm}</td>
                                                <td className="flex items-center gap-1 text-red-500">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                    {item.dept}
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-1">
                                                        <img
                                                            src="https://i.pravatar.cc/24"
                                                            className="w-6 h-6 rounded-full"
                                                        />
                                                        <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">
                                                            {item.assignee}
                                                        </span>
                                                        <span className="border rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                                            +
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="flex items-center gap-1 text-gray-600">
                                                    <span>⏰</span>
                                                    {item.deadline}
                                                </td>
                                                <td>{item.days}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {options.map(opt => (
                                <div
                                    key={opt.value}
                                    onClick={() => {
                                        setSelected(opt.label);
                                        setOpen(false);
                                    }}
                                    className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                                >
                                    {opt.label}
                                </div>
                            ))}
                        </div>
                    )}
                </button>
            </div>
        </div>
    )
}