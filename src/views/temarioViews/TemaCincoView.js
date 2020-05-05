import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,

} from 'reactstrap'
import Atencion from '../../assets/img/ImgEtiquetaTelefonica/atencion-a-clientes-tn.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Lineamientos generales de la Metodología</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="6 centrado-fila">
              <img
                src={Atencion}
                style={{ width: 360 }}
                alt="atencion-a-clientes-tn"
                className="img-fluid bordeImagen  animated zoomInLeft delay-0s "
              />
            </Col>
            <Col xs="6">
              <ul className="animated zoomInRight delay-1s">
                <li>Reformulación o Paráfrasis</li>
                <li>Hacer preguntas (sondear)</li>
                <li>Empatizar</li>
                <li>Refuerzo Positivo</li>
                <li>Silencio</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
