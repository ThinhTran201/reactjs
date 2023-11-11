import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// https://api.themoviedb.org/3/movie/550?api_key=b5a840ac29c1e4acf118fe4b4191ccc8
//  https://api.themoviedb.org/3/search/movie?api_key=b5a840ac29c1e4acf118fe4b4191ccc8&query=""
const StyledDiv = styled.div`
  padding: 40px;
  .movie {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    .movie-input {
      width: 100%;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 80px;
      border: 2px solid purple;
      box-shadow: 0px 0px 0px 3px rgba(125, 106, 255, 0.2);
    }
  }
`;
const StledItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin: 0 100px;
  flex-wrap: wrap;
  .out {
    width: 250px;
    background-color: white;
    padding: 10px;
    border-radius: 16px;
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 50px;
    margin-right: 80px;
  }
  .out-image {
    width: 250px;
    height: 300px;
    .item-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      border-radius: 8px;
    }
  }
  .content {
    padding: 30px;
    .content-name {
      font-size: 16px;
      color: black;
      font-weight: bold;
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 15px;
    }
    .content-icon {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: auto;
    }
    .content-number {
      font-size: 14px;
      color: #333;
      font-weight: bold;
    }
  }
`;
const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/343611?api_key=b5a840ac29c1e4acf118fe4b4191ccc8&append_to_response="" `
      );
      console.log(response.data.production_companies);
      if (response.data.production_companies) {
        setMovies(response.data.production_companies);
      }
    }
    fetchData();
  }, []);
  return (
    <StyledDiv>
      <div className="movie">
        <input
          className="movie-input"
          type="text"
          placeholder="Search movie..."
        />
      </div>
      <StledItem>
        {movies.length > 0 &&
          movies.map((item, index) => (
            <MovieItem key={item.id} datas={item}></MovieItem>
          ))}
      </StledItem>
    </StyledDiv>
  );
};
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
// https://image.tmdb.org/t/p/original{datas.logo_path}
const MovieItem = ({ datas }) => {
  console.log("MoviesItem ~ props", datas);
  const src = `https://image.tmdb.org/t/p/original${datas.logo_path}`;
  return (
    <div className="out">
      <div className="out-image">
        <img className="item-image" src={src} alt="" />
      </div>
      <div className="content">
        <h3 className="content-name">{datas.name}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est
          quasi explicabo optio? Vero, magnam non? Corrupti maiores reiciendis
          iste aliquid delectus ipsam quasi, deserunt illum facilis quae debitis
          molestiae.
        </p>
        <div className="content-icon">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>
          <span className="content-number">{datas.id}</span>
        </div>
      </div>
    </div>
  );
};
export default MovieSearchApp;
