import React from 'react'
import Survaychart from '@/components/common/Survaychart';
import surveyData from "@/constant/surveyData.json";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📊 Tổng quan khảo sát</h1>
      <Survaychart data={surveyData} />
    </div>
  );
}

export default Dashboard