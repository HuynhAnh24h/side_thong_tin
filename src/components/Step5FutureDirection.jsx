import { useEffect, useState } from "react";

function Step5({ onDataChange, formData, validate }) {
  const [errorData, setErrorData] = useState("")
  const [localData, setLocalData] = useState({
    preferredLocation: formData.preferredLocation || "",
    wantsDelivery: formData.wantsDelivery || "", // Đặt giá trị mặc định
    interestedInCombo: formData.interestedInCombo || "", // Đặt giá trị mặc định
    suggestedImprovement: formData.suggestedImprovement || "",
  });

  useEffect(() => {
    if (formData.preferredLocation !== "" && formData.wantsDelivery !== "" && formData.interestedInCombo !== "" && formData.suggestedImprovement !== "") {
      validate(true)
    } else {
      validate(false)
    }

    if (formData.preferredLocation == "") {
      setErrorData("Bồ chưa chọn chi nhánh muốn thêm")
    } else if (formData.wantsDelivery == "") {
      setErrorData("Bồ chưa trả lời có muốn đặt hàng Online không?")
    } else if (formData.interestedInCombo == "") {
      setErrorData("Bồ chưa chọn có quan tâm combo không?")
    } else {
      setErrorData("")
    }


    if (JSON.stringify(localData) !== JSON.stringify(formData)) {
      onDataChange(localData);
    }
  }, [localData, formData]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-white">
        Future Direction
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Nếu ChanChan mở thêm chi nhánh, Bồ muốn ở khu vực nào?
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.preferredLocation}
          onChange={(e) =>
            setLocalData({ ...localData, preferredLocation: e.target.value })
          }
        >
          <option value="">Chọn</option>
          <option value="Quận 1">Quận 1</option>
          <option value="Quận 2">Quận 2</option>
          <option value="Quận 3">Quận 3</option>
          <option value="Quận 4">Quận 4</option>
          <option value="Quận 5">Quận 5</option>
          <option value="Quận 6">Quận 6</option>
          <option value="Quận 7">Quận 7</option>
          <option value="Quận 8">Quận 8</option>
          <option value="Quận 9">Quận 9</option>
          <option value="Quận 10">Quận 10</option>
          <option value="Quận 11">Quận 11</option>
          <option value="Quận 12">Quận 12</option>
          <option value="Quận Gò Vấp">Quận Gò Vấp</option>
          <option value="Quận Tân Bình">Quận Tân Bình</option>
          <option value="Quận Tân Phú">Quận Tân Phú</option>
          <option value="Quận Phú Nhuận">Quận Phú Nhuận</option>
          <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
          <option value="Quận Thủ Đức">Quận Thủ Đức</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ có muốn đặt hàng online hoặc giao tận nơi không?
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.wantsDelivery}
          onChange={(e) =>
            setLocalData({ ...localData, wantsDelivery: e.target.value })
          }
        >
          <option value="">Chọn</option>
          <option value="Giao hàng">Có, tôi muốn giao hàng tận nơi</option>
          <option value="Không giao hàng">Không, tôi không muốn giao hàng</option>
        </select>
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ sẽ quan tâm nếu ChanChan có combo theo tuần / theo tháng chứ?
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.interestedInCombo}
          onChange={(e) =>
            setLocalData({ ...localData, interestedInCombo: e.target.value })
          }
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
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.suggestedImprovement}
          onChange={(e) =>
            setLocalData({ ...localData, suggestedImprovement: e.target.value })
          }
        />
      </div>
      <span className="text-bold text-sm text-red-800">{errorData}</span>
    </div>
  );
}

export default Step5;