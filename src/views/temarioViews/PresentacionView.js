import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import contenido from "../../assets/img/ImgEtiquetaTelefonica/contenido.jpg";

class PresentacionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-justify">
          <h3>Contenido</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" className="mx-auto">
              <div className="cajaA1 animated fadeInRight delay-0s" style={{width:'400px'}}>
               <ul >
                 <li className="animated fadeInLeft delay-1s">Objetivo.</li>
                 <li className="animated fadeInLeft delay-2s">Importancia de la Etiqueta Telefónica.</li>
                 <li className="animated fadeInLeft delay-3s">Elementos de la Etiqueta Telefónica.</li>
                 <li className="animated fadeInLeft delay-4s">Evaluación.</li>
               </ul>
              </div>
            </Col>
            <Col xs="12 mt-4">
              <p className="text-center">
                <img
                  src={contenido}
                  style={{ width: 338 }}
                  alt="contenido"
                  className="img-fluid bordeImagen animated fadeInUp delay-5s"
                />
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default PresentacionView;
