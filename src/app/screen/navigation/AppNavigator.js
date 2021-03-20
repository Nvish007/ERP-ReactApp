import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image,TouchableOpacity,Alert, AppRegistry, Dimensions } from 'react-native';
import { createAppContainer, navigationOptions } from 'react-navigation';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator,DrawerActions } from 'react-navigation-drawer';
import {Icon, Button } from 'native-base';
//import Icon from 'react-native-vector-icons';

import Add from '../addExpense/Add';
import Report from '../report/Report';
import Sidebar from '../../component/sidebar/Sidebar';
import ManagePrice from '../managePrice/ManagePrice';
import HomePage from '../home/HomePage';
import Check from '../Check';
import Login from '../login/Login'
import Notification from '../notification/Notification';
//import TempPage from './Screen/TempPage' ;
import styles from '../../style/style';

global.currentScreenIndex = 0;
class AppNavigator extends React.Component {
  toggleDrawer = () => {
    
   // this.props.navigationProps.openDrawer();
   this.props.navigationProps.dispatch(DrawerActions.toggleDrawer());
  };
  backButton =() =>{
    this.props.navigation.navigate('navScreen1');
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} style={{margin:5}} >
          
          <Icon name="menu" size={40} />
        </TouchableOpacity>
        
      </View>
    );
  }
}

class Logout extends Component{

  _onLogout = () => {
        
    Alert.alert(
      
      '',
      
      'Are you sure! want to Logout ?',
      [
        { text: 'Yes', onPress: () => this.props.navigationProps.navigate('navScreen6') },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
      
    );
  };
  render() {
    return(
      <View> 
        <Button onPress={() => this._onLogout()} style={{backgroundColor:'#000'}}  >
          <Icon name="person" color="#fff" />
          
        </Button>
      {/* <TouchableOpacity onPress={() => {
        navigation.navigate('navScreen6');
      }} >
  <Icon name="person" size={50} />
  <Text> Logout </Text>
      </TouchableOpacity> */}
 </View>
    );
  }
}
const Screen1_Stack = createStackNavigator({
  First: {
    screen:HomePage,
    navigationOptions:({ navigation}) => ({
      title:'Home',
      headerLeft:<AppNavigator navigationProps={navigation} />,
      headerRight:<Logout navigationProps={navigation} />,
      headerStyle: {
        backgroundColor:'#c83628'
      },
      headerTintColor:'#000'
    }),
  },
  });
const Screen2_Stack = createStackNavigator({
  Second: {
    screen: Add,
    navigationOptions:({navigation}) => ({
      title: 'Add',
     //headerLeft: <AppNavigator navigationProps= {navigation} />,
     
      headerLeft:() => (
       <TouchableOpacity onPress={() => navigation.navigate('navScreen1')} style={{margin:5}}>
         <View style={{flexDirection:'row'}}>
       
         <Icon name="arrow-back"  />
      </View>
       </TouchableOpacity>
      ),
     headerStyle:{
     backgroundColor:'#fff'
     },
     headerTintColor:'#000'
    }),
  },
});

const Screen3_Stack = createStackNavigator({
  Third: {
    screen: ManagePrice,
    navigationOptions: ({ navigation }) => ({
      title: 'Price',
      //headerLeft: <AppNavigator navigationProps={navigation} />,
      headerLeft:() => (
        <TouchableOpacity style={{margin:5}} onPress={() => navigation.navigate('navScreen1')}>
        <Icon name="arrow-back"  />
        </TouchableOpacity>
       ),
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000'
    }),
  },
});

const Screen4_Stack = createStackNavigator({
  Fourth: {
    screen: Report,
    navigationOptions: ({ navigation }) => ({
      title: 'Report',
      //headerLeft: <AppNavigator navigationProps={navigation} />,
      headerLeft:() => (
        <TouchableOpacity style={{margin:5}} onPress={() => navigation.navigate('navScreen1')}>
        <Icon name="arrow-back"  />
        </TouchableOpacity>
       ),
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000'
    }),
  },
});

const Screen5_Stack = createStackNavigator({
  Fifth: {
    screen:Check,
    navigationOptions:({navigation}) => ({
      title:'Check',
      //headerLeft:<AppNavigator navigationProps={navigation} />,
      headerLeft:() => (
        <TouchableOpacity style={{margin:5}} onPress={() => navigation.navigate('navScreen1')}>
        <Icon name="arrow-back"  />
        </TouchableOpacity>
       ),
      headerStyle:{
        backgroundColor:'#fff'
      },
      headerTintColor:'#000'
    }),
  },
});

