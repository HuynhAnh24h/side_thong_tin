import { useEffect, useState } from "react";

function Step5({ onDataChange, formData }) {
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
      <h2 className="text-lg font-bold border-2 border-[#60230D] p-5 rounded-md bg-[#FCDA8A] text-center text-[#60230D]">Future Direction</h2>
      <div>
        <label className="block text-md font-bold text-[#60230D]">Nếu Chan Chan mở thêm chi nhánh, bạn muốn ở khu vực nào??</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-md font-bold">Bạn có muốn đặt hàng online hoặc giao tận nơi không?</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>có</option>
          <option>không</option>
        </select>
      </div>
      <div>
        <label className="block text-md font-bold">Bạn sẽ quan tâm nếu Chan Chan có combo theo tuần / theo tháng chứ?</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>có</option>
          <option>không</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold">Bạn muốn Chan Chan cải thiện điều gì nhất?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
        />
      </div>
    </div>
  );
}

export default Step5;
