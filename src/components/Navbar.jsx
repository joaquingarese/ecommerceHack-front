import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./styles/navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userReducer";
import { motion, AnimatePresence } from "framer-motion";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const cart = useSelector((state) => state.cart.cartItems);
  const userToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const totalItems = cart.reduce(
    (accumulator, item) => accumulator + Number(item.quantity),
    0
  );

  const displayCount = totalItems > 9 ? "+9" : totalItems;

  return (
    <Navbar id="navBar" expand="lg" fixed="top" className="p-4">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navStyle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/723/723490.png"
              style={{ height: "25px" }}
              className="me-2"
              alt="logoCofee"
            />
            CoffeHack
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle id="menu" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={"/"} className="navStyle m-lg-auto me-lg-4">
              Inicio
            </Link>
            {!userToken ? (
              <Link to={"/login"} className="navStyle m-lg-auto me-lg-4">
                Iniciar sesión
              </Link>
            ) : (
              <>
                <Link
                  to={"/"}
                  className="navStyle m-lg-auto me-lg-4"
                  onClick={() => dispatch(logout())}
                  style={{ margin: "auto" }}
                >
                  Cerrar sesión
                </Link>
              </>
            )}
            <div className="drop-down d-none d-lg-block me-lg-4">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={
                  <span style={{ color: "white" }}>
                    Otros{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                }
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">
                  <a
                    href="https://ecommerce-admin-three.vercel.app/"
                    className="text-decoration-none text-white m-lg-auto"
                  >
                    <p className="mt-auto mb-auto me-4">Admin</p>
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Link className="text-decoration-none" to="/sobre-nosotros">
                    <span style={{ color: "white" }}>Sobre este proyecto</span>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div id="carticon" className="m-lg-auto">
              <Link to="/carrito" className="navStyle m-lg-auto me-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="white"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                  style={{ margin: "auto" }}
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                {totalItems > 0 && (
                  <AnimatePresence>
                    <motion.span
                      id="cartOrder"
                      className="rounded-pill"
                      key={displayCount}
                      animate={{ rotateY: 360 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {displayCount}
                    </motion.span>
                  </AnimatePresence>
                )}
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
