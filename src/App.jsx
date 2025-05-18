import { Step1, Step2, Step3, Step4, Step5, Step6, Success } from "./components";
import { useState, useCallback, useEffect } from "react";
import logo from "./assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS

function App() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState(() => JSON.parse(localStorage.getItem("formData")) || {});
  const [isValid, setIsValid] = useState(false);

  const excludedFields = ["suggestedImprovement", "brandDifference"]; 

  // Cập nhật dữ liệu vào localStorage mỗi khi formData thay đổi
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Kiểm tra dữ liệu hợp lệ
  useEffect(() => {
    if (Object.keys(formData).length === 0) {
    setIsValid(false);
    return;
  }

  const requiredFields = Object.keys(formData).filter(field => !excludedFields.includes(field));
  
  // Kiểm tra cả trường input và select
  const isFormValid = requiredFields.every(field => formData[field]?.trim() && formData[field] !== ""); 

  setIsValid(isFormValid);
  }, [formData]);

  const handleDataChange = useCallback((newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  }, []);

  const nextStep = useCallback(() => {
    if (isValid) {
      setStep(prev => Math.min(prev + 1, 6));
    } else {
      toast.error("Vui lòng điền đầy đủ thông tin trước khi tiếp tục!");
    }
  }, [isValid]);

  const prevStep = useCallback(() => {
    setStep(prev => Math.max(prev - 1, 1));
  }, []);

  const handleSubmit = async () => {
    if (!isValid) return; 

    const processedFormData = Object.keys(formData).reduce((acc, key) => {
      acc[key] = formData[key]?.trim() || "Không trả lời";
      return acc;
    }, {});

    toast.success("Gửi thành công!");
    setIsSuccess(true);
    localStorage.removeItem("formData");

    try {
      const response = await fetch("https://member.sayaka.vn/api/survey", {
        method: "POST",
        body: JSON.stringify(processedFormData),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Lỗi ${response.status}: ${await response.text()}`);
      }
    } catch (error) {
      toast.error("Gửi dữ liệu thất bại, vui lòng thử lại!");
      console.error("Lỗi khi gửi yêu cầu:", error);
    }
  };

  const steps = {
    1: <Step1 onDataChange={handleDataChange} formData={formData} />,
    2: <Step2 onDataChange={handleDataChange} formData={formData} />,
    3: <Step3 onDataChange={handleDataChange} formData={formData} />,
    4: <Step4 onDataChange={handleDataChange} formData={formData} />,
    5: <Step5 onDataChange={handleDataChange} formData={formData} />,
    6: <Step6 onDataChange={handleDataChange} formData={formData} />,
  };

  return (
    <div className={` ${step !== 1 && <Success /> ? "min-h-screen" : "h-auto"} mx-auto flex flex-col justify-center items-center bg-amber-50`}>
      <div className="max-w-md bg-white rounded-md shadow-sm p-10 flex flex-col items-center justify-start">
        <div className="flex justify-center items-center mb-5">
          <div className="w-[150px] h-[150px]">
            <img src={logo} className="w-full h-full" alt="Logo" />
          </div>
        </div>
        {isSuccess ? (
          <Success />
        ) : (
          <>
            {steps[step] || <div>Không tìm thấy bước này!</div>}
            <div className="mt-4 flex justify-between w-full">
              {step > 1 && (
                <button onClick={prevStep} className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#FF6600] hover:text-white cursor-pointer">
                  Trước
                </button>
              )}
              {step < 6 && (
                <button onClick={nextStep} disabled={!isValid} className={`uppercase font-bold text-white px-4 py-2 rounded ${isValid ? "bg-[#584e33fb] hover:bg-[#FF6600] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`}>
                  Tiếp theo
                </button>
              )}
              {step === 6 && (
                <button onClick={handleSubmit} disabled={!isValid} className={`uppercase font-bold text-white px-4 py-2 rounded ${isValid ? "bg-[#584e33fb] hover:bg-[#FF6600] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`}>
                  Gửi
                </button>
              )}
            </div>
          </>
        )}
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
