// component này để viết các chức năng về login, logout cho firebase

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged, // là 1 cái hook để  check khi nào ta đăng nhập và khi nào ta đăng xuất
} from "firebase/auth";
// import { auth } from "./firebase-config";
const FirebaseAuth = () => {
  const auth = getAuth(); // lấy ra thông tin mà ta đã đăng nhập hoặc đăng xuất
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUserInfo(currentUser);
  });
  const handleInputChange = (e) => {
    setValues({
      ...values, // này có nghĩa là các giá trị trước đó, vì là object nên phải ghi như vậy
      [e.target.name]: e.target.value, // property name của cái mà ta nhấn vào(ở đây là input) sẽ bằng giá trị mà ta nhập vào input
      // trên đây là cách lưu giá trị vào trong object
    });
  };
  //   console.log(values);
  const hangleCreateUser = async (e) => {
    e.preventDefault();
    // console.log("submited");
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    ); // cách tạo tài khoản, gồm có 3 thành phần là auth(getAuth() bên component kia), giá trị nhập vào input là email và password
    console.log("handleCreateUser ~ user", user);
    // console.log("Create user succcesfully");
  };
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={hangleCreateUser}>
          <input
            type="email"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your email address"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium w-full rounded-lg"
          >
            SingUp
          </button>
        </form>
        <div className="mt-10 flex items-center gap-x-5">
          <span>{userInfo?.email}</span>
          <button
            type="submit"
            className="p-3 bg-purple-500 text-white text-sm font-medium rounded-lg"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirebaseAuth;
