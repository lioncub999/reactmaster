import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { changeName, increaseAge } from "./../store/userSlice"
import { increasePdCnt } from "./../store/cartSlice"
import { useEffect, useState } from "react";


function Cart() {
    
    let cartList = useSelector((state) => state.cart)
    let dispatch = useDispatch()
    const [increaseAmount, setIncreaseAmount] = useState('')

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map(function (a, i) {
                            return (
                                <tr key={i}>
                                    <td>1</td>
                                    <td>{cartList[i].name}</td>
                                    <td>{cartList[i].count}</td>
                                    <td><button onClick={function() {
                                        dispatch(increasePdCnt(cartList[i].id))
                                    }}>증가</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>


            </Table >
            <button onClick={function () {
                dispatch(changeName())
            }}>JohnKim으로 변경</button>

            <input type="text" onChange={function(e) {
                setIncreaseAmount(e.target.value)
            }} />
            <button onClick={function() {
                dispatch(increaseAge(increaseAmount))
            }}>AGE 1증가</button>
        </>
    )
}

export default Cart;