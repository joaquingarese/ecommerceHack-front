import "./styles/card.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import { toast } from "react-toastify";

function ProductCard({ product, name, id, price, photo, stock, slug }) {
  const dispatch = useDispatch();
  function handleAddToCart(event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addToCart({ product: product, quantity: 1 }));
    toast.success(`Se añadió una unidad de ${product.name} al carrito!`, {
      autoClose: 2000,
      hideProgressBar: true,
      className: "custom-toast",
      position: toast.POSITION.TOP_CENTER,
    });
    //Añadir hover
  }
  return (
    <Link to={`/producto/${slug}`} className="text-decoration-none col">
      <div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 1.04 }}
          className="product-card shadow  container mb-5 mt-4"
          style={{ width: "18rem" }}
        >
          <img src={photo} className="card-img-top mt-4" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Precio: USD {price}</p>
            <button
              className="card-button btn btn-secondary add-cart-button"
              onClick={handleAddToCart}
            >
              Añadir al carrito
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-cart ms-2 mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

export default ProductCard;
