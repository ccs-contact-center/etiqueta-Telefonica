import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader, TabContent } from 'reactstrap'
import icono from '../../assets/img/ImgEtiquetaTelefonica/icono.png'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Imagen corporativa</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col md="1" sm="2" className="centrado-fila ">
              <img
                src={icono}
                style={{ width: 60 }}
                alt="icono.png"
                className="img-fluid  animated rollIn delay-0s"
              />
            </Col>
            <Col md="10" sm="10" className="">
              <p
                style={{ marginBottom: '0px' }}
                className="animated rotateInDownRight delay-1s"
              >
                <b>Imagen corporativaAgente telefónico se encarga de:</b>
              </p>
              <p
                style={{ marginBottom: '0px' }}
                className="animated rotateInDownRight delay-1s"
              >
                Crear un ambiente agradable para el usuario, dejando una buena
                imagen de la empresa.
              </p>
              <br/>
              <p
                style={{ marginBottom: '0px' }}
                className="animated rotateInDownRight delay-2s"
              >
                <b>Responsabilidad</b>.
              </p>
              <p
                style={{ marginBottom: '0px' }}
                className="animated rotateInDownRight delay-2s"
              >
                Seguir los procedimientos del servicio. Garantizar que le
                cliente quede satisfecho.
              </p>
              <br/>
              <p
                style={{ marginBottom: '0px' }}
                className="animated rotateInDownRight delay-3s"
              >
                <b>Herramientas de apoyo.</b>
              </p>
              
              <p
                style={{ marginBottom: '0px' }}
                className="animated rotateInDownRight delay-3s"
              >
                (Jefe de Operación, Supervisores, Capacitación, Calidad ),
                tienen como misión, informar , formar y dar apoyo al agente,
                para alcanzar sus objetivos.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
