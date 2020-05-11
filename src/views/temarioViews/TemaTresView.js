import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap'
import AscuchaActiva from '../../assets/img/ImgEtiquetaTelefonica/escucha-activa.jpg'
class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>ETIQUETA TELEFÓNICA</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="4" className="">
              <p
                style={{ marginBottom: '0px' }}
                className="text-center animated "
              >
               <b> Ahora, Elaboremos:</b>
              </p>
              <ul
                style={{ marginBottom: '0px' }}
                className="animated"
              >
                <li className="ulImg">Estructura básica de llamada.</li>
                <li>Habilidades necesarias.</li>
                <li>Habilidades técnicas.</li>
              </ul>
            </Col>

            <Col xs="4" className="centrado-fila">
              <img
                src={AscuchaActiva}
                style={{ width: 350 }}
                alt="escucha-activa.jpg"
                className="img-fluid bordeImagen animated  "
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
