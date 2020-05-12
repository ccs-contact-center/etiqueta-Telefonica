import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
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
                className="text-center animated fadeInUpBig delay-0s"
              >
                <b> Ahora, Elaboremos:</b>
              </p>
              <ul className="animated fadeInUpBig delay-1s">
                <li className="ulImg">Estructura básica de llamada.</li>
                <li className="ulImg">Habilidades necesarias.</li>
                <li className="ulImg">Habilidades técnicas.</li>
              </ul>
            </Col>

            <Col xs="4" className="centrado-fila">
              <img
                src={AscuchaActiva}
                style={{ width: 350 }}
                alt="escucha-activa.jpg"
                className="img-fluid bordeImagen animated fadeInUpBig delay-2s  "
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
