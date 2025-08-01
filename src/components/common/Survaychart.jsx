import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import { MdOutlineAnalytics, MdPieChart, MdBarChart } from "react-icons/md";
import logo from "@/assets/logo.png"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Survaychart = ({ data }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedItem = data[selectedIndex];

    const labels = Object.keys(selectedItem.answers);
    const values = Object.values(selectedItem.answers);

    const chartData = {
        labels,
        datasets: [
            {
                label: selectedItem.question,
                data: values,
                backgroundColor: "#60a5fa",
            },
        ],
    };

    const pieData = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: [
                    "#60a5fa",
                    "#f59e0b",
                    "#10b981",
                    "#ef4444",
                    "#6366f1",
                    "#8b5cf6",
                    "#ec4899",
                ],
            },
        ],
    };

    const isPieChart = labels.length <= 4;

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    color: "#374151",
                    font: {
                        size: 12,
                    },
                },
            },
        },
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar - Left */}
            <aside className="w-[260px] h-full bg-white p-4 flex flex-col justify-center">
                <header className="bg-white flex justify-center items-center rounded-md">
                    <div className="w-[150px] h-[150px] ">
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
                <Card className="w-full h-[90%] bg-white border rounded-xl shadow-md">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                            {isPieChart ? <MdPieChart /> : <MdBarChart />}
                            Thống kê: {selectedItem.question}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-full flex flex-col justify-center">
                        <div className="h-[400px]">
                            {isPieChart ? (
                                <Pie data={pieData} options={chartOptions} />
                            ) : (
                                <Bar data={chartData} options={chartOptions} />
                            )}
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default Survaychart;
