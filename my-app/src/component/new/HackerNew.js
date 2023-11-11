import React, { useState, useRef } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react
const StyledInput = styled.input`
  border: 1px solid green;
  color: black;
  padding: 5px;
`;
const StyledFlex = styled.div`
  display: flex;
`;
const StyledButton = styled.button`
  background-color: blue;
  color: white;
  font-weight: bold;
  padding: 5px;
  margin-left: 10px;
  border-radius: 7px;
`;
const HackerNew = () => {
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
  React.useEffect(() => {
    handleFetchData.current();
  }, [url]); // điền query vào để khi có query thay đổi thì nó sẽ chạy lên handleFetchData.current(); (kề trên) để thực hiện hàm đó
  return (
    <div>
      <StyledFlex>
        <StyledInput
          type="text"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)} // sự kiện onChange là khi ta gõ vào input
          // (e) là event của nó, (e.target.value) nghĩa là khi ta gõ vào ta sẽ lấy được giá trị của nó
        />
        <StyledButton
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Fetching
        </StyledButton>
      </StyledFlex>
      {loading && <p>Loading....</p>}
      {/* nếu có loading thì hiện thẻ p có chữ loading... */}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      {/* nếu không có loading và có errorMessage và in ra thẻ p có content là biến errorMessage */}
      {!loading &&
        hits.length > 0 && // nếu có không có loading thì mới thực hiện các lệnh tiếp theo
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNew;
