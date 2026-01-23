import { useRef, useState } from "react";

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { ButtonIcon, ButtonnIcon, InputIcon, OpenIcon, ResolvedIcon, TotalIcon } from "../../assets/icon";
import AllTickets from "../analytics/all-tickets";
import TicketDetails from "./tickets-detail";
import TicketHistory from "./ticcket-history";
import TicketReveiw from "./ticket-reveiw";
import TabButton from "./tab-button";
import FilterHeader from "../../component/common/components";
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

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages([
            ...messages,
            {
                id: Date.now(),
                text: input,
                sender: "me",
                name: "Nicole Li",
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                avatar: "https://i.pravatar.cc/40?img=2"
            }
        ]);
        setInput("");
    };

    const fileRef = useRef(null);
    const openFilePicker = () => {
        fileRef.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log("Selected file:", file);
    };

    const [activeTab, setActiveTab] = useState("details");

    const badgeColors = {
        1: "bg-[#000]",
        2: "bg-[#2F80ED]",
        3: "bg-[#FF5C00]",
        4: "bg-[#800000]",
        5: "bg-[#339D5C]",
    };

    const getBadgeColor = (id) => {
        switch (id) {
            case 2:
                return "bg-[#2F80ED]";
            case 3:
                return "bg-[#FF5C00]";
            case 4:
                return "bg-[#800000]";
            case 5:
                return "bg-[#339D5C]";
        }
    };

    const DROPDOWN_BUTTONS = [
        { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:max-w-[97px] grow" },
        { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:max-w-22 grow" },
        { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:max-w-[84px] grow" },
        { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:max-w-[122px] grow" },
        { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:max-w-20 grow" },
    ];
    return (
        <section>
            <div className="py-8">
                {/* <div className="px-8 flex justify-between py-8 bg-white rounded-2xl border border-[#E2E8F0]">
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
                </div> */}
                <FilterHeader
                title="Service Desk Dashboard"
                subtitle="Monitor ticket volume, progress, and performance"
                dropdowns={DROPDOWN_BUTTONS}
            />
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
                            <span
                                className={`text-white text-xs px-2 py-1 rounded-full
                                         ${badgeColors[card.id] || "bg-[#2F80ED]"}`}>
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
                                    bgColor={
                                        section.id === 2 ? "#2F80ED" :
                                            section.id === 3 ? "#FF5C00" :
                                                section.id === 4 ? "#800000" :
                                                    "#339D5C"
                                    }
                                    onRowClick={(row) => {
                                        setSelectedTitle(row.title);
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
                        bgColor={getBadgeColor(activeId)}
                        onRowClick={(row) => {
                            setSelectedTitle(row.title);
                            setOpen(true);
                        }}
                    />
                )}

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
                                    <div className="flex gap-9">
                                        <TabButton
                                            active={activeTab === "details"}
                                            onClick={() => setActiveTab("details")}
                                            text="Ticket Details"
                                        />
                                        <TabButton
                                            active={activeTab === "history"}
                                            onClick={() => setActiveTab("history")}
                                            text="Ticket History"
                                        />
                                        <TabButton
                                            active={activeTab === "review"}
                                            onClick={() => setActiveTab("review")}
                                            text="Review & Feedback"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="bg-white max-w-118 w-full mx-auto">
                                        {activeTab === "details" && <TicketDetails />}
                                        {activeTab === "history" && <TicketHistory />}
                                        {activeTab === "review" && <TicketReveiw />}
                                    </div>
                                    <div className="max-w-118 h-141 w-full border-l border-[#E9EAEB] mx-auto bg-white flex flex-col">
                                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                            {messages.map((msg) => (
                                                <div
                                                    key={msg.id}
                                                    className={`flex items-end gap-2 ${msg.sender === "me" ? "justify-end" : "justify-start"
                                                        }`}
                                                >

                                                    <div>
                                                        <p className="text-xs text-gray-400 mb-1">
                                                            {msg.sender === "me" ? msg.time + " " + msg.name : msg.name + " " + msg.time}
                                                        </p>
                                                        <div
                                                            className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${msg.sender === "me"
                                                                ? "bg-[#0B3A4A] text-white rounded-br-none"
                                                                : "bg-gray-100 text-gray-800 rounded-bl-none"
                                                                }`}
                                                        >
                                                            {msg.text}
                                                        </div>
                                                    </div>

                                                    {msg.sender === "me" && (
                                                        <img src={msg.avatar} className="w-8 h-8 rounded-full" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="p-3 border border-[#E9EAEB] flex items-center gap-2 bottom-0 sticky">
                                            <div className="flex items-center border border-[#D5D7DA] rounded-lg px-3 py-3 gap-3 max-w-87 w-full">
                                                <InputIcon />
                                                <input
                                                    value={input}
                                                    onChange={(e) => setInput(e.target.value)}
                                                    placeholder="Enter message here..."
                                                    className="flex-1 text-sm outline-none"
                                                />
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button onClick={openFilePicker}>
                                                    <ButtonIcon />
                                                </button>
                                                <input
                                                    type="file"
                                                    ref={fileRef}
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                                <button
                                                    onClick={sendMessage}
                                                    className="bg-[#309356] text-white px-4 py-3 rounded-lg"
                                                >
                                                    <ButtonnIcon />
                                                </button>
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
