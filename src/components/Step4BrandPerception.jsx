import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

function Step4({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    age: formData.age || "",
    job: formData.job || "",
    location: formData.location || "",
    lunchBudget: formData.lunchBudget || "",
  });

  useEffect(() => {
    onDataChange(localData);
  }, [localData]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#60230D] p-5 rounded-md bg-[#FCDA8A] text-center text-[#60230D]">Brand Perception & Experience</h2>
      <div>
        <label className="block text-md font-bold"> Bạn mô tả Chan Chan bằng 3 từ nào?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-md font-bold"> Bạn thấy Chan Chan khác gì với các quán chay / nhà hàng khác</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-md font-bold">Trải nghiệm của bạn hôm nay thế nào? (1–5 sao)</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></option>
          <option><CiStar /><CiStar /><CiStar /><CiStar /></option>
          <option><CiStar /><CiStar /><CiStar /></option>
          <option><CiStar /><CiStar /></option>
          <option><CiStar /></option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold">Bạn có sẵn sàng giới thiệu Chan Chan cho người khác không?</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Vâng rất sặn lòng</option>
          <option>Để suy nghĩ đã</option>
          <option>Hẹn lần sau nha</option>
        </select>
      </div>
    </div>
  );
}

export default Step4;
