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

class Formulario2View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      select: '',
      radio: '',
      textarea: '',
      acept: '',
      message:'',
    }
  }

  onChange(e) {
    if (e.target.name === 'acept') {
      this.setState({
        [e.target.name]: e.target.checked,
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }

  onSave(e) {
    if (!this.validate()) {
      return
    }
    this.setState({
      message: 'Guardado.....',
    })
  }

  validate(e){
    if (this.state.username || this.state.nombre || this.state.select  != true) {
      this.setState({
        message:'Falta este campo'
      })
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
                  <FormGroup>
                    <Label htmlFor="username">username</Label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="with a username"
                      value={this.state.username}
                      onChange={this.onChange.bind(this)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="nombre">nombre</Label>
                    <Input
                      type="text"
                      name="nombre"
                      id="nombre"
                      placeholder="with a nombre"
                      value={this.state.nombre}
                      onChange={this.onChange.bind(this)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="select">Select</Label>
                    <Input
                      type="select"
                      name="select"
                      id="select"
                      value={this.state.select}
                      onChange={this.onChange.bind(this)}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio"
                          id="radio"
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
                          name="radio"
                          id="radio"
                          value="w"
                          onChange={this.onChange.bind(this)}
                        />{' '}
                        Mujer
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="textarea">Text Area</Label>
                    <Input
                      type="textarea"
                      name="textarea"
                      id="textarea"
                      value={this.state.about}
                      onChange={this.onChange.bind(this)}
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="acept"
                        id="acept"
                        value={this.state.acept}
                        onChange={this.onChange.bind(this)}
                      />
                      Acepta
                    </Label>
                  </FormGroup>
                  <FormGroup check row>
                    <Col className="centrado-fila">
                      <Button
                        id="guardar"
                        name="guardar"
                        color="primary"
                        onClick={this.onSave.bind(this)}
                      >
                        Enviar
                        
                      </Button>
                     
                      
                    </Col>
                    <p>{this.state.message}</p>
                  </FormGroup>
                </div>

                <br />

                <p>{JSON.stringify(this.state)}</p>
              </Form>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Formulario2View
