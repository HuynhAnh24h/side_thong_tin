import { useEffect, useState } from "react";

function Step3({ onDataChange, formData }) {
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
      <h2 className="text-lg font-bold">3.  Motivation & Preferences</h2>

      <div>
        <label className="block">Lý do chính bạn chọn Chan Chan là gì?</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>Món ăn ngon</option>
          <option>Không gian</option>
          <option>Thiết kế</option>
          <option>Ăn chay</option>
          <option>Ăn thuần chay</option>
          <option>Giá cả hợp lý</option>
          <option>Dễ đi lại</option>
          <option>Gần nhà</option>
          <option>Gần chỗ làm</option>
          <option>Thương hiệu</option>
          <option>Nội dung trên mạng</option>
        </select>
      </div>

      <div>
        <label className="block">Món bạn thích nhất tại chan chan ?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
        />
      </div>

      <div>
        <label className="block">Có món nào bạn muốn thêm không?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.location}
          onChange={(e) =>
            setLocalData({ ...localData, location: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Step3;
