import React, { useState } from "react";
import "./ToggleStyle.css";
// // stateless functional component: component nhưng không sử sụng state
// function toggle() {
//   return <div className="toggle"></div>;
// }
// // statefull functional component: component có sử dụng state
// function toggle2() {
//   // const [count, setCount] = useState;

//   return <div className="toggle"></div>;
// }

function Toggle() {
  // 1. enabling state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state
  // 4. update state
  // * initialize value: boolean(true, false), number(1,2,3), string("evondev"), undefinded, null, [1,2,3,4], {title: "Frontend Developer"}
  const array = useState(false);
  console.log(array); // [false, function]
  //   console.log(array[0]);
  const [on, setOn] = useState(false); // khởi tạo 2 biến bằng giá trị useState có giá trị là false
  console.log(on);
  const handleToggle = () => {
    setOn((on) => {
      return !on;
    });
  };
  return (
    <div>
      <div
        className={`toggle ${on ? "toggle-active" : ""}`}
        onClick={handleToggle}
      >
        {/*khi ta click vào chữ Toggle thì giá trị của setOn thay đổi từ false sang true */}
        {/* Toggle {on ? "on" : "off"}      nếu setOn có giá trị on thì hiển thị Toggle + on còn ngược lại thì Toggle + off */}
        <div className={`spiner ${on ? "spiner-active" : ""}`}></div>
        {/* {on ? "on" : "off"} */}
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
