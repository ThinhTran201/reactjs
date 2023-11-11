// import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Counter from "./component/counter/Counter";
// import Timer from "./component/Timer";
// import Header from "./component/Header";
// import HackerNew from "./component/new/HackerNew";
import { Fragment, useContext, createContext } from "react";
import styled, { css } from "styled-components";
// import CounterCT from "./component/context/CounterCT";
import PhotoList from "./component/gallery/PhotoList";
import HeaderMain from "./component/HeaderMain";
// import YoutubeList from "./component/youtube/youtubeList";
// // import Toggle from "./component/state/Toggle";
// import Game from "./component/tictactoe/Game";
// import Button from "./component/button/Button";
// import Card from "./component/card/Card";
// import CardList from "./component/card/CardList";
// import { GlobalStyles } from "./GlobalStyles";
// import Card2 from "./component/card/Card2";
// import { ThemeProvider } from "styled-components";
// import Photos from "./component/photo/Photos";
// import Input from "./component/useRef/Input";
// import Blog from "./component/custumHook/Blog";
// import HackerNewWithHooks from "./component/new/HackerNewWithHooks";
// import DropdownWithHooks from "./component/useRef/dropDownWithHooks";
// import Form from "./component/Form/Form";
// import Form2 from "./component/Form/Form2";
// import Input2 from "./component/Form/Input2";
// import SignUpForm from "./component/Form/SignUpForm";
// import SignUpFormFinal from "./component/Form/SignUpFormFinal";
// import { Fragment, useState } from "react";
// import SignUpFormHook from "./component/Form/SignUpFormHook"
// import Modal from "./component/modal/Modal";
// import ModalBase from "./component/modal/ModalBase";
import { AuthProvider } from "./context/auth-context";
import { GalleryProvider } from "./context/gallery-context";
import Nav from "./component/Nav";
import BlogPage from "./component/BlogPage";
import ProfilePage from "./component/ProfilePage";
import BlogPageDetails from "./component/BlogPageDetails";
// import Tooltip from "./component/tooltip/Tooltip";
// import SignUpFormV2 from "./component/Form/SignUpFormV2";
// import SignUpFormV3 from "./component/Form/SignUpFormV3";
// import SignUpForm from "./component/Form/SignUpForm";
// import MovieSearchApp from "./component/MovieSearchApp";
// import SideBarMenu from "./component/useRef/SideBarMenu";
// import Dropdown from "./component/useRef/Dropdown";
// import TextAreaAutoResize from "./component/useRef/TextAreaAutoResize";
// import StopWatch from "./component/useRef/StopWatch";
// import UseRef from "./component/useRef/UseRef";
// const StyledLorem = styled.div`
//   position: relative;
//   z-index: 30;
// `;
// const StyledButton = styled.button`
//   color: white;
//   padding: 16px;
//   background-color: #3b82f6;
//   border-radius: 12px;
//   border: none;
//   z-index: 100;
// `;
// JSX: Javascript XML
// ES6
// Babel
/**
element = <div id="root">Hello world</div>: JSX
element = React.createElement(`div` , {id: `root`}, `Hello world`):   viết bằng React.createElement
Cấu trúc React.createElement: function createElement(elementType, Props, ...children)
* elementType: `div` `p` `span`
* props: className, id, src, alt
*children: các content và các phần tử con bên trong thẻ đó
ví dụ 2:
element2 = (<div>                                   //
          <span>Hello</span> <span>world</span>     // viết bằng JSX
</div>)                                             //
Viết bằng React.createElement:
element2 = React.createElement(`div`, {
  children: [
    React.createElement(`span`, null, `Hello`),
    ` `,
    có dấu cách React.createElement(`span`, null, `world`)
  ]
})
*/
// curly braces: {}

// function Feature() {
//   // tạo component
//   return (
//     <div className="feature">
//       <img src="" alt="" className="feature-image" />
//       <h3 className="feature-title">Title</h3>
//       <p className="feature-desc">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
//         assumenda officia necessitatibus reiciendis deleniti dolor odio
//         architecto placeat facere dolore hic, sit temporibus, nam laborum
//         exercitationem veritatis, dignissimos quaerat ex.
//       </p>
//     </div>
//   );
// }

