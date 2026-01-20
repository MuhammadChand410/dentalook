import { useState } from "react";
import ReactECharts from 'echarts-for-react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function Analytics() {
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

    const chart2Options = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };

    const chart1Options = {
        tooltip: {
            trigger: 'item'
        },
        //   legend: {
        //     orient: 'vertical',
        //     left: 'left'
        //   },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '60%'],
                data: [
                    { value: 1048, name: 'Active Tickets (13)' },
                    { value: 735, name: 'Stuck Tickets (13)' },
                    { value: 580, name: 'All Tickets (12)' },
                    { value: 484, name: 'Resolved Tickets (27)' },
                ],
                color: ["#FF5C00", "#EB5757", "#2F80ED", "#339D5C"],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    const chart4Options = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };

    const chart3Options = {
        tooltip: {
            trigger: 'item'
        },
        //   legend: {
        //     orient: 'vertical',
        //     left: 'left'
        //   },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '60%'],
                data: [
                    { value: 1048, name: 'Active Tickets (13)' },
                    { value: 735, name: 'Stuck Tickets (13)' },
                    { value: 580, name: 'All Tickets (12)' },
                    { value: 484, name: 'Resolved Tickets (27)' },
                ],
                color: ["#FF5C00", "#EB5757", "#2F80ED", "#339D5C"],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    const [selectedChart, setSelectedChart] = useState("bar");
    return (
        <div>
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
            <div className="px-8 py-8 mt-6 rounded-xl bg-white border border-[#E2E8F0] ">
                <div className="grid grid-cols-3">
                    <div className="px-4 py-4 rounded-xl bg-white border border-[#E2E8F0]">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold text-[#17181A]">All Tickets</h2>
                            <div className="flex">
                                <button
                                    onClick={() => setSelectedChart("pie")}
                                    className={`text-xs rounded-tl-md rounded-bl-md border border-[#E2E8F0] px-4.5 py-2
                                                           ${selectedChart === "pie"
                                            ? "bg-[#087BB3] text-white"
                                            : "bg-white text-[#809FB8] border-[#E2E8F0]"
                                        }`}
                                >
                                    Bar
                                </button>

                                <button
                                    onClick={() => setSelectedChart("bar")}
                                    className={`text-xs rounded-tr-md rounded-br-md border border-[#E2E8F0] px-4.5 py-2
                                                          ${selectedChart === "bar"
                                            ? "bg-[#087BB3] text-white"
                                            : "bg-white text-[#809FB8] border-[#E2E8F0]"
                                        }`}
                                >
                                    Pie
                                </button>
                            </div>
                        </div>
                        <div>
                            {open && (
                                <div className="relative">

                                    {selectedChart === "bar" && (
                                        <>
                                            <ReactECharts option={chart1Options} />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                                <h2 className="text-2xl font-semibold">800</h2>
                                                <p className="text-xs text-[#64748B] font-normal">Resolved Tickets</p>
                                            </div>
                                        </>
                                    )}

                                    {selectedChart === "pie" && (
                                        <ReactECharts option={chart2Options} />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}