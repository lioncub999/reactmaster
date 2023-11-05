import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";



function Detail(props) {

    const [alertState, setalertState] = useState(1)
    const [tap, settap] = useState(0)

    useEffect(() => {
        let alertShow = setTimeout(() => {
            setalertState(0)
        }, 2000);
        return () => {
            clearTimeout(alertShow)
        }
    }, [])

    const [num, setnum] = useState('')
    useEffect(() => {
        if (isNaN(num) == true) {
            alert('그러지 말아다오')
        }
    }, [num])


    let { id } = useParams();

    let detailPd = props.shoes.find(function (e) {
        return e.id === Number(id)
    })

    useEffect(() => {
        setTimeout(() => {
            setfade('end')
        }, 100);

        return () => {
            setfade('')
        }
    }, [])

    const [fade, setfade] = useState('start')


    useSelector((state) => {
        console.log(state)
        return state
    })

    return (
        <div className={`container start ` + fade} >
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${(Number(id) + 1)}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{detailPd.content}</p>
                    <p>{detailPd.price}</p>
                    <button>주문하기</button>
                </div>

                {
                    alertState == 1 ? <div style={{
                        width: "100%",
                        height: "50px",
                        background: "darkorange",
                        borderRadius: "5px"
                    }}>
                        <p style={
                            { lineHeight: "50px" }
                        }>잠깐 나오는 박스</p>
                    </div> : null
                }
                <input type="text" onChange={(e) => {
                    setnum(e.target.value)
                }} />
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={function () {
                        settap(0)
                    }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={function () {
                        settap(1)
                    }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={function () {
                        settap(2)
                    }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tap={tap} ></TabContent>


        </div>
    )
}
function TabContent({ tap }) {
    const [fade, setfade] = useState()

    useEffect(() => {
        setTimeout(() => {
            setfade('end')
        }, 100)

        return (() => {
            setfade('')
        })

    }, [tap])

    return (
        <div className={`start ` + fade}>
            {
                [<div>내용0</div>,
                <div>내용1</div>,
                <div>내용2</div>][tap]
            }
        </div>
    )
}
export default Detail;