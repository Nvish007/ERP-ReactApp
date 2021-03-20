import React from 'react';
import { StyleSheet, RefreshControl, FlatList, ScrollView, Image,Button,
          TouchableOpacity, Text, View, Linking, TextInput, ActivityIndicator, Picker } from 'react-native';
import {mapping, light as Theme } from '@eva-design/eva';
import {ApplicationProvider , Layout, Input } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from '../../utilities/api/utilities';
import Moment from 'moment';
import styles from '../../style/style';


export default class Report extends React.Component{
 
    constructor(props) {
        super(props);

        // alert(new Date().getMonth()+1)
debugger
        let sumOFQuantity =0;
        var currentMonth = (new Date().getMonth() + 1).toString();
        var currentYear = (new Date().getFullYear()).toString();
        this.state={
            refreshing:false,
            loading: true, 
            dataSource:[],
            TeaExpensesId:0 , 
           // totalQuantity:0 ,
            //  GetTeaExpenseByMonth:null,
            Month: currentMonth,
            Year: currentYear,

        }
    }
  

 componentDidMount(){

     if(this.state.Month ==0 && this.state.Year ==0) 
     {
         try{
         fetch(Api.URL + 'TeaExpenses/GetAllTeaExpense', {
             method: 'GET'
         })
           .then((Response) => Response.json())
           .then((ResponseJson) => {
               
              this.setState({
                  loading:false,
                  dataSource:ResponseJson.data,
              })
              // alert(ResponseJson);
           // debugger
           //alert(Moment(ResponseJson.data[0].date).format('YYYY-MM-DD'));
        })
         } catch (err) {
             alert(err);
         }
   } else{
       try{
         fetch(Api.URL + 'TeaExpenses/GetTeaExpenseByMonth?month=' + `${this.state.Month}` + '&year=' + `${this.state.Year}`, 
        {
             method:'GET',
        })
          .then((Response) => Response.json())
          .then((ResponseJson) => {
              this.setState({
                  loading: false,
                 dataSource: ResponseJson.data,
              })
             // alert(Moment(ResponseJson.data.date).format('YYYY-MM-DD'));
          })
          
     }catch (err) {
         alert(err);
     }
 }
     
    
}
 onRemove(){
     try {
         fetch(Api.URL + 'TeaExpenses/DeleteTeaExpense/'
             + `${this.state.TeaExpensesId}`, {
             method: 'GET'
         })
             .then((Response) => Response.json())
             .then((ResponseJson) => {
                 this.setState({
                     loading: false,
                     dataSource: ResponseJson.data.id,
                 })
                 this.componentDidMount();
                 alert(ResponseJson.data);
             })
             .catch((error) => {
                 console.log(error);
             })
     } catch (err) {
         alert(err);
     }
 }



 onPickerMonthChange= (value) => {
     this.setState(
         {
             "Month": value
         },
         () =>{
             this.componentDidMount();
         }
     );
 }

 onPickerYearChange= (value) => {
     this.setState(
         {
             "Year": value
         },
         () => {
             this.componentDidMount();
         }
     );
 }

 _onRefresh = () => {
        this.setState({ refreshing: true })
        setTimeout(() => this.setState({ refreshing: false }), 2000)
        this.componentDidMount();
    }

 edit(item) {
        this.props.navigation.navigate("AddDate", { item: item });
    }
 remove=(id, index)=>{
     this.setState(
         {
          "TeaExpensesId": id
         },
         () => {
              this.onRemove();
             //this.componentDidMount();
           }
     );
     alert('data is deleted');
   //console.log(id);
 }     
    

 render_FlatList_header= () => {

    var header_View = (
        <View style ={styles.GridViewContainerHeader}>

          <View style={{ flexDirection: 'row'} }>
           
            <Text style={{flex:1, fontWeight:'bold'}}>Date</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Tea</Text>
            <Text style={{flex:0.5}} ></Text>
          </View>

        </View>
         
    );
    return header_View;
 };
clickHandler = () => {
        {this.props.navigation.navigate('navScreen2')}
    
    };


// forAddition(){
//  // alert("Addition Enter")
//     let totalQuantity=0;
//     let data = this.state.dataSource;
//    // console.log(data)
//      data.forEach((item) =>{
//          //console.log(item)
//          totalQuantity=totalQuantity + item.totalTea;
//      });

    
//    //alert(totalQuantity);

//    return totalQuantity;
//  // console.log(totalQuantity);
// };

