import React, { useState } from "react";
import { useGallery } from "../../context/gallery-context";
import styled from "styled-components";
import PropTypes from "prop-types";
const StyledDiv = styled.div`
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
const StyledTotal = styled.div`
  position: relative;
  height: 300px;
  cursor: pointer;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .heart {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;
  }
  .button {
    padding: 12px 24px;
    background-color: white;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    color: black;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const PhotoList = () => {
  const { photos } = useGallery();
  console.log(photos);

  return (
    <StyledDiv>
      {photos.length > 0 &&
        photos.map((item) => <PhotoItem key={item.id} info={item}></PhotoItem>)}
    </StyledDiv>
  );
};
const PhotoItem = ({ info: { url, isFavorite, id } }) => {
  const { toogleFavorite } = useGallery();
  console.log("url:", url);
  //   const src = info.id;
  //   console.log(info);
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };
  return (
    <StyledTotal onClick={() => setHover(handleHover)}>
      <img className="image" src={url} alt="" />
      <span className="heart" onClick={() => toogleFavorite(id)}>
        <svg
          width="42"
          height="38"
          viewBox="0 0 42 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full"
        >
          <path
            d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
            fill={`${isFavorite ? "#ff6bcb" : "#fff"}`}
          />
        </svg>
      </span>
      {hover ? <button className="button">Add to cart</button> : ""}
    </StyledTotal>
  );
};
PhotoItem.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  isFinite: PropTypes.bool,
};
export default PhotoList;
