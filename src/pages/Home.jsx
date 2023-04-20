import "./styles/home.css";
import CategoryTabs from "../components/CategoryTabs";
import api from "../api/axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const cart = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const fetchData = async () => {
    const products = await api.getProducts();
    setLoading(false);
    setProducts(products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="homeContainer">
      {cart.length > 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          // fill="red"
          className="bi bi-cart3 fixed-cart d-lg-none m-4"
          viewBox="0 0 16 16"
          onClick={() => navigate("/carrito")}
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      )}

      <div className="hero d-flex justify-content-center">
        <video
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop
          data-video-player-target="player"
          className="plyr__video object-fit-cover"
        >
          <source
            src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/pexels-kelly-2909914-2048x1080-24fps.mp4"
            // src="https://static.vecteezy.com/system/resources/previews/010/309/814/mp4/slow-motion-of-roasted-coffee-beans-falling-organic-coffee-seeds-free-video.mp4"
            type="video/mp4"
          />
          <source
            src="https://static.vecteezy.com/system/resources/previews/010/309/814/slow-motion-of-roasted-coffee-beans-falling-organic-coffee-seeds-free-video.webmm"
            type="video/webm"
          />
        </video>
        <div className="align-self-center px-4 py-5 position-absolute">
          <h1 className=" display-3 fw-bold text-center hero-title">
            Bienvenidos a CoffeHack!
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className=" text-center lead mb-4 hero-title fs-3">
              Sabor en cada taza <br />
            </p>
          </div>
          <motion.div
            initial={{ y: "-100%", right: 0 }}
            animate={{ y: "100%", right: 0 }}
            transition={{ duration: 4, ease: "linear" }}
            style={{ position: "fixed" }}
          >
            <div className="fixed-label">
              <Link to="/sobre-nosotros">
                <span className="vertical-text">Sobre nosotros</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            id="goToProductsCR"
            initial={{ scale: 0.6, y: 800 }}
            animate={{ scale: 1.2, y: 0 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.0 }}
          >
            <a id="goToProducts" href="#products">
              Conoce nuestros productos <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                className="bi bi-arrow-down-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
      <section className="subtitle-container h2">
        <p id="products" className="lead mb-4 text-center fs-5 subtitle-1">
          Productos de CoffeHack
        </p>
        <h2 className="display-3 fw-bold text-center fs-1 mb-5">
          ELIGE TU PRODUCTO FAVORITO
        </h2>
      </section>
      <section className="products container">
        {loading ? (
          <div className="d-flex flex-column align-items-center mt-5 mb-5">
            <BeatLoader color="#1a202c" size={30} />
          </div>
        ) : (
          <CategoryTabs />
        )}
      </section>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{ borderTopColor: "#CCC" }}
        >
          <section id="infoSection">
            <div className="container p-4">
              <div className="row">
                <motion.div
                  animate={false}
                  className="col-12  col-md-6"
                  id="right-col"
                >
                  <h4 id="infoTitle">SHOP ONLINE</h4>
                  <p className="infoText text-light">
                    14 variedades de cafés del mundo, para que vivas la
                    experiencia única de viajar con tus sentidos 4 intensidades
                    de cápsulas. <br />
                    SUAVE – MEDIO – FUERTE – DECAF <br />6 variedades de tés en
                    hebras, blends únicos para deleitarte con los más ricos
                    sabores.
                  </p>
                </motion.div>
                <hr id="sectionHr" />
                <div className="col-12 col-md-6" id="infoContainer">
                  <div className="me-4">
                    <div className="infoBox ">
                      <img
                        src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/capsulasIcon.png"
                        alt=""
                      />
                      <h6 className="boxTitle">Cápsulas</h6>
                      <p className="infoText">
                        Conoce nuestras variedades de cápsulas elaboradas con el
                        mejor café Arábigo para que puedas disfrutar en casa.
                      </p>
                    </div>
                    <div className="infoBox">
                      <img
                        src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/granosIcon.png"
                        alt=""
                      />
                      <h6 className="boxTitle">Café en grano</h6>
                      <p className="infoText">
                        Café en grano o molido listos para disfrutar. Clásicos,
                        Especiales, Saborizados y Descafeinados.
                      </p>
                    </div>
                  </div>
                  <div className="infoBox">
                    <div className="infoBox ">
                      <img
                        src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/sucursalesIcon.png"
                        alt=""
                      />
                      <h6 className="boxTitle">Sucursales</h6>
                      <p className="infoText">
                        Hack coffee no cuenta con sucursales en nignun lado.
                      </p>
                    </div>
                    <div className="infoBox botRight">
                      <img
                        src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/deliveryIcon.png"
                        alt=""
                      />
                      <h6 className="boxTitle">Delivery</h6>
                      <p className="infoText">
                        Lleva la experiencia THECOFFEESTORE a tu casa con tu app
                        de delivery favorita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
