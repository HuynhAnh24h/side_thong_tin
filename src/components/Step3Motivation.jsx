import { useEffect, useState } from "react";

function Step3({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    reason: formData.reason || "", // Lưu giá trị chọn từ Select
  });

  useEffect(() => {
    setLocalData({
      reason: formData.reason || "",
    });
  }, [formData]);

  // Hàm xử lý khi chọn giá trị từ Select
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setLocalData({ reason: selectedValue });
    onDataChange({ reason: selectedValue }); // Truyền dữ liệu lên App.js ngay lập tức
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
