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
import "../../../css/Inscripciones.css";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const Inscriptions = () => {
  const pulsar = () => {
    console.log("pulsado");
  };
  let btn = document.getElementById("mirar"),
    caja = document.getElementById("boton"),
    contador = 0;
  function cambio() {
    if (contador == 0) {
      //caja.classList.add('azul');
      contador = 1;
    } else {
      //caja.classList.remove('azul');
      contador = 0;
    }
    console.log(contador);
  }
  function enviar() {
    cookies.set("materia", "f", { path: "/" });
    alert(`MAteria: habilidades blandas`);
    window.location.href = "./menu";
  }
  return (
    <div className="table-container">
      <section class="content-header">
        <h1>INSCRIPCIONES ESTUDIENATES</h1>
      </section>
      <div class="box-header with-border">
        <button id="mirar" class="boton" type="button">
          matricular materias
        </button>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th class="titulo">
              <h5>materias disponibles</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="contenido">programación</td>
            <td class="contenido">Estudiante</td>
            <td>
              <Button
                class="boton"
                onClick={() => {
                  pulsar();
                }}
              >
                Inscribir
              </Button>
            </td>
          </tr>
          <tr>
            <td class="contenido">Ingles</td>
            <td class="contenido">Estudiante</td>
            <td>
              <Button
                class="boton"
                id="boton"
                onClick={() => {
                  cambio();
                }}
              >
                Inscribir
              </Button>
            </td>
          </tr>
          <tr>
            <td class="contenido">habilidades blandas</td>
            <td class="contenido">Estudiante</td>
            <td>
              <Button
                class="boton"
                onClick={() => {
                  enviar();
                }}
              >
                Inscribir
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inscriptions;
