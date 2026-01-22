import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { OpenIcon, ResolvedIcon, TotalIcon } from "../../assets/icon";
import AllTickets from "../analytics/all-tickets";
import { Link } from "react-router-dom";
const DASHBOARD_CHART_OPTIONS = [
    {
        id: 1,
        text: "All Tickets",
        value: 52,
        data: [
            {
                name: "Dashboard UI",
                date: "Aug 15",
                rm: "Mandi",
                dlpm: "Aspire",
                dept: "HR",
                assignee: "+1",
                deadline: "15 July 2025",
                days: "12 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
        ],
    },
    {
        id: 2,
        text: "Received Tickets",
        value: 3,
        data: [
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
        ],
    },
    {
        id: 3,
        text: "Assigned Tickets",
        value: 5,
        data: [
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
        ],
    },
    {
        id: 4,
        text: "Stuck Tickets",
        value: 7,
        data: [
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
        ],
    },
    {
        id: 5,
        text: "Completed Tickets",
        value: 2,
        data: [
            {
                name: "Report Issue",
                date: "Aug 01",
                rm: "Bilal",
                dlpm: "Sam",
                dept: "Ops",
                assignee: "+1",
                deadline: "05 July 2025",
                days: "1 Day",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
        ],
    },
];
export default function Dashboard() {
    const [selectedTitle, setSelectedTitle] = useState("");
    const [open, setOpen] = useState(false);


    const [activeId, setActiveId] = useState(1);

    const DROPDOWN_BUTTON = [
        { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"] },
        { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"] },
        { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"] },
        { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"] },
        { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"] },
    ];

    const [dropdownState, setDropdownState] = useState(
        DROPDOWN_BUTTON.reduce((acc, cur) => {
            acc[cur.id] = { open: false, search: "", selected: "" };
            return acc;
        }, {})
    );

    const toggleOpen = (id) => {
        setDropdownState((prev) => ({
            ...prev,
            [id]: { ...prev[id], open: !prev[id].open },
        }));
    };

    const setSearch = (id, value) => {
        setDropdownState((prev) => ({
            ...prev,
            [id]: { ...prev[id], search: value },
        }));
    };

    const setSelected = (id, value) => {
        setDropdownState((prev) => ({
            ...prev,
            [id]: { ...prev[id], selected: value },
        }));
    };

    const DASHBOARD_BOX = [
        { id: 1, icon: TotalIcon, text: 'Received Tickets', title: '5', span: 'Tickets' },
        { id: 2, icon: OpenIcon, text: 'Assigned Tickets', title: '30', span: 'Tickets' },
        { id: 3, icon: OpenIcon, text: 'Stuck Tickets', title: '3', span: 'Tickets' },
        { id: 4, icon: ResolvedIcon, text: 'Completed Tickets', title: '17', span: 'Tickets' },
    ];

    const POPUP_LINKS = [
        { id: 1, text: 'Ticket Details', path: '#' },
        { id: 2, text: 'Ticket History', path: '#' },
        { id: 3, text: 'Review and Feedback', path: '#' }
    ]

    const POPUP_BUTTON = [
        { id: 1, text: 'Support Category', button: 'General' },
        { id: 2, text: 'Device with Issue', button: 'Computers' },
        { id: 3, text: 'Computer Name', button: 'TX-1024' },
        { id: 4, text: 'Computer Location', button: 'Front Desk' }
    ]

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input) return;

        const newMessage = { role: "user", content: input };
        setMessages([...messages, newMessage]);

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_API_KEY", // put your key here
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // or gpt-4 if available
                messages: [...messages, newMessage],
            }),
        });

        const data = await response.json();
        const reply = data.choices[0].message;

        setMessages((prev) => [...prev, reply]);
        setInput("");
    };
    return (
        <section>
            <div className="py-8">
                <div className="px-8 flex justify-between py-8 bg-white rounded-2xl border border-[#E2E8F0]">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold">Service Desk Dashboard</h2>
                        <p className="text-sm text-[#757575]">Monitor ticket volume, progress, and</p>
                    </div>
                    <div className="flex gap-4">
                        {DROPDOWN_BUTTON.map(({ id, title, options }) => {
                            const state = dropdownState[id];
                            return (
                                <div key={id} className="relative max-w-32">
                                    <button
                                        onClick={() => toggleOpen(id)}
                                        className="flex items-center justify-between gap-2 text-gray-500 w-full px-3 py-2 border text-xs border-[#E0E0E0] rounded-3xl"
                                    >
                                        {state.selected || title}
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            className={`transition-transform duration-300 ${state.open ? "rotate-180" : ""}`}
                                        >
                                            <path
                                                d="M6.216 8.208L9.672 4.692c.08-.08.118-.18.114-.3-.004-.12-.048-.22-.132-.3-.084-.08-.186-.12-.306-.12-.12 0-.22.044-.3.132L6.216 7.152 3.384 4.104c-.08-.088-.18-.132-.3-.132-.12 0-.222.04-.306.12-.084.08-.128.18-.132.3-.004.12.034.22.114.3l3.456 3.516c.088.088.192.132.3.132z"
                                                fill="#0A0E1A"
                                            />
                                        </svg>
                                    </button>

                                    {state.open && (
                                        <div
                                            className="mt-1 p-2 absolute z-50 shadow-sm border border-[#E0E0E0] rounded-xl bg-white"
                                        // style={{ maxHeight: "180px", overflowY: "auto" }} 
                                        >
                                            <input
                                                className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#3CB097]"
                                                placeholder="Search options"
                                                value={state.search}
                                                onChange={(e) => setSearch(id, e.target.value)}
                                            />

                                            {options
                                                .filter((d) => d.toLowerCase().includes(state.search.toLowerCase()))
                                                .map((d, i) => (
                                                    <label
                                                        key={i}
                                                        className="p-1.5 flex items-center gap-1.5 rounded-lg hover:bg-gray-200 cursor-pointer text-xs"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={state.selected === d}
                                                            onChange={() => setSelected(id, d)}
                                                            className="w-4 h-4"
                                                        />
                                                        {d}
                                                    </label>
                                                ))}
                                        </div>
                                    )}
                                </div>

                            );
                        })}
                    </div>
                </div>
                <div className="rounded-tr-2xl mb-4">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateRangePicker']}>
                            <DateRangePicker />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-8">
                    {DASHBOARD_BOX.map(card =>
                        <div className="px-4 py-4 bg-white rounded-2xl border border-[#E2E8F0]" key={card.id}>
                            <div className="flex items-center gap-2 pb-3">
                                <card.icon />
                                <span className="text-[#757575] text-sm font-medium">{card.text}</span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <h3 className="text-[#0F172B] text-3xl font-bold">{card.title}</h3>
                                <span className="text-[#757575] text-xs font-medium">{card.span}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="px-4 py-2 bg-white rounded-2xl border border-[#E2E8F0] grid grid-cols-5 gap-2">
                    {DASHBOARD_CHART_OPTIONS.map(card => (
                        <button
                            key={card.id}
                            onClick={() => setActiveId(card.id)}
                            className={`px-3 py-2 flex items-center justify-center gap-4 rounded-xl
                            ${activeId === card.id ? "bg-white shadow-sm" : ""}`}>
                            <p className="text-sm font-medium">{card.text}</p>
                            <span className="bg-[#2F80ED] text-white text-xs px-2 py-1 rounded-full">
                                {card.data.length}
                            </span>
                        </button>
                    ))}
                </div>


                {activeId === 1 ? (
                    DASHBOARD_CHART_OPTIONS
                        .filter(item => item.id !== 1)
                        .map(section => (
                            <div key={section.id} className="mb-4 rounded-xl">
                                <AllTickets
                                    title={section.text}
                                    count={section.data.length}
                                    data={section.data}
                                    onRowClick={(row) => {
                                        setSelectedTitle(row.title); // or whatever value from the row
                                        setOpen(true);
                                    }}
                                />
                            </div>
                        ))
                ) : (
                    <AllTickets
                        title={DASHBOARD_CHART_OPTIONS.find(i => i.id === activeId)?.text}
                        count={DASHBOARD_CHART_OPTIONS.find(i => i.id === activeId)?.data.length}
                        data={DASHBOARD_CHART_OPTIONS.find(i => i.id === activeId)?.data}
                        onRowClick={(row) => {
                            setSelectedTitle(row.title);
                            setOpen(true);
                        }}
                    />
                )}

                {/* {activeId === 1 ? (
                    DASHBOARD_CHART_OPTIONS
                        .filter(item => item.id !== 1)
                        .map(section => (
                            <div key={section.id} className="mb-4 rounded-xl"  onClick={() => { setSelectedTitle(card.title); setOpen(true); }}>
                                <AllTickets className=""
                                    title={section.text}
                                    count={section.data.length}
                                    data={section.data}
                                />
                            </div>
                        ))
                ) : (
                    <AllTickets
                        title={
                            DASHBOARD_CHART_OPTIONS.find(i => i.id === activeId)?.text
                        }
                        count={
                            DASHBOARD_CHART_OPTIONS.find(i => i.id === activeId)?.data.length
                        }
                        data={
                            DASHBOARD_CHART_OPTIONS.find(i => i.id === activeId)?.data
                        }
                    />
                )} */}


                {open && (
                    <>
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                            onClick={() => setOpen(false)}
                        >
                            <div
                                className="relative w-full px-16 py-10  max-w-275 bg-white shadow-xl rounded-lg transform transition-all duration-300 overflow-y-auto max-h-[calc(100vh-50px)] opacity-100 translate-y-0 scale-100"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex pb-5 justify-between border-b border-[#E2E8F0]">
                                    <h2 className="text-lg text-[#111B2B] font-semibold">Design Operational & Departmental Dashboard with Filter Options</h2>
                                    <div className="flex items-center gap-3">
                                        <p className="text-[#339D5C] text-lg font-semibold">Mark as Complete</p>
                                        <button className="text-base text-[#339D5C] font-bold" onClick={() => setOpen(false)}>✕</button>
                                    </div>
                                </div>
                                <div className="flex items-center mt-5 gap-3 border-b border-[#E2E8F0] mb-5">
                                    {POPUP_LINKS.map(card =>
                                        <Link to={card.path} className="" key={card.id}>
                                            <button className="px-3 py-1.5 cursor-pointer text-[#63716E] text-xs font-medium">{card.text}</button>
                                        </Link>
                                    )}
                                </div>

                                <div className="flex gap-6">
                                    <div className="max-w-[474px] w-full">
                                        <div className="py-4.5 flex items-center gap-1 justify-between border-b border-[#E2E8F0]">
                                            <p className="text-[#475569] text-xs font-semibold">Department</p>
                                            <span className="text-[#272727] text-xs font-semibold">It Department</span>
                                        </div>
                                        {POPUP_BUTTON.map(card =>
                                            <div className="py-4.5 flex items-center gap-1 justify-between border-b border-[#E2E8F0]" key={card.id}>
                                                <p className="text-[#475569] text-xs font-semibold">{card.text}</p>
                                                <span className="text-[#373940] text-sm px-4 py-2 border border-[#E2E8F0] rounded-3xl font-semibold max-w-[140px] w-full text-center" style={{ background: "rgba(52, 179, 241, 0.05)" }}>{card.button}</span>
                                            </div>
                                        )}
                                        <div className="flex px-5 items-center gap-4  border-b border-[#E2E8F0] mb-4 ">
                                            <div>
                                                <p className="text-[#63716E] text-xs font-medium px-3 py-2">Ticket Information</p>
                                            </div>
                                            <div>
                                                <p className="text-[#63716E] text-xs font-medium px-3 py-3">Attachments</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-xs font-medium text-[#63716E] pb-1.5">Short Note or Recommendation
                                            </p>
                                            <textarea name="message" className="bg-[#F7F7F7] text-[#203430] text-xs font-medium rounded-xl w-full h-25 px-3 py-2.5 resize-none" id="message">Description</textarea>
                                        </div>

                                    </div>
                                    <div className="max-w-[474px] h-[564px] w-full border-l border-[#E9EAEB]">
                                        <div className="">
                                            <div>
                                                {messages.map((msg, i) => (
                                                    <div className="" key={i} style={{ textAlign: msg.role === "user" ? "right" : "left" }}>
                                                        <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex  justify-between px-4 py-4 border-t border-[#D5D7DA]">
                                                <input
                                                    className="border border-[#D5D7DA] px-4 py-2.5 max-w-[350px] w-full rounded-xl"
                                                    value={input}
                                                    onChange={(e) => setInput(e.target.value)}
                                                    placeholder="Type a message..."
                                                />
                                                <button onClick={sendMessage}>Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )}
            </div>
        </section>
    );
}
