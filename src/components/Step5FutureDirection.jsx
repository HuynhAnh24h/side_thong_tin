import { useEffect, useState } from "react";

function Step5({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    preferredLocation: formData.preferredLocation || "",
    wantsDelivery: formData.wantsDelivery || "",
    interestedInCombo: formData.interestedInCombo || "",
    suggestedImprovement: formData.suggestedImprovement || "",
  });

  useEffect(() => {
    onDataChange(localData);
  }, [localData]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-white">
        Future Direction
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Nếu Chan Chan mở thêm chi nhánh, bạn muốn ở khu vực nào?
        </label>
        <input
          type="text"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.preferredLocation}
          onChange={(e) =>
            setLocalData({ ...localData, preferredLocation: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bạn có muốn đặt hàng online hoặc giao tận nơi không?
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.wantsDelivery}
          onChange={(e) =>
            setLocalData({ ...localData, wantsDelivery: e.target.value })
          }
        >
          <option value="">--Chọn--</option>
          <option value="Giao hàng">Có tôi muốn giao hàng tận nơi</option>
          <option value="Không giao hàng">Không tôi không muốn giao hàng</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bạn sẽ quan tâm nếu Chan Chan có combo theo tuần / theo tháng chứ?
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.interestedInCombo}
          onChange={(e) =>
            setLocalData({ ...localData, interestedInCombo: e.target.value })
          }
        >
          <option value="">--Chọn--</option>
          <option value="Quan tâm combo">Có</option>
          <option value="Không quan tâm combo">Không</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bạn muốn Chan Chan cải thiện điều gì nhất?
        </label>
        <input
          type="text"
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.suggestedImprovement}
          onChange={(e) =>
            setLocalData({ ...localData, suggestedImprovement: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Step5;
