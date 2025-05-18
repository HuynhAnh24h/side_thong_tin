import { useEffect, useState } from "react";

function Step4({ onDataChange, formData }) {
  // Khởi tạo dữ liệu local từ formData
  const [localData, setLocalData] = useState(() => ({
    brandDifference: formData.brandDifference || "",
    experienceRating: formData.experienceRating || "",
    recommendChanChan: formData.recommendChanChan || "",
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
        Brand Perception & Experience
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ thấy ChanChan khác gì với các quán chay / nhà hàng khác?
        </label>
        <input
          type="text"
          name="brandDifference"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white"
          value={localData.brandDifference || ""}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Trải nghiệm của Bồ hôm nay thế nào?
        </label>
        <select
          name="experienceRating"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white"
          value={localData.experienceRating || ""}
          onChange={handleInputChange}
        >
          <option value="">Chọn</option>
          <option value="5 sao">★★★★★</option>
          <option value="4 sao">★★★★</option>
          <option value="3 sao">★★★</option>
          <option value="2 sao">★★</option>
          <option value="1 sao">★</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ có sẵn sàng giới thiệu ChanChan cho người khác không?
        </label>
        <select
          name="recommendChanChan"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white"
          value={localData.recommendChanChan || ""}
          onChange={handleInputChange}
        >
          <option value="">Chọn</option>
          <option value="Rất sẵn lòng">Vâng, rất sẵn lòng</option>
          <option value="Chưa chắc chắn">Tôi chưa chắc chắn</option>
          <option value="Không giới thiệu">Tôi sẽ không giới thiệu</option>
        </select>
      </div>
    </div>
  );
}

export default Step4;
