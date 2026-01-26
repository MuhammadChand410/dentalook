import ReactECharts from "echarts-for-react";
import { useState } from "react";
import { getBarOptions } from "./bar-chart";

export default function TicketsByStageChart({
    title,
    tabs,
    xAxis,
    series,
    barData,
    defaultView = "bar",
}) {
    const [view, setView] = useState(defaultView);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const lineOptions = {
        tooltip: { trigger: "axis" },
        grid: { left: "4%", right: "4%", bottom: "8%", containLabel: true },

        xAxis: {
            type: "category",
            data: xAxis,
            boundaryGap: false,
            axisLine: { show: false },
            axisTick: { show: false },
        },

        yAxis: {
            type: "value",
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: "#E5E7EB" } },
        },

        series: series.map(item => ({
            name: item.name,
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 8,
            data: item.data,
            lineStyle: { width: 3, color: item.color },
            itemStyle: {
                color: "#fff",
                borderWidth: 3,
                borderColor: item.color,
            },
        })),
    };

    return (
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{title}</h2>

                <div className="flex items-center gap-3">
                    <div className="flex flex-wrap">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1 border border-[#E2E8F0] text-[#809FB8] text-sm whitespace-nowrap cursor-pointer`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex border border-[#EFEFEF] shadow-xs rounded-md overflow-hidden">
                        <button
                            onClick={() => setView("bar")}
                            className={`px-2.5 py-2 ${view === "bar"
                                ? "bg-[#087BB31A] text-white"
                                : "text-[#64748B]"
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M7.5 9.16683V16.6668M7.5 9.16683H3.83301C3.3663 9.16683 3.13318 9.16683 2.95492 9.25766C2.79811 9.33755 2.67072 9.46494 2.59083 9.62174C2.5 9.8 2.5 10.0335 2.5 10.5002V16.6668H7.5M7.5 9.16683V4.66691C7.5 4.2002 7.5 3.96667 7.59083 3.78841C7.67072 3.63161 7.79811 3.50422 7.95492 3.42432C8.13317 3.3335 8.3663 3.3335 8.83301 3.3335H11.1663C11.6331 3.3335 11.8669 3.3335 12.0452 3.42432C12.202 3.50422 12.329 3.63161 12.4089 3.78841C12.4997 3.96667 12.5 4.2002 12.5 4.66691V6.66683M7.5 16.6668H12.5M12.5 16.6668L17.5 16.6669V8.00024C17.5 7.53353 17.4997 7.3 17.4089 7.12174C17.329 6.96494 17.2024 6.83755 17.0456 6.75766C16.8674 6.66683 16.6334 6.66683 16.1667 6.66683H12.5M12.5 16.6668V6.66683"
                                    stroke={view === "bar" ? "#087BB3" : "#63716E"}
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </button>

                        <button
                            onClick={() => setView("line")}
                            className={`px-2.5 py-1.5 ${view === "line"
                                ? "bg-[#087BB31A] text-white"
                                : "text-[#64748B]"
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M2.5 12.5V13.9998C2.5 14.9333 2.5 15.3996 2.68166 15.7562C2.84144 16.0698 3.09623 16.3252 3.40983 16.485C3.766 16.6665 4.23249 16.6665 5.16409 16.6665H17.5002M2.5 12.5V4.1665M2.5 12.5L5.71116 9.82406L5.71382 9.82193C6.29472 9.33784 6.58573 9.09533 6.90129 8.99683C7.27406 8.88046 7.67559 8.89887 8.0363 9.0485C8.34208 9.17536 8.61021 9.44349 9.14647 9.97974L9.15185 9.98512C9.69643 10.5297 9.96944 10.8027 10.2801 10.9293C10.6478 11.0791 11.0571 11.092 11.4339 10.967C11.7534 10.861 12.0452 10.6061 12.6286 10.0956L17.5 5.83317"
                                    stroke={view === "line" ? "#087BB3" : "#63716E"}
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>

            <ReactECharts
                key={view}
                option={
                    view === "bar"
                        ? getBarOptions(barData)
                        : lineOptions
                }
                style={{ height: 320 }}
            />
        </div>
    );
}