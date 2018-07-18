import React, { Component } from "react";
import { Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Keyboard } from "react-native";
import { H3, Toast, Button, Container, Content, Form, Label, Input, Item } from "native-base";
// import { graphql } from "react-apollo";
import { Mutation } from "react-apollo";
import styles from "./style";
import {userQuery, SIGNUP_MUTATION} from '../graph/mutations/signupMutation';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      firstname:"",
      lastname:"",
      phone:"",
      address:"",
      account_number:"",
      bvn:"",
      showToast: false
    };
    this.doSubmit = this.doSubmit.bind(this);

  }
  onInputTextChange = (text, type) => {
    this.setState({ [type]: text });
  };

  doSubmit = async (doSignUp, obj, e) => {
    Keyboard.dismiss();
    const { email, password, firstname,lastname,phone,address, account_number,bvn } = this.state;
    doSignUp({variables: {email, password, firstname,lastname,phone,address, account_number,bvn}}); 
  }

  // onSignPress = async  () => {
  //   Keyboard.dismiss();
  //   try {
  //     const query = await client.query({query:userQuery});
  //     console.log('query: ',query);
  //      const res = await client.mutate({mutation, variables:{id: 'yuuuuu'}});
  //      alert(JSON.stringify(res, null, 4))
  //   } catch (error) {
  //     alert('error : ', JSON.stringify(error, null, 4));
  //   }

  // };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Mutation mutation={SIGNUP_MUTATION}>
      {(signup, {data, loading, error }) => 
      (
       
        <Container style={styles.container2}>
            {loading && <Text>Saving...</Text>}
            {error?
                Toast.show({
                    text: error.message,
                    type: "danger",
                    duration: 4000
                    }):null}
            {data? 
              data.signup.status=="error"?
                Toast.show({
                        text: data.signup.message,
                        type: "warning",
                        duration: 4000
                        })
                :Toast.show({
                  text: "User was successfully created",
                  type: "success",
                  duration: 4000
                  }) 
              :null           
            }{data && console.log(data.signup)}

            <Content>
              <View>
                <Text style={styles.textFeel}>Create an account to start using workRaven</Text>
                <Form>
                  <Item inlineLabel>
                    <Label>First Name</Label>
                    <Input  onChangeText={text => this.onInputTextChange(text, 'firstname')} 
                        value={this.state.firstname} />
                  </Item>
                  <Item inlineLabel last>
                    <Label>Last Name</Label>
                    <Input onChangeText={text => this.onInputTextChange(text, 'lastname')} 
                        value={this.state.lastname} />
                  </Item>
                  <Item inlineLabel last>
                    <Label>Email</Label>
                    <Input onChangeText={text => this.onInputTextChange(text, 'email')} 
                        value={this.state.email} />
                  </Item>
                  <Item inlineLabel last>
                    <Label>Password</Label>
                    <Input onChangeText={text => this.onInputTextChange(text, 'password')} 
                        value={this.state.password} />
                  </Item>
                  <Item inlineLabel last>
                    <Label>address</Label>
                    <Input onChangeText={text => this.onInputTextChange(text, 'address')} 
                        value={this.state.address} />
                  </Item>
                  <Item inlineLabel last>
                    <Label>phone</Label>
                    <Input onChangeText={text => this.onInputTextChange(text, 'phone')} 
                        value={this.state.phone} />
                  </Item>
                  <Item inlineLabel last>
                    <Label>Account Number</Label>
                    <Input onChangeText={text => this.onInputTextChange(text, 'account_number')} 
                        value={this.state.account_number} />
                  </Item>
                  <Item inlineLabel last style={{marginBottom:20}}>
                    <Label>BVN</Label>
                    <Input onChangeText={text => this.onInputTextChange(text, 'bvn')} 
                        value={this.state.bvn} />
                  </Item>

                    <Button block rounded info style={styles.buttonFeel} onPress={this.doSubmit.bind(this, signup, {data,loading, error})}>
                       <Text style={styles.buttonText}>Submit</Text>
                    </Button>
                </Form>
                {/* <Button block rounded info style={styles.buttonFeel} onPress={this.onSignPress}>
                       <Text style={styles.buttonText}>Submit 2</Text>
                    </Button> */}
              </View>
            </Content>
          </Container>    
        )}
      </Mutation> 
    )
  }
}
