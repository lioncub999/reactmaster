import { useNavigate } from "react-router-dom"

function ShoesList(props) {
    let navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                {
                    props.shoes.map(function (a, i) {
                        return (
                            
                            <div className="col-md-4" key={i} onClick={function() {
                                navigate('/detail/'+i)
                            }} style={{cursor : 'pointer'}}>
                                <img src={props.shoes[i].imgsrc} width="80%" />
                                <h4>{props.shoes[i].title}</h4>
                                <p>{props.shoes[i].content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShoesList