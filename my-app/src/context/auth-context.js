import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState({
    useId: 1,
    fullname: "thinh",
    email: "thinh@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1684178315101-454993c20fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be within a AuthContext");
  return context;
}
export { AuthProvider, useAuth };
