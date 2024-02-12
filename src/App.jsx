import { Route, Routes } from 'react-router-dom'
import { Navigation_bar } from "./components/navbar/Navigation_bar";
import { Home } from './pages/Home/Home'
import { Shopping } from './pages/Shopping/Shopping'
import { Single_product } from './pages/single_product/Single_product';
import { Register_Page } from './pages/Register_Page/Register_Page';
import { Login_Page } from './pages/Login_Page/Login_Page';
import { Is_Logged_In } from './components/Is_Logged_In';
import { Cart_Page } from './pages/Cart/Cart_Page';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartData, updateCartData } from './RTK/Slices/cartSlice';

function App() {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const userId = useSelector(state => state.authReducer.userId)
  const cart = useSelector(state => state.cartReducer.cartItems)


  const dispatch = useDispatch()

  useEffect(() =>{
    if (isAuth) {
      dispatch(getCartData(userId))
    }
  }, [dispatch, isAuth, userId])

  useEffect(() =>{
      dispatch(updateCartData({id: userId, cart}))
  }, [dispatch, cart, userId])

   return (
    <>
      <Navigation_bar/>
        <Routes>
          <Route path='/' 
            element={
            <Is_Logged_In type="isAuth">
              <Home/>
            </Is_Logged_In>
          }/>
          <Route path='/products' 
            element={
            <Is_Logged_In type="isAuth">
              <Shopping/>
            </Is_Logged_In>
          }/>
          <Route path='products/:id' 
            element={
            <Is_Logged_In type="isAuth">
              <Single_product/>
            </Is_Logged_In>
          }/>

          <Route path='cart' 
            element={
            <Is_Logged_In type="isAuth">
              <Cart_Page/>
            </Is_Logged_In>
          }/>

          <Route path='register' 
            element={
            <Is_Logged_In type="notIsAuth">
              <Register_Page/>
            </Is_Logged_In>
          }/>

          <Route path='login' 
            element={
            <Is_Logged_In type="notIsAuth">
              <Login_Page/>
            </Is_Logged_In>
          }/>

        </Routes>
    </>
  )
}

export default App
