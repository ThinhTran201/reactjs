import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
const StyledPhotos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap; // xuống hàng nếu hàng đó không đủ không gian
  justify-content: space-between;
`;
const StyledPhotosImage = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;
const StyledPhotosImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledButton = styled.button`
  display: inline-block;
  padding: 8px 16px;
  background-color: blue;
  color: white;
  margin: 0 auto;
`;
// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100
const Photos = () => {
  // useEffect(callback, [dependencies]): gồm có 2 thành phần là hàm callback và dependencies
  // useEffect(function callback(){
  //     // side-effects                     Cấu trúc của 1 useEffect
  // }, []);
  const [randomPhotos, setRandomPhotos] = useState([]);
  console.log("outside");
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMorePhotos = () => {
    getRandomPhotos(nextPage).then((image) => {
      console.log(image); // trả ra 1 array có 30 phần tử
      const newPhotos = [...randomPhotos, ...image]; // tạo 1 array mới có các phần tử là 2 mảng gộp lại(concat)
      setRandomPhotos(newPhotos);
      setNextPage(nextPage + 1);
      console.log(nextPage);
    });
  };
  useEffect(() => {
    // side-effect                       dùng theo kiểu error function
    // document.title = "welcom to useEffect";
    // console.log("inside");
    handleLoadMorePhotos();
  }, []);
  return (
    <div>
      <StyledPhotos>
        {randomPhotos.map((item, index) => (
          <StyledPhotosImage key={item.id}>
            <StyledPhotosImg src={item.download_url} alt={item.author} />
          </StyledPhotosImage>
        ))}
      </StyledPhotos>
      <StyledButton onClick={handleLoadMorePhotos}>Load more</StyledButton>{" "}
      {/* add event onClick vào button và sử dụng function handleLoadMorePhotos */}
    </div>

    //   <div>{JSON.stringify(randomPhotos)}</div>; // sử dụng useState để lấy kết image của useEffect ra bên ngoài sever và thông qua JSON.stringify
  );
};

export default Photos;
