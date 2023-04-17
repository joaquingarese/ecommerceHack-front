import React from "react";
import "./styles/finishedPurchase.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { IoArrowBackSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function FinishedPurchase() {
  const order = useSelector((state) => state.order);
  const animation = { scale: [1.2, 1.0], opacity: 1 };

  const transition = {
    delay: 2,
    duration: 2,
    ease: [0.075, 0.82, 0.165, 1],
    // repeat: Infinity,
    repeatType: "reverse",
  };

  return (
    order && (
      <div id="finishedPurchaseContainer" className="vh-100 d-flex flex-column">
        <div className="header-div">
          <div className="text-container-header">
            <h1 className="text-white fw-bold">Compra Finalizada!</h1>
            <small className="text-secondary-color">
              The Coffee Store -
              <span className="fw-bold text-white">Compra Finalizada!</span>
            </small>
          </div>
        </div>
        <div className="d-flex flex-column m-3 ">
          <div className="my-4">
            <motion.div
              animate={{ scale: [1, 1.5, 1], rotate: [0, 0, 180, -180, 0] }}
              transition={{ duration: 0.5, duration: 0.5 }}
            >
              <GoThumbsup size={50} className="d-block m-auto mt-4" />
            </motion.div>
            <motion.h5
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [0.8, 1.2, 1.0] }}
              transition={{ delay: 0.5 }}
              className="my-4 me-4 text-center"
            >
              Su compra se ha realizado con Exito!!
            </motion.h5>
          </div>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [0.8, 1.2, 1.0] }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center"
          >
            Id de su compra: <strong>{order.id}</strong>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [0.8, 1.2, 1.0] }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="d-flex flex-column align-items-center mt-3"
          >
            <p>Muchas gracias!</p>

            <FaRegHeart className="mx-4 d-block " size={40} />
          </motion.div>
          <Link
            to="/"
            className="text-decoration-none text-dark mt-5 text-center"
          >
            <motion.div
              className="go-home hover-scale container"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [1, 1.2, 1.0] }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <IoArrowBackSharp size={30} className="me-1" />
              <span>Continuar comprando</span>
            </motion.div>
          </Link>
        </div>
      </div>
    )
  );
}

export default FinishedPurchase;
