import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
// createPortal: phần tử con sẽ không bị ảnh hưởng phần tử cha bởi các phương thức trong component
const StyledModal = styled.div`
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    .unshow {
      opacity: 0;
      visibility: hidden;
    }
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.25);
    }
    .modal-content {
      position: relative;
      z-index: 10;
      padding: 40px;
      background-color: white;
      border-radius: 8px;
      width: 100%;
      max-width: 482px;
    }
    .close {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      cursor: pointer;
      transform: translate(50%, -50%);
    }
    h2 {
      padding: 20px;
      font-size: 40px;
      color: black;
      text-align: center;
      font-weight: 600;
    }
    .modal-input {
      max-width: 482px;
      display: flex;
      gap: 10px;
      flex-direction: column;
      margin-bottom: 20px;
      .label {
        font-size: 14px;
        cursor: pointer;
      }
      .input {
        /* width: 100%; */
        line-height: 1.5;
        background-color: #e7ecf3;
        border-radius: 8px;
        padding: 16px;
        border: none;
      }
    }
    .button {
      width: 100%;
      font-size: 16px;
      font-weight: 600;
      background-color: #316bff;
      color: white;
      padding: 16px;
      border-radius: 8px;
      border: none;
    }
  }
`;
const Modal = ({ open = false, handleClose = () => {} }) => {
  // detructuring props thành open và handleClose(1 error function = empty object)
  if (typeof document === `undefined`) return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <StyledModal>
      <div className={`modal ${open ? "" : "unshow"}`}>
        <div
          className={`overlay  ${open ? "" : "unshow"}`}
          onClick={handleClose}
        ></div>
        <div className={`modal-content  ${open ? "" : "unshow"}`}>
          {/* nếu có modal(true) thì empty và ngược lại(open:false) thì thêm class unshow vào */}
          <span className="close" onClick={handleClose}>
            {" "}
            {/* khi click vào đây sẽ gọi hàm handleClose  */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                fill="#84878B"
              />
            </svg>
          </span>
          <h2>Welcom Back!</h2>
          <div className="modal-input">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              className="input"
              placeholder="Please enter your email addres"
            />
          </div>
          <div className="modal-input">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              className="input"
              placeholder="Please enter your password"
            />
          </div>
          <button className="button">Sign in</button>
        </div>
      </div>
    </StyledModal>,
    document.querySelector("body")
  );
};
Modal.propTypes = {
  // proptype dùng để kiểm tra các prop ta tạo ra dã được lấy ra dùng chưa, nếu chưa sẽ báo lỗi cho ta biết
  // dùng proptype cho component Modal
  open: PropTypes.bool.isRequired, // ở Modal ta có dùng 2 prop là open và function handleClose
  handleClose: PropTypes.func.isRequired, // setup cho kiểm tra, nó là dạng function và bắt buộc(isRequired)
  // nếu sai bất kỳ 1 điều kiện nào ở đây thì nó sẽ náo lỗi trong console cho ta biết
};
export default Modal;
