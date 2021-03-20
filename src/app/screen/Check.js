import React from 'react';
import { StyleSheet,View, ToastAndroid, TextInput,} from 'react-native';
//import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, dark as Theme } from '@eva-design/eva';
import { ApplicationProvider, Text, Layout, Button, IconRegistry,Input, RangeDatepicker  } from 'react-native-ui-kitten';
import {DatePicker } from 'native-base';
import Pie  from 'react-native-pie';
class App  extends React.Component{

_toastHandler=()=> {
  this.props.navigation.navigate('navScreen1');
  ToastAndroid.show('Button Pressed', ToastAndroid.SHORT);
}

  render(){
    const fill ='rgb(134,65,244)'
    const data =[50,10,40,95,null,85]
    return(
      
  <React.Fragment>
  <ApplicationProvider mapping={mapping} theme={Theme}>
    <Layout style={styles.container}>
    <Text style={styles.text}> hello </Text>
    <Input multiline={true}
         maxLength={500}
         placeholder="Enter" />
        
         <TextInput 
           style={styles.textBoxStyle}
           placeholder="Enter no."
           keyboardType="numeric" />
  <Button onPress={this._toastHandler}> Button </Button>
  <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
  <Text> Pie Chart </Text>
  <Pie  
      radius={70}
      series={[56,11,77]}
      colors={['yellow', 'green', 'orange']} />
     <Text> Solid Pie</Text> 
     <Pie 
     radius={70}
     innerRadius={40}
     series={[10,20,30,40]}
     colors={['f00','0f0','00f','ff0']} />
     
  </View>
    </Layout>
  </ApplicationProvider>
  </React.Fragment>
);
  }}
  
export default App;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  text: { marginVertical: 16, fontSize:20 },
});
