import { useEffect, useState } from "react";

function Step2({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    visitCount: formData.visitCount || "",
    visitTime: formData.visitTime || "",
    visitDay: formData.visitDay || "",
    visitWith: formData.visitWith || "",
  });

  useEffect(() => {
    onDataChange(localData);
  }, [localData]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-white">Behavior</h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">Bồ đã từng đến Chan Chan bao nhiêu lần?</label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitCount}
          onChange={(e) => setLocalData({ ...localData, visitCount: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Lần đầu</option>
          <option>2–5 lần</option>
          <option>Thường xuyên (1 lần/tuần hoặc hơn)</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">Bồ thường đến Chan Chan vào lúc nào?</label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitTime}
          onChange={(e) => setLocalData({ ...localData, visitTime: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Sáng</option>
          <option>Trưa</option>
          <option>Chiều</option>
          <option>Tối</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">Bồ thường đến Chan Chan vào lúc nào??</label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitDay}
          onChange={(e) => setLocalData({ ...localData, visitDay: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Trong tuần</option>
          <option>Cuối tuần</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">Bồ thường đi cùng ai?</label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitWith}
          onChange={(e) => setLocalData({ ...localData, visitWith: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Một mình</option>
          <option>Bạn bè</option>
          <option>Gia đình</option>
          <option>Đồng nghiệp</option>
          <option>FWB</option>
        </select>
      </div>
    </div>
  );
}
export default Step2;
