import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  // gọi props data(có datas) bên component withLoading để lấy datas ra sử dụng bên này
  console.log("FetchingData ~ data", data);

  return (
    <div>
      {/* {data.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </div>
  );
};

export default withLoading(
  FetchingData,
  `https://hn.algolia.com/api/v1/search?query=css`
);
// Dùng withLoading để wrap component FetchingData lại, mục đích là khi không co data sẽ hiện loading... còn nếu có data sẽ hiện bên FetchingData
