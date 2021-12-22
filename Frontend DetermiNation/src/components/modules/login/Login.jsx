import React, { useEffect } from "react";
import { useState } from "react";
import {
  Table,
  Button,
  Form,
  Modal,
  FormControl,
  Container,
} from "react-bootstrap";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/style.css";
import Home from "../home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const enter = (e) => {};
  return (
    <>
      <div>
        <body>
          <form class="form-register">
            <h4>Bienvenido</h4>
            <input
              class="controls"
              type="email"
              name="correo"
              id="correo"
              placeholder="Ingrese su correo"
            />
            <input
              class="controls"
              type="password"
              name="correo"
              id="correo"
              placeholder="Ingrese su contraseña"
            />
            <input
              class="botons"
              type="submit"
              onClick={enter}
              value="Entrar"
            />
            <p>
              <a href="#" onClick={handleShow}>
                Registrate!
              </a>
            </p>
          </form>
        </body>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            class="controls"
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Ingrese su nombre completo"
          />
          <input
            class="controls"
            type="text"
            name="apellidos"
            id="apellidos"
            placeholder="Ingrese sus apellidos"
          />
          <input
            class="controls"
            type="email"
            name="correo"
            id="correo"
            placeholder="Ingrese su correo"
          />
          <input
            class="controls"
            type="password"
            name="correo"
            id="correo"
            placeholder="Ingrese su contraseña"
          />
          <p>
            Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Home" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Login;
