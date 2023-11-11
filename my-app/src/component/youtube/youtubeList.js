import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./youtubeItem";
const YoutubeList = (props) => {
  // tạo component có biến là props
  console.log(props);
  return (
    <div className="youtube-list">
      {props.children}
      {/*chèn thêm nội dung vào trong hay còn gọi là children */}
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar || item.image} // nếu không có data của avatar thì sẽ thay vào đó là item.image
          author={item.author}
        ></YoutubeItem>
      ))}
      {/* <Feature></Feature>
      <Feature></Feature> */}
      {/* <YoutubeItem image="https://images.unsplash.com/photo-1682946618161-8f349dec0f11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></YoutubeItem> */}
    </div>
  );
};

export default YoutubeList;
