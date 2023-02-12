import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState =
{
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:
    {
        addItem(state,{payload})
        {
            state.totalAmount += payload.price * payload.amount
            const existingId=state.items.findIndex(item => item.id === payload.id)
            if(existingId===-1) state.items.push(payload)
            else state.items[existingId].amount+=payload.amount
        },
        removeItem(state,{payload})
        {
            const existingId=state.items.findIndex(item => item.id === payload)
            const existingItem = state.items[existingId]
            state.totalAmount -= existingItem.price
            if(existingItem.amount===1) state.items.splice(existingId,1)
            else existingItem.amount--;
        },
        clearCart() { return initialState }
    }
})

export const cartActions=cartSlice.actions

export default configureStore({
    reducer: cartSlice.reducer
})