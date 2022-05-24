import React, { Component } from "react";
import TopBarProviders from "../TopBarProviders/TopBarProviders";
import "./../TopBarProviders/TopBarProviders.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import "./ListProviders.css";

const data = [
  { id: 12365, nombre: "Incauca", ciudad: "Medellín", experiencia: 20, negocio: "azucar"},
  { id: 55267, nombre: "Harina Pan", ciudad: "Bogotá", experiencia: 35, negocio: "harina"},
  { id: 29780, nombre: "Alpina", ciudad: "Bucaramanga", experiencia: 60, negocio: "leche"},
  { id: 12385, nombre: "Incauca", ciudad: "Medellín", experiencia: 20, negocio: "azucar"},
  { id: 55267, nombre: "Harina Pan", ciudad: "Bogotá", experiencia: 35, negocio: "harina"},
  { id: 29490, nombre: "Alpina", ciudad: "Bucaramanga", experiencia: 60, negocio: "leche"},
  { id: 12365, nombre: "Incauca", ciudad: "Medellín", experiencia: 20, negocio: "azucar"},
  { id: 55207, nombre: "Harina Pan", ciudad: "Bogotá", experiencia: 35, negocio: "harina"},
  { id: 27480, nombre: "Alpina", ciudad: "Bucaramanga", experiencia: 60, negocio: "leche"},
  { id: 12365, nombre: "Incauca", ciudad: "Medellín", experiencia: 20, negocio: "azucar"},
  { id: 55267, nombre: "Harina Pan", ciudad: "Bogotá", experiencia: 35, negocio: "harina"},
  { id: 28480, nombre: "Alpina", ciudad: "Bucaramanga", experiencia: 60, negocio: "leche"},
  { id: 12365, nombre: "Incauca", ciudad: "Medellín", experiencia: 20, negocio: "azucar"},
  { id: 55967, nombre: "Harina Pan", ciudad: "Bogotá", experiencia: 35, negocio: "harina"},
  { id: 29480, nombre: "Alpina", ciudad: "Bucaramanga", experiencia: 60, negocio: "leche"},

];

class ListProviders extends Component {
  state = {
    data: data,
    form: {
      id: "",
      nombre: "",
      ciudad: "",
      experiencia: "",
      negocio: "",
    },
    modalInsertar: false,
    modalEditar: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };

  ocultarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  mostrarModalEditar = (registro) => {
    this.setState({ modalEditar: true, form: registro });
  };

  ocultarModalEditar = () => {
    this.setState({ modalEditar: false });
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista, modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var lista = this.state.data;
    lista.map((registro) => {
      if (dato.id == registro.id) {
        lista[contador].nombre = dato.nombre;
        lista[contador].experiencia = dato.experiencia;
        lista[contador].ciudad = dato.ciudad;
        lista[contador].negocio = dato.negocio;
      }
      contador++;
    });
    this.setState({ data: lista, modalEditar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("¿Desea eliminar el registro " + dato.id + "?");
    if (opcion) {
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if (registro.id == dato.id) {
          lista.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: lista });
    }
  };
  render() {
    return (
      <>
      <TopBarProviders/>


        <div className="ListProviders">
          <div className="containerProviders">
            <table className="tableProviders">
              <tr className="headerTableProviders">
                <th className="subtitle-list">ID</th>
                <th className="subtitle-list">NOMBRE</th>
                <th className="subtitle-list">EXPERIENCIA</th>
                <th className="subtitle-list">CIUDAD</th>
                <th className="subtitle-list">PRODUCTO</th>
                <th className="subtitle-list">ACTIONS</th>
              </tr>
              {this.state.data.map((elemento) => (
                <tr className="contenttableProviders">
                  <td className="content-table">{elemento.id}</td>
                  <td className="content-table">{elemento.nombre}</td>
                  <td className="content-table">{elemento.experiencia} años</td>
                  <td className="content-table">{elemento.ciudad}</td>
                  <td className="content-table">{elemento.negocio}</td>
                  {/* <td>{elemento.id}</td> */}
                  <td className="containerbuttons">
                    <button
                      className="buttonedit"
                      onClick={() => this.mostrarModalEditar(elemento)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                      >
                        <path d="M10.15 20.7 14.025 16.825H21.95V20.7ZM3.95 18.825H5.25L15.275 8.85L14.6 8.175L13.925 7.5L3.95 17.525ZM2.075 20.7V16.725L15.275 3.55Q15.8 3 16.587 3Q17.375 3 17.925 3.55L19.225 4.9Q19.775 5.425 19.775 6.2Q19.775 6.975 19.225 7.5L6.05 20.7ZM17.9 6.2 16.575 4.875ZM15.275 8.85 14.6 8.175 13.925 7.5 15.275 8.85Z" />
                      </svg>
                    </button>
                    <button
                      className="buttondelete"
                      onClick={() => this.eliminar(elemento)}
                    >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                      >
                        <path d="M7.95 19.05H16.075Q16.075 19.05 16.075 19.05Q16.075 19.05 16.075 19.05V8.925H7.95V19.05Q7.95 19.05 7.95 19.05Q7.95 19.05 7.95 19.05ZM5.075 5.925V4.05H8.525L9.525 3.05H14.475L15.475 4.05H18.95V5.925ZM7.95 20.925Q7.175 20.925 6.625 20.375Q6.075 19.825 6.075 19.05V7.05H17.95V19.05Q17.95 19.825 17.387 20.375Q16.825 20.925 16.075 20.925ZM7.95 19.05H16.075Q16.075 19.05 16.075 19.05Q16.075 19.05 16.075 19.05H7.95Q7.95 19.05 7.95 19.05Q7.95 19.05 7.95 19.05Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>

          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
              <div>
                <h3>Insertar proveedor</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>Id: </label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.data.length + 1}
                />
              </FormGroup>

              <FormGroup>
                <label>Nombre: </label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>experiencia: </label>
                <input
                  className="form-control"
                  name="experiencia"
                  type="float"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>ciudad: </label>
                <input
                  className="form-control"
                  name="ciudad"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>producto: </label>
                <input
                  className="form-control"
                  name="negocio"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button onClick={() => this.insertar()}>Insertar</Button>
              <Button onClick={() => this.ocultarModalInsertar()}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEditar}>
            <ModalHeader>
              <div>
                <h3>Editar registro</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>Id: </label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.id}
                />
              </FormGroup>

              <FormGroup>
                <label>Nombre: </label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.nombre}
                />
              </FormGroup>

              <FormGroup>
                <label>experiencia: </label>
                <input
                  className="form-control"
                  name="experiencia"
                  type="float"
                  onChange={this.handleChange}
                  value={this.state.form.experiencia}
                />
              </FormGroup>

              <FormGroup>
                <label>ciudad: </label>
                <input
                  className="form-control"
                  name="ciudad"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.ciudad}
                />
              </FormGroup>
              <FormGroup>
                <label>producto: </label>
                <input
                  className="form-control"
                  name="negocio"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.negocio}
                />
              </FormGroup>
              
            </ModalBody>

            <ModalFooter>
              <Button onClick={() => this.editar(this.state.form)}>
                Editar
              </Button>
              <Button onClick={() => this.ocultarModalEditar()}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}

export default ListProviders;
