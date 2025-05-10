import { useEffect, useState } from "react";

function Step1({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    age: formData.age || "",
    job: formData.job || "",
    location: formData.location || "",
    lunchBudget: formData.lunchBudget || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Chỉ chạy useEffect khi `localData` thay đổi, tránh vòng lặp vô hạn
  useEffect(() => {
    if (JSON.stringify(localData) !== JSON.stringify(formData)) {
      onDataChange(localData);
    }
  }, [localData, formData]); 

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#60230D] p-5 rounded-md bg-[#60230D] text-center text-[#E6A300]">
        Basic Profile
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bạn bao nhiêu tuổi?
        </label>
        <div className="flex flex-col justify-start items-center gap-3">
          {['<18', '18–24', '25–34', '35–44', '45+'].map((option) => (
            <label key={option} className="flex items-center gap-1 w-full">
              <input
                type="radio"
                name="age"
                value={option}
                checked={localData.age === option}
                onChange={handleInputChange}
                className="border-2 border-[#E6A300] p-5 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
              />
              <span className="w-full text-sm text-[#60230D]">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Nghề nghiệp của bạn là gì?
        </label>
        <input
          type="text"
          name="job"
          value={localData.job}
          onChange={handleInputChange}
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bạn sống ở khu vực nào?
        </label>
        <input
          type="text"
          name="location"
          value={localData.location}
          onChange={handleInputChange}
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bạn sẵn sàng chi bao nhiêu cho bữa trưa?
        </label>
        <input
          type="text"
          name="lunchBudget"
          value={localData.lunchBudget}
          onChange={handleInputChange}
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
        />
      </div>
    </div>
  );
}

export default Step1;
