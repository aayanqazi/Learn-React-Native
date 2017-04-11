import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input ,Spinner} from "./Common";
class LoginForm extends Component {
    state = { email: "", pass: "" ,buttonClicked:false}
    
    onButtonPress(){
        this.setState({buttonClicked:true})
    }
    buttonClicked () {
        if(this.state.buttonClicked)
        {
            return (<Spinner size="small" />)
        }
        return (<Button onPress={this.onButtonPress.bind(this)}>
                        Login
                            </Button>)
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="aayanqazi@yahoo.com"
                        label="Email"
                        onChangeText={email => this.setState({ email:email.value })}
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        onChangeText={pass => this.setState({ pass })}
                        value={this.state.pass}
                    />
                </CardSection>
                <CardSection>
                   {this.buttonClicked()}
                </CardSection>
            </Card>
        )
    }
};

export default LoginForm;