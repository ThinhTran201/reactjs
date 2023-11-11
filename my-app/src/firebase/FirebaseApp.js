import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  // colRef
  const colRef = collection(db, "posts");
  // collection từ firebase/firestore
  // "posts" là collection trên trang firebase đã tạo
  // console.log(`FirebaseApp ~ colRef`, colRef);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [postId, setPostId] = useState();
  const [posts, setPosts] = useState();
  const [singleDoc, setSingleDoc] = useState();
  useEffect(() => {
    // 1. Get collection data (posts)
    // để lấy dữ liệu trong collection ra ta sử dụng getDocs
    // getDocs(colRef) // getDocs phải sử dụng 2 phương thức then vs catch
    //   .then((snapshot) => {
    //     // trong snapshot sẽ lấy docs, trong docs có id và data
    //     // console.log(`getDocs ~ snapshot`, snapshot);
    //     let posts = []; // tạo 1 mảng rỗng để tý nữa push các giá trị lấy từ docs
    //     // duyệt các phần tử trong mảng docs(nằm trong snapshot)
    //     snapshot.docs.forEach((doc) => {
    //       posts.push({
    //         id: doc.id,
    //         ...doc.data(), // (...rest) trong clone array
    //       });
    //     });
    //     // console.log(posts);
    //     // post sẽ gồm có id và data(các  giá trị trên firebase ta khỏi tạo:title, author)
    //     setPosts(posts);
    //   })
    //   // dùng catch để kiểm tra lỗi nếu có
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // cách 1 như trên thì khi ta thêm hoặc xóa thì phải reload nó mới thực hiện, vậy ta sẽ dùng cách 2 để khi nhập vào và submit thì nó sẽ thực hiện luôn
    // cách 2: Get document in realtime: cách này thì khi ta điền vào input và submit thì nó sẽ thực hiện ngay
    onSnapshot(colRef, (snapshot) => {
      let posts = []; //tạo 1 mảng rỗng để tý nữa push các giá trị lấy từ docs
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(), // (...rest) trong clone array
        });
      });
      // console.log(posts);
      // post sẽ gồm có id và data(các  giá trị trên firebase ta khỏi tạo:title, author)
      setPosts(posts);
    });
    const docRefSingle = doc(db, "posts", `IfodlkOS3fMSBgseKH7t`); // tạo biến vầ dùng doc để lấy Id của dữ liệu
    // getDoc(docRefSingle).then((doc) => {
    //   // dùng getDoc để truy xuất đến dữ liệu nó sẽ chạy khi ta reload, phải dùng thêm then để có thể lấy data ra và nó sẽ cập nhật ngay (realtime)
    //   console.log(doc.id, doc.data());
    // });
    // thay vì dùng getDoc ta có thể dùng cách khác là onSnapshot
    onSnapshot(docRefSingle, (doc) => {
      console.log(doc.id, doc.data());
    });
  }, []);

  const handleAddpost = (e) => {
    e.preventDefault(); // phải có ngăn chặn hành vi mặc định thì mới submit được
    console.log(`submit`);
    addDoc(colRef, {
      // addDoc là phương thức thêm dữ liệu vào trong collection của database
      title, // vì trong database đã có 2 tên dữ liệu này rồi nên ghi rút gọn như vậy
      author, // nếu không giống nhau thì sẽ ghi đầy đủ: title: "", ; author: "",
      createdAt: serverTimestamp(), // cái này nó sẽ hiển thị thời gian ta tạo ra dữ liệu đó trong database,
    })
      .then(() => {
        // sau khi khi submit thành công thì sẽ thực hiện bên trong then
        console.log("success");
        // sau đó sẽ reset form lại
      })
      .catch((err) => {
        // nếu có lỗi thì sẽ console.log lỗi ra
        console.log(err);
        // sau đó sẽ reset form luôn
      });
  };

  const handleRemovePost = async (e) => {
    // function này để remove dữ liệu bên trong post bằng cách nhận diện qua Id và sử dụng  async await
    e.preventDefault();
    const colRefDelete = doc(db, "posts", postId); // tạo biến sử dụng doc(có nghĩa là document trong database) trong đó db là firestore được export bên component kia qua, posts là collection trên database, postId là Id của dữ liệu cần xóa
    await deleteDoc(colRefDelete); // thay vì dùng then vs catch thì ta dùng async await cho gon hơn thôi chứ công dụng như nhau
    // deleteDoc: là phường thức xóa dữ  liệu trong database thông qua Id của doc đó
    console.log("success");
  };

  // createdAt: là thời gian để ta biết được bài viết đó tạo lúc nào
  const handleUpdatePost = async (e) => {
    // tạo function để xử lý việc update value trong dữ liệu database
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId); // dùng phương thức doc để lấy Id của database mà ta muốn update
    // sử dụng phương thức updateDoc để update value trong dữ liệu của ta, ở phương thức này ngoại trừ điền vào doc còn phải điền thêm property và value cần thay đổi
    await updateDoc(colRefUpdate, {
      title: "This is a new title from update function",
    });
    console.log("success updateDoc");
  };
  // fetching single document: truy xuất dữ liệu của 1 doc trong database ra
  // sử dụng getDoc(không có s như ở trên, và sẽ thông qua Id của các doc để truy xuất)
  useEffect(() => {
    // firestore queries
    // const q = query(colRef, where(), orderBy("createdAt"), limit(4)); // tạo biến để truy vấn data với colRef là posts(collection), limit là số lượng
    //orderBy là sắp xếp theo cái ta quy định(author, title,...)
    const q = query(colRef, where("author", "==", "evondev"), limit(4));
    // where: dùng để truy vấn dữ liệu theo 3 íu tố: "field", "so sánh", "value để so sánh"
    // console.log(`query ~ q`, q);
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log("posts:", posts);
    });
  }, []);
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleAddpost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type=""
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Add post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form onSubmit={handleUpdatePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="postId"
            onChange={(e) => setPostId(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-red-500 text-white text-sm font-medium w-full rounded-lg"
          >
            Update post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        {posts &&
          posts.length > 0 &&
          posts.map((item) => (
            <div key={item.title}>
              <div>
                {item.title} - {item.author}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
