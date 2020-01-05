import React, { Component } from 'react'
import { Row, Col, Input, Button, Card } from 'antd';
import Axios from '../config/axios.setup'
// import { failLoginNotification, successLoginNotification } from '../../components/Notification/notification'


export default class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  username: '',
		  password: '',
		}
	  }
	
	  handleSubmit = (e) => {
		e.preventDefault()
		const username = this.state.username
		const password = this.state.password
		Axios.post('/loginUser', { username, password })
		  .then(result => {
			console.log(result.data)
			// successLoginNotification()
			localStorage.setItem("ACCESS_TOKEN", result.data.token)
			this.props.history.push("/home")
		  })
		  .catch(err => {
			console.error(err);
			// failLoginNotification(err.response.data.message)
		  })
	  }
	render() {
		return (
			<Card style={{ width: 350,height:380, textAlign: "center",backgroundColor:"darkgray" }}>
				<div>
					<Row>
						<img src="" style={{ maxWidth: "200px" }} />
						<Row style={{margin:"15px"}}>
						<Input placeholder="Username"/>
						</Row>
						<Row style={{margin:"15px"}}>
						<Input placeholder="Password" />
						</Row>
						<Row>
							<Button style={{margin:"8px",backgroundColor:"yellowgreen"}}>Sign-in</Button>
						</Row>
						<Row>
						<Button type="link" ghost><u>Forgot Password</u></Button>
						<Button type="link" ghost><u>Create an account</u></Button>
						</Row>
					</Row>
				</div>
				
			</Card>
			
		)
	}
}
