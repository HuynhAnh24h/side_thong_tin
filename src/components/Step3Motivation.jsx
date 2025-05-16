import { useEffect, useState } from "react";

function Step3({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    reasons: formData.reasons || [], // đa chọn
    favoriteDish: formData.favoriteDish || "",
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
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-white">
        Motivation & Preferences
      </h2>

      {/* Multi-checkbox reasons */}
      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Lý do chính Bồ chọn ChanChan là gì? (Chọn nhiều)
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
                className="mr-2 b"
              />
              <label className="text-sm font-bold text-[#60230D]">{reason}</label>
            </div>
          ))}
        </div>
        <p className="block text-sm font-bold text-[#60230D]">Chọn nhiều mục nếu bạn thích.</p>
      </div>
    </div>
  );
}

export default Step3;
