import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,KeyboardAvoidingView, Image, Linking, Alert, ScrollView, Picker,ImageBackground, RefreshControl} from 'react-native'
//import { createDrawerNavigator, createAppContainer, createStackNavigator,  NavigationActions } from 'react-navigation'; 
import {mapping, light as Theme } from '@eva-design/eva';
import { ApplicationProvider,Layout, Input } from 'react-native-ui-kitten';
import DatePicker from 'react-native-datepicker';
 import styles from '../../style/style';
 import Api from '../../utilities/api/utilities';
 import Config from '../../utilities/config/Config';
import AppInroSlider from 'react-native-app-intro-slider';

export default class Add extends Component {
 
  // static navigationOptions = ({ navigation }) => ({
  //   //title: "AddNew",
  //   //4.0 doc
  //   headerRight: (
  //     <TouchableOpacity onPress={() => navigation.navigate('navScreen1')}>
  //       <Text> Back </Text>
  //     </TouchableOpacity>
  //   ),
  // }

  // );

  

  constructor(props){
    super(props)
    this.state = {
      date: "",
      totalTea:"",
      CurrentUser:'',
      getDate:'',
      CurrencyType:'',
      refreshing: false,
      Expense:"",
      showRealApp:false,
    };
   }
    
   
  add() {
    try {
      let obj={}
      obj.date=this.state.date;
      obj.totalTea=this.state.totalTea;
      if (this.state.date !='' && this.state.totalTea !='') {
        fetch(Api.URL + 'TeaExpenses/AddUpdateTeaExpense',{
          headers:{
            "Accept": "application/json",
            "Content-type": "application/json"
          },
          method: 'POST',
          body: JSON.stringify({
            date:obj.date,
            totalTea:obj.totalTea
          })
        }).then(Response => { return Response.json()})
          .then( () => {           
         // this.props.navigation.navigate("DateList")
          Alert.alert(
            '',
            'data saved', [ {text:'ok', onPress: ()=> console.log('ok pressed')}
           ], {cancelable:false},
          );
        })  .catch((error) => { 
        console.log(error);
        alert('something is missing');
      } )
    } else if (this.state.date==''){
      alert('date is missing')
    } else if (this.state.totalTea==''){
      alert('number of tea is missing')
    }else {
      alert('something is missing')
    }
  } catch (err) {
    alert(err);
  }
}
  _onRefresh = () => {
    this.setState({date: "" })
    this.setState({totalTea:"" })
    this.setState({ refreshing: true })
    setTimeout(() => this.setState({ refreshing: false }), 2000)
  }
 onExpenseChange=(value)=>{
    this.setState(
      {
        "Expense": value
      },
    );
   // alert(value)
  }
  onChangeCurrencyType=(value)=>{
    this.setState(
      {
        "CurrencyType": value
      },
    );
    //alert(value)
  }
  //submitAndClear(){
    //this.setState({
      //date:'',
     // totalTea:''
   // })
   
  //}

  //showData(){
   // this.submitAndClear();
    //this.add();
 // }
  _onDone= () => {
    this.setState({showRealApp:true});
  };
  _onSkip= () => {
    this.setState({showRealApp:true});
  };
  render(){
    //let totalAmount=0;
    let totalAmount= (this.state.totalTea) * Config.Price;
     //alert(totalAmount);
    return (
      <ApplicationProvider mapping={mapping} theme={Theme}>
        <Layout style={styles.mainContainer}>
      <View>
     <ScrollView 
     keyboardShouldPersistTaps="handled"
      refreshControl={
       <RefreshControl 
       refreshing={this.state.refreshing}
       onRefresh={this._onRefresh} />
     }>
        <KeyboardAvoidingView enabled>
      <View style={styles.mainContainer}>
         <View style={styles.row}>
           <View style={styles.inputWrap}>
          <Text style={{marginLeft:10, fontSize:15}}> Select Expense</Text>
          <Picker style={styles.Picker} selectedValue={this.state.Expense} onValueChange={this.onExpenseChange} >
            <Picker.Item key="1" label="-- Select Expense --" value="0" />
            <Picker.Item key="2" label="TEA Expense" value="1" />
            <Picker.Item key="3" label="TelePhone Bill" value="2" />
          </Picker>
           </View> 
         </View>
      </View>
     <View style={styles.mainContainer}>
      <Text style={{marginLeft:10, marginBottom:10, fontSize:15}}> Expense Date:</Text>
       <DatePicker
        style={{width:"50%", marginBottom:10,}}
        date={this.state.date}
        mode="date"
        placeholder="YYYY-MM-DD"
        format="YYYY-MM-DD"
       
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 5,
            top: 5,
            marginLeft:5
          },
          dateInput: { 
            marginLeft: 10
          }
        
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      /> 
   </View>
     <View style={{flex:1}}>
       <Text style={{marginLeft:10,fontSize:15}}> Expense Quantity: </Text>
        <Input
        style={styles.InputStyle}
          placeholder="Enter no."
          keyboardType="numeric"
          onChangeText={data => this.setState({ totalTea: data })}
          value={this.state.totalTea}
        />
      </View>
      <View style={{flex:1}}>
       <Text style={{marginLeft:10, fontSize:15}}> Amount: </Text>
       <Text style={styles.textBoxStyle}>₹ {totalAmount} </Text>
      </View>
      <View style={{flex:1}}>
      <Text style={{marginLeft:10, fontSize:15}}> Currency Type: </Text>
         <View style={styles.row}>
          <View style={styles.inputWrap}>
          <Picker style={styles.Picker} selectedValue={this.state.CurrencyType} onValueChange={this.onChangeCurrencyType}>
             {/* <Picker.Item label="-- Select Currency Type --" value="0" /> */}
             <Picker.Item label="₹" value="1" />
          </Picker>

          </View>
        </View> 
         <Text style={styles.textBoxStyle}> ₹ (INR) </Text>
      </View>
      <View style={{flex:1,flexDirection:'row', marginLeft:10}}>
        <TouchableOpacity
          onPress={ () => this.add() }
          style={styles.button}>
          <Text style={styles.buttonText}> SAVE </Text>
        </TouchableOpacity>
        </View>

          <View style={{ flex: 1, marginLeft: 10}}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('navScreen4')}>
             <Text style={styles.buttonText}> Report </Text>
           </TouchableOpacity> 
       </View>
       <View style={{flex:1,alignItems:"center", justifyContent:"center", marginTop:50}}>
        <Text style={styles.PageFooter} onPress={() => Linking.openURL('http://prowesolution.com/')}>Powered By {'\u00A9'} Prowesolution</Text>
        </View>
        <View>
          <Text>

