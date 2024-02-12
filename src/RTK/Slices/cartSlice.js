import { createAsyncThunk, createSlice } from  "@reduxjs/toolkit";



const initialState = {
    cartItems : [],
}

export const getCartData = createAsyncThunk("cart/getCartData", async (id) =>{
    const res = await fetch(`http://localhost:3000/users/${id}`)
    const data = await res.json()
    return data
})

export const updateCartData = createAsyncThunk("cart/updateCartData", async (data) =>{
    await fetch("http://localhost:3000/users/"+data.id, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({cart: data.cart})
    });
})

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers :  {
        addItem : (state, action) =>{
            const obj = state.cartItems.find(item => item.id === action.payload.id)
            if (obj) {
                obj.quantity++;
            }else{
                state.cartItems.push({...action.payload, quantity: 1});
            }
        },
        removeItem : (state, action) =>{
            state.cartItems = state.cartItems.filter(item => item.id != action.payload)

        },
        removeAll : (state) =>{
            state.cartItems = []
        },
        increaseQuantity : (state, action) =>{
            const obj = state.cartItems.find(item => item.id === action.payload)
            obj.quantity++;
        },
        decreaseQuantity : (state, action) =>{
            const obj = state.cartItems.find(item => item.id === action.payload)
            if(obj.quantity > 1) obj.quantity--;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(getCartData.fulfilled, (state, action) =>{
             state.cartItems = action.payload.cart;
        })
    }
})

export const { addItem, removeItem, removeAll, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;