import React, { Component } from 'react';
import { View, Image, Alert, ScrollView,RefreshControl, Keyboard, AsyncStorage } from 'react-native';
import {
    Container,
    Header,
    Title,
    Button,
    Content,
    Item,
    Label,
    Input,
    Body,
    Left,
    Right,
    Form,
    Text,
    Icon,
 } from 'native-base';
import {mapping, light as Theme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
//import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../../style/styleLogin';
import styles from '../../style/style';
import Api from '../../utilities/api/utilities';
import { error } from 'react-native-gifted-chat/lib/utils';
//import SwipeButton from 'rn-swipe-button';
import SwipeButton from 'rn-swipe-button';

export default class Login extends Component{
    constructor(props){
    super(props)
    this.state ={
        userName:"",
        password:"",
        dataSource: null,
        refreshing:false,
    };
    }
        
    onLogin(){
        const { userName } = this.state;
        Alert.alert('welcome', `${userName}`);
    }
      Login(){
          try{
              let obj={}
              obj.userName=this.state.userName;
              obj.password=this.state.password;
              if(this.state.userName !='' && this.state.password !='') {
                  fetch(Api.URL + 'Login/Login',{
                      headers:{
                          "Accept":"application/json",
                          "Content-Type":"application/json",
                      },
                      method:"POST",
                      body:JSON.stringify({
                          userName:obj.userName,
                          password:obj.password
                      })
                  })
                  .then(Response => { return Response.json() })
                  .then(Response => {
                      this.setState({ dataSource:Response.data})
                      Keyboard.dismiss();
                      let asData={
                          userName:this.state.dataSource.userName
                      }
                      AsyncStorage.setItem('CurrentLogin', JSON.stringify(asData) );
                      this.props.navigation.navigate('navScreen1');
                  }) .catch((error) =>{
                      console.log(error)
                      alert("Invalid Username or Password");
                  })
              }else {
                  alert("Enter Username & Password");
              }
          } catch(error) {
              alert(error);
          }
      } 

    _onRefresh = () =>{
        this.setState({userName:""})
        this.setState({password:""})
        this.setState({refreshing:true})
        setTimeout(() => this.setState({refreshing:false}), 2000)
    }
    render(){
         
        return(
           <ApplicationProvider mapping={mapping} theme={Theme} >
               <Layout style={styles.mainContainer} >

                <ScrollView 
                 keyboardShouldPersistTaps="handled"
                 refreshControl={
                     <RefreshControl 
                     refreshing={this.state.refreshing}
                     onRefresh={this._onRefresh} />
                 }>
            <Container style={{backgroundColor:"#fff"}} >
                <Header>
                    <Left/>
                    <Body style={{alignItems:'center', justifyContent:'center', marginLeft:60}}>
                        <Title> Login </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={{ justifyContent:'center', alignItems:'center'}}>
                    <Image 
                      source={require("../../../../assets/PSimage.jpg")} 
                        />
                       </View>
                    {/* <Form  >
                        <Item floatingLabel>
                        <Icon active name="person" />
                            <Label  style={{marginLeft:15}}> Username</Label>
                            <Input ref={input => {this.userName = input}} onChangeText={(text) => {this.setState({userName:text})}}
                            style={styles.input} />
                        </Item>
                        <Item floatingLabel>
                        <Icon active name="key" />
                            <Label style={{marginLeft:15}}> Password</Label>
                            <Input secureTextEntry ref={input => {this.password = input}} 
                             onChangeText={(text) => {this.setState({password:text})} }
                             style={styles.input} />
                        </Item>
                        <Button block style={{margin:15,marginTop:50}} onPress={ () => this.Login()} >
                            <Text>Log in</Text>
                        </Button>
                    </Form> */}
                   <Form style={{marginTop:50}} >
        <Item rounded style={{backgroundColor:"#D7D6D5"}}>
      <Icon active name="person" />
      <Input placeholder="Username" ref={input => {this.userName = input}} onChangeText={(text) => {this.setState({userName:text})}}
        />
        </Item>
        <Item rounded style={{backgroundColor:"#D7D6D5", marginTop:10}}>
        <Icon active name="key" />
        <Input placeholder="Password" secureTextEntry ref={input => {this.password =input}} 
        onChangeText={(text) => {this.setState({password:text})}}  />
        </Item>
          </Form>
          <Button block style={{marginTop:50, margin:15}} onPress={ () => this.Login()} >
         <Text> Sign in </Text>
          </Button>
         
                   
          
                </Content>
            </Container>
            </ScrollView>
            </Layout>
           </ApplicationProvider>
        );
    }
}

{/* <SwipeButton
            disabled={false}
            //disable the button by doing true (Optional)
            swipeSuccessThreshold={70}
            height={45}
            //height of the button (Optional)
            width={330}
            //width of the button (Optional)
            title="Swipe to Login"
            //Text inside the button (Optional)
            //thumbIconImageSource={thumbIcon}
            //You can also set your own icon for the button (Optional)
            onSwipeSuccess={() => {
              alert('Logged in Successfully!');
            }}
            //After the completion of swipe (Optional)
            railFillBackgroundColor="#4467cc" //(Optional)
            railFillBorderColor="#e688ff" //(Optional)
            thumbIconBackgroundColor="#ed9a73" //(Optional)
            thumbIconBorderColor="#ed9aff" //(Optional)
            railBackgroundColor="#4467cc" //(Optional)
            railBorderColor="#bbeaff" //(Optional)
          /> */}