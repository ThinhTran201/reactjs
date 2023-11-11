import React, { useState, useRef, useEffect } from "react";
const StopWatch = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const handleStart = () => {
    if (timerRef.current) return; // vì timerRef được gán là null nên cần kiểm tra nếu timerRef đã có giá trị(không còn null)
    timerRef.current = setInterval(() => {
      // nếu giá trị timer = null thì cho bằng phương thức setInterval là 1 error function
      setCount((count) => count + 1); // trong function này set lại giá trị cho count
    }, 1000); // cứ 1s sẽ thực hiện lệnh và lặp đi lặp lại
  };
  const handleStop = () => {
    clearInterval(timerRef.current); // dừng thực thi timerRef.current trong hàm setInterval
    timerRef.current = null;
  };
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div>
      <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        {/* khi click vào start thì sẽ thực hiện hàm handleStart */}
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default StopWatch;
