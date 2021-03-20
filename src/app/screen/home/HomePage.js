import React from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, Image, Animated,
  SafeAreaView,StatusBar,FlatList, TouchableOpacity, Button, Alert, Platform, BackHandler } from 'react-native';
import AppInroSlider from 'react-native-app-intro-slider';
import styles from '../../style/style';
//import {cre } from 'react-navigation';
import Icon  from 'react-native-vector-icons/FontAwesome';
import PushController from '../../component/pushNotification/PushController';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
//import ActionButton from 'react-native-action-button';
import ActionSheet from 'react-native-actionsheet';
//import App from '../../component/ActionButton/ActionButton';
// let pushData = [
//   {
//     title: "First push",
//     message: "First push message"
//   },
//   {
//     title: "Second push",
//     message: "Second push message"
//   }
// ]
debugger 
  

export default class HomePage extends React.Component{

      constructor(props){
          super(props)
          this.state={
              showRealApp:false,
          }
      };
      // _onLogout=() => {
      //   this.props.navigation.navigate('navScreen6')
      // };
      _onDone= () =>  {
          this.setState({showRealApp:true});
      };
      _onSkip= () => {
        this.setState({showRealApp:true});
      };
      
      _onLogout = () => {
        
        Alert.alert(
          
          '',
          
          'Are you sure! want to Logout ?',
          [
            { text: 'Yes', onPress: () => this.props.navigation.navigate('navScreen6') },
            {
              text: 'No',
              onPress: () => console.log('No Pressed'),
              style: 'cancel',
            },
          ],
          { cancelable: false }
          
        );
      };
      
//      _renderItem = ({ item }) => (
  //      <View key={item.title}>
    //      <Text >{item.title}</Text>
      //    <Text >{item.message}</Text>
        //  </View>
          //  );
 onPressButton =()=>{
   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
   navigate('navScreen1')
 }           

 handleBackButton =() => {
Alert.alert(
  'Exit App',
  'Exiting the application?', [{
    text:'Cancel',
    onPress: () => console.log('Cancel pressed'),
    style:'cancel'
  }, {
    text:'OK',
    onPress:() => BackHandler.exitApp()
  }, ], {
    cancelable:false
  }
)
 return true;
 }

 componentDidMount() { 
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
} 
 componentWillMount(){
   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
 } 


 showActionSheet =() => {
  this.ActionSheet.show();
  };

    render(){ 
      var optionArray=[
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Cancel',
      ];

        return(
          
            <View style={styleSlide.mainStyle}>
   
                <View style={{marginBottom:10}}>
                    <Text>

                    </Text>
                </View>
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    justifyContent:'space-between',  
                }}>
                    
                     <View style={{ flex:1}}>
                         <View style={{flexDirection:'column',margin:15,}}>
                           <TouchableOpacity 
                            onPress={ () => {
                                this.props.navigation.navigate('navScreen2');
                            }} >
                         <Icon name="calendar" size={80} />
                           </TouchableOpacity>
                           <Text style={{textAlign:'center',marginTop:10,fontWeight:'bold'}}> AddExpense </Text>
                         </View>
                     </View>
                     <View style={{flex:1}}>
                      <View style={{flexDirection:'column',margin:15,}}>
                             <TouchableOpacity        
                              onPress={ () => {
                                this.props.navigation.navigate('navScreen3');
                            }} >
                           <Icon name="inr" size={80} style={{marginLeft:5 }}/>
                             </TouchableOpacity>
                              <Text style={{textAlign:'center',marginTop:10,fontWeight:'bold'}}> Check Price </Text>
                         </View>
                     </View>
                   <View style={{ flex:1,}}>
                   <View style={{flexDirection:'column',margin:15,}}> 
                   <TouchableOpacity        
                              onPress={ () => {
                                this.props.navigation.navigate('navScreen4');
                            }} >
                           <Icon name="clipboard" size={80} />
                             </TouchableOpacity>
                    <Text style={{textAlign:'center',marginTop:10, fontWeight:'bold'}}> Report </Text>
                    </View>
                   </View>
                </View>
                
           {/* <View style={{marginTop:50}}>      
          
          <Header />
         
          <View >
            <FlatList
              data={pushData}
              renderItem={(item ) => this._renderItem(item)}
              keyExtractor={(item ) => item.title}
            />
             <LearnMoreLinks />  //commented
          </View>
          </View> */}
    
                {/* <View>
                     <TouchableOpacity onPress={() => {
                       this.props.navigation.navigate('navScreen6');
                     }} >
                 <Icon name="logout-variant" size={50} />
                 <Text> Logout </Text>
                     </TouchableOpacity>
                </View> */}
    <View style={{padding:25, flex:1, justifyContent:'center'}}>
     <TouchableOpacity onPress={this.showActionSheet} style={ styles.FloatingButtonStyle}>
     <Icon name="chevron-circle-up" size={40} />
     
     </TouchableOpacity>
     <ActionSheet 
      ref={o => (this.ActionSheet= o)} 
       title={"select one"}
        options={optionArray} 
        cancelButtonIndex={4} 
        destructiveButtonIndex={1} 
        onPress={index => {
          alert(optionArray[index]);
          }} />      
    </View>

                <View style={{flex:1, alignItems:'center', justifyContent:'center', marginTop:'60%'}}>
                    {/* <Text style={styles.PageFooter} onPress={() => Linking.openURL('http://prowesolution.com/')}> Powered By {'\u00A9'} ProweSolution 
                         </Text>                        */}
                   </View>
   
                 {/* <ActionButton buttonColor="rgba(231,76,60,1)">
                 <ActionButton.Item 
                      buttonColor="#9b59b6"
                      title="Button one"
                      onPress={() => alert('Added ')}>
                      
                 </ActionButton.Item>
                 <ActionButton.Item
                    buttonColor="#3498db"
                    title="Button two"
                    onPress={() => alert('Added ')}>
                    
                 </ActionButton.Item>
                 <ActionButton.Item
                    buttonColor="#1abc9c"
                    title="Share"
                    onPress={() => alert('Shared')}>
                   
          </ActionButton.Item>
                 </ActionButton> */}
            </View>          
        );
   
 
    }
};
const styleSlide = StyleSheet.create({
mainStyle:{
flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#d1d4cd'
},
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
      titleStyle:styleSlide.title ,
      textStyle:  styleSlide.text,
      image: {
        uri:
          'http://aboutreact.com/wp-content/uploads/2018/08/mobile_recharge.png',
      },
      imageStyle: styleSlide.image,
      backgroundColor: '#20d2bb',
    },];

   // <Icon name="md-share-alt" style={styles.actionButtonIcon} />
   //<Icon name="md-star" style={styles.actionButtonIcon} />
   //<Icon name="md-eye" style={styles.actionButtonIcon} /> 