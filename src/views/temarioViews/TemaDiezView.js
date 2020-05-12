import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Elemetos from '../../assets/img/ImgEtiquetaTelefonica/elemetos.png'

class TemaSeisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>ETIQUETA TELEFÓNICA</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" className="animated zoomIn">
              <h2>
                <b>HABILIDADES TÉCNICAS</b>
              </h2>
            </Col>
            <Col xs="12">
              <p className=" animated zoomIn delay-1s">
                La Comunicación es la transmisión de un mensaje de un emisor a
                un receptor mediante la utilización de un codigo conocido por
                ambos y con un objetivo determinado.
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12" sm="4" md="3">
              <img
                src={Elemetos}
                style={{ width: 260 }}
                alt="icono.png"
                className="img-fluid animated zoomIn delay-2s "
              />
            </Col>
            <Col xs="12" sm="8" md="9" className="animated zoomIn delay-3s">
              <p>
                <b>La voz:</b> elemento fundamental de la comunicación
                telefónica
              </p>
              <p>
                <b>
                  Todo Agente utiliza su voz como medio de trabajo y por tanto
                  la Voz se convierte en un aspecto a cuidar y proteger.
                </b>
              </p>
              <p>
                La voz, bien utilizada es capaz de expresar y transmitir una
                infinidad de emociones, sensaciones y matices diferentes. Esto
                hace el mensaje mas atractivo e impactante para la gente que lo
                escucha.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
