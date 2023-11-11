import { useState } from "react";
// viết 1 custom hook để sử dụng trong các component để không bị duplicate code
export default function useToggle() {
  const [value, setValue] = useState(false);
  const handleToggleValue = () => {
    setValue((previous) => !previous);
  };
  return {
    // return về các giá trị cần để bên component có thể sử dụng
    value,
    handleToggleValue,
  };
}
