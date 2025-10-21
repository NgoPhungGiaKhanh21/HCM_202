import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../utils/ScrollToTop";

function RootLayout() {
  return (
    <div className="flex bg-primary flex-col min-h-svh">
      <div className="flex-1">
        <div className="">
          <div className="!z-2000 normalText">
            <ToastContainer
              newestOnTop
              pauseOnFocusLoss
              autoClose={3000}
              hideProgressBar
            />
          </div>
          <ScrollToTop/>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
