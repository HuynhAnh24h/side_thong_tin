import { useEffect, useState } from "react";

function Step2({ onDataChange, formData, validate }) {
  const [errorData, setErrorData] = useState("")
  const [localData, setLocalData] = useState({
    visitCount: formData.visitCount || "",
    visitTime: formData.visitTime || "",
    visitWith: formData.visitWith || "",
  });
  useEffect(() => {
    if(formData.visitCount !== "" && formData.visitTime !== "" && formData.visitWith !== ""){
      validate(true)
    }else{
      validate(false)
    }

    if(formData.visitCount == ""  ){
      setErrorData("Bồ chưa chọn số lần đến")
    }else if(formData.visitTime == ""){
      setErrorData("Bồ chưa chọn thời gian thường đến ChanChan")
    }else if(formData.visitWith == ""){
      setErrorData("Bồ chưa chọn đi cùng ai")
    }else{
      setErrorData("")
    }




    if (JSON.stringify(localData) !== JSON.stringify(formData)) {
      onDataChange(localData);
    }
  }, [localData, formData]);

  return (
   <>
     <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-white">
        Behavior
      </h2>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ đã từng đến ChanChan bao nhiêu lần?
        </label>
        <select
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitCount}
          onChange={(e) => setLocalData({ ...localData, visitCount: e.target.value })}
        >
          <option value="" >Chọn</option>
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
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitTime}  // Sửa lại giá trị đúng biến trạng thái
          onChange={(e) => setLocalData({ ...localData, visitTime: e.target.value })}
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
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
          value={localData.visitWith}
          onChange={(e) => setLocalData({ ...localData, visitWith: e.target.value })}
        >
          <option value="">Chọn</option>
          <option value="Một mình">Một mình</option>
          <option value="Bạn bè">Bạn bè</option>
          <option value="Gia đình">Gia đình</option>
          <option value="Đồng nghiệp">Đồng nghiệp</option>
        </select>
      </div>
      <span className="text-bold text-sm text-red-800">{errorData}</span>
    </div>
   </>
  );
}

export default Step2;