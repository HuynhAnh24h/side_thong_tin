import { Step1,Step2,Step3,Step4,Step5 } from "./components";
import { useState } from "react";
function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleDataChange = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    console.log("Dữ liệu khảo sát:", formData);
    // Gửi formData lên server tại đây
  };

  const steps = {
    1: <Step1 onDataChange={handleDataChange} formData={formData} />,
    2: <Step2 onDataChange={handleDataChange} formData={formData} />,
    3: <Step3 onDataChange={handleDataChange} formData={formData} />,
    4: <Step4 onDataChange={handleDataChange} formData={formData} />,
    5: <Step5 onDataChange={handleDataChange} formData={formData} />,
  };

  return (
    <div className=" mx-auto p-4 min-h-screen flex flex-col justify-center items-center bg-[#eeeeee]">
      <div className="max-w-md bg-white  rounded-md shadow-sm p-10">
        {steps[step]}
        <div className="mt-4 flex justify-between w-[100%] px-10">
          {step > 1 && (
            <div>
              <button onClick={prevStep} className="bg-gray-200 px-4 py-2 rounded">Trước</button>
            </div>
          )}
          {step < 5 ? (
            <div>
              <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Tiếp</button>
            </div>
          ) : (
            <div>
              <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Gửi</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;