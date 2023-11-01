import { useParams } from "react-router-dom";

function Detail(props) {
    let {id} = useParams();

    let detailPd = props.shoes.find(function(e) {
        return e.id === Number(id)
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={detailPd.imgsrc} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{detailPd.content}</p>
                    <p>{detailPd.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;