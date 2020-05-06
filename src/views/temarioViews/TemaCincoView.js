import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Atencion from '../../assets/img/ImgEtiquetaTelefonica/atencion-a-clientes-tn.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>GESTIÓN DE SILENCIOS</h3>
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
              <p>
                Visión más amplia de las posibilidades existentes de un ambiente
                para resolver determinada situación.
              </p>
              <p>Manejo de silencios durante la llamada.</p>
              <p>
                El uso del “Hold”, recomendación, retomar la llamada en un lapso
                de 30 a 45 segundos.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
