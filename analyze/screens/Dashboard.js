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
import { LineChart } from "react-native-chart-kit";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import Carousel from '../component/Carousel'


 
 const Dashboard = ({ navigation }) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
         
     let categoriesData = [
        {
            id: 1,
            name: "Sales",
            value:"$1,236",
            icon: icons.education,
            color: COLORS.yellow,
          
        },
        {
            id: 2,
            name: "Transactions",
            value:"$1,236",
            icon: icons.trans,
            color: COLORS.lightBlue,
            
        },
        {
            id: 3,
            name: "Covers",
            value:"$1,236",
            icon: icons.guest,
            color: COLORS.darkgreen,
            
        },
        {
            id: 4,
            name: "Tips",
            value:"$1,236",
            icon: icons.tip,
            color: COLORS.peach,
            
        }, {
            id: 5,
            name: "Gross",
            value:"$1,236",
            icon: icons.education,
            color: COLORS.yellow,
          
        },
        {
            id: 6,
            name: "Tender",
            value:"$1,236",
            icon: icons.food,
            color: COLORS.lightBlue,
            
        },
        {
            id: 7,
            name: "Check",
            value:"$1,236",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            
        },
        {
            id: 8,
            name: "server   ",
            value:"$1,236",
            icon: icons.healthcare,
            color: COLORS.peach,
            
        }
         
    ]
    const images = [
        
        {
            banner:icons.banner1,
              desc:
              'Sample Description below the image for representation purpose only',
        },
        {
            banner:icons.banner2,
              desc:
              'Sample Description below the image for representation purpose only',
        },
        {
            banner:icons.banner3,
              desc:
              'Sample Description below the image for representation purpose only',
        }
      
    ]
     const dummyData =
    [{
            title: 'Anise Aroma Art Bazar', url: icons.insight1,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 1

    },
    {
            title: 'Food inside a Bowl', url: icons.insight1,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 2
    },
    {
            title: 'Vegatable Salad', url: icons.insight1,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 3
    }]

    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;

    const [categories, setCategories] = React.useState(categoriesData)
    const [viewMode, setViewMode] = React.useState("chart")
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [showMoreToggle, setShowMoreToggle] = React.useState(false)
    const screenWidth = Dimensions.get('window').width

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            data: [ 20, 45, 28, 80, 99, 43 ],
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
                    <Text style={{ color: COLORS.primary, ...FONTS.h1 }}>Dashboard</Text>
                    <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>Last ETL update,11 Nov, 2020</Text>
                </View>

                <View style={{ flexDirection: 'row', paddingHorizontal: 60, marginTop: SIZES.padding-45, alignItems: 'center' }}>
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
   

    function renderCategoryList() {
        const renderItem = ({ item }) => (
            <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginTop: SIZES.padding }}>

            <View style={{
                backgroundColor: COLORS.white, 
                borderColor:'red',
                height: 100,
                width: 100,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
             }}>
           
                <Image
                    source={item.icon}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.color
                    }}
                />
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.darkgray, ...FONTS.h4 }}>{item.value}</Text>

                </View>
                </View>
        )

        return (
            <View>
                     <FlatList
                        data={categories}
                        renderItem={renderItem}
                        horizontal
                       ItemSeparatorComponent={() => <View style={{marginLeft:-8}}/>}

                     />
 
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.base,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 115,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 172.5,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        }

                        setShowMoreToggle(!showMoreToggle)
                    }}
                >
                     
                </TouchableOpacity>
            </View>
        )
    }
    


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
            {/*Render nav bar section*/}
            {renderNavBar()}
            {/*Render header section*/}

            {renderHeader()}
            <Carousel data = {dummyData}/>

            {/* <FlatListSlider 
                data={images} 
                imageKey={'banner'}
                local
              
            /> */}
            {renderCategoryList()}
            <View style={{ backgroundColor: COLORS.lightGray,paddingVertical:30 }}>

            <LineChart 
                data={data}
                width={screenWidth}
                height={300}
                chartConfig={chartConfig}
                />
                </View>
                    
            
         </View>
    );
 };
 const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'blue',
        shadowOffset: {
            width: 42,
            height: 22,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    }
})
 

export default Dashboard;