function App() {
  // const [showModal, setShowModal] = useState(false);
  // console.log(YoutubeData);
  // const name = "Evondev";
  // function fullName(firstName, lastName) {
  //   return `${firstName} ${lastName}`;
  // }

  return (
    // lấy component ra dùng
    // <ThemeProvider theme={Theme}>
    //   {/* theme đầu là props để component trỏ đến, cái sau là cái biến ở trên đầu gán cho giá trị là 1 object */}
    //   {/* <Toggle></Toggle> */}
    //   {/*<Counter></Counter> */}
    //   {/* <Game></Game> */}
    //   {/* <Button>Primary</Button>
    //   <Button secondary>Secondary</Button> */}
    //   <GlobalStyles></GlobalStyles>
    //   <CardList>
    //     {/* <Card secondary={true}></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card>
    //     <Card></Card> */}
    //     <Card2 secondary={true}></Card2>
    //   </CardList>
    // </ThemeProvider>
    // <Fragment>
    //   {/* <div>
    //     <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
    //   </div>
    //   <StyledButton onClick={() => setShowModal(true)}>Show Modal</StyledButton>
    //   <StyledLorem>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
    //     quos inventore veniam a! Quasi dignissimos molestias deserunt magni.
    //     Doloremque ullam nulla odio, illo rerum quibusdam ipsum vel mollitia
    //     quidem magni!
    //   </StyledLorem> */}
    //   <Tooltip text="Hover me">This is a tooltip content</Tooltip>{" "}
    //   {/* content ở giữa là props children, nó sẽ không hiện ra, sẽ dùng bên component {children} */}
    // </Fragment>
    // <div>
    //   {/* <Modal open={true} handleClose={() => {}}></Modal>{" "} */}
    //   {/*  CHÚ Ý NÀY CHO MODAL VỀ PROP */}
    //   {/* <ModalBase>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, nostrum
    //     nulla? Ab quidem, sint libero in praesentium incidunt quos ex
    //     reiciendis! Ut libero error animi rerum magnam assumenda nostrum sunt!
    //   </ModalBase> */}
    //   <CounterCT></CounterCT>
    // </div>
    // <Fragment>
    //   <AuthProvider>
    //     <GalleryProvider>
    //       <HeaderMain></HeaderMain>
    //       <PhotoList></PhotoList>
    //     </GalleryProvider>
    //   </AuthProvider>
    // </Fragment>
    <div>
      {/* <Routes> */} {/* routes là cái wrap ở ngoài */}
      {/* <Route
          path="/" // path là đường dẫn, / là trang chủ hiện tại
          element={
            // element là component hoặc css ta muốn thể hiện trong này
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              vel impedit, nam iusto rem modi, laborum quo et quis blanditiis
              voluptas id? Aliquid doloribus fugit voluptatem consectetur ullam
              nobis laborum.
            </div>
          }
        ></Route>
        <Route path="/movie" element={<div>This is a movie</div>}></Route>
        {/* /about là đường dẫn trong của trang chủ(/) */}
      {/* <Route path="/about" element={<div>This is about page</div>}></Route>
        <Route
          path="/movie/:movieId"
          element={<div>This is movie details of movies</div>}
        ></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          {" "}
          {/* dùng Route Nav để wrap các page lại và dùng Outlet bên Nav để hiển thị các page và khi hiện page 404 se không hiện các link trên title */}
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug" // /:slug là khi ta vào đường dẫn /blog và / thêm id hay gì đó thì sẽ hiển thị component BlogPageDetails(slug là cách backend convert( ví dụ -> vi-du) giống như khi ta search
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 page</>}></Route>{" "}
        {/* path="*" là đường dẫn nếu nhập không có thì sẽ hiện trang này */}
      </Routes>
    </div>
  );
}

export default App;
