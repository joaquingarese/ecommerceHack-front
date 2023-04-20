import "./styles/cart.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../redux/cartReducer";
import { totalPriceCart } from "../redux/priceReducer";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import CartModal from "../components/CartModal";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cart = useSelector((state) => state.cart.cartItems);
  const userToken = useSelector((state) => state.user.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = 0;
  let productPrice = 0;

  function handleIncrement(product) {
    if (product.quantity >= 1) {
      dispatch(
        updateCart({
          productId: product.id,
          quantity: product.quantity + 1,
        })
      );
    } else return;
  }

  function handleDecrement(product) {
    if (product.quantity > 1) {
      dispatch(
        updateCart({
          productId: product.id,
          quantity: product.quantity - 1,
        })
      );
    } else return;
  }

  const handleCheckout = () => {
    let enoughStock = true;
    for (let i = 0; i <= cart.length - 1; i++) {
      if (cart[i].quantity > cart[i].stock) {
        enoughStock = false;
        toast.warning(`Lo sentimos, no contamos con suficiente stock!`, {
          autoClose: 2000,
          hideProgressBar: true,
          className: "custom-toast",
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
    if (cart.length === 0) {
      toast.warning(`Orden vacía.`, {
        autoClose: 2000,
        hideProgressBar: true,
        className: "custom-toast",
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (enoughStock === true) {
      dispatch(totalPriceCart(totalPrice));
      if (!userToken) {
        navigate("/login");
      } else {
        navigate("/checkout");
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  function goHome() {
    navigate("/");
  }

  return (
    <div id="cartContainer">
      <div className="header-div">
        <div className="text">
          <h1>CARRITO</h1>
          <small className="text-secondary-color">
            The Coffee Store -<span className="">Carrito</span>{" "}
          </small>
        </div>
      </div>
      <div className="container mt-5" id="cart-lg">
        <table className="table">
          <thead>
            <tr className="secondary-color-bg text-white border-bottom-none">
              <th scope="col"></th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col text-center">Cantidad</th>
              <th scope="col text-center">Stock</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr className="my-4 py-5">
                <td colSpan="7" className="text-center">
                  <p className="fs-4">El carrito está vacío...</p>
                </td>
              </tr>
            ) : (
              cart.map((product, i) => {
                return (
                  <tr key={i}>
                    <td className="align-middle">
                      <img
                        src={product.photo}
                        alt="Product"
                        className="img-size"
                      />
                    </td>
                    <td className="align-middle">{product.name}</td>
                    <td className="align-middle">
                      USD {product.price}
                      <span className="d-none">
                        {(totalPrice += product.price * product.quantity)}
                        {(productPrice += product.price * product.quantity)}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() => handleDecrement(product)}
                        >
                          -
                        </button>
                        <p className="ms-3 me-3 m-auto">{product.quantity}</p>
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() => handleIncrement(product)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    {product.quantity <= product.stock ? (
                      <td className="ps-4 align-middle">{product.stock}</td>
                    ) : (
                      <AnimatePresence>
                        <motion.div
                          animate={{ scale: [0.8, 1.2, 1.0] }}
                          transition={{ duration: 0.2 }}
                        >
                          <td className="text-danger">
                            <p>
                              Stock insuficiente.{" "}
                              {product.stock > 0 && ` Max: ${product.stock}`}
                            </p>
                          </td>
                        </motion.div>
                      </AnimatePresence>
                    )}
                    <td>
                      <button
                        className="btn rounded-pill mb-2 ps-4 align-middle"
                        onClick={() => handleShow(product)}
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                    <td className="ps-4 align-middle">
                      {productPrice}
                      <span className="d-none">{(productPrice = 0)}</span>
                    </td>
                    <CartModal
                      show={show}
                      handleClose={handleClose}
                      selectedProduct={selectedProduct}
                    />
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        {cart.length > 0 && (
          <div className="d-flex" onClick={() => handleShow()} role="button">
            <span className="text-danger">Vaciar carrito</span>
            <FaRegTrashAlt className="text-danger ms-3" />
          </div>
        )}

        <hr className="w-25 ms-auto mt-5 hr-style" />
        <hr className="w-25 ms-auto border-bottom border-5 bg-dark mt-4 hr-style" />
        <div className="payment-checkout w-100">
          <div className="d-flex justify-content-end fw-bold">
            <p className="d-inline me-5">Total:</p>
            <span>USD {totalPrice}</span>
          </div>
        </div>
        <button
          className="btn secondary-color-bg text-white fw-bold d-block ms-auto me-4"
          onClick={() => {
            handleCheckout();
          }}
        >
          Checkout
        </button>
      </div>
      <div className="container my-5" id="cart-md">
        {cart.length === 0 && (
          <tr>
            <td colSpan="6" className="text-center fs-5">
              El carrito esta vacio!
            </td>
          </tr>
        )}
        {cart.map((product, i) => {
          return (
            <div
              style={{ borderBottom: "1px solid black" }}
              className="product row mt-2"
              key={product.id}
            >
              <div className="col-12 py-2">{product.name}</div>
              <div className="col-8 d-flex align-items-center py-2">
                Stock:
                {product.quantity <= product.stock ? (
                  <span className="ms-5">{product.stock}</span>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      animate={{ scale: [0.8, 1.2, 1.0] }}
                      transition={{ duration: 0.2 }}
                    >
                      <small className="text-danger ms-3">
                        Stock insuficiente.
                        {product.stock > 0 && ` Max: ${product.stock}`}
                      </small>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
              <div className="col-4">
                <div className="d-flex ">
                  <button
                    className="btn btn-outline-secondary ms-auto"
                    type="button"
                    onClick={() => handleDecrement(product)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-outline-secondary ms-3 me-4"
                    type="button"
                    onClick={() => handleIncrement(product)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-12 py-2">
                Cantidad: &nbsp;&nbsp;&nbsp;{product.quantity}
              </div>
              <div className="col-6 py-2">Subtotal:</div>
              <div className="col-6 py-2 text-end pe-4">
                {`USD ${product.price * product.quantity}`}
              </div>
              <div>
                <button
                  id="deleteButtom"
                  className="btn rounded-pill py-3"
                  onClick={() => handleShow(product)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          );
        })}
        <div className="payment-checkout">
          <div className="d-flex justify-content-end fw-bold d-inline">
            <p className="d-inline me-5">Total:</p>
            <span>USD {totalPrice}</span>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex" onClick={() => handleShow()} role="button">
            <span className="text-danger">Vaciar carrito</span>
            <FaRegTrashAlt className="text-danger ms-3" />
          </div>
          <button
            className="btn secondary-color-bg text-white fw-bold  ms-auto me-4"
            onClick={() => {
              handleCheckout();
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      <motion.div
        className="mb-4 mt-3 ms-5 ps-3"
        onClick={goHome}
        role="button"
        initial={{ x: 0 }}
        animate={{
          x: [-10, 10, -10],
          transition: { duration: 3, repeat: Infinity, repeatType: "yoyo" },
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <IoArrowBackSharp size={30} className="me-1" />
        <span>Continuar comprando</span>
      </motion.div>
    </div>
  );
}

export default Cart;
