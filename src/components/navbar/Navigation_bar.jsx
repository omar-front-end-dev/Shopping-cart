import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { logout } from "../../RTK/Slices/authSlice";
import Swal from 'sweetalert2';

export function Navigation_bar() {
  const isLogin = useSelector(state => state.authReducer.isAuth)
  const dispatch = useDispatch();
  
  

  const handleLogout = () =>{
    Swal.fire({
      title: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Confirm Logout',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'You are logged out',
          dispatch(logout())
        );
      }
    });
  }

  return (
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="position-sticky z-3 top-0 shadow-lg">
        <Container>
          <NavLink className="navbar-brand" to={"/"}>E-commerce</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {isLogin ? <Nav className="ms-auto">
              <NavLink className='fw-bold nav-link' to={"/"}>Home</NavLink>
              <NavLink className='fw-bold nav-link' to={"products"}>Shop</NavLink>
              <NavLink className='fw-bold nav-link' to={"cart"}>Cart</NavLink>
              <button onClick={handleLogout} className='fw-bold btn btn-danger ms-3'>Logout</button>
            </Nav>
            :
            <div className=' d-flex align-items-center ms-auto ms-4'>
              <Link className='fw-bold me-2 btn btn-success' to={"register"}>Register</Link>
              <Link className='fw-bold btn btn-primary' to={"login"}>Login</Link>
            </div>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}





