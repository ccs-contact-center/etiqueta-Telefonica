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
import SweetAlert from 'sweetalert2-react'

const validate = (values) => {
  const errors = {}
  console.log(values)
  if (!values.pregunta1a) {
    errors.pregunta = 'La pregunta 1  es obligatoria.'
  }
  return errors
}
class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      errors: {
        // pregunta1a : 'No esta seleccionado.'
      },
    }

    this.handleChangeV = ({ target }) => {
      const { name, value } = target
      this.setState({ [name]: value })
    }

    this.handleSubmitV = (e) => {
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

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <SweetAlert
          show={this.state.show}
          title="Enviado"
          text="Respuestas enviadas...."
          onConfirm={() => this.setState({ show: false })}
        />
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
              <Form onSubmit={this.handleSubmitV}>
               
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>1. ¿Qué es etiqueta telefónica?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="pregunta1"
                          id="pregunta1"
                          required
                        />

                        <Label check>(a) Es la estructura de la llamada.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta1" id="pregunta1" required />
                        <Label check>(b) Es la etiqueta telefónica. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta1" id="pregunta1" required />
                        <Label check>
                          (c) Es la manera de contestar el teléfono.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>2. ¿Por qué es importante dentro de tus funciones?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="pregunta2a" id="pregunta2a" />
                        <Label check>
                          (a) Puede ser la diferencia entre un cliente
                          satisfecho y uno que decida buscar a la competencia.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta2a" id="pregunta2a" />
                        <Label check>
                          (b) Se tendrá un mejor control de llamada y siempre
                          nos llamará.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta2a" id="pregunta2a" />
                        <Label check>
                          (c) Nos ayudará a tener en ocasiones homologado el
                          servicio al cliente.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>3. ¿En qué partes de divide una llamada?</b>
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="pregunta3a"
                          id="pregunta3a"
                        />
                        <Label check>(a) Inicio, Desarrollo, Cierre.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta3a" id="pregunta3a" />
                        <Label check>(b) Desarrollo, Inicio, Cierre. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta3a" id="pregunta3a" />
                        <Label check>(c) Inicio, Cierre, Inicio.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b> 4. ¿Qué debes hacer al personalizar en tu llamada?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="pregunta4a" id="pregunta4a" />
                        <Label check>
                          (a) Mencionar el nombre del cliente por lo menos 3
                          veces durante la llamada.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta4a" id="pregunta4a" />
                        <Label check>
                          (b) Mencionar el nombre del cliente por lo menos 2
                          veces durante la llamada.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta4a" id="pregunta4a" />
                        <Label check>
                          (c) Mencionar el nombre del cliente por lo menos 4
                          veces durante la llamada.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        {' '}
                        5. “Fuistes”, “Haiga”, “Bajastes”, ”Pos”, “vinistes” son
                        ejemplos de:
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="pregunta5a" id="pregunta5a" />
                        <Label check>(a) Gramaticales.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta5a" id="pregunta5a" />
                        <Label check>(b) Muletillas.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta5a" id="pregunta5a" />
                        <Label check>(c) Pleonasmos.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        {' '}
                        6. ¿A qué nos referimos cuando te pedimos que empatices
                        con el cliente?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="pregunta6a" id="pregunta6a" />
                        <Label check>
                          (a) Colocarse en el lugar del cliente.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta6a" id="pregunta6a" />
                        <Label check>
                          (b) Resolver como de lugar el problema del cliente.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta6a" id="pregunta6a" />
                        <Label check>
                          (c) Es utilizar frases de cortesía con el cliente .
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>7. Son algunas frases de escucha activa.</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="pregunta7a" id="pregunta7a" />
                        <Label check>(a) Por Favor, Gracias.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta7a" id="pregunta7a" />
                        <Label check>(b) De acuerdo, Entiendo.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta7a" id="pregunta7a" />
                        <Label check>
                          (c) Me podría indicar, Me puede proporcionar por
                          favor.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>8. ¿Por qué es importante la voz en tu trabajo?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="pregunta8a" id="pregunta8a" />
                        <Label check>
                          (a) Permite transmitir pensamientos, emociones y
                          sensaciones.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta8a" id="pregunta8a" />
                        <Label check>
                          (b) Permite realizar el trabajo en menos tiempo.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta8a" id="pregunta8a" />
                        <Label check>
                          (c) Así el cliente entiendo lo que le estamos
                          solicitando.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>9. ¿Qué es la escucha activa?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="pregunta9a" id="pregunta9a" />
                        <Label check>
                          (a) Atender y analizar cada palabra del usuario para
                          poder ofrecer la mejor alternativa.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta9a" id="pregunta9a" />
                        <Label check>
                          (b) Poner en propias palabras la idea del cliente.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="pregunta9a" id="pregunta9a" />
                        <Label check>
                          (c) Sonreír cuando se tome la llamada.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        10. Su definición es: Decir las cosas de manera
                        adecuada, en el momento preciso, sin ser agresivo ni
                        dócil.
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="pregunta10a"
                          id="pregunta10a"
                        />
                        <Label check>(a) Asertividad.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="pregunta10a"
                          id="pregunta10a"
                        />
                        <Label check>(b) Escucha activa.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="pregunta10a"
                          id="pregunta10a"
                        />
                        <Label check>(c) Empatía.</Label>
                      </FormGroup>
                    </Col>
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
export default ActividadView
