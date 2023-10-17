import { useState } from "react"
import MyContext from "./MyContext";


// const api_domain = "http://3.218.73.237/client/";
// const api_domain = "http://127.0.0.1:8000/client/";






const MyProvider = ({ children }) => {

  const [globalState, setGlobalState] = useState(false);
  const [head, setHead] = useState("");

  const enableBox = () => {
    setGlobalState(true);
  };

  return (
    <MyContext.Provider value={{ globalState, setGlobalState, enableBox,head, setHead }}>
      {children}
    </MyContext.Provider>

  )
}


export default MyProvider;