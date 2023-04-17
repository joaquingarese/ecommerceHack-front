import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartReducer";
import { totalPriceCart } from "../redux/priceReducer";
import { lastOrder } from "../redux/orderReducer";
import { FaPaypal } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import BeatLoader from "react-spinners/BeatLoader";
import "./styles/checkout.css";
import axios from "axios";

function Checkout() {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const navigate = useNavigate();
  const price = useSelector((state) => state.price);
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.user.token);

  const handlePaymentMethodChange = (event) => {
    setMensaje("");
    setPaymentMethod(event.target.value);
  };

  const handleFinishPurchase = () => {
    if (paymentMethod === "") {
      return setMensaje("Debe seleccionar un metodo de pago.");
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/detalles-de-compra");
      dispatch(clearCart());
      dispatch(totalPriceCart(0));
    }, 2000);
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_SERVER_DOMAIN}/orders`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        products: cart.cartItems,
        address: shippingAddress,
      },
    });
    dispatch(lastOrder(response.data));
    handleFinishPurchase();
    return response.data;
  };

  return (
    <div id="checkoutContainer">
      <div className="header-div">
        <div className="text-container-header">
          <div className="container">
            <h1 className="text-white fw-bold">CHECKOUT</h1>
            <small className="text-secondary-color">
              The Coffee Store -{" "}
              <span className="fw-bold text-white">Checkout</span>{" "}
            </small>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="payment-checkout mt-4 m-auto d-flex flex-column">
          <div className="d-flex justify-content-between fw-bold my-3"></div>
          <h5 className="mb-4 fw-bold">Resumen de su compra</h5>
          <div className="purchase-bg px-5 py-4 ">
            <h5 className=" mb-4 text-decoration-underline">
              Lista de Productos:
            </h5>
            {cart.cartItems.map((product, i) => {
              return (
                <div key={i}>
                  <div className="d-flex text-muted">
                    <span className="product-index me-2">{i + 1})</span>
                    <span className="product-name">{product.name}</span>
                    &nbsp;&nbsp;
                    <div className="flex-nowrap ms-auto">
                      <span className="no-wrap">
                        <small>(&nbsp;x {product.quantity}&nbsp;) </small>
                        <small className="fixed-width-price">
                          USD&nbsp;&nbsp;{product.price}
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr className="mt-5 text-muted " />
            <p className="d-flex fs-5">
              Total: <span className="ms-auto">USD&nbsp;&nbsp;{price}</span>
            </p>
          </div>
          <div className="payment-methods mt-4">
            <p className="fs-5 mb-3 fw-bold">Seleccione un método de pago:</p>
            <div className="d-flex flex-column justify-content-between">
              <label>
                <input
                  className="custom-radio m-3"
                  type="radio"
                  name="payment-method"
                  value="paypal"
                  onChange={handlePaymentMethodChange}
                />
                PayPal <FaPaypal size={32} className="ms-2 " />
              </label>
              <label>
                <input
                  className="custom-radio m-3 "
                  type="radio"
                  name="payment-method"
                  value="card"
                  onChange={handlePaymentMethodChange}
                />
                Tarjeta <FaCcVisa size={28} className="ms-3  me-1" />
                <FaCcMastercard size={28} className="me-1" />
              </label>
              <label>
                <input
                  className="custom-radio m-3"
                  type="radio"
                  name="payment-method"
                  value="mercado-pago"
                  onChange={handlePaymentMethodChange}
                />
                Mercado Pago{" "}
                <img
                  src="https://1000marcas.net/wp-content/uploads/2023/01/Mercado-Pago-Logo-2020.png"
                  alt="img Mercado Pago"
                  width="60px"
                  className="d-none d-md-inline"
                />
              </label>
            </div>
          </div>
          {paymentMethod === "paypal" && (
            <div className="mt-5">
              <h4>PayPal Payment</h4>
              <form onSubmit={handleCheckout}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                  {!loading && (
                    <div className="d-flex flex-column align-items-center mt-5 mb-2">
                      <button
                        type="submit"
                        className="btn secondary-color-bg text-white fw-bold my-2"
                        disabled={loading}
                      >
                        Finalizar Compra
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}
          {paymentMethod === "card" && (
            <div className="mt-5">
              <h4>Tarjeta</h4>
              <form onSubmit={handleCheckout}>
                <div className="mb-3">
                  <label htmlFor="cardName" className="form-label">
                    Nombre en la Tarjeta
                  </label>
                  <input type="text" className="form-control" id="cardName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Numero de Tarjeta
                  </label>
                  <input type="text" className="form-control" id="cardNumber" />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="cardExpiry" className="form-label">
                        Fecha de Vencimiento
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardExpiry"
                        placeholder="MM/YY"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="cardCVV" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardCVV"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cardName" className="form-label">
                      Direccion de entrega
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="shippingAddress"
                      value={shippingAddress}
                      onChange={(event) =>
                        setShippingAddress(event.target.value)
                      }
                    />
                  </div>
                  {!loading && (
                    <div className="d-flex flex-column align-items-center mt-5 mb-2">
                      <button
                        type="submit"
                        className="btn secondary-color-bg text-white fw-bold my-2"
                        disabled={loading}
                      >
                        Finalizar Compra
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}
          {paymentMethod === "mercado-pago" && (
            <div className="mt-5">
              <h4>Mercado Pago</h4>
              <form onSubmit={handleCheckout}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                  {!loading && (
                    <div className="d-flex flex-column align-items-center mt-5 mb-2">
                      <button
                        type="submit"
                        className="btn secondary-color-bg text-white fw-bold my-2"
                        disabled={loading}
                      >
                        Finalizar Compra
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>

        <p className="text-danger text-center ">{mensaje}</p>
        {loading && (
          <div className="d-flex flex-column align-items-center mt-5 mb-3">
            <BeatLoader color="#1a202c" size={30} />
            <p>Procesando pagos...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
