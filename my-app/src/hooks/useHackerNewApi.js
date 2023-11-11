import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function UseHackerNewApi() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      // try catch là cố làm 1 việc gì đó, trong trường hợp này khi loading(true). try các lệnh bên trong và nếu catch(error) nghĩa là
      // không được thì trả kết quả loadig(false)
      const response = await axios.get(url);
      console.log(response.data); // vì data là 1 object có 1 property ở trong là hits chứa các phần tử bên trong nên khi truy xuất ta cần thêm đuôi hits
      setHits(response.data?.hits || []); // giá trị thay đổi của response là response.data và || là trường hợp không có thì sẽ lấy giá trị mảng rỗng
      // response.data?.hits : kiểm tra nếu có data trong response thì truy xuất hits trong data nằm trong response
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
    // console.log("handleFetchData ~ data", response);
  };
  //   const handleUpdateQuery = lodash.debounce((e) => {
  //     // lodash dùng để set 1 khoảng thời gian sau đó mới thực hiện lệnh bên trong(lấy kết quả sau cùng sau khoảng thời gian đó chứ k phải lấy liên tục từng từ)
  //     setQuery(e.target.value);
  //   }, 500);
  useEffect(() => {
    handleFetchData.current();
  }, [url]); // điền url vào để khi có query thay đổi thì nó sẽ chạy lên handleFetchData.current(); (kề trên) để thực hiện hàm đó
  return {
    hits,
    query,
    setQuery,
    loading,
    errorMessage,
    setUrl,
  };
}
