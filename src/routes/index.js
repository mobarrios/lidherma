
import { NavigationContainer ,DefaultTheme, useTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Text, View,TextInput, TouchableOpacity } from 'react-native';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();


const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
    input:{
        ...DefaultTheme.input,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button:{
        ...DefaultTheme.button,
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor : 'rgb(255, 45, 85)',
    }
  };


function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Rostro" component={HomeScreen} />
        <Tab.Screen name="Cuerpo" component={SettingsScreen} />
        <Tab.Screen name="Solares" component={SettingsScreen} />
        <Tab.Screen name="Maquillaje" component={SettingsScreen} />


      </Tab.Navigator>
    );
  }

function HomeScreen() {
    const { colors } = useTheme();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

function SettingsScreen() {
    const { colors } = useTheme();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor : colors.card }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

function LoginScreen() {
const {  input, button } = useTheme();
return (
    <View style={{ flex: 1, padding :20  }}>
    <Text>Login Screen</Text>
    <TextInput
        style={input}
       // onChangeText={onChangeText}
        //value={text}
      />
        <TextInput
        style={input}
       // onChangeText={onChangeText}
        //value={text}
      />
      <TouchableOpacity
          style={button}
          //onPress={this.onPress}
        ><Text>Ingresar</Text></TouchableOpacity>
    </View>
);
}



function Route(){
    return (
        <NavigationContainer  theme={MyTheme}>
          <Drawer.Navigator>
            <Drawer.Screen name="Tabs" component={MyTabs} />
            <Drawer.Screen name="Login" component={LoginScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
}

export default Route 
