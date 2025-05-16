import { LoadingSpinner, Step1, Step2, Step3, Step4, Step5,Step6, Success } from "./components";
import { useState, useCallback, useMemo } from "react";
import bgImage from "./assets/bgMain.png";
import logo from "./assets/logo.png";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const nextStep = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, 6)); // Giới hạn tối đa bước 5
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
    console.log(formData)
    try {
      setIsLoading(true)
        const response = await fetch("https://member.sayaka.vn/api/survey", {
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
        setIsLoading(false)
        setIsSuccess(true);

    } catch (error) {
        console.error("Lỗi khi gửi yêu cầu:", error);
       toast.error(`Có lỗi xảy ra! ${error.message}`);
       console.log(error.message)
       setIsLoading(false)
    }
  };

  const steps = useMemo(() => ({
    1: <Step1 onDataChange={handleDataChange} formData={formData} />,
    2: <Step2 onDataChange={handleDataChange} formData={formData} />,
    3: <Step3 onDataChange={handleDataChange} formData={formData} />,
    4: <Step4 onDataChange={handleDataChange} formData={formData} />,
    5: <Step5 onDataChange={handleDataChange} formData={formData} />,
    6: <Step6 onDataChange={handleDataChange} formData={formData} />,
  }), [formData]);

  return (
    <div className="mx-auto h-[100vh] flex flex-col justify-center items-center bg-amber-50]">
      <div className="max-w-md bg-white rounded-md shadow-sm p-10 flex flex-col items-center justify-start">
        
        <div className="flex justify-center items-center mb-5">
          <div className="w-[150px] h-[150px]">
            <img src={logo} className="w-full h-full" />
          </div>
        </div>
        {isLoading && <div><LoadingSpinner/></div>}
        {isSuccess ? (<div><Success/></div>):(
           <div>
            {steps[step] || <div>Không tìm thấy bước này!</div>}
            <div className="mt-4 flex justify-between w-full">
              {step > 1 && (
                <button onClick={prevStep} className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#FF6600] hover:text-white cursor-pointer">
                  Trước
                </button>
              )}
              {step < 6 ? (
                <button onClick={() => formValid && nextStep()} disabled={!formValid} className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#FF6600] hover:text-white cursor-pointer">
                  {formValid ? "Tiếp theo" : "Bạn cần nhập đủ thông tin"}
                </button>
              ) : (
                <button onClick={handleSubmit} className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#FF6600] hover:text-white cursor-pointer">
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