 render(){
    debugger 

     //console.log(this.forAddition());

    //  alert(this.forAddition());



    if (this.state.loading) {
        return(
            
            <View>
                <ActivityIndicator />
            </View>
        )
    }else{
        // this.getTotalTea();
         
       // alert(totalQuantity)

       return (
           <ApplicationProvider mapping={mapping} theme={Theme}>
               <Layout style={styles.mainContainer}>
           <View style={styles.mainContainer}>
            <ScrollView refreshControl={
                <RefreshControl 
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh} />
            }>
              <View style={styles.row}>
                  <View style={styles.inputWrap}>
                      <Text style={styles.text}> Month </Text>
                      <Picker style={styles.Picker} selectedValue={this.state.Month} onValueChange={this.onPickerMonthChange}>
                              
                               <Picker.Item key="0" label="All" value="0" />
                               <Picker.Item key="1" label="Jan" value="1" />
                               <Picker.Item key="2" label="Fab" value="2" />
                               <Picker.Item key="3" label="March" value="3" />
                               <Picker.Item key="4" label="April" value="4" />
                               <Picker.Item key="5" label="May" value="5" />
                               <Picker.Item key="6" label="Jun" value="6" />
                               <Picker.Item key="7" label="July" value="7" />
                               <Picker.Item key="8" label="Aug" value="8" />
                               <Picker.Item key="9" label="Sep" value="9" />
                               <Picker.Item key="10" label="Oct" value="10" />
                               <Picker.Item key="11" label="Nov" value="11" />
                               <Picker.Item key="12" label="Dec" value="12" />

                       </Picker>
                  </View>
                  <View style={styles.inputWrap}>
                      <Text style={styles.text}> Year </Text>
                      <Picker style={styles.Picker} selectedValue={this.state.Year} onValueChange={ (this.onPickerYearChange)} > 

                               <Picker.Item label="All" value="0" />
                               <Picker.Item label="2018" value="2018" />
                               <Picker.Item label="2019" value="2019" />
                               
                      </Picker>
                  </View>
              </View>
              <View>
               <FlatList 
                data={this.state.dataSource}
                ListHeaderComponent={this.render_FlatList_header}
                renderItem={ ({ item }) => 
                  <View style={styles.GridViewContainer}>
                      <View style={{flexDirection:'row'}}>
                      

                            <Text style={styles.GridViewTextLayout} element={Text}>{Moment(item.date).format('DD-MM-YYYY')} </Text>
                               <Text style={styles.GridViewTextLayout}>
                                {item.totalTea}
                            </Text> 
                            <Button
                                title="Delete"
                                onPress={() => this.remove(item.id)}
                                style={{ color: "#000" }}
                            />

                      </View>

                  </View>
                  
                }
          keyExtractor={ (item, index) => index.toString()}
                />
                 </View>  
                   <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>

                  {/* <Text style={styles.textColor}> TotalQuantity= {this.forAddition()} </Text> */}

                    </View>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center', marginTop:10, marginBottom:10}}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('PaymentSummary')}>
                           <Text style={styles.buttonText}> Payment summary </Text>
                        </TouchableOpacity>
                    </View>
                   <View style={styles.MainContainer}>
                       <TouchableOpacity
                           activeOpacity={0.7}
                           onPress={this.clickHandler}
                           style={styles.TouchableOpacityStyle}>
                           <Icon name="plus-circle" size={50}  />
                           
                       </TouchableOpacity>
                   </View>
                 </ScrollView>
           </View>
           </Layout>
           </ApplicationProvider>
       );
    }
     
 }
}

{/* <TouchableOpacity onPress={() => this.edit(item)} >
    <Text> Edit </Text>
</TouchableOpacity> 
keyExtractor={(item, index) => index.toString() }*/}