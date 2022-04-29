import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Button,
  Table,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import "./ListProducts.css";

const data = [
  { id: 12365, nombre: "Granola", categoria: "Cereales" },
  { id: 29480, nombre: "Tostacos", categoria: "Mekatos" },
  { id: 36051, nombre: "Jugo de uva", categoria: "Bebidas" },
  { id: 49482, nombre: "Nuggets milo", categoria: "Dulces" },
  { id: 55267, nombre: "Almendras", categoria: "Frutos secos" },
  { id: 69472, nombre: "Soya Pack", categoria: "Bebidas" },
];

class ListProducts extends Component {
  state = {
    data: data,
    form: {
      id: "",
      nombre: "",
      categoria: "",
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
      <div className="ListProducts">
        <Container>
          <br />
          <Button onClick={() => this.mostrarModalInsertar()}>New</Button>

          <Table>
            <tHead>
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>categoria</th>
                {/* <th>Acciones</th> */}
              </tr>
            </tHead>
            <tBody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.nombre}</td>
                  <td>{elemento.categoria}</td>
                  {/* <td>{elemento.id}</td> */}
                  <td>
                    <Button onClick={() => this.mostrarModalEditar(elemento)}>
                      Editar
                    </Button>
                    <Button onClick={() => this.eliminar(elemento)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tBody>
          </Table>
        </Container>

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
              <label>nombre: </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
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
            <Button onClick={() => this.editar(this.state.form)}>Editar</Button>
            <Button onClick={() => this.ocultarModalEditar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
        {/* <table class="table-products">
          <thead>
            <tr>
              <th>
                <div>checkbox</div>
              </th>
              <th>
                <div>Code</div>
              </th>
              <th>
                <div>Name</div>
              </th>
              <th>
                <div>Image</div>
              </th>
              <th>
                <div>Price</div>
              </th>
              <th>
                <div>Category</div>
              </th>
              <th>
                <div>Weight</div>
              </th>
              <th>
                <div>status</div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Historia de dos ciudades</td>

              <td>Charles Dickens</td>

              <td>1859</td>

              <td>200</td>
            </tr>

            <tr>
              <td>El señor de los anillos</td>

              <td>J. R. R. Tolkien</td>

              <td>1954-1955</td>

              <td>150</td>
            </tr>

            <tr>
              <td>El principito</td>

              <td>Antoine de Saint-Exupéry</td>

              <td>1943</td>

              <td>140</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default ListProducts;
