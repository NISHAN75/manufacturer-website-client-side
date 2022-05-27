import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Pages/Shared/Footer";
import Header from "./Component/Pages/Home/Header/Header";
import Home from "./Component/Pages/Home/Home/Home";
import Banner from "./Component/Pages/Home/Banner/Banner";
import Login from "./Component/Login/Login/Login";
import Register from "./Component/Login/Register/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PartDetalis from "./Component/Pages/Home/PartDetalis/PartDetalis";
import RequireAuth from "./hooks/RequireAuth";
import RequireAdmin from "./hooks/RequireAdmin";
import DashBoard from "./Component/Pages/DashBoard/DashBoard";
import OrderReview from "./Component/Pages/OrderReview/OrderReview";
import ClientReview from "./Component/Pages/OrderReview/ClientReview";
import Profile from "./Component/Pages/Profile/Profile";
import Users from "./Component/Pages/Users/Users";
import Payment from "./Component/Pages/OrderReview/Payment";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/services/:id"
          element={
            <RequireAuth>
              <PartDetalis></PartDetalis>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashBoard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route index element={<OrderReview></OrderReview>}></Route>
          <Route path="review" element={<ClientReview></ClientReview>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
