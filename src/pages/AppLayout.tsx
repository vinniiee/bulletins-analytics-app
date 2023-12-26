import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppLayout() {
  return (
    <div
      className="bg-stone-200 h-screen 
        w-screen flex  justify-start
         items-center relative overflow-scroll"
    >
      <Sidebar />
      <Main />
      <div style={{ zIndex: "10000" }}>
        <ToastContainer theme="dark" />
      </div>
    </div>
  );
}

export default AppLayout;
