import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef(null);
  useEffect(() => {
    // lúc này thhid contentRef.current là node entry-content
    if (contentRef) {
      const links = contentRef.current.querySelectorAll("a");
      console.log("useEffect ~ links", links); // tạo links là  1 object gồm các element là các thẻ a bên trong div
      links.length > 0 &&
        links.forEach((item) => item.setAttribute("target", "_blank")); // tạo attribute target="_blank" vào trong thẻ a ( tác dụng nó là khi nhấn vào sẽ load ở trang mới chứ không phải tại trang đó)
    }
  }, []);
  return {
    contentRef,
  };
}
