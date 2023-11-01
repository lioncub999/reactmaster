import './App.css';
import { useState } from 'react';

function App() {

  const [post, setpost] = useState([{ title: '남자 코트 추천', heart: 0, pubTime: 'Wed Nov 01 2023 10:54:33 GMT+0900 (한국 표준시)' }
    , { title: '강남 우동 맛집', heart: 0, pubTime: 'Wed Nov 01 2023 10:55:33 GMT+0900 (한국 표준시)' }
    , { title: '파이썬 독학', heart: 0, pubTime: 'Wed Nov 01 2023 10:56:33 GMT+0900 (한국 표준시)' }])

  const [modal, setmodal] = useState(false)
  const [thismodal, setthismodal] = useState(0)
  const [userInput, setuserInput] = useState('')
  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 blog </div>
        <button onClick={function () {
          let copy = [...post];
          console.log(copy)
          copy[0].title = '여자 코트 추천';
          setpost(copy)
            ;
        }}>여자 코트 추천</button>

        <button onClick={function () {
          let titleResult
          titleResult = [...post].sort(function (a, b) {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          })
          setpost(titleResult)
        }}>오름차순정렬</button>

        <button onClick={function () {
          let titleResult
          titleResult = [...post].sort(function (a, b) {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {
              return 1;
            }
            if (x > y) {
              return -1;
            }
            return 0;
          })
          setpost(titleResult)
        }}>내림차순정렬</button>

      </div>

      {
        post.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={function () {
                setmodal(!modal)
                setthismodal(i)
              }}> {post[i].title} <span onClick={function (e) {
                let copy = [...post];
                copy[i].heart += + 1;
                setpost(copy)
                e.stopPropagation()
              }} style={{ cursor: "pointer" }}>👍</span>{post[i].heart}</h4>
              <p>{post[i].pubTime}</p>
            </div>
          )
        })
      }

      {
        modal === true ? <Modal post={post[thismodal]}></Modal> : null
      }

      <input type="text" onChange={function (e) {
        setuserInput(e.target.value)
      }} /><button onClick={function () {
        let copy = [...post]
        copy.push({ title: userInput, heart: 0, pubTime: new Date().toString() })
        setpost(copy)
      }}>게시</button>

    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.post.title}</h4>
      <p>{props.post.pubTime}</p>
    </div>
  )
}

export default App;
