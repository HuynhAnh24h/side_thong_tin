import { Step1, Step2, Step3, Step4, Step5, Step6, Success } from "./components";
import { useState, useCallback, useMemo } from "react";
import logo from "./assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [validate,setValidate] = useState(false)
const handleDataChange = useCallback((newData) => {
  setFormData((prev) => {
    // Kiểm tra nếu có ít nhất một key thay đổi
    const hasChanges = Object.keys(newData).some((key) => prev[key] !== newData[key]);
    switch(step){
      case 1:
        if(formData.age !== ""&&
            formData.job !== ""&&
            formData.email !== ""&&
            formData.cusname !== ""&&
            formData.phone!== ""&&
            formData.location !== ""&&
            formData.lunchBudget !== ""){
              setValidate(true)
            }else{
              setValidate(false)
            }
        break
    }
    if (!hasChanges) return prev; // Nếu không có thay đổi, giữ nguyên state
    return { ...prev, ...newData };
  });

}, []);
console.log(handleDataChange)

  // Trạng thái xác nhận form hợp lệ
  const nextStep = useCallback(() => {
      setStep((prev) => Math.min(prev + 1, 6));
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleSubmit = async () => {
    if (!validateForm()) return; // Kiểm tra trước khi gửi

    // Xử lý trường trống trước khi gửi dữ liệu
    const processedFormData = Object.keys(formData).reduce((acc, key) => {
      acc[key] = formData[key] && formData[key].trim() !== "" ? formData[key] : "Không trả lời";
      return acc;
    }, {});

    setStep(1);
    console.log(processedFormData); // Kiểm tra dữ liệu trước khi gửi
    toast.success("Gửi thành công!");
    setFormData({});
    setIsSuccess(true);

    try {
      const response = await fetch("https://member.sayaka.vn/api/survey", {
        method: "POST",
        body: JSON.stringify(processedFormData), // Gửi dữ liệu đã xử lý
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.log(errorText)
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
    }
  };

  const steps = useMemo(
    () => ({
      1: <Step1 onDataChange={handleDataChange} formData={formData}/>,
      2: <Step2 onDataChange={handleDataChange} formData={formData}/>,
      3: <Step3 onDataChange={handleDataChange} formData={formData}/>,
      4: <Step4 onDataChange={handleDataChange} formData={formData}/>,
      5: <Step5 onDataChange={handleDataChange} formData={formData}/>,
      6: <Step6 onDataChange={handleDataChange} formData={formData}/>,
    }),
    [formData]
  );

  return (
    <div className="mx-auto h-auto flex flex-col justify-center items-center bg-amber-50]">
      <div className="max-w-md bg-white rounded-md shadow-sm p-10 flex flex-col items-center justify-start">
        <div className="flex justify-center items-center mb-5">
          <div className="w-[150px] h-[150px]">
            <img src={logo} className="w-full h-full" alt="Logo" />
          </div>
        </div>
        {isSuccess ? (
          <div>
            <Success />
          </div>
        ) : (
          <div>
            {steps[step] || <div>Không tìm thấy bước này!</div>}
            <div className="mt-4 flex justify-between w-full">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#FF6600] hover:text-white cursor-pointer"
                >
                  Trước
                </button>
              )}
              {step < 6 && (
                <button
                  onClick={nextStep} 
                  disabled = {!validate}
                  className={`uppercase font-bold text-white px-4 py-2 rounded ${
                   validate ? "bg-[#584e33fb] hover:bg-[#FF6600] cursor-pointer" : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Tiếp theo
                </button>
              )}
              {step === 6 &&(
                <button
                  onClick={handleSubmit}
                  className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#FF6600] hover:text-white cursor-pointer"
                >
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