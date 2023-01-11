import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './BottomTabs/Home';
import Myspace from './BottomTabs/Myspace';
import Notification from './BottomTabs/Notification';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>  

    <Tab.Navigator
    initialRouteName="TabOne"
    
    screenOptions={
      ({ route }) => ({
        headerShown: false,
        showLabel: true,
        tabBarStyle: { 
          backgroundColor:"white",
          elevation:20,
          borderTopWidth:0,
          position: "absolute",
          height:70, 
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
        },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if(route.name==="Home"){
          iconName=focused? "md-home":"md-home-outline"
          color=focused? "green":"#627380"
          
        } else if(route.name==="My Space"){
          iconName=focused? "md-trophy":"md-trophy-outline"
          color=focused? "green":"#627380"
        } 
        else if(route.name==="Notification"){
          iconName=focused? "md-notifications":"md-notifications-outline"
          color=focused? "green":"#627380"
        } 
        
        return (
          <Ionicons
            name={iconName}
            color={color}
            size={size}
          />
        );
      },  
      tabBarLabelStyle:{
        fontSize:18,
        color:"#627380",
      }

    })} 
    
    
    >

 <Tab.Screen name="Home" component={Home}/>
 <Tab.Screen name="My Space" component={Myspace}/>
 <Tab.Screen name="Notification" component={Notification}/>
  </Tab.Navigator>
  </NavigationContainer>  

 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
