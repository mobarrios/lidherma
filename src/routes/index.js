
import { NavigationContainer ,DefaultTheme, useTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Text, View,TextInput, TouchableOpacity,SafeAreaView,FlatList, Image } from 'react-native';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();


const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(237, 28, 46)',
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
        <Tab.Screen name="Rostro" component={HomeScreen} 
        options={{
        tabBarLabelStyle:{fontSize:10},
        tabBarIcon: ({color}) => (
            <Image
              style={{ width: 28, height: 28 }}
              source={require('../assets/img/icons/rostro_icon.png')}
            />
          )
        }}
       />
        <Tab.Screen name="Cuerpo" component={SettingsScreen} 
        options={{
            tabBarLabelStyle:{fontSize:10},
            tabBarIcon: ({color}) => (
                <Image
                  style={{ width: 28, height: 28 }}
                  source={require('../assets/img/icons/cuerpo_icon.png')}
                />
              )
            }}
        />
        <Tab.Screen name="Solares" component={SettingsScreen}
        options={{
            tabBarLabelStyle:{fontSize:10},
            tabBarIcon: ({color}) => (
                <Image
                  style={{ width: 28, height: 28 }}
                  source={require('../assets/img/icons/solar_icon.png')}
                />
              )
            }}
        /> 
        <Tab.Screen name="Maquillaje" component={SettingsScreen}
        options={{
            tabBarLabelStyle:{fontSize:10},
            tabBarIcon: ({color}) => (
                <Image
                  style={{ width: 28, height: 28 }}
                  source={require('../assets/img/icons/maquillaje_icon.png')}
                />
              )
            }}
        />


      </Tab.Navigator>
    );
  }

function HomeScreen() {
    const { colors } = useTheme();

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        }
      ];

    const card = ({}) => {
        return(
            <View style={{ flexDirection: "row",  margin : 10, backgroundColor:colors.card  }} >
                <View  style={{justifyContent:'center'}}>
                    <Image
                            style={{resizeMode:'cover',height:100, width:120}}
                            source={require('../assets/rostro.png')}
                    />
                </View>
                <View style={{ height : 120,  margin: 10 , flex: 1 }}>
                    <View >
                        <Text style={{color:colors.primary, fontWeight:'bold'}}>BIOSMOTIC WATER DROPS</Text>
                    </View>
                    <View style={{paddingTop: 20}}>
                        <Text>Gel fluido de textura sedosa con un innovador activo biotecnológico bifuncional osmopretector, que brinda hidratación instantánea y prolongada.</Text>  
                    </View> 
                </View> 
            </View>
        )
    }
    return (
       <SafeAreaView >
            <FlatList
                data={DATA}
                renderItem={card}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
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
