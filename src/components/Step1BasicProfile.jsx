import { useEffect, useState } from "react";

function Step1({ onDataChange, formData }) {
  // Khởi tạo state với dữ liệu từ formData
  const [localData, setLocalData] = useState(() => ({
    age: formData.age || "",
    job: formData.job || "",
    email: formData.email || "",
    cusname: formData.cusname || "",
    phone: formData.phone || "",
    location: formData.location || "",
    lunchBudget: formData.lunchBudget || "",
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
        Basic Profile
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ vui lòng cho ChanChan biết tên nhé?
        </label>
        <input
          type="text"
          name="cusname"
          value={localData.cusname}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ bao nhiêu tuổi?
        </label>
        <div className="flex justify-start items-center gap-2">
          {["18 – 24", "25 – 34", "35 – 44", "45 +"].map((option) => (
            <label key={option} className="flex items-center gap-1 w-full">
              <input
                type="radio"
                name="age"
                value={option}
                checked={localData.age === option}
                onChange={handleInputChange}
                required
                className="border-2 border-gray p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
              />
              <span className="w-full text-sm text-[#60230D]">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Số điện thoại của Bồ để ChanChan chăm sóc tốt hơn
        </label>
        <input
          type="text"
          name="phone"
          value={localData.phone}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Cho ChanChan email của Bồ nha
        </label>
        <input
          type="text"
          name="email"
          value={localData.email}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Nghề nghiệp của Bồ là gì?
        </label>
        <input
          type="text"
          name="job"
          value={localData.job}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ sống ở khu vực nào? (Quận, thành phố)
        </label>
        <input
          type="text"
          name="location"
          value={localData.location}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ sẵn sàng chi bao nhiêu cho bữa trưa?
        </label>
        <input
          type="text"
          name="lunchBudget"
          value={localData.lunchBudget}
          onChange={handleInputChange}
          required
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>
    </div>
  );
}

export default Step1;
