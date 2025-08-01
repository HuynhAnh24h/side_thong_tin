import React from 'react'
import Survaychart from '@/components/common/Survaychart';
import surveyData from "@/constant/surveyData.json";

const Dashboard = () => {
  return (
   <div className="w-screen h-screen">
      < Survaychart data={surveyData} />
    </div>
  );
}

export default Dashboard