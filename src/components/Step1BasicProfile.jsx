import { useEffect, useState } from "react";

function Step1({ onDataChange, formData }) {
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
      <h2 className="text-lg font-bold">1. Basic Profile</h2>
      <div>
        <label className="block">Bạn bao nhiêu tuổi?</label>
        <select
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none
          "
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>18–24</option>
          <option>25–34</option>
          <option>35–44</option>
          <option>45–54</option>
          <option>55+</option>
        </select>
      </div>

      <div>
        <label className="block">Nghề nghiệp của bạn là gì?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
        />
      </div>

      <div>
        <label className="block">Bạn sống ở đâu?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.location}
          onChange={(e) =>
            setLocalData({ ...localData, location: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block">Bạn sẵn sàng chi bao nhiêu cho bữa trưa?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none"
          value={localData.lunchBudget}
          onChange={(e) =>
            setLocalData({ ...localData, lunchBudget: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Step1;
