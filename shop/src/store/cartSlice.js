import { configureStore, createSlice } from '@reduxjs/toolkit'


let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers : {
        increasePdCnt(state) {
            console.log(state.find(id == 0))
        }
    }
})


export let { increasePdCnt } = cart.actions

export default cart;