          </Text>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
        </View>
        </Layout>
        </ApplicationProvider>
    );
   
  }
};
const styleSlide = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
  },
});

const slides = [
  {
    key: 's1',
    //text: 'Best Recharge offers',
    title: 'Welcome',
    titleStyle: styleSlide.title,
    textStyle: styleSlide.text ,
    image: {
      uri:
        'http://aboutreact.com/wp-content/uploads/2018/08/mobile_recharge.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#20d2bb',
  },
];
  // {
  //   key: 's2',
  //   title: 'Flight Booking',
  //   titleStyle: styles.title,
  //   text: 'Upto 25% off on Domestic Flights',
  //   image: {
  //     uri:
  //       'http://aboutreact.com/wp-content/uploads/2018/08/flight_ticket_booking.png',
  //   },
  //   imageStyle: styles.image,
  //   backgroundColor: '#febe29',
  // },
  // {
  //   key: 's3',
  //   title: 'Great Offers',
  //   titleStyle: styles.title,
  //   text: 'Enjoy Great offers on our all services',
  //   image: {
  //     uri: 'http://aboutreact.com/wp-content/uploads/2018/08/discount1.png',
  //   },
  //   imageStyle: styles.image,
  //   backgroundColor: '#22bcb5',
  // },
  // {
  //   key: 's4',
  //   title: 'Best Deals',
  //   titleStyle: styles.title,
  //   text: ' Best Deals on all our services',
  //   image: {
  //     uri: 'http://aboutreact.com/wp-content/uploads/2018/08/best_deals1.png',
  //   },
  //   imageStyle: styles.image,
  //   backgroundColor: '#3395ff',
  // },
  //   saveValueFunction = () => {

  //   if (this.state.number) {

  //     AsyncStorage.setItem('key', this.state.number);

  //     this.setState({ number: '' })

  //     alert('Data Saved');

  //   } else {
  //     alert('Please fill data');

  //   }
  // };
  //  setDateFuction=()=> {
  //    if(this.state.date) {
  //      AsyncStorage.setItem('date', this.state.date);
  //      this.setState({ date: ''})
  //      alert('date saved');
  //    } else {
  //      alert('date missing')
  //    }
  //  };
  // getValueFunction = () => {

  //   AsyncStorage.getItem('key').then(value =>

  //     this.setState({ getValue: value })

  //   );
  // };
  // getDateFuction=()=> {
  //   AsyncStorage.getItem('date').then(date => 
  //     this.setState({ getDate: date})
  //     );dataSource:ResponseJson.data,
  // }
  //  <Text style={styles.PageFooter} onPress={() => Linking.openURL('http://prowesolution.com/')}>Powered By {'\u00A9'} Prowesolution</Text>


  // static navigationOptions = ({ navigation }) => ({
  //   //title: "AddNew",
  //   headerLeft: (
  //     <TouchableOpacity onPress={() => navigation.openDrawer()}>
  //       <Image style={{ width: 30, height: 30 }} source={require('./images/menu.png')}
  //       />
  //     </TouchableOpacity>
  //   ),
  // }

  // );