import{StyleSheet } from 'react-native';
const React = require("react-native");
const {Platform, Dimensions } = React;

const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth =  Dimensions.get("window").width;
 
export default styles = StyleSheet.create({
    drawerCover:{
        alignSelf:'stretch',
        height:DeviceHeight / 3.5,
        width:null,
        position:'relative',
        marginTop:10
    },
    drawerImage:{
        position:'absolute',
        left: Platform.OS === "android" ? DeviceWidth / 10 : DeviceWidth / 9,
        top: Platform.OS === "android" ? DeviceHeight / 13 : DeviceHeight / 12,
        width:210,
        height:75,
        resizeMode:"cover"
    },
    text:{
        fontSize:16,
        marginLeft:20,
    },
    iconStyle:{
         fontSize:26,
         width:30,
         color:"#777"
    },
    badgeText:{
        fontWeight:"400",
        textAlign:'center',
        marginTop: Platform.OS === "android" ? -3 : undefined
        //marginTop: platform.OS === "android" ? -3 : undefined
    }
});

