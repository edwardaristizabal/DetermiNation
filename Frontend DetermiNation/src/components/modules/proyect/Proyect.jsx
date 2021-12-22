import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useHistory } from "react-router";
import {
  Table,
  Button,
  Form,
  Navbar,
  FormControl,
  Container,
} from "react-bootstrap";

const Proyects = () => {
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
  };

  const addproyect = (e) => {
    e.preventDefault();
  };

  return (
    <div className="table container">
      <section class="content-header">
        <h1>Gestión de Proyectos</h1>
        <ol class="breadcrumb">
          <li>
            <a href="home">
              <i class="fa fa-dashboard"></i> Inicio
            </a>
          </li>

          <li class="active">Proyectos</li>
        </ol>
      </section>
      <div class="box-header with-border">
        <button onClick={addproyect} type="button" class="btn btn-danger">
          Agregar proyecto
        </button>
      </div>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Filtro</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Container fluid>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="ID Venta / DNI / Nombre proyecto"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Ir</Button>
              </Form>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Presupuesto</th>
            <th scope="col">Inicio</th>
            <th scope="col">Fin</th>
            <th scope="col">Lider</th>
            <th scope="col">Estado</th>
            <th scope="col">Fase</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Phyton 3 </td>
            <td>200000</td>
            <td>2021-02-21</td>
            <td>2021-11-25</td>
            <td>Maria Perez</td>
            <td>Activo</td>
            <td>Terminado</td>
            <td>
              <Button onClick={submit} variant="secondary">
                Editar
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <Switch></Switch>
    </div>
  );
};

export default Proyects;
