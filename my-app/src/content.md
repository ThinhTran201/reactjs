1. phân biệt useState vs useRef

- useSatte: mỗi lần giá trị state thay đổi thì sẽ rerender cón useRef thì không
- useRef: có thể dùng trong DOM và nó dử dụng property current,
  vd: <div ref={divRef}></div>
  divRef.current.value (có thêm value nếu đó là input)
  nếu không dùng useRef thì ta sẽ dùng:  
   document.querySelector(`div`);

2. useEffect hoạt động như thế nào ? và nó dùng để làm gì?
   -> Khi component chạy xong (mounted, component hiển thị ra bên ngoài rồi) lúc này useEffect nó mới chạy, trong useEffect thì nó sẽ chạy clean up trước
   useEffect(()=> {
   main code
   return() => {
   clean up effect
   }
   })
   trước khi chạy useEffect thì nó sẽ clean up trước(clean up những cái trước đó) rồi mới chạy main code, và khi thoát khỏi useEffect thì nó sẽ lean up trước khi rời khỏi
3. có 3 cách sử dụng các biến giữa các component không liên quan vs nhau:
   c1: sử dụng props, ví dụ ta dùng props ở app.js và triển khai dùng ở các component con để sử dụng
   c2: dùng context
   c3: redux
4. các hàm thường được sử dụng trong react: map, filter, reduce, forEach, some, every.
5. sự khác nhau giữa map và forEach: máp thì tạo ra 1 mảng mới còn forEach thì không, forEach không có return được còn map thì có return, nếu không có điều kiện gì cả thì map và filter giống nhau

- filter thì dùng để loại ra,
- hàm some thì sẽ trả về true hoặc false, nó sẽ trả về true khi nó chỉ cần 1 điều kiện đúng, còn every thì tất cả các điều kiện phải đúng mới true
- reduce thì nó sẽ gom giá trị thành 1

8. 2 trang để luyện tư duy logic và giải quyết bài toán: leetcode.com, hackerRank, hoặc là vào trang react interview question có các câu hỏi và trả lời về react hay dùng
9. vào trang medium để search các cách tối ưu code
