import { useEffect, useState } from "react";

function Step6({ onDataChange, formData,validate }) {
    const [localData, setLocalData] = useState({
    gift: formData.gift || "",
  });
  useEffect(() => {
    if(formData.gift !== "")
    {
      validate(true)
    }else{
      validate(false)
    }
    if (JSON.stringify(localData) !== JSON.stringify(formData)) {
      onDataChange(localData);
    }
  }, [localData, formData]);

  return (
    <div className="space-y-4">
      <h1 className="text-[#60230D] font-bold text-[20px] text-center">
        Cảm ơn Bồ đã tham gia khảo sát
      </h1>
      <h1 className="text-[#60230D] font-bold text-[20px] text-center">
        Mọi góp ý của Bồ là động lực để ChanChan tiếp tục phát triển
      </h1>
      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ đã từng đến ChanChan bao nhiêu lần?
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.gift}
          onChange={(e) => setLocalData({ ...localData, gift: e.target.value })}
        >
          <option value="" >Chọn</option>
          <option value="Nước thảo mộc sương sáo">Nước thảo mộc sương sáo</option>
          <option value="Nước chanh dây xí muội">Nước chanh dây xí muội</option>
          <option value="Trà hoa cúc nha đam">Trà hoa cúc nha đam</option>
          <option value="Bánh pudding">Bánh pudding</option>
        </select>
      </div>
      </div>
  );
}

export default Step6;
