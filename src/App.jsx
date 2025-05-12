import { Step1, Step2, Step3, Step4, Step5, Success } from "./components";
import { useState, useCallback, useMemo } from "react";
import bgImage from "./assets/bgMain.png";
import logo from "./assets/logo.jpg";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, 5)); // Giới hạn tối đa bước 5
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1)); // Giới hạn tối thiểu bước 1
  }, []);

  const handleDataChange = useCallback((newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  }, []);

const validateForm = useCallback(() => {
  if (step === 1 && (!formData.age || formData.age.trim() === "")) {
    return false;
  }
  return true;
}, [step, formData]);

  const formValid = useMemo(() => validateForm(), [step, formData]);

  const handleSubmit = async () => {
    setStep(1);
    console.log("Dữ liệu gửi đi:", JSON.stringify(formData));

    try {
        const response = await fetch("https://test.sayaka.vn/api/survey", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Lỗi ${response.status}: ${errorText}`);
        }
        toast.success("Gửi thành công!");
        setFormData({});
        setIsSuccess(true);

    } catch (error) {
        console.error("Lỗi khi gửi yêu cầu:", error);
       toast.error(`Có lỗi xảy ra! ${error.message}`);
       console.log(error.message)
    }
  };

  const steps = useMemo(() => ({
    1: <Step1 onDataChange={handleDataChange} formData={formData} />,
    2: <Step2 onDataChange={handleDataChange} formData={formData} />,
    3: <Step3 onDataChange={handleDataChange} formData={formData} />,
    4: <Step4 onDataChange={handleDataChange} formData={formData} />,
    5: <Step5 onDataChange={handleDataChange} formData={formData} />,
  }), [formData]);

  return (
    <div className="mx-auto h-[100vh] flex flex-col justify-center items-center bg-[#E6A300]">
      <div className="max-w-md bg-[#FCDA8A] rounded-md shadow-sm p-10 flex flex-col items-center justify-start"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        
        <div className="flex justify-center items-center mb-5">
          <div className="w-[100px] h-[100px]">
            <img src={logo} className="w-full h-full" />
          </div>
        </div>
        {isSuccess ? (<div><Success/></div>):(
           <div>
            {steps[step] || <div>Không tìm thấy bước này!</div>}
            <div className="mt-4 flex justify-between w-full">
              {step > 1 && (
                <button onClick={prevStep} className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#E6A300] hover:text-[#60230D]">
                  Trước
                </button>
              )}
              {step < 5 ? (
                <button onClick={() => formValid && nextStep()} disabled={!formValid} className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#E6A300] hover:text-[#60230D]">
                  {formValid ? "Tiếp theo" : "Bạn cần nhập đủ thông tin"}
                </button>
              ) : (
                <button onClick={handleSubmit} className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#E6A300] hover:text-[#60230D]">
                  Gửi
                </button>
              )}
            </div>
          </div>
          )}
      </div>
       <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
