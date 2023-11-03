import { configureStore, createSlice } from '@reduxjs/toolkit'


let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers : {
        increasePdCnt(state, a) {
            let index1 = state.findIndex((data) => data.id == a.payload)
            state[index1].count += 1
        }
    }
})


export let { increasePdCnt } = cart.actions

export default cart;