import React, {useState,useRef} from 'react';
import {   View,
Text,
    Image,Button,StyleSheet,Dimensions,
    TouchableOpacity,TouchableWithoutFeedback,Animated ,FlatList} from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../assets/constants'
import DateTimePicker from '@react-native-community/datetimepicker';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryTooltip } from "victory-native";
import { DrawerActions } from '@react-navigation/native';
import { BarChart } from "react-native-chart-kit";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import Tab from '../component/Tab'

 
 
const Sales = ({ navigation }) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const screenWidth = Dimensions.get('window').width

    const data = {
        labels: ['Last Week', 'Today' ],
        datasets: [{
            data: [ 43, 45],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2 // optional
        }]
        }

        const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: (opacity = 1) => `rgba(63, 143, 244, ${opacity})`,
        strokeWidth: 2 // optional, default 3
        }
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
                    <Text style={{ color: COLORS.primary, ...FONTS.h1 }}>Sales Report</Text>
                 </View>

                <View style={{ flexDirection: 'row', paddingHorizontal: 100, marginTop: SIZES.padding-29, alignItems: 'center' }}>
                    <View style={{
                        backgroundColor: COLORS.lightGray,
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={showDatepicker}>

                        <Image
                            source={icons.calendar}
                             style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.black
                            }}
                        />
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{date.toLocaleDateString("en-US")}</Text>
                        {/* <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% more than last month</Text> */}
                    </View>
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
            <Tab />
           
            <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginTop: SIZES.padding }}>
            <BarChart
                 width={screenWidth}
                 height={500}
                 data={data}
                chartConfig={chartConfig}
               />
              </View>
            </View>
       
       
        )
}
export default Sales;
   
      