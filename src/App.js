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
import AddReviews from "./Component/Pages/DashBoard/AddReviews/AddReviews";
import AllOrders from "./Component/Pages/Home/Admin/AllOrders";
import AddProducts from "./Component/Pages/Home/Admin/AddProducts";
import AllProducts from "./Component/Pages/Home/Admin/AllProducts";
import Blogs from "./Component/Pages/Home/Blogs/Blogs";
import NotFound from "./Component/Pages/NotFound/NotFound";
import PersonalProfile from "./Component/Pages/Home/Home/PersonalProfile/PersonalProfile";



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
          <Route index element={<Profile></Profile>}></Route>
          <Route path="review" element={<AddReviews></AddReviews>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allOrders"
            element={
              <RequireAdmin>
                <AllOrders></AllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="products"
            element={
              <RequireAdmin>
                <AddProducts></AddProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allProducts"
            element={
              <RequireAdmin>
                <AllProducts></AllProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route path="orders" element={<OrderReview></OrderReview>}></Route>
          <Route path="review" element={<ClientReview></ClientReview>}></Route>
        </Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/myProfile" element={<PersonalProfile></PersonalProfile>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
