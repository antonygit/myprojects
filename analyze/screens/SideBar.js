import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
    useTheme,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { COLORS, FONTS, SIZES, icons } from '../assets/constants'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';

 
 
const SideBar = ( props ) => {
    const paperTheme = useTheme();

 
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 25}}>
                        <Image 
                                source={icons.avatar}
                                style={{
                                    width: 30,
                                    height: 40,
                                    tintColor: COLORS.primary
                                }}
                            />
                            <View style={{marginLeft:15,marginTop: -6, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                       
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                             icon={({color, size}) => (
                                <Image
                                source={icons.home}
                                 style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.black
                                }}
                            />
                            )}
                            labelStyle={{fontSize:17}}
                            label="Dashboard"
                            onPress={() => {props.navigation.navigate('Dashboard')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                           icon={({color, size}) => (
                            <Image
                            source={icons.sales}
                             style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.black
                            }}
                        />
                        )}  
                            labelStyle={{fontSize:17}}
                            label="Sales Report"
                            onPress={() => {props.navigation.navigate('Sales')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                             icon={({color, size}) => (
                                <Image
                                source={icons.check}
                                 style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.black
                                }}
                            />
                            )}
                            labelStyle={{fontSize:17}}
                            label="Check Search"
                            onPress={() => {props.navigation.navigate('Check')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                             icon={({color, size}) => (
                                <Image
                                source={icons.tender}
                                 style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.black
                                }}
                            />
                            )}
                            labelStyle={{fontSize:17}}
                            label="Tender View"
                            onPress={() => {props.navigation.navigate('Check')}}
                        />
                    </Drawer.Section>
                    
                       
                   
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
           
                <DrawerItem 
                      icon={({color, size}) => (
                        <Image
                        source={icons.shutdown}
                         style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.black
                        }}
                    />
                    )}
                    label="Sign Out"
                    
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        paddingBottom:20,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        
    },
    title: {
      fontSize: 18,
      marginTop: 2,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      marginTop:-8,

    } ,
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 5,       
      borderBottomColor: '#f4f4f4',
      borderBottomWidth: 1,
       

    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});
  
export default SideBar;