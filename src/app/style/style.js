import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 15,
        padding: 10
    },
    mainContainer: {
        flex: 1,
        //justifyContent: "center",
        // alignItems: "center",
        //backgroundColor: "#F5FCFF"
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: "black",
        borderWidth: 1
    },
    button: {
        width: '50%',
        height: 40,
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 8,
        marginTop: 10
    },
    buttonText: {

        color: '#fff',
        textAlign: 'center'
    },
    // MainContainer: {
    //     alignItems: 'center',
    //     flex: 1,
    //     margin: 10,
    //     marginTop: 60
    // },
    TextInputStyle: {
        textAlign: 'center',
        height: 40,
        width: 200,
       // marginTop: 20,
        borderWidth: 1,
        borderColor: '#000',
    },
    submitButton: {
        backgroundColor: "black",
        padding: 10,
        margin: 15,
        alignItems: "center",
        height: 40
    },
    submitButtonText: {
        color: "white"
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        
    },
    inputWrap: {
        flex: 2,
        borderColor: "#cccccc",
        marginBottom: 10,
    },
    row: {
        marginTop: 8,
        flex: 1,
        flexDirection: "row",
    }, text: {
        marginLeft: 15
    },
    GridViewContainer: {
        justifyContent:'space-between',
        padding: 10,
        borderRadius: 2,
        // backgroundColor: '#ADD8E6',
        borderBottomWidth: 2
    },
    GridViewTextLayout: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    GridViewContainerHeader: {
        flex: 1,
        width: '100%',
        height: 60,
        backgroundColor: '#ADD8E6',
        justifyContent: 'center'

    },
    GridViewContainerFooter: {
        flex: 1,
        width: '100%',
        height: 60,
        backgroundColor: '#F2F3F3',
        justifyContent: 'center'

    },
    textColor:{
       color:'#000',
       fontWeight:'bold',
       fontSize:20,
      //backgroundColor:'#000'
    },
    Picker: {
        margin: 15,
        height: 35,
        borderWidth: 1,
        borderColor: '#ccc',
        //backgroundColor: "#e2e2e2",
    },
    PageFooter: {
        color: '#000',
        fontWeight: 'bold',
        position: 'absolute',
        backgroundColor: '#F2F3F3',
       // bottom: 0
    },
    textBoxStyle:{
        fontSize:20,
        textAlign:'center' ,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        color: '#000',
        backgroundColor: '#fff',
        padding: 2,
        margin: 10,
        width:"50%"
    },
    TouchableOpacityStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        position:'absolute',
        bottom: 10,
        right: 10,
        height: 50,
        backgroundColor:'#fff',
        borderRadius: 100,
    },
     InputStyle:{
        fontSize:20,
        textAlign:'center' ,
       // borderColor:'#232ed1',
        color: '#000',
        backgroundColor:'#fff',
        padding: 2,
        margin: 10,
        width:"50%"
 },   
    FloatingButtonStyle: {
        resizeMode:'contain',
        position:'absolute',
        width: 40,
        height: 40,
        //backgroundColor:'black'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
});
export default styles;