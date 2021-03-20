import React, { Component } from 'react'
import { View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Linking, Alert, ActivityIndicator, ScrollView, RefreshControl } from 'react-native'
import { mapping, light as Theme } from '@eva-design/eva';
import { IconRegistry, Layout, Button, ApplicationProvider, Text } from 'react-native-ui-kitten';
import styles from '../../style/style';
import Api from '../../utilities/api/utilities'; 
import { Picker } from 'native-base';
import Config from '../../utilities/config/Config';

export default class ManagePrice extends Component {

     constructor(props){
        super(props);
        var currentMonth = (new Date().getMonth() + 1).toString();
        var currentYear = (new Date().getFullYear()).toString();
        this.state={
            dataSource:null,
            refreshing: false,
            loading: true,
            Month:currentMonth,
            Year:  currentYear,

        }
    }

    componentDidMount(){
        if(this.state.Month ==0 && this.state.Year ==0 )
        { 
        try {
            fetch(Api.URL + 'TeaExpenses/GetAllTeaExpense', {
                method: 'GET'
            })
            .then((Response) => Response.json())
            .then((ResponseJson) => {
             this.setState({
                 loading:false,
                 dataSource:ResponseJson.data,
             })
            })
           } catch (err) {
               alert(err);
           }
}  else{
    try{
        fetch(Api.URL + 'TeaExpenses/GetTeaExpenseByMonth?month=' + `${this.state.Month}` + '&year=' + `${this.state.Year}`,
        {
            method: 'GET'
        })
          .then((Response) => Response.json())
           .then((ResponseJson) => {
               this.setState({
                   loading:false,
                   dataSource:ResponseJson.data,
               })
           })
    } catch (err){
        alert(err);
    }
  }
};

onPickerMonthChange=(value) => {
    this.setState(
        {
            "Month": value
        },
        () => {
            this.componentDidMount();
        }
    );
}

onPickerYearChange=(value) => {
    this.setState(
        {
            "Year": value
        },
        () => {
            this.componentDidMount();
            
        }
    );
}
    _onRefresh=() =>{
        this.setState({refreshing:true})
        setTimeout(() => this.setState({refreshing:false}),2000)
        this.componentDidMount();

    }

    render(){
        if (this.state.loading) {
            return(
                <View>
                    <ActivityIndicator />
                </View>
            )
        } else  {
            let totalQuantity=0;
            let data = this.state.dataSource

            data.forEach((item) => {
                totalQuantity += item.totalTea;
             })

              let totalPrice= totalQuantity * Config.Price;
              //alert(totalPrice);
              //console.log(totalPrice)
              //let dataForPrice= totalQuantity
         //    this.dataForPrice.forEach((item)=> {
           //       totalPrice = {totalQuantity}
             // })
             //  alert(totalPrice);
            // dataForPrice.forEach((item) => {
            //   totalPrice = item.totalTea * 7;
            // }) 
              
             
            return(
                <ApplicationProvider mapping={mapping} theme={Theme}> 
                <ImageBackground
                    style={{ flex: 1 }}

                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
                    }}>
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

                                    <Picker.Item key="0" label="ALL" value="0" />
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
                                <Picker style={styles.Picker} selectedValue={this.state.Year} onValueChange={(this.onPickerYearChange)} >

                                    <Picker.Item label="ALL" value="0" />
                                    <Picker.Item label="2018" value="2018" />
                                    <Picker.Item label="2019" value="2019" />

                                </Picker>
                            </View>
                        </View>

                        <View style={{
                            flex: 1, flexDirection: 'row',  marginTop:10}}>
                            <Text style={{  color: '#fff', fontWeight: 'bold', fontSize: 20, backgroundColor: '#000'}}>
                     Tea Price :-  {Config.Price}₹
                   </Text>

               </View>
              
                        <View style={{
                            flex: 1, flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'center', marginTop:50}}>
                 <Text style={styles.textColor}> totalQuantity of Tea= </Text>
                  <Text style={styles.textColor}>
                      {totalQuantity}
                  </Text>
                    </View>
                    
                        <View style={{
                            flex: 1, flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'center', marginTop:10 }}>
                  <Text style={styles.textColor}>
                      Total Price=
                  </Text>
                      <Text style={styles.textColor}>
                          {totalPrice}₹
                      </Text>
                  </View>

                    </ScrollView>
              </View>
              </Layout>
              </ImageBackground>
              </ApplicationProvider>
            );
        }
    }
};

  
