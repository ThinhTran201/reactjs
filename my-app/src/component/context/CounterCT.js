import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { CountProvider, useCount } from "../../context/countContext";
// import CountProvider và useCount từ file export countContext để dùng ở component này để tối ưu code gọn hơn
const StledDiv = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const StyledButton = styled.button`
  padding: 16px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  background-color: purple;
  border: none;
  cursor: pointer;
`;
// context dùng để tạo biến dùng xuyên suốt cho các component khác nhau không liên quan nhau
// cách dùng là phải dùng component context wrap các component ta muốn dùng biến
// const CountContext = createContext(); // tạo biến gán cho giá trị là thư viện createContext trong react
// function CountProvider(props) {
//   const [count, setCount] = useState(0);
//   const value = [count, setCount];
//   return (
//     <CountContext.Provider value={value} {...props}></CountContext.Provider>
//   );
// }
// function useCount() {
//   const context = useContext(CountContext); // phải dùng useContext để lấy giá trị biến trong context để lấy dùng cho các component
//   if (typeof context === "undefined")
//     // điều kiện nếu các component không nằm trong cmponent context thì sẽ báo lỗi dòng chữ ở dưới
//     throw new Error("useCount must be used within a CountContext");
//   return context;
// }
function CountDislay() {
  const [count] = useCount(); //  useCount thay cho useContext(CountContext) ; // useContext là thuộc tính lấy từ thư viện react và lấy giá trị là CountContex để dùng các biến xuyên suốt cho các component
  return <div>The count is: {count}</div>; // detructering [count] từ value = [count, setCount] ở bên trên CountProvider
}
function Counter() {
  const [, setCount] = useCount(); // detructering setCount từ value = [count, setCount], vì nó ở vị trí thứ 2 nên phải có dấu phẩy[, setCount]
  const increment = () => setCount((c) => c + 1);
  return <StyledButton onClick={increment}>Increment count</StyledButton>;
}
const CounterCT = () => {
  return (
    <StledDiv>
      <CountProvider>
        {/* phải lấy CountProvider wrap 2 component ở dưới lại để có thể dùng các biến count và setCount xuyên suốt các component đó */}
        <CountDislay></CountDislay>
        <Counter></Counter>
      </CountProvider>
    </StledDiv>
  );
};

export default CounterCT;
