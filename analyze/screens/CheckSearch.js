import React, {useState,useRef} from 'react';
import {   View,
Text,
    Image,Button,StyleSheet,
    TouchableOpacity,TouchableWithoutFeedback,Animated ,FlatList} from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../assets/constants'
import DateTimePicker from '@react-native-community/datetimepicker';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryTooltip } from "victory-native";
import { DrawerActions } from '@react-navigation/native';
 import Tab from '../component/Tab'

 
const CheckSearch = ({ navigation }) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
          setDate(currentDate);
          console.log(date)
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
     
    
    function renderNavBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >
                <TouchableWithoutFeedback
                    style={{ flex:1,justifyContent: 'center', width: 50, }}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <Image
                        source={icons.menu}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableWithoutFeedback>

                {/*  Right header <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                    onPress={() => console.log('More')}
                >
                    <Image
                        source={icons.more}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity> */}
            </View>
        )
    }
    function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white
            }}>
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h1 }}>Check Search</Text>
                 </View>

               
                {/* <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                         <Button onPress={showDatepicker} title="Show date picker!" />
                </View> */}
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}

                    />
                )}
            </View>
        )
    }
   
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
            {/*Render nav bar section*/}
            {renderNavBar()}
            {/*Render header section*/}

            {renderHeader()}
            
            </View>
       
       
        )
}
export default CheckSearch;
   
      