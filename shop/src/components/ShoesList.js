import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";
import Testcomp from "./Testcomp";

function ShoesList(props) {
    let navigate = useNavigate();
    let [realData, setrealData] = useState([])
    


    useEffect(() => {
        axios.get(`https://codingapple1.github.io/shop/data2.json`)
            .then((result) => {
                setrealData(result.data)
            })

    }, [])






    return (
        <div className="container">
            <div className="row">
                {
                    props.shoes.map(function (a, i) {
                        return (

                            <div className="col-md-4" key={i} onClick={function () {
                                navigate('/detail/' + i)
                            }} style={{ cursor: 'pointer' }}>
                                <img src={`https://codingapple1.github.io/shop/shoes${(props.shoes[i].id + 1)}.jpg`} width="80%" />
                                <h4>{props.shoes[i].title}</h4>
                                <p>{props.shoes[i].content}</p>
                                <Testcomp realData={realData}></Testcomp>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShoesList