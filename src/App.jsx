import { Step1,Step2,Step3,Step4,Step5 } from "./components";
import { useState } from "react";
import bgImage from "./assets/bgMain.png"
import logo from "./assets/logo.png"
import footeImage from "./assets/footer.png"
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
    <div className=" mx-auto min-h-screen flex flex-col justify-center items-center bg-[#E6A300]">
      
      <div className="max-w-md bg-[#FCDA8A] h-screen rounded-md shadow-sm p-10 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bgImage}) `,backgroundSize: "cover",
    backgroundPosition: "center"}}>
      <div className="flex justify-center items-center mb-5">
          <img src={logo} alt="" />
      </div>
        <div className="">
          {steps[step]}
          <div className="mt-4 flex justify-between w-[100%]">
            {step > 1 && (
              <div className="flex justify-center items-center">
                <button onClick={prevStep} className="bg-[#FCDA8A] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#584e33fb] hover:text-[#E6A300]">Trước</button>
              </div>
            )}
            {step < 5 ? (
              <div className="flex justify-center items-center">
                <button onClick={nextStep} className="bg-[#E6A300] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#584e33fb] hover:text-[#E6A300]">Tiếp theo</button>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <button onClick={handleSubmit} className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#E6A300] hover:text-[#60230D]">Gửi</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;