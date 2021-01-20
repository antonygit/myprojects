import React from 'react';
import { createStackNavigator } from "@react-navigation/stack" 
import { NavigationContainer, DrawerActions,DefaultTheme } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  
} from '@react-navigation/drawer';
 
import { Dashboard } from "./screens/";
import { SideBar } from "./screens/";
import { SalesReport } from "./screens/";
import { CheckSearch } from "./screens/";


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </DrawerContentScrollView>
    );
  }
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Drawer.Navigator  drawerContent={props => <SideBar {...props} />}>
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                <Drawer.Screen name="Sales" component={SalesReport} />
                <Drawer.Screen name="Check" component={CheckSearch} />

             </Drawer.Navigator>
            
        </NavigationContainer>
    );
};

export default App;