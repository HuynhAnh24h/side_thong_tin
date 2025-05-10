import { Step1, Step2, Step3, Step4, Step5 } from "./components";
import { useState, useEffect, useCallback } from "react";
import bgImage from "./assets/bgMain.png";
import logo from "./assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import CSS

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);

  const nextStep = () => {
    if (step < 5) setStep(prev => prev + 1); // Đảm bảo không vượt quá bước 5
  };

  const prevStep = () => {
    if (step > 1) setStep(prev => prev - 1); // Đảm bảo không nhỏ hơn bước 1
  };

  const handleDataChange = useCallback((newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  }, []);

  const validateForm = useCallback(() => {
    let isValid = true;
    if (step === 1 && (!formData.age || formData.age.trim() === "")) { // Kiểm tra dữ liệu đầu vào của step1
      isValid = false;
    }
    if (isFormValid !== isValid) setIsFormValid(isValid); // Chỉ cập nhật nếu giá trị thay đổi
    return isValid;
  }, [step, formData]);

  useEffect(() => {
    validateForm();
  }, [formData, step]); // Đảm bảo kiểm tra form khi có thay đổi

  const handleSubmit = () => {
    console.log("Dữ liệu khảo sát:", formData);
    alert("Gửi thành công");
    setStep(1);
    setFormData({});
  };

  const steps = {
    1: <Step1 onDataChange={handleDataChange} formData={formData} />,
    2: <Step2 onDataChange={handleDataChange} formData={formData} />,
    3: <Step3 onDataChange={handleDataChange} formData={formData} />,
    4: <Step4 onDataChange={handleDataChange} formData={formData} />,
    5: <Step5 onDataChange={handleDataChange} formData={formData} />,
  };

  return (
    <div className="mx-auto flex flex-col justify-center items-center bg-[#E6A300]">
      <div
        className="max-w-md bg-[#FCDA8A] h-screen rounded-md shadow-sm p-10 flex flex-col items-center justify-start"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center mb-5">
         <h1 className="text-center text-[#60230D] font-bold text-5xl">Logo</h1>
        </div>
        <div>
          {steps[step] || <div>Không tìm thấy bước này!</div>} {/* Đảm bảo hiển thị đúng */}
          <div className="mt-4 flex justify-between w-full">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#E6A300] hover:text-[#60230D]"
              >
                Trước
              </button>
            )}
            {step < 5 ? (
              <button
                onClick={() => validateForm() && nextStep()} // Kiểm tra trước khi chuyển bước
                disabled={!isFormValid}
                className={`bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#E6A300] hover:text-[#60230D]`}
              >
                {isFormValid ? "Tiếp theo" : "Bạn cần nhập đủ thông tin"}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-[#584e33fb] uppercase font-bold text-white px-4 py-2 rounded hover:bg-[#E6A300] hover:text-[#60230D]"
              >
                Gửi
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