 const Screen6_Stack = createStackNavigator({
   Six:{
     screen:Notification,
    //  navigationOptions:({navigation}) => ({
    //    title:'Notification',
    //   // headerLeft:<AppNavigator navigationProps={navigation} />,
    //    headerStyle:{
    //       backgroundColor:"#fff"
    //    },
    //    headerTintColor:'#000'
    //  }),
   },
 });
 
const DrawerNavigator = createDrawerNavigator({
  navScreen1:{
    screen:Screen1_Stack,
    navigationOptions:{
      drawerLable:'Home',
    },
  },
  navScreen2:{
    screen:Screen2_Stack,
    navigationOptions:{
      drawerLable:'AddDate',
    },
  },
  navScreen3: {
    screen: Screen3_Stack,
    navigationOptions: {
      drawerLable: 'Price',
    },
  },
  navScreen4: {
    screen: Screen4_Stack,
    navigationOptions: {
      drawerLable: 'Report',
    },
  },
 
  navScreen5:{
    screen:Screen5_Stack,
    navigationOptions:{
      drawerLabel:'Check',
    },
  },
navScreen6:{
  screen:Login,
},
navScreen7:{
  screen:Screen6_Stack,
  navigationOptions:{
    drawerLabel:'Notification'
  }
}
 
},
{ 
  
  contentComponent:Sidebar,
  initialRouteName:'navScreen1',
  //drawerWidth:Dimensions.get('window').width - 130,
 //DrawerContentComponent: props => <Sidebar {...props} />
}
);

// const BottomNavigation =createBottomTabNavigator({
//     Setting: {
//         screen: DrawerNavigator,
//         navigationOptions: {
//             title: "Setting",
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon
//                     name="settings"
//                     size={17}
//                     color={tintColor} />
//             )
//         }
//     },
//     Price:{
//      screen:Screen2_Stack,
//         navigationOptions: {
//             title: "Price",
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon
//                     name="tune"
//                     size={17}
//                     color={tintColor} />
//             )
//         }
//     },
//     Payment:{
//         screen:Screen4_Stack,
//         navigationOptions: {
//             title: "Payment",
//             tabBarIcon: ({ tintColor }) => (
//                  <Icon
//                     name="book"
//                      size={17}
//                      color={tintColor} />
//             )
//         }
//     },

// });
export default createAppContainer(DrawerNavigator);

/*  const HomeStack = createStackNavigator (
    {
      AddNew: DatePicker,
      Price: PriceCheck,
      Report: DateList,
      // Home: HomeScreen,
      //Info: Information,
      //Login: LoginPage,

    },
    {
     // initialRouteName: 'Login',
    },

    {
      navigationOptions: {

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );*/ 

 

 /*const AppNavigator = createDrawerNavigator(
  {
    AddNew: HomeStack,
     Price: PriceCheck,
    Report: DateList,
    //temp: Filter,
    //Home: HomeStack,
    //Login: HomeStack,
  //  Info: Information,
  },
  {
    
    drawerBackgroundColor: '#fff',
    overlayColor: '#B3ABA9',
    
  },
);*/


// headerTitleStyle: {
//   fontSize: 18,
//     textAlign: 'center',
//       flex: 1,
//         },

//  const Stack = createStackNavigator(
//    {
//      Home: {
//        screen: HomeScreen,
//      },
//    },
//    {
//      defaultNavigationOptions: {
//        headerStyle: {
//          backgroundColor: '#f4511e',
//        },
//        headerTintColor: '#fff',
//        headerTitleStyle: {
//          fontWeight: 'bold',
//        },
//      },
//    }

//  );

//  const DrawerNavigator = createStackNavigator(createDrawerNavigator(
//   {
//     Home: HomeScreen,
//     Info: Information,
//     AddDate: DatePicker,
//   },
//   {
  
//     drawerBackgroundColor: '#fff',
//     overlayColor: '#B3ABA9',
//     contentOptions: {
//       activeTintColor: '#fff',
//       activeBackgroundColor: '#000',
//     },
//     defaultNavigationOptions: {
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       },
//   },
// )
// );

//HomeStack.navigationOptions = ({ navigation }) => ({
//   tabBarVisible: navigation.state.index===0,
//   tabBarLable:'home',
// });

//  export default class App extends React.Component{
//    render(){
//      return <TopLevelNavigator />;
//    }
//  };