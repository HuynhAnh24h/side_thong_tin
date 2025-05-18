import { useEffect, useState } from "react";

function Step2({ onDataChange, formData }) {
  // Khởi tạo state local với dữ liệu từ formData
  const [localData, setLocalData] = useState(() => ({
    visitCount: formData.visitCount || "",
    visitTime: formData.visitTime || "",
    visitWith: formData.visitWith || "",
  }));

  // Đồng bộ dữ liệu từ formData khi bước thay đổi
  useEffect(() => {
    setLocalData(formData);
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
        Behavior
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ đã từng đến ChanChan bao nhiêu lần?
        </label>
        <select
          name="visitCount"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitCount || ""}
          onChange={handleInputChange}
        >
          <option value="">Chọn</option>
          <option value="Lần đầu">Lần đầu</option>
          <option value="2 - 5 lần">2–5 lần</option>
          <option value="Thường xuyên">Thường xuyên (1 lần/tuần hoặc hơn)</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ thường đến ChanChan vào khung giờ nào?
        </label>
        <select
          name="visitTime"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitTime || ""}
          onChange={handleInputChange}
        >
          <option value="">Chọn</option>
          <option value="Sáng">Sáng</option>
          <option value="Trưa">Trưa</option>
          <option value="Chiều">Chiều</option>
          <option value="Tối">Tối</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ thường đi cùng ai?
        </label>
        <select
          name="visitWith"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitWith || ""}
          onChange={handleInputChange}
        >
          <option value="">Chọn</option>
          <option value="Một mình">Một mình</option>
          <option value="Bạn bè">Bạn bè</option>
          <option value="Gia đình">Gia đình</option>
          <option value="Đồng nghiệp">Đồng nghiệp</option>
        </select>
      </div>
    </div>
  );
}

export default Step2;
