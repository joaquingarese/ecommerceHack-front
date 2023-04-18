import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../api/axios";
import { setToken } from "../redux/userReducer";
import "./styles/login.css";

function Login() {
  //animations
  const [formLoginDisplay, setFormLoginDisplay] = useState("block");
  const [formsignUpDisplay, setFormsignUpDisplay] = useState("none");
  const [loginDisplay, setLoginDisplay] = useState("none");
  const [signUpDisplay, setSignUpDisplay] = useState("block");
  const [x, setX] = useState(0);
  const [singUpopacity, setSingUpopacity] = useState(1);
  const [loginOpacity, setLoginOpacity] = useState(0);
  const [message, setMessage] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginClick = () => {
    setSingUpopacity(1);
    setX(10);
    setLoginOpacity(0);
    setLoginDisplay("block");
    setFormLoginDisplay("block");
    setSignUpDisplay("block");
    setFormsignUpDisplay("none");
  };

  const singupClick = () => {
    setSingUpopacity(0);
    setX(-10);
    setLoginOpacity(1);
    setFormLoginDisplay("none");
    setLoginDisplay("none");
    setSignUpDisplay("block");
    setFormsignUpDisplay("block");
  };
  const authenticate = async () => {
    try {
      const token = await api.login({ email, password });
      dispatch(setToken(token));

      navigate(-1);
    } catch (error) {
      setMessage("Credenciales incorrectas");
      console.log("error", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticate();
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await api.register({
      firstnameReg,
      lastnameReg,
      emailReg,
      passwordReg,
    });
    window.location.reload();
    return;
  };

  return (
    <>
      <div id="loginContainer" className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          id="container"
          className="shadow-lg"
          style={{ overflow: "hidden" }}
        >
          <motion.div
            id="login"
            animate={{ opacity: singUpopacity }}
            transition={{ duration: 1 }}
            style={{ display: `${formLoginDisplay}` }}
          >
            <motion.h3>Nos alegra que hayas vuelto</motion.h3>
            <form onSubmit={handleSubmit} className="ms-2">
              <label htmlFor="email">
                Ingresa tu Correo electrónico o nombre de usuario
              </label>
              <input
                type="text"
                name="email"
                className="form-control mt-1"
                placeholder="alan@brito.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label htmlFor="password" className="mt-3">
                Ingresa tu contraseña
              </label>
              <input
                type="password"
                name="password"
                className="form-control mt-1 "
                placeholder="123"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {message && <p className="text-danger mt-3 mb-0">{message}</p>}
              <button className=" btn btn-secondary mt-3">
                Iniciar sesión
              </button>
            </form>
            <a
              href="https://ecommerce-hack-admin.vercel.app/"
              className="text-decoration-none text-white"
            >
              <button className=" btn btn-secondary mt-3 ms-2">Admin</button>
            </a>

            <motion.span id="loginResponsive" className="text-dark mt-5">
              Todavía no tenes cuenta?
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={singupClick}
                >
                  Create una
                </motion.button>
              </div>
            </motion.span>
          </motion.div>
          <motion.div
            animate={{ translateX: x }}
            transition={{
              duration: 1,
              ease: [0, 1.2, 1, 1.01],
            }}
            id="curtain"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: singUpopacity }}
              style={{ display: `${signUpDisplay}` }}
              transition={{ duration: 0 }}
              className="curtainText"
            >
              <motion.span className="text">
                Todavía no tenes cuenta?
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={singupClick}
                >
                  Create una!
                </motion.button>
              </motion.span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              transition={{ duration: 0 }}
              style={{ display: `${loginDisplay}` }}
              className="text d-block"
              animate={{ opacity: loginOpacity }}
            >
              Ya tenes una cuenta?
              <motion.button whileHover={{ scale: 1.1 }} onClick={loginClick}>
                Inicia sesión!
              </motion.button>
            </motion.span>
          </motion.div>
          <motion.div
            id="signUp"
            animate={{ opacity: loginOpacity }}
            transition={{ duration: 1 }}
            style={{ display: `${formsignUpDisplay}` }}
          >
            <h4>Bienvenido a Hack coffee!</h4>
            <form>
              <label htmlFor="firstnameReg" className="mt-3">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                name="firstnameReg"
                id="firstnameReg"
                value={firstnameReg}
                onChange={(e) => setFirstnameReg(e.target.value)}
              />

              <label htmlFor="lastnameReg mt-3" className="mt-3">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                name="lastnameReg"
                id="lastnameReg"
                value={lastnameReg}
                onChange={(e) => setLastnameReg(e.target.value)}
              />

              <label htmlFor="emailReg" className="mt-3">
                Correo electrónico
              </label>
              <input
                type="email"
                name="emailReg"
                id="emailReg"
                className="form-control mt-1"
                placeholder="maria.perez@gmail.com"
                value={emailReg}
                onChange={(e) => setEmailReg(e.target.value)}
              />

              <label htmlFor="phoneReg" className="mt-3">
                Número de teléfono
              </label>
              <input
                type="number"
                name="phoneReg"
                id="phoneReg"
                className="form-control mt-1"
                placeholder="xxx.."
                value={phoneReg}
                onChange={(e) => setPhoneReg(e.target.value)}
              />

              <label htmlFor="password" className="mt-3">
                Contraseña
              </label>
              <input
                type="password"
                name="passwordReg"
                id="passwordReg"
                className="form-control mt-1"
                placeholder="Contraseña"
                value={passwordReg}
                onChange={(e) => setPasswordReg(e.target.value)}
              />
              <button
                className=" btn btn-secondary mt-3"
                onClick={handleRegister}
              >
                Crear cuenta!
              </button>
            </form>
            <motion.span id="signupResponsive" className="mt-5">
              Ya tenes una cuenta?
              <div>
                <motion.button whileHover={{ scale: 1.1 }} onClick={loginClick}>
                  inicia sesión!
                </motion.button>
              </div>
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
