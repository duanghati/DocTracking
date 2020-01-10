import React, { Component } from 'react'
import { Row, Col, Button, Input, Form, notification, Icon } from 'antd'
import Axios from '../config/axios.setup'
import { withRouter } from 'react-router-dom'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    name: ''
  }
  openSignupSuccessNotification = () => {
    notification.open({
      message: "Signup Successfully",
      description: "Signup Successfully",
      placement: "bottomRight",
      icon: <Icon type="check-circle" style={{ fontSize: 24, color: "green" }} />
    })
  }

  openSignupFailedNotification = () => {
    notification.open({
      message: "Signup Failed",
      description: "Signup Failed",
      placement: "bottomRight",
      icon: <Icon type="close-circle" style={{ fontSize: 24, color: "crimson" }} />
    })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Password incorrect from Password')
    } else {
      callback()
    }
  }

  compareToSecondPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.isDirty) {
      form.validateFields(['Confirm'], { force: true });
    }
    callback()
  }

  submitForm = async (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll();
    try {
      const result = await Axios.post('/registerUser', {
        username: this.state.username,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        name: this.state.name
      })
      console.log('result', result)
      this.props.history.push('/')
      this.openSignupSuccessNotification()
      this.props.history.push('/login')
    } catch (err) {
      console.error(err)
      this.openSignupFailedNotification()
    }
  }
  handdleClick = ()=>{
}

  render() {
    const { form } = this.props;
    return (
      <Row type='flex' style={{ height: '100vh' }} align="middle">
        <Col span={24} >
          <Row type='flex' justify="center" align="middle" >
            {/* <Col xs={15} sm={18} md={12} lg={10} type="flex" justify="center" align="middle"> */}
              {/* <img src="logo.png" style={{ height: "100%", maxHeight: "300px" }}></img> */}
            {/* </Col> */}
          </Row>
          <Row type="flex" justify="center" align="middle" style={{ marginTop: '40px' }}>
            <Col md={20} sm={70} xs={80} type="flex" justify="center" align="middle">
            <img src="logo.png" style={{ height: "100%", maxHeight: "300px" }}></img>
              <Form onSubmit={this.submitForm} className="login-form" style={{ maxWidth: "400px", width: "100%" }}>
                <Row>
                  <Form.Item label='Email'>
                    {form.getFieldDecorator('email', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Email'
                        }
                      ]
                    })(<Input type="email" onChange={(e) => this.setState({ username: e.target.value })} />)}
                  </Form.Item>
                  <Form.Item label='Password'>
                    {form.getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Password'
                        },
                        {
                          validator: this.compareToSecondPassword,
                        }
                      ]
                    })(<Input.Password onChange={(e) => this.setState({ password: e.target.value })} />)}
                  </Form.Item>
                  <Form.Item label='Confirm Password'>
                    {form.getFieldDecorator('confirmPassword', {
                      rules: [
                        {
                          required: true,
                          message: 'Please Confirm your Password'
                        },
                        {
                          validator: this.compareToFirstPassword,
                        }
                      ]
                    })(<Input.Password onChange={(e) => this.setState({ confirmPassword: e.target.value })} />)}
                  </Form.Item>
                  <Form.Item label='Name'>
                    {form.getFieldDecorator('Name', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Name'
                        }
                      ]
                    })(<Input onChange={(e) => this.setState({ name: e.target.value })} />)}
                  </Form.Item>
                </Row>
                <Row type="flex" justify="center">
                  <Col md={20} sm={30} xs={60}>
                    <Form.Item>
              
                      <Button  block type="primary" htmlType="submit" className="login=form=button" >
                        ตกลง
                      </Button>
                      <Button  block type="primary" htmlType="cancle" className="login=form=button">
                        ยกเลิก
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

const signupForm = Form.create({ name: "signup" })(Signup);
export default withRouter(signupForm)