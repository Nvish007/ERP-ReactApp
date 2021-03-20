import React, {Component } from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';
import {
    Icon, Left, Right, Body
 } from 'native-base';
 import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
 import NotificationService from './NotificationService';
 import cstyle from '../../style/cstyle';

export default class Notification extends Component {
     constructor(props){
         super(props);
         this.notification = new NotificationService(this.onNotification);
     }
     onNotification = (notif) => {
         Alert.alert(notif.title, notif.message);
     }
     handlePerm(perm){
         Alert.alert("permission", JSON.stringify(perm));
     }
     render(){
         return(
           <> 
              <StatusBar barStyle="dark-content" />
                  <View style={{backgroundColor:'#3399ff', height:responsiveHeight(8), paddingHorizontal:responsiveWidth(1.5), flexDirection: 'row', borderBottomWidth: 0.5 }}>
                      <Left style={{flex:0.2}}>
                          <TouchableOpacity onPress={() => {this.props.navigation.toggleDrawer() }}>
                          <Icon name="menu" type="Entypo" style={{ color: "#fff", }} />
                          </TouchableOpacity>
                      </Left>
                      <Body style={{ flex: 0.6 }}>
                          <Text style={[cstyle.H4Text, cstyle.boldFont, cstyle.colorText]}> Notification </Text>
                      </Body>
                      <Right style={{ flex: 0.2 }}></Right>
                  </View>
                  <SafeAreaView>
                      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{backgroundColor:'#3399ff'}} >
                          <View style={{backgroundColor:'#fff', alignItems:'center', justifyContent:'center', paddingVertical:10}}>
                              <Text style={{fontWeight:'bold'}}> Local Notification </Text>
                              <Button title={"Local Notification"} onPress={() => { this.notification.localNotification() } } />
                          </View>
                      </ScrollView>
                  </SafeAreaView>
                  </>  
         );
     }
 }