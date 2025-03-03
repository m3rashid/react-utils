import { KeyboardEvent, useEffect, useRef, useState } from 'react';

interface OtpInputProps {
  length: number;
}

export function OtpInput(props: OtpInputProps) {
  const [otp, setOtp] = useState(new Array(props.length).fill(''));
  const inputRefs = useRef<any>([]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>, index: number) {
    if (e.key === 'ArrowRight') {
      inputRefs.current[index + 1]?.focus();
      return;
    }

    if (e.key === 'ArrowLeft') {
      inputRefs.current[index - 1]?.focus();
      return;
    }

    const newOtp = [...otp];

    if (e.key === 'Backspace') {
      newOtp[index] = '';
      inputRefs.current[index - 1]?.focus();
    }

    if (!isNaN(Number(e.key))) {
      newOtp[index] = e.key;
      inputRefs.current[index + 1]?.focus();
    }

    setOtp(newOtp);
  }

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className='flex gap-2 items-center'>
      {otp.map((value, index) => (
        <input
          key={index}
          type='text'
          value={value}
          onKeyDown={(event) => handleKeyDown(event, index)}
          ref={(currentInput) => (inputRefs.current[index] = currentInput)}
          className='p-2 rounded-md border w-14 text-center text-2xl font-medium'
        />
      ))}
    </div>
  );
}

export function RenderOtpInput() {
  return (
    <div className=''>
      <h1 className='text-xl font-bold mb-4'>OTP Input</h1>
      <OtpInput length={6} />
    </div>
  );
}
