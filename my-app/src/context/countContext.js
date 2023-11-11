// context dùng để tạo biến dùng xuyên suốt cho các component khác nhau không liên quan nhau
// dưới đây là cách tạo file export để import vào 1 file js component
import { createContext, useContext, useState } from "react";

// cách dùng là phải dùng component context wrap các component ta muốn dùng biến
const CountContext = createContext(); // tạo biến gán cho giá trị là thư viện createContext trong react
function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}
function useCount() {
  const context = useContext(CountContext); // phải dùng useContext để lấy giá trị biến trong context để lấy dùng cho các component
  if (typeof context === "undefined")
    // điều kiện nếu các component không nằm trong cmponent context thì sẽ báo lỗi dòng chữ ở dưới
    throw new Error("useCount must be used within a CountContext");
  return context;
}
export { CountProvider, useCount };
