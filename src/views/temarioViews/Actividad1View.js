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
              <h2>Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>
                Empecemos a evaluarnos para saber si vas entendiendo el tema.<br/>
                Relaciona las frases que ocuparías VS las expresiones del
                cliente al teléfono.{' '}
              </p>
              <Actividad1 />
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
