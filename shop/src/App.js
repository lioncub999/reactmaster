import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data.js';
import { useState } from 'react';
import TopNavbar from './components/TopNavbar';
import ShoesList from './components/ShoesList';
import Detail from './components/Detail';
import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate, Outlet } from 'react-router-dom';

function App() {
  const [shoes, setshoes] = useState(data)
  return (
    <div>

      <TopNavbar></TopNavbar>

      <Routes>

        <Route path='/' element={
          <>
            <div className="main-bg"></div>

            <ShoesList shoes={shoes}></ShoesList>
          </>
        }></Route>

        <Route path="/detail/:id" element={
          <Detail shoes={shoes}></Detail>
        }></Route>

        <Route path="/about" element={
          <div>
            <p><Link to="/about/member">멤버</Link></p>
            <p><Link to="/about/location">위치</Link></p>
            <Outlet></Outlet>
          </div>
        }>
          <Route path='member' element={
            <p>회사원 : 이세휘</p>
          }></Route>
          <Route path="location" element={
            <p>위치 : 강남구</p>
          }></Route>
        </Route>
      </Routes>


    </div>
  );
}




export default App;
