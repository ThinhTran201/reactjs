import React, { useState } from "react";
import "./index.css";
// import FetchingData from "./component/advanced-react/hoc/FetchingData";
// import Accordion from "./component/advanced-react/react-composition/Accordion";
// import HandleValue from "./component/advanced-react/render-props/HandleValue";
// import Editable from "./component/advanced-react/react-composition/Editable";
// // import Title from "./component/advanced-react/render-props/Title";
//HOC: Hight order component pattern
// function App() {
//   return (
//     // nó là 1 props có tên là render và nó là function
//     <div className=" p-10 w-full max-w-[600px] mx-auto">
//       {/* <Title>{() => <h1>Hello from render props</h1>}</Title> */}
//       <Accordion header="Can i change my plan later">
//         <div>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
//           nostrum, labore maxime eius unde, necessitatibus atque aut nesciunt
//           dicta, architecto quae doloribus nisi expedita! Facere saepe labore et
//           dolore cupiditate.
//         </div>
//       </Accordion>
//       <Accordion header="Can i change my plan later">
//         <div>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
//           nostrum, labore maxime eius unde, necessitatibus atque aut nesciunt
//           dicta, architecto quae doloribus nisi expedita! Facere saepe labore et
//           dolore cupiditate.
//         </div>
//       </Accordion>
//       {/* <Editable></Editable> */}
//     </div>
//   );
// }
//
//
//
/// chương 10 props coloection
import Switch from "./component/switch/Switch";

function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  // toggleProps là tổng hợp các props của toggle ( phát triển bởi kentc Dodds)
  // props getter:
  function gettoggleProps({ onClick, ...rest } = {}) {
    return {
      // nó sẽ return về 1 objject gồm có:
      // onClick: toggle, // sự kiện onClick sử dụng toggle
      // ...props, // và các props còn lại nếu có
      onClick: () => {
        onClick && onClick();
        toggle();
      },
      ...rest,
    };
  }
  return {
    on,
    toggle,
    gettoggleProps,
    // toggleProps: {
    //   // toggleProps(chính là props colection) cũng là 1 props và khi ta dùng có có nghĩa là dùng onClick: toggle của nó, nên khi ta dùng thì ta chỉ cần ditructuring nó ra
    //   onClick: toggle,
    // },
  };
}
// props colection
function App() {
  const { on, toggleProps, getToggleProps } = useToggle();
  return (
    <div>
      <Switch {...getToggleProps({ on })}></Switch>
      <button
        aria-label="custom-button"
        {...getToggleProps({
          onClick: () => console.log("onButtonClicked"),
        })}
        // onClick={() => {
        //   console.log("onButtonClick");
        //   toggle();
        // }}
        {...toggleProps}
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
}

export default App;
