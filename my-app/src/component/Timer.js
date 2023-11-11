import React, { useState, useEffect } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Evondev");

  useEffect(() => {
    // sau khi khởi chạy lần đầu thì khi message thay đổi thì useEffect mới chạy
    // cộng 2 lệnh useEffect và setInterval thì sau khi message thay đổi thì sau mỗi 2s thì mới console.log(message)
    const timer = setInterval(() => {
      // sau mỗi 2s sẽ in ra message
      //   console.log(message);
    }, 2000);
    return () => {
      clearInterval(timer); // khi có lệnh này thì khi ta nhập value mới vào ô input thì console.log sẽ cho ra đúng value ta nhập vào, nếu không có thì sẽ in ra từng ký tự cho đến khi đủ từu và lặp lại vô tận như v
    };
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // dùng để cập nhật giá trị của biến state
      />
    </div>
  );
};

export default Timer;
