import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import SweetAlert from 'sweetalert2-react'
import Actividad1 from './componentsExtras/dragdrog'

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
       
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Test de autoevaluación</h2>
            </CardHeader>
            <CardBody className="">
              <Actividad1 />
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
