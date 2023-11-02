import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data.js';
import { useEffect, useState } from 'react';
import TopNavbar from './components/TopNavbar';
import ShoesList from './components/ShoesList';
import Detail from './components/Detail';
import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import Cart from './components/Cart.js';

function App() {

  const [shoes, setshoes] = useState(data)
  const [pdCount, setPdCount] = useState(2)
  const [isNextExist, setIsNextExist] = useState(true)
  const [loading, setloading] = useState(false)
  const [fade, setfade] = useState('')


  useEffect(() => {
    axios.get(`https://codingapple1.github.io/shop/data${pdCount}.json`)
      .then((result) => {

      })
      .catch(() => {
        setIsNextExist(false)
      })

    return () => {
    }
  }, [pdCount])


  return (
    <div>

      <TopNavbar></TopNavbar>

      <Routes>

        <Route path='/' element={
          <>
            <div className="main-bg"></div>

            <ShoesList shoes={shoes}></ShoesList>
            {
              isNextExist == true ? <button onClick={() => {
                setloading(true)
                setTimeout(() => {
                  axios.get(`https://codingapple1.github.io/shop/data${pdCount}.json`)
                    .then((result) => {
                      let copy = [...shoes, ...result.data]
                      setshoes(copy)
                      setPdCount(pdCount + 1)
                      setloading(false)
                    })
                    .catch(() => {
                      console.log('실패함')
                    })
                }, 1500);

              }}>버튼</button> : null
            }
            {
              loading == true ? <p>로딩중</p> : null
            }
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

        <Route path="/cart" element={
          <Cart></Cart>
        }></Route>
      </Routes>



    </div>
  );
}






export default App;
