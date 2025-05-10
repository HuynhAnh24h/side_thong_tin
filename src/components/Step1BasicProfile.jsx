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

  useEffect(() => {
    onDataChange(localData);
  }, [localData, onDataChange]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#60230D] p-5 rounded-md bg-[#FCDA8A] text-center text-[#60230D]">
        Basic Profile
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D]">
          Bạn bao nhiêu tuổi?
        </label>
        <div className="flex justify-between items-center gap-3">
          {['<18', '18–24', '25–34', '35–44', '45+'].map((option) => (
            <label key={option} className="flex items-center gap-1">
              <input
                type="radio"
                name="age"
                value={option}
                checked={localData.age === option}
                onChange={handleInputChange}
                className="accent-[#E6A300]"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D]">
          Nghề nghiệp của bạn là gì?
        </label>
        <input
          type="text"
          name="job"
          value={localData.job}
          onChange={handleInputChange}
          className="w-full border border-[#E6A300] p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D]">
          Bạn sống ở khu vực nào?
        </label>
        <input
          type="text"
          name="location"
          value={localData.location}
          onChange={handleInputChange}
          className="w-full border border-[#E6A300] p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D]">
          Bạn sẵn sàng chi bao nhiêu cho bữa trưa?
        </label>
        <input
          type="text"
          name="lunchBudget"
          value={localData.lunchBudget}
          onChange={handleInputChange}
          className="w-full border border-[#E6A300] p-2 rounded"
        />
      </div>
    </div>
  );
}

export default Step1;
