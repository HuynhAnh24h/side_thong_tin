import { useEffect, useState } from "react";

function Step4({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    brandDifference: formData.brandDifference || "",
    experienceRating: formData.experienceRating || "5", // Giá trị mặc định là option đầu tiên
    recommendChanChan: formData.recommendChanChan || "Rất sẵn lòng", // Giá trị mặc định
  });

  useEffect(() => {
    if (JSON.stringify(localData) !== JSON.stringify(formData)) {
      onDataChange(localData);
    }
  }, [localData, formData]);

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
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.brandDifference}
          onChange={(e) =>
            setLocalData({ ...localData, brandDifference: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Trải nghiệm của Bồ hôm nay thế nào?
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.experienceRating}
          onChange={(e) =>
            setLocalData({ ...localData, experienceRating: e.target.value })
          }
        >
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
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.recommendChanChan}
          onChange={(e) =>
            setLocalData({ ...localData, recommendChanChan: e.target.value })
          }
        >
          <option value="Rất sẵn lòng">Vâng, rất sẵn lòng</option>
          <option value="Chưa chắc chắn">Tôi chưa chắc chắn</option>
          <option value="Không giới thiệu">Tôi sẽ không giới thiệu</option>
        </select>
      </div>
    </div>
  );
}

export default Step4;
