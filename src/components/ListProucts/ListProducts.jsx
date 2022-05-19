import React, { Component } from "react";
import "./../TopBarProducts/TopBarProducts.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import "./ListProducts.css";

const data = [
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  { id: 12365, nombre: "Granola", categoria: "Cereales", precio: 5500 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 6300 },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos", precio: 2000 },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos", precio: 3400},
  
];

class ListProducts extends Component {
  state = {
    data: data,
    form: {
      id: "",
      nombre: "",
      categoria: "",
      precio: "",
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
        lista[contador].precio = dato.precio;
        lista[contador].categoria = dato.categoria;
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
        <div className="TopBarProducts">
          <div className="wrapper-buttons">
            <button
              className="button-new"
              onClick={() => this.mostrarModalInsertar()}
            >
              <svg
                className="svg-add"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
              >
                <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19Z" />
              </svg>
              <h2 className="h2New">New</h2>
            </button>
          </div>

          <div className="wrapper-h1">
            <h1 className="h1-title">Manage Products</h1>
          </div>

          <div className="wrapper-search">
            <input
              className="input-search"
              type="search"
              placeholder="&#xF004; Search..."
            />
          </div>
        </div>

        <div className="ListProducts">
          <container className="containerProducts">
            <table className="tableProducts">
              <tr className="headerTableProducts">
                <th className="subtitle-list">ID</th>
                <th className="subtitle-list">NOMBRE</th>
                <th className="subtitle-list">PRECIO</th>
                <th className="subtitle-list">CATEGORIA</th>
                <th className="subtitle-list">ACTIONS</th>
              </tr>
              {this.state.data.map((elemento) => (
                <tr className="contenttableProducts">
                  <td className="content-table">{elemento.id}</td>
                  <td className="content-table">{elemento.nombre}</td>
                  <td className="content-table">{elemento.precio}</td>
                  <td className="content-table">{elemento.categoria}</td>
                  {/* <td>{elemento.id}</td> */}
                  <td className="containerbuttons">
                    <button className="buttonedit" onClick={() => this.mostrarModalEditar(elemento)}>
                      Editar
                    </button>
                    <button className="buttondelete" onClick={() => this.eliminar(elemento)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </container>

          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
              <div>
                <h3>Insertar registro</h3>
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
                <label>Precio: </label>
                <input
                  className="form-control"
                  name="precio"
                  type="float"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Categoria: </label>
                <input
                  className="form-control"
                  name="categoria"
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
                <label>Precio: </label>
                <input
                  className="form-control"
                  name="precio"
                  type="float"
                  onChange={this.handleChange}
                  value={this.state.form.precio}
                />
              </FormGroup>

              <FormGroup>
                <label>Categoria: </label>
                <input
                  className="form-control"
                  name="categoria"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.categoria}
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

export default ListProducts;
