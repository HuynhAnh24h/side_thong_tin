import { useEffect, useState } from "react";

function Step6({ onDataChange, formData }) {
  const [selectedGift, setSelectedGift] = useState(formData.gift || "Nước thảo mộc sương sáo");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSelectedGift(value);  // Cập nhật món quà đã chọn
    onDataChange({ gift: value });  // Cập nhật dữ liệu lên cha
  };

  useEffect(() => {
    onDataChange({ gift: selectedGift });
  }, [selectedGift]);

  return (
    <div className="space-y-4">
    <h1 className="text-[#60230D] font-bold text-[20px] text-center"> Cảm ơn bồ đã tham gia khảo sát</h1>
    <h1 className="text-[#60230D] font-bold text-[20px] text-center"> Mọi góp ý của bồ là động lực để Chanchan tiếp tục phát triển</h1>
      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Chanchan xin cảm ơn bồ bằng món quà nhỏ. Mời Bồ chọn?
        </label>
        <div className="flex flex-col justify-start items-center gap-2">
          {[
            "Nước thảo mộc sương sáo",
            "Nước tía tô hạt chia",
            "Nước chanh dây xí muội",
            "Trà hoa cúc nha đam",
            "Bánh pudding"
          ].map((option) => (
            <label key={option} className="flex items-center gap-1 w-full">
              <input
                type="radio"
                name="gift"
                value={option}
                checked={selectedGift === option}
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
