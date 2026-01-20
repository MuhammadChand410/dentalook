import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { OpenIcon, ResolvedIcon, TotalIcon } from "../../assets/icon";
import { Link } from "react-router-dom";

export default function Dashboard() {
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
        { id: 1, icon: TotalIcon, text: 'Total Tickets', title: '40', span: 'Tickets' },
        { id: 2, icon: OpenIcon, text: 'Open (Active)', title: '13', span: 'Tickets' },
        { id: 3, icon: OpenIcon, text: 'Overdue', title: '13', span: 'Tickets' },
        { id: 4, icon: ResolvedIcon, text: 'Resolved', title: '27', span: 'Tickets' },
    ];

    const DASHBOARD_CHART_OPTIONS = [
        { id: 1, text: 'All Tickets', value: '32', path:'/all-tickets' },
        { id: 2, text: 'All Tickets', value: '3', path:'/' },
        { id: 3, text: 'All Tickets', value: '5', path:'/' },
        { id: 4, text: 'All Tickets', value: '7', path:'/' },
        { id: 5, text: 'All Tickets', value: '2', path:'/' },
    ]
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
                <div className="rounded-tr-2xl">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateRangePicker']}>
                            <DateRangePicker />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div className="grid grid-cols-4 gap-2">
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
                <div className="px-4 py-2 bg-white rounded-2xl border border-[#E2E8F0] grid grid-cols-5">
                    {DASHBOARD_CHART_OPTIONS.map(card =>
                        <Link to={card.path} className="px-3 py-2 flex items-center justify-center gap-4" key={card.id}>
                            <p className="text-[#0F172A] text-sm font-medium">{card.text}</p>
                            <span className="text-white text-sm font-semibold px-2 py-1 rounded-full bg-[#2F80ED]">{card.value}</span>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
