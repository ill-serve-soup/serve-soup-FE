import React, { Component } from "react";
import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormText,
    FormFeedback
} from "reactstrap";

// import './App.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            validate: {
                emailpart: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state;
        if (emailRex.test(e.target.value)) {
            validate.emailpart = "good";
        } else {
            validate.emailpart = "bad";
        }
        this.setState({ validate });
    }

    handleChange = async event => {
        const { target } = event;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value
        });
    };

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.email}`);
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container className="App">
                <h2>Sign Up</h2>
                <Form className="form" onSubmit={e => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="email"
                                name="email"
                                id="testEmail"
                                placeholder="example@email.com"
                                value={email}
                                valid={this.state.validate.emailpart === "good"}
                                invalid={
                                    this.state.validate.emailpart === "bad"
                                }
                                onChange={e => {
                                    this.validateEmail(e);
                                    this.handleChange(e);
                                }}
                            />
                            <FormFeedback valid>Make User Name</FormFeedback>
                            <FormFeedback>Make Email</FormFeedback>
                            <FormText>Enter User Name</FormText>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="testPassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="testPassword"
                                placeholder="Enter Password"
                                value={password}
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Button>Sign Up</Button>
                </Form>
            </Container>
        );
    }
}

export default Signup;
