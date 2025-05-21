import { useEffect, useState } from "react";

function Step6({ onDataChange, formData,validate, countTracking }) {
  countTracking = '7'
  const [errorData, setErrorData] = useState("")
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

    if (formData.gift === "") {
      setErrorData("Bồ chưa chọn quà")
    } else {
      setErrorData("")
    }

    if (JSON.stringify(localData) !== JSON.stringify(formData)) {
      onDataChange(localData);
    }
  }, [localData, formData]);

  return (
    <>
      <div className="space-y-4">
      <h1 className="text-[#60230D] font-bold text-[20px] text-center">
        Cảm ơn Bồ đã tham gia khảo sát
      </h1>
      <h1 className="text-[#60230D] font-bold text-[20px] text-center">
        Mọi góp ý của Bồ là động lực để ChanChan tiếp tục phát triển
      </h1>
      <div>
        <label className="block text-md text-center font-bold text-[#60230D] mb-3">
          ChanChan cảm ơn Bồ bằng món quà nhỏ. Mời Bồ chọn quà nhé
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
      <span className="text-bold text-sm text-red-800">{errorData}</span>
      </div>
    </>
  );
}

export default Step6;
