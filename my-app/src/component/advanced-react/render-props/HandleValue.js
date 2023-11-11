import React, { useState } from "react";
// lifting state
const HandleValue = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Input value={value} setValue={setValue}></Input>
      <DisplayValue value={value}></DisplayValue>
    </div>
  );
};
const Input = ({ value, setValue }) => {
  return <input type="text" onChange={(e) => setValue(e.target.value)} />;
  /* value trong setValue là giá trị nhập vào input, sẽ gán nó thành props value trong DisplayValue */
};
const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};
export default HandleValue;
// ví dụ render prop: trong component sẽ return ra 1 component khác và khác nữa
// const Mycomponent = () => {
//     return (
//         <div>
//             <ComponentA>{value => (
//                 <div>
//                     <ComponentB>{}value1 => (
//                         <div>
//                             <componentC></componentC>
//                         </div>
//                     )</ComponentB>
//                 </div>
//             )}</ComponentA>
//         </div>
//     )
// }

// ví dụ về custum hook
// function Mycomponent() => {
//     const {value} = useValue() này là hook đã tạo sẵn
//     const {value: value1} = useValue1()
//     const {value: value2} = useValue2()
//     return (
//         <ComponentA>
//             <ComponentB>
//                 <ComponentC></ComponentC>
//             </ComponentB>
//         </ComponentA>
//     )
// }
