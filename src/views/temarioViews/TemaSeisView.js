import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import Habilidades from '../../assets/img/ImgEtiquetaTelefonica/HABILIDADES.png'

class TemaSeisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>EMPATÍA</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="10" className="centrado-fila">
              <div style={{ width: '200px' }} className="borderCaja">
                <p className="">
                  <b className="text-danger">Personalizar.</b>
                  <br />
                </p>
                <p className="text-center">
                  Mencionando el nombre o titulo del cliente por lo menos en
                  tres ocasiones.
                </p>
              </div>
            </Col>
            <Col xs="10" className="mt-3">
              <div style={{ width: '200px' }} className="borderCaja">
                <p className="">
                  <b className="text-danger">Evita frases negativas.</b>
                  <br />
                </p>
                <p className="text-center">
                  “No tenemos…”, no tenemos… Ya que estas pueden ser sustituidas
                  con frases como “por el momento solo contamos con… ”.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-3">
            <Col xs="6" sm="4" md="4" className="centrado-fila">
              <div
                style={{ width: '200px' }}
                className="borderCaja float-right"
              >
                <p className="">
                  <b className="text-danger">La voz.</b>
                  <br />
                </p>
                <p className="text-center">
                  Nuestra voz, en de suma importancia, ya que el impacto que
                  posee en el cliente de un 85% del efecto de la comunicación
                  total.
                </p>
                <p className="">
                  <b className="text-danger">El volumen de la voz debe ser. </b>
                  <br />
                </p>
                <ul>
                  <li>Firme.</li>
                  <li>Sin gritar.</li>
                  <li>Ni hablar muy bajo ya que denota inseguridad. </li>
                </ul>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <img
                src={Habilidades}
                style={{ width: 360 }}
                alt="Habilidades.png"
                className="img-fluid bordeImagen animated lightSpeedIn delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
