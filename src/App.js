import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Pages/Shared/Footer';
import Header from './Component/Pages/Home/Header/Header';
import Home from './Component/Pages/Home/Home/Home';
import Banner from './Component/Pages/Home/Banner/Banner';
import Login from './Component/Login/Login/Login';
import Register from './Component/Login/Register/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PartDetalis from './Component/Pages/Home/PartDetalis/PartDetalis';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services/:id' element={<PartDetalis></PartDetalis>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
