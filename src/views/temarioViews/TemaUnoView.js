import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import actitudPositiva from '../../assets/img/ImgEtiquetaTelefonica/actitudPositiva.jpg'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> ETIQUETA TELEFÓNICA</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <p
                className="animated slideInUp mb-2"
                style={{ marginBottom: '0px' }}
              >
                Empecemos por saber primeramente…
              </p>
              <h2
                className="animated slideInUp text-center mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>¿Qué es la Etiqueta Telefónica?</b>
              </h2>
              <p className="animated slideInUp">
                Es un código de cortesía que se utiliza desde los inicios de los
                call centers con el fin de ordenar el discurso de los agentes y
                ofrecer a los clientes una atención{' '}
                <b className="text-danger">amable</b> y{' '}
                <b className="text-danger">homogénea</b>, ocupando:
              </p>
            </Col>
            <Col xs="12" className="text-center">
              <Row>
                <Col xs="12" className="centrado-fila mb-4">
                  <div className="cajaA2 animated slideInUp" style={{width:'80%'}}>
                    <div
                      className="bg-danger pl-3 pr-3"
                      style={{ marginTop: '-30px' }}
                    >
                      <p
                        className="text-center "
                        style={{ marginBottom: '0px' }}
                      >
                        Orden.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs="12" className="centrado-fila mb-4">
                  <div className="cajaA2 animated slideInUp" style={{width:'80%'}}>
                    <div
                      className="bg-danger pl-3 pr-3"
                      style={{ marginTop: '-30px' }}
                    >
                      <p
                        className="text-center "
                        style={{ marginBottom: '0px' }}
                      >
                        Frases y palabras de cortesía y buenos modales.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs="12" className="centrado-fila mb-4">
                  <div className="cajaA2 animated slideInUp" style={{width:'80%'}}>
                    <div
                      className="bg-danger pl-3 pr-3"
                      style={{ marginTop: '-30px' }}
                    >
                      <p
                        className="text-center "
                        style={{ marginBottom: '0px' }}
                      >
                        Elegancia en pronunciar bien las palabras
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs="12" className="centrado-fila mb-4">
                  <div className="cajaA2 animated slideInUp" style={{width:'80%'}}>
                    <div
                      className="bg-danger pl-3 pr-3"
                      style={{ marginTop: '-30px' }}
                    >
                      <p
                        className="text-center "
                        style={{ marginBottom: '0px' }}
                      >
                        Vocabulario adecuado.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs="12 mt-3">
              <p
                className="animated slideInUp  text-center"
                style={{ marginBottom: '0px' }}
              >
                Es la imagen de la empresa, asesor, producto y/o servicio.
              </p>
            </Col>
            <Col xs="12 mt-3 centrado-fila">
              <img
                src={actitudPositiva}
                style={{ width: 250 }}
                alt="actitudPositiva"
                className="img-fluid bordeImagen animated slideInUp "
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
