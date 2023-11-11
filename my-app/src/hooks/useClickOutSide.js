import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleClickDropdown(e) {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        // !dropdownRef.current.contains(e.target) : nội dung mà ta nhấn vào không phải là dropdownRef.current(ở đây là trong dropdown) => có nghĩa là nhấn ra bên ngoài
        console.log("Click outsize dropdown");
        setShow(false); // khi ta click ra bên ngoài thì set lại giá trị cho showDropdown là false()
      }
      // else {
      //     console.log("Click insize dropdown");
    }
    document.addEventListener("click", handleClickDropdown); // add event vào document và truyền vào function handleClickDropdown
    return () => {
      // sau khi useEffect unmount thi clear sự kiện đi
      document.removeEventListener("click", handleClickDropdown);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
