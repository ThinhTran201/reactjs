import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            <h4 className="youtube-author">{props.author}</h4>
            {props.title || "this is example of title"}{" "}
            {/* nếu ta không lấy props.title ra dùng dùng ở trên app thì nó sẽ hiển thị dòng chữ */}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
