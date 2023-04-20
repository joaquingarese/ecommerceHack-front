import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import DescriptionModal from "../components/DescriptionModal";
import { IoArrowBackSharp } from "react-icons/io5";
import BeatLoader from "react-spinners/BeatLoader";
import api from "../api/axios";
import "./styles/product.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function Product(props) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const animation = { x: [-40, 70] };
  const transition = {
    delay: 1,
    duration: 2,
    ease: [0.075, 0.82, 0.165, 1],
    repeat: Infinity,
    repeatType: "reverse",
  };

  useEffect(() => {
    const fetchData = async () => {
      const productData = await api.getOneProduct(params.slug);
      setLoading(false);
      setProduct(productData);
    };
    fetchData();
  }, [params.slug]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    toast.success(
      quantity > 1
        ? `Se agregaron ${quantity} unidades de ${product.name} al carrito!`
        : `Se agregó 1 unidad de ${product.name} al carrito!`,
      {
        autoClose: 2000,
        hideProgressBar: true,
        className: "custom-toast",
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  function truncateDescription(description, wordLimit) {
    if (description) {
      const words = description.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ");
      }
      return description;
    }
    return "";
  }

  function goBack() {
    navigate(-1);
  }

  return loading ? (
    <div
      id="pre-product-container"
      className="loader-div d-flex flex-column align-items-center mt-5 mb-3"
    >
      <BeatLoader color="#1a202c" size={30} />
    </div>
  ) : (
    <div id="productContainer">
      <div className="header-div">
        <div className="text-container-header">
          <h1 className="text-white fw-bold ">{product.name}</h1>
          <small className="text-secondary-color"></small>
        </div>
      </div>
      <div className="description-container container py-5">
        <div className="bg-secondary color-bg row  flex-wrap">
          <div className="col-md-4 color-bg d-flex flex-column">
            <div className="img">
              <img
                src={product.photo}
                className="img-size product-image img-fluid mb-4"
                alt="product-image1"
              />
            </div>
          </div>
          <div className="col-md-8 color-bg buy-div h-100">
            <h3 className="text-bold mb-4">{product.name}</h3>
            <div className="description-div">
              <h4 className="fw-bold">Descripción</h4>
              <p className="description-text">
                {truncateDescription(product.description, 60)}
                {product.description &&
                  product.description.split(" ").length > 60 && (
                    <span
                      className="text-primary"
                      onClick={handleShow}
                      style={{ cursor: "pointer" }}
                    >
                      ... Leer mas!
                    </span>
                  )}
              </p>
              <div className="align-items-center">
                <div className="d-flex">
                  <button
                    className="btn btn-outline-secondary mt-auto mb-auto"
                    type="button"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="product-input align-items-center"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-secondary mt-auto mb-auto"
                    type="button"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                  <button
                    className="btn secondary-color-bg text-white fw-bold my-2 ms-4"
                    onClick={handleAddToCart}
                  >
                    Añadir al carrito
                  </button>
                </div>
                <span className="fw-bold me-2 d-block fs-5 mt-3">
                  Precio:&nbsp;&nbsp;&nbsp;
                  <span className="secondary-color ">
                    USD {product.price}
                  </span>{" "}
                </span>
                <p className="mt-2 ">
                  <strong>Stock:</strong>{" "}
                  <span className="fw-bold secondary-color ms-2">
                    {product.stock > 0 ? (
                      product.stock
                    ) : (
                      <span className="text-danger text-decoration-underline ">
                        Sin Stock!
                      </span>
                    )}
                    {product.stock < quantity ? (
                      <p className="text-danger text-decoration-underline ">
                        Stock insuficiente
                      </p>
                    ) : (
                      <></>
                    )}
                  </span>
                </p>
                <p className="mt-2 ">
                  <strong>Categorías:</strong>{" "}
                  <span className="fw-bold secondary-color">
                    Café en granos, Café Saborizados
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="mb-2 mt-3"
          onClick={goBack}
          role="button"
          initial={{ x: 0 }}
          animate={{
            x: [-10, 10, -10],
            transition: { duration: 3, repeat: Infinity, repeatType: "yoyo" },
          }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.1 }}
        >
          <IoArrowBackSharp size={30} className="me-1" />
          <span>Continuar comprando</span>
        </motion.div>
      </div>
      <DescriptionModal
        showModal={showModal}
        handleClose={handleClose}
        handleShow={handleShow}
        product={product}
      />
    </div>
  );
}

export default Product;
