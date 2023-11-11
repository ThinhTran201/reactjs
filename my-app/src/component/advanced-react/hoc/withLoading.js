import React, { useEffect, useState } from "react";
// hoc: Hight order component pattern
function withLoading(Component, url) {
  // component này sẽ return ra 1 component bên trong
  return (props) => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        console.log("fetchData ~ data", data);
        setDatas(data.hits);
        console.log("datas", datas);
      }
      fetchData();
    }, []);
    // if (!datas || datas.length === 0) return <div>Loading...</div>; // nếu không có  data hoặc kích thước data = 0 thì return ra loading...
    // return <Component data={datas} {...props}></Component>; // detructuring các props nếu có
    if (!datas || datas.length === 0) return <div>Loading...</div>;
    return <Component data={datas} {...props}></Component>;
  };
}
export default withLoading;
