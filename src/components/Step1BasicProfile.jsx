import { useEffect, useState } from "react";

function Step1({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    age: formData.age || "",
    job: formData.job || "",
    location: formData.location || "",
    lunchBudget: formData.lunchBudget || "",
  });
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    onDataChange(localData);
  }, [localData]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#60230D] p-5 rounded-md bg-[#FCDA8A] text-center text-[#60230D]">Basic Profile</h2>
      
      <div>
        <label className="block text-md font-bold text-[#60230D]">Bạn bao nhiêu tuổi?</label>
            <div className="flex justify-between items-center gap-3">
                {['<18', '>18', 'Pepople', 'old',].map((option) => (
                <label key={option} className="flex items-center justify-center">
                    <input
                    type="radio"
                    name="age"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleChange}
                    className="border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
                    />
                    <span>{option}</span>
                </label>
                ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D]">Nghề nghiệp của bạn là gì?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D]">Bạn sống ở đâu?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.location}
          onChange={(e) =>
            setLocalData({ ...localData, location: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D]">Bạn sẵn sàng chi bao nhiêu cho bữa trưa?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
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
