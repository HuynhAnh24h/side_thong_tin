import { useEffect, useState } from "react";

function Step5({ onDataChange, formData }) {
  // Khởi tạo dữ liệu local từ formData
  const [localData, setLocalData] = useState(() => ({
    preferredLocation: formData.preferredLocation || "",
    wantsDelivery: formData.wantsDelivery || "",
    interestedInCombo: formData.interestedInCombo || "",
    suggestedImprovement: formData.suggestedImprovement || "",
  }));

  // Đồng bộ dữ liệu từ formData khi bước thay đổi
  useEffect(() => {
    setLocalData((prev) => ({
      ...prev,
      ...formData, 
    }));
  }, [formData]);

  // Cập nhật dữ liệu ngay lập tức khi thay đổi
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => {
      const updatedData = { ...prev, [name]: value };
      onDataChange(updatedData); // Gửi dữ liệu lên component cha ngay lập tức
      return updatedData;
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-white">
        Future Direction
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Nếu ChanChan mở thêm chi nhánh, Bồ muốn ở khu vực nào?
        </label>
        <input
          type="text"
          name="preferredLocation"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white"
          value={localData.preferredLocation || ""}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ có muốn đặt hàng online hoặc giao tận nơi không?
        </label>
        <select
          name="wantsDelivery"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white"
          value={localData.wantsDelivery || ""}
          onChange={handleInputChange}
        >
          <option value="">Chọn</option>
          <option value="Giao hàng">Có, tôi muốn giao hàng tận nơi</option>
          <option value="Không giao hàng">Không, tôi không muốn giao hàng</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ sẽ quan tâm nếu ChanChan có combo theo tuần / theo tháng chứ?
        </label>
        <select
          name="interestedInCombo"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white"
          value={localData.interestedInCombo || ""}
          onChange={handleInputChange}
        >
          <option value="">Chọn</option>
          <option value="Quan tâm combo">Có</option>
          <option value="Không quan tâm combo">Không</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ muốn ChanChan cải thiện điều gì nhất?
        </label>
        <input
          type="text"
          name="suggestedImprovement"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white"
          value={localData.suggestedImprovement || ""}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default Step5;
