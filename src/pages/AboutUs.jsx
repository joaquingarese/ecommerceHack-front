import React from "react";
import "./styles/aboutUs.css";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <div id="aboutUsContainer">
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
            src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/pexels-bedrijfsfilmspecialistnl-2887463-1920x1080-25fps.mp4"
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
            Sobre nosotros
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="text-center lead mb-4 hero-title fs-5">
              Bienvenidos!, en esta sección presentaremos las tecnologías que
              utilizamos, nuestro tiempo de trabajo y los miembros de nuestro
              equipo. <br />
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row" id="boxContainer">
          <div className="col">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center shadow boxBorder infoCard"
            >
              <h3>Duración</h3>
              <p className="p-3 textBox">
                El proyecto fue desarrollado en 3 semanas, durante el mes de
                marzo del 2023. El mismo se dividido en Sprints de una semana de
                duración.
              </p>
            </motion.div>
          </div>
          <div className="col">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center shadow boxBorder infoCard"
            >
              <h3>Tecnologías</h3>
              <p className="p-3 textBox">
                Para el Front-End del sitio se desarrolló una aplicación en
                React (usando Create-React-App) mientras que para el Back-End se
                desarrolló una REST API hecha con Node.js, Express, MongoDb
                Compass y Git/GitHub.
              </p>
            </motion.div>
          </div>
          <div className="col">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center shadow boxBorder infoCard"
            >
              <h3>División de tareas</h3>
              <p className="p-3 textBox">
                Para la organización de tareas durante el proyecto se utilizó
                Trello. Esto permitió que cada integrante del equipo estuviese
                permanentemente al tanto del estado del proyecto así como de las
                tareas que debía realizar.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container teamSection my-4">
        <div className="row shadow team">
          <div className="col-12 col-md-6 teamText">
            <h2>Equipo</h2>
            <p>
              Durante las últimas tres semanas, nuestro equipo ha estado
              trabajando incansablemente en un proyecto desafiante. Juntos,
              hemos enfrentado cada obstáculo y hemos superado cada desafío que
              se nos ha presentado. Nuestro equipo ha demostrado una excelente
              comunicación y colaboración. Estamos muy orgullosos del trabajo
              que hemos realizado y del equipo que hemos construido en el
              proceso.
            </p>
          </div>
          <img
            className="teamWork-img col-12 col-md-6 "
            src="https://img.freepik.com/free-vector/team-programmers-working-program-code-with-laptops-teamwork-male-female-professional-testers-coders-flat-vector-illustration-software-development-programming-lesson-concept_74855-22051.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="container my-4">
        <div className="row ">
          <div className="col-12 col-md-5 col-lg-2 card teamCard shadow">
            <img
              src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/Nicolas.png"
              className="card-img-top cardImage "
              alt="..."
            />
            <div className="card-body ">
              <h5>Nicolas Hintz</h5>
              <p className="textBox textBoxColor">Full Stack Developer/Jr</p>
              <p className="card-text textBox">
                Soy estudiante de desarrollo de software, trabaje en el área
                financiera de una empresa de seguros norteamericana en una
                posición de liderazgo que me permitió aprender mucho de la
                gestión de equipos de trabajo . Además de mi interés en la
                tecnología y la informática, también disfruto del deporte y de
                la música.
              </p>
              <svg
                xmlns="https://avatars.githubusercontent.com/u/95639320?v=4"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
          <div className="col-12  col-md-5 col-lg-2 card teamCard shadow">
            <img
              src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/Cristian.png"
              className="card-img-top cardImage"
              alt="..."
            />
            <div className="card-body">
              <h5>Cristian Ramirez</h5>
              <p className="textBox textBoxColor">Full Stack Developer/Jr</p>
              <p className="card-text textBox">
                Estudiante de Desarrollo de Software y Psicólogo. Apasionado por
                la tecnología, encontré en el campo de TI un nuevo desafío que
                me motiva a aprender cada día más. A lo largo de mi recorrido
                laboral he aprendido a analizar problemas complejos desde
                múltiples perspectivas y trabajar de manera cooperativa en
                ambientes de constante cambio e innovación.
              </p>
              <svg
                xmlns="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-2 card teamCard shadow">
            <img
              src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/Jose.png"
              className="card-img-top cardImage "
              alt="..."
            />
            <div className="card-body">
              <h5>José Machicote</h5>
              <p className="textBox textBoxColor">Full Stack Developer/Jr</p>
              <p className="card-text textBox">
                Soy un estudiante de desarrollo de software entusasimado por el
                mundo de la tecnología. He tenido la oportunidad de trabajar en
                áreas muy diferentes como el agro y la enseñanza de música, lo
                que me ha enseñado a trabajar con diferentes tipos de personas y
                adaptarme a diferentes situaciones.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-2 card teamCard shadow">
            <img
              src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/Joaquin.png"
              className="card-img-top cardImage"
              alt="..."
            />
            <div className="card-body">
              <h5>Joaquin Garese</h5>
              <p className="textBox textBoxColor">Full Stack Developer/Jr</p>
              <p className="card-text textBox">
                Recientemente, decidí hacer un cambio y dedicarme a estudiar
                programación, área que siempre me fue de gran interes e intriga.
                Fui, además, estudiante de Agronomía y viví en Nueva Zelanda e
                Irlanda, donde trabajé en varios rubros. Desde 2016, junto a un
                amigo y socio, he dirigido un restaurante de hamburguesas
                artesanales, una impresionante experiencia.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-2 card teamCard shadow">
            <img
              src="https://iazyuszdrivuimeywxju.supabase.co/storage/v1/object/public/images/Pedro.png"
              className="card-img-top cardImage"
              alt="..."
            />
            <div className=" card-body">
              <h5>Pedro Negrin</h5>
              <p className="textBox textBoxColor">Full Stack Developer/Jr</p>
              <p className="card-text textBox">
                Soy un desarrollador web entusiasta buscando oportunidades para
                comenzar mi carrera profesional en el desarrollo web. Aunque no
                tengo experiencia laboral previa en este campo, he estado
                trabajando mucho para desarrollar mis habilidades en
                programación y diseño de sitios web.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
