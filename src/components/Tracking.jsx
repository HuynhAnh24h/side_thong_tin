import { useEffect } from 'react';
import { createUserUseId, getDeviceInfo } from '/src/utils/Usertracking';

const Tracking = ({ count, step, action,formData}) => {
  useEffect(() => {
    let userId = localStorage.getItem("tracking_user_id");
    if (!userId) {
      userId = createUserUseId();
      localStorage.setItem("tracking_user_id", userId);
      localStorage.setItem("visit_count", "1");
    }

    const trackingStepData = {
      userId,
      step,
      visitCount: count,
    };
    // Optional: gửi API nếu muốn
    fetch("https://member.sayaka.vn/api/tracking-survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trackingStepData),
    });
  }, [step, action]);

  return null;
};

export default Tracking;
