// cách tạo file css cho các component mình muốn style
// sẽ add vào file app.js
import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
body {
    font-family: 'Poppins', sans-serif;

}
`;
