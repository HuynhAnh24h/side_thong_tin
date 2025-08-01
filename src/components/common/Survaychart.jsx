import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { MdOutlineAnalytics, MdPieChart } from "react-icons/md";
import logo from "@/assets/logo.png";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Survaychart = ({ data }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedItem = data[selectedIndex];

    const labels = Object.keys(selectedItem.answers);
    const values = Object.values(selectedItem.answers);

    // 🎨 Màu sắc chuyên nghiệp, dịu mắt
    const pieColors = [
        "#f97316", // orange-500
        "#fbbf24", // amber-400
        "#10b981", // emerald-500
        "#6366f1", // indigo-500
        "#ec4899", // pink-500
        "#64748b", // slate-500
        "#ef4444", // red-500
    ];

    const pieData = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: labels.map((_, i) => pieColors[i % pieColors.length]),
                borderColor: "#ffffff", // viền trắng giữa lát cắt
                borderWidth: 2,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return percentage < 5 ? "" : `${percentage}%`; // ẩn nếu <5%
                },
                display: (context) => {
                    const value = context.dataset.data[context.dataIndex];
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = (value / total) * 100;
                    return percentage >= 5;
                },
                color: "#ffffff", // chữ trắng nổi bật
                font: {
                    weight: "bold",
                    size: 14,
                },
            },
        },
    };

    const total = values.reduce((a, b) => a + b, 0);
    const legendItems = labels.map((label, i) => {
        const value = values[i];
        const percentage = ((value / total) * 100).toFixed(1);
        return {
            label,
            value,
            percentage,
            color: pieColors[i % pieColors.length],
        };
    });

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar - Left */}
            <aside className="w-[260px] h-full bg-white p-4 flex flex-col justify-center">
                <header className="bg-white flex justify-center items-center rounded-md">
                    <div className="w-[150px] h-[150px]">
                        <img src={logo} alt="Logo ChanChan" className="w-full h-full mb-4" />
                    </div>
                </header>
                <ScrollArea className="h-[90%] bg-white border rounded-xl shadow-md p-4">
                    <nav className="space-y-2">
                        {data.map((item, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                className={`w-full justify-start text-left px-4 py-2 rounded-md transition-all flex items-center gap-2 ${selectedIndex === index
                                    ? "bg-orange-500 text-white hover:bg-amber-700"
                                    : "hover:bg-orange-100 text-orange-700"
                                    }`}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <MdOutlineAnalytics className="text-lg" />
                                {item.question}
                            </Button>
                        ))}
                    </nav>
                </ScrollArea>
            </aside>

            {/* Chart Display - Right */}
            <main className="flex-1 h-full p-6 flex items-center justify-center">
                <Card className="w-full h-[90%] bg-white border rounded-xl shadow-md p-6">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-orange-500 flex items-center gap-2">
                            <MdPieChart />
                            Thống kê: {selectedItem.question}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-full flex flex-row items-center justify-center gap-10">
                        {/* Pie Chart */}
                        <div className="h-[500px] w-[500px]">
                            <Pie data={pieData} options={pieOptions} />
                        </div>

                        {/* Custom Legend */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-md font-semibold text-orange-500 mb-2">Chi tiết</h3>
                            <ul className="space-y-2">
                                {legendItems.map((item, index) => (
                                    <li key={index} className="flex items-center justify-between min-w-[200px]">
                                        <div className="flex items-center gap-5">
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: item.color }}
                                            ></div>
                                            <span className="text-gray-700 font-medium mr-3">{item.label}</span>
                                        </div>
                                        <span className="text-gray-900 font-semibold">
                                            <span className="space-x-4">{item.value}</span> ({item.percentage}%)
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default Survaychart;
