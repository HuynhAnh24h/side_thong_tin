import { useEffect, useState } from "react";

function Step5({ onDataChange, formData }) {
  const [localData, setLocalData] = useState({
    age: formData.age || "",
    job: formData.job || "",
    location: formData.location || "",
    lunchBudget: formData.lunchBudget || "",
  });

  useEffect(() => {
    onDataChange(localData);
  }, [localData]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">5. Future Direction</h2>
      <div>
        <label className="block">Nếu Chan Chan mở thêm chi nhánh, bạn muốn ở khu vực nào??</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
        />
      </div>
      <div>
        <label className="block">Bạn có muốn đặt hàng online hoặc giao tận nơi không?</label>
        <select
          className="w-full border p-2 rounded"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>có</option>
          <option>không</option>
        </select>
      </div>
      <div>
        <label className="block">Bạn sẽ quan tâm nếu Chan Chan có combo theo tuần / theo tháng chứ?</label>
        <select
          className="w-full border p-2 rounded"
          value={localData.age}
          onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
        >
          <option value="">--Chọn--</option>
          <option>có</option>
          <option>không</option>
        </select>
      </div>

      <div>
        <label className="block">Bạn muốn Chan Chan cải thiện điều gì nhất?</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
        />
      </div>
    </div>
  );
}

export default Step5;
