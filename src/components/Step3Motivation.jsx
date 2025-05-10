import { useEffect, useState } from "react";

function Step3({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    reasons: formData.reasons || [], // đa chọn
    favoriteDish: formData.favoriteDish || "",
    suggestedDish: formData.suggestedDish || "",
  });

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setLocalData((prev) => {
      const newReasons = checked
        ? [...prev.reasons, value]
        : prev.reasons.filter((reason) => reason !== value);

      return {
        ...prev,
        reasons: newReasons,
      };
    });
  };

  useEffect(() => {
    onDataChange(localData);
  }, [localData, onDataChange]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#60230D] p-5 rounded-md bg-[#FCDA8A] text-center text-[#60230D]">
        Motivation & Preferences
      </h2>

      {/* Multi-checkbox reasons */}
      <div>
        <label className="block text-md font-bold text-[#60230D]">
          Lý do chính bạn chọn Chan Chan là gì? (Chọn nhiều)
        </label>
        <div className="space-y-2">
          {[
            "Món ăn ngon",
            "Không gian",
            "Thiết kế",
            "Ăn chay",
            "Ăn thuần chay",
            "Giá cả hợp lý",
            "Dễ đi lại",
            "Gần nhà",
            "Gần chỗ làm",
            "Thương hiệu",
            "Nội dung trên mạng",
          ].map((reason) => (
            <div key={reason} className="flex items-center">
              <input
                type="checkbox"
                value={reason}
                checked={localData.reasons.includes(reason)}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label className="text-sm font-bold text-[#60230D]">{reason}</label>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-1">Chọn nhiều mục nếu bạn thích.</p>
      </div>

      {/* Favorite dish */}
      <div>
        <label className="block text-md font-bold text-[#60230D]">Món bạn thích nhất tại Chan Chan?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.favoriteDish}
          onChange={(e) =>
            setLocalData({ ...localData, favoriteDish: e.target.value })
          }
        />
      </div>

      {/* Suggested dish */}
      <div>
        <label className="block text-md font-bold text-[#60230D]">Có món nào bạn muốn thêm không?</label>
        <input
          type="text"
          className="w-full border-2 border-[#E6A300] p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
          value={localData.suggestedDish}
          onChange={(e) =>
            setLocalData({ ...localData, suggestedDish: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Step3;
