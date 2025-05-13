import { useEffect, useState } from "react";

function Step4({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    brandDescription: formData.brandDescription || "",
    brandDifference: formData.brandDifference || "",
    experienceRating: formData.experienceRating || "",
    recommendChanChan: formData.recommendChanChan || "",
  });

  useEffect(() => {
    onDataChange(localData);
  }, [localData]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-white">
        Brand Perception & Experience
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bạn mô tả Chan Chan bằng 3 từ nào?
        </label>
        <input
          type="text"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.brandDescription}
          onChange={(e) =>
            setLocalData({ ...localData, brandDescription: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bạn thấy Chan Chan khác gì với các quán chay / nhà hàng khác
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
          Trải nghiệm của bạn hôm nay thế nào? (1–5 sao)
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.experienceRating}
          onChange={(e) =>
            setLocalData({ ...localData, experienceRating: e.target.value })
          }
        >
          <option value="">--Chọn--</option>
          <option value="5">★★★★★</option>
          <option value="4">★★★★</option>
          <option value="3">★★★</option>
          <option value="2">★★</option>
          <option value="1">★</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bạn có sẵn sàng giới thiệu Chan Chan cho người khác không?
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.recommendChanChan}
          onChange={(e) =>
            setLocalData({ ...localData, recommendChanChan: e.target.value })
          }
        >
          <option value="">--Chọn--</option>
          <option value="yes">Vâng rất sẵn lòng</option>
          <option value="maybe">Để suy nghĩ đã</option>
          <option value="no">Hẹn lần sau nha</option>
        </select>
      </div>
    </div>
  );
}

export default Step4;
