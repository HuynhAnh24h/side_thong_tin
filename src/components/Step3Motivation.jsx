import { useEffect, useState } from "react";

function Step3({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    reason: formData.reason || "", // Đặt giá trị mặc định là option đầu tiên
  });

  useEffect(() => {
    if (JSON.stringify(localData) !== JSON.stringify(formData)) {
      onDataChange(localData);
    }
  }, [localData, formData]); // Loại bỏ `setLocalData` trong dependency

  // Xử lý thay đổi giá trị từ select
  const handleSelectChange = (e) => {
    setLocalData({ reason: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-white">
        Motivation & Preferences
      </h2>

      {/* Select Reason */}
      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Lý do chính Bồ chọn ChanChan là gì?
        </label>
        <select
          value={localData.reason}
          onChange={handleSelectChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Chọn</option>
          <option value="Món ăn ngon">Món ăn ngon</option>
          <option value="Không gian">Không gian</option>
          <option value="Thiết kế">Thiết kế</option>
          <option value="Ăn chay">Ăn chay</option>
          <option value="Ăn thuần chay">Ăn thuần chay</option>
          <option value="Giá cả hợp lý">Giá cả hợp lý</option>
          <option value="Dễ đi lại">Dễ đi lại</option>
          <option value="Gần nhà">Gần nhà</option>
          <option value="Gần chỗ làm">Gần chỗ làm</option>
          <option value="Thương hiệu">Thương hiệu</option>
          <option value="Qua Online">Qua Online</option>
        </select>
      </div>
    </div>
  );
}

export default Step3;
