import PushNotification from 'react-native-push-notification';

 export default class NotificationService {
     constructor(onNotification){
         this.configure(onNotification);
         this.lastId =0;
     }
     configure(onNotification){
         PushNotification.configure({
             onNotification:onNotification,
             Permissions:{
                 alert:true,
                 badge:true,
                 sound:true
             },
             popInitialNotification:true,
         });
     }
     localNotification(){
         this.lastId++;
         PushNotification,this.localNotification({
             title:"",
             message:"",
             playSound:true,
             soundName:'default',
             actions:'["Yes", "No"]'
         });
     }
     checkPermission(cbk){
         return PushNotification.checkPermissions(cbk);
     }
     cancelNotif(){
         return PushNotification.cancelAllLocalNotifications({id: ''+this.lastId});
     }
     cancelAll(){
         PushNotification.cancelAllLocalNotifications();
     }
 }