import { useEffect, useState } from "react";

function Step2({ onDataChange, formData }) {
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
      <h2 className="text-lg font-bold">2. Behavior</h2>
      <div>
        <label className="block">Bạn đã từng đến Chan Chan bao nhiêu lần?</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Lần đầu</option>
          <option>2–5 lần</option>
          <option>Thường xuyên (1 lần/tuần hoặc hơn)</option>
        </select>
      </div>
      <div>
        <label className="block">Bạn thường đến Chan Chan vào lúc nào?</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Sáng</option>
          <option>Trưa</option>
          <option>Chiều</option>
          <option>Tối</option>
        </select>
      </div>
      <div>
        <label className="block">bạn đi vào lúc nào ?</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Trong tuần</option>
          <option>Cúi tuần</option>
        </select>
      </div>
      <div>
        <label className="block">Bạn thường đi cùng ai ?</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Một mình</option>
          <option>Bạn bè</option>
          <option>Gia đình</option>
          <option>Đồng nghiệp</option>
          <option>FWB</option>
        </select>
      </div>
    </div>
  );
}

export default Step2;
