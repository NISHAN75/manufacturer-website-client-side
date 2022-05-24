import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Pages/Shared/Footer';
import Header from './Component/Pages/Home/Header/Header';
import Home from './Component/Pages/Home/Home/Home';
import Banner from './Component/Pages/Home/Banner/Banner';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
