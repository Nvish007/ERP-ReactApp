import React, { Component } from 'react';
import {Image , ImageBackground } from 'react-native';
import { 
 Content, 
 Text,
 List,
 ListItem,
 Icon,
 Container,
 Left,
 Right,
 Badge, 
 Button,
 View
} from 'native-base';
import styles from '../../style/StyleSidebar';
import { TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const drawerCover = require("../../../../assets/drawer-cover.png");
const drawerImage = require("../../../../assets/ps.png");
const Datas=[
    {
       name:"Home",
       route:"navScreen1",
       icon:"home",
       bg:"#C5F442"
    },
    {
        name:"Add",
        route:"navScreen2",
        icon:"calendar",
        bg:"#477EEA"
    },
    {
        name:"Price",
        route:"navScreen3",
        icon:"cash",
        bg:"#DA4437"
    },
    {
        name:"Report",
        route:"navScreen4",
        icon:"grid",
        bg:"#C5F442"
    },
    {
        name:"Check",
        route:"navScreen5",
        icon: "checkmark-circle",
        bg:"#EB6B23"
    },
    {
        name:'Notification',
        route:"navScreen7",
        icon:"grid",
        bg:"#EB6B23"
    }
];

class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.state={
            shadowOffsetWidth:1,
            shadowRadius:4,
        };
    }
    render(){
        return( 
            <Container>
                <Content bounces={false} 
                style={{flex:1,backgroundColor:"#fff",top:-1}}> 
                <View>
             <ImageBackground source={drawerCover} style={styles.drawerCover}>
                 <Icon name="arrow-back" style={{ Left:10}} onPress={() => this.props.navigation.goBack()} />
             </ImageBackground>
             <Image square style={styles.drawerImage}  source={drawerImage}  />
             </View>
             <List 
             dataArray={Datas}
             renderRow={data =>
              <ListItem
               button
               noBorder
               onPress={() => this.props.navigation.navigate(data.route)}>
               <Left>
                   <Icon
                    active
                    name={data.icon}
                    style={styles.iconStyle}
                    />
                 <Text style={styles.text }> {data.name} </Text>
                 </Left>
                   {data.types && 
                       <Right style={{ flex:1}}> 
                       <Badge style={{
                        borderRadius: 3,
                        height:25,
                        width:72,
                        backgroundColor: data.bg
                       }}> 
                    
                       </Badge>
                        </Right>  }
               </ListItem>    
                  } />
                  </Content>
            </Container>

        );
    }
}
export default Sidebar;