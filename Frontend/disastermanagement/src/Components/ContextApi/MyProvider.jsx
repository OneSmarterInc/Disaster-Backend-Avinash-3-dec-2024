import { useState } from "react";
import MyContext from "./MyContext";

// const api_domain = "http://3.218.73.237/client/";
// const api_domain = "http://127.0.0.1:8000/client/";
// const api = "https://i7ys2hipmc.execute-api.us-east-2.amazonaws.com/disrupt/";
const api = "https://semantic.onesmarter.com/disaster";

const MyProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(false);
  const [deliverableState, setDeliverableState] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Prepare");
  const [pauseBtn, setPauseBtn] = useState(false);
  const [head, setHead] = useState("");
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const [value, setValue] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [component, setComponent] = useState("");
  const [showSidebar, setShowSideBar] = useState(true);
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(true);
  const [flag3, setFlag3] = useState(true);
  const [flag4, setFlag4] = useState(true);
  const [flag5, setFlag5] = useState(true);
  const [flag6, setFlag6] = useState(true);
  const [flag7, setFlag7] = useState(true);

  const [speed, setSpeed] = useState(4000);

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
        setSpeed,
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
        value,
        setValue,
        startIndex,
        setStartIndex,
        component,
        setComponent,
        flag1,
        setFlag1,
        flag2,
        setFlag2,
        flag3,
        setFlag3,
        flag4,
        setFlag4,
        flag5,
        setFlag5,
        flag6,
        setFlag6,
        flag7,
        setFlag7
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
