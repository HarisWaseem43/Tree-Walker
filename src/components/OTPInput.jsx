import { useState, useRef } from "react";

function OTPInput() {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOTPChange = (e, index) => {
    const value = e.target.value;
    // Ensure that only digits are entered and limit the input to 1 character
    const sanitizedValue = value.replace(/\D/g, "").slice(0, 1);

    // Update the OTP array at the specified index
    const newOTP = [...otp];
    newOTP[index] = sanitizedValue;
    setOTP(newOTP);

    // Focus on the next input field, if available
    if (index < inputRefs.length - 1 && sanitizedValue !== "") {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      // Move focus to the previous input field and clear one character from it
      inputRefs[index - 1].current.focus();
      const newOTP = [...otp];
      newOTP[index - 1] = "";
      setOTP(newOTP);
    }
  };

  return (
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          onChange={(e) => handleOTPChange(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          maxLength={1}
          ref={inputRefs[index]}
        />
      ))}
    </div>
  );
}

export default OTPInput;
