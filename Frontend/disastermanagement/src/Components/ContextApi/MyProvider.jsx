import { useState } from "react";
import MyContext from "./MyContext";

// const api_domain = "http://3.218.73.237/client/";
// const api_domain = "http://127.0.0.1:8000/client/";

const MyProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(false);
  const [deliverableState, setDeliverableState] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Prepare");
  const [pauseBtn, setPauseBtn] = useState(false);
  const [head, setHead] = useState("");
  const [showCloseBtn, setShowCloseBtn] = useState(false);

  const [showSidebar, setShowSideBar] = useState(true);

  const speed = 100;

  const enableBox = () => {
    setGlobalState(true);
  };

  const enableDeliverable = () => {
    setDeliverableState(true);
  };

  return (
    <MyContext.Provider
      value={{
        pauseBtn,
        setPauseBtn,
        deliverableState,
        speed,
        selectedSection,
        setSelectedSection,
        globalState,
        setGlobalState,
        enableBox,
        head,
        setHead,
        enableDeliverable,
        showSidebar,
        setShowSideBar,
        showCloseBtn,
        setShowCloseBtn,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
