import { useEffect, useState } from "react";

function Step6({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    gift: formData.gift || "",
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
  }, [localData]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-white">
        Quà Online
      </h2>

       <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Chanchan xin cảm ơn bồ bằng món quà nhỏ. Mời Bồ chọn?
        </label>
        <div className="flex flex-col justify-start items-center gap-2">
          {['Nước thảo mộc sương sáo','Nước tía tô hạt chia','Nước chanh dây xí muội','Trà hoa cúc nha dam', 'Bánh pudding'].map((option) => (
            <label key={option} className="flex items-center gap-1 w-full">
              <input
                type="radio"
                name="gift"
                value={option}
                checked={localData.gift === option}
                 onChange={handleInputChange}
                className="border-2 border-gray p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
              />
              <span className="w-full text-sm text-[#60230D]">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Step6;
