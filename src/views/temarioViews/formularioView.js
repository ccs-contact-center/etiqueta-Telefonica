import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

const validate = (values) => {
  const errors = {}
  console.log(values)
  if (!values.pregunta1) {
    errors.pregunta1 = 'La pregunta 1  es obligatoria.'
  }
  return errors
}
class FormularioView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.state = {
      errors: {
        //pregunta1 : 'No esta seleccionado.'
      },
    }

    this.handleChange = ({ target }) => {
      const { name, value } = target
      this.setState({ [name]: value })
    }

    this.handleSubmit = (e) => {
      e.preventDefault()
      const { errors, ...sinErrors } = this.state
      const result = validate(sinErrors)
      console.log(Object.keys(result))

      this.setState({ errors: result })
      if (Object.keys(result).length) {
        console.log('envio formulario')
      }
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>
                Es hora de saber qué has aprendido de este curso. Elige la
                opción de acuerdo a cada pregunta.{' '}
              </p>
              <Form onSubmit={this.handleSubmit}>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta1"
                          id="pregunta1"
                          value="m"
                          onChange={this.onChange.bind(this)}
                        />{' '}
                        Hombre
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label htmlFor="radio">Radio</Label>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta2"
                          id="pregunta2"
                          value="w"
                          onChange={this.onChange.bind(this)}
                        />{' '}
                        Mujer
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </div>

                <br />

                <FormGroup check row>
                  <Col className="centrado-fila">
                    <Button
                      color="primary"
                      onClick={() => this.setState({ show: true })}
                    >
                      Enviar
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default FormularioView
