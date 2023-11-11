import { useEffect, useRef, useState } from "react";

export default function useHover() {
  // mouseover: là sự kiện khi ta rê chuột vào phần tử đó
  // mouseout: là sự kiện khi ta rời chuột khỏi phần tử đó
  const [hovered, setHovered] = useState(false);
  // làm sao để biết được ta hover vào phần tử nào(phần tử DOM nào) => giải pháp là sử dụng useRef
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleMouseOver() {
      setHovered(true);
      console.log("hover");
    }
    function handleMouseOut() {
      setHovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      // trong useEffect thì khi ta rời khỏi component thì ta nên clearup nó
      if (dom) {
        dom.removeEventListener("mouseover", handleMouseOver);
        dom.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);
  return {
    // sẽ trả về giá trị nào
    hovered, // trả về trạng thái đã hover vào hay chưa (true, false)
    nodeRef, // để biết được là ta sử dụng vào node DOM nào
  };
}
