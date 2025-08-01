import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const SurveyChart = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => {
        const labels = Object.keys(item.answers);
        const values = Object.values(item.answers);

        const chartData = {
          labels,
          datasets: [
            {
              label: item.question,
              data: values,
              backgroundColor: "#6366f1",
            },
          ],
        };

        const pieData = {
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: [
                "#6366f1",
                "#f59e0b",
                "#10b981",
                "#ef4444",
                "#3b82f6",
                "#8b5cf6",
                "#ec4899",
              ],
            },
          ],
        };

        const isPieChart = labels.length <= 4;

        return (
          <Card key={index} className="shadow-md border rounded-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium text-gray-700">
                📊 {item.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-[250px]">
                {isPieChart ? (
                  <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                ) : (
                  <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SurveyChart;
