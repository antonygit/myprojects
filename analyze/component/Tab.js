import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

export default class Tab extends React.Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        xTabThree: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(0),
        translateXTabThree: new Animated.Value(0),

        translateY: -1000
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            xTabThree,
            translateX,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        // if (active === 0) {
        //     Animated.parallel([
        //         Animated.spring(translateXTabOne, {
        //             toValue: width,
        //             duration: 100
        //         }).start(),
        //         Animated.spring(translateXTabTwo, {
        //             toValue: 0,
        //             duration: 100
        //         }).start(),
        //         Animated.spring(translateXTabThree, {
        //             toValue: 0,
        //             duration: 100
        //         }).start()
        //     ]);
        // } else if(active === 1){
        //     Animated.parallel([
        //         Animated.spring(translateXTabOne, {
        //             toValue: 0,
        //             duration: 100
        //         }).start(),
        //         Animated.spring(translateXTabTwo, {
        //             toValue: width,
        //             duration: 100
        //         }).start(),
        //         Animated.spring(translateXTabThree, {
        //             toValue: width,
        //             duration: 100
        //         }).start()
        //     ]);
        // }
        // else if(active === 2){
        //     Animated.parallel([
        //         Animated.spring(translateXTabThree, {
        //             toValue: -width,
        //             duration: 100
        //         }).start(),
        //         Animated.spring(translateXTabThree, {
        //             toValue: 0,
        //             duration: 100
        //         }).start(),
        //         Animated.spring(translateXTabThree, {
        //             toValue: 0,
        //             duration: 100
        //         }).start()
        //     ]);
        // }
    };

    render() {
        let {
            xTabOne,
            xTabTwo,
            xTabThree,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree,
            translateY
        } = this.state;
        return (
            <View>
                <View
                    style={{
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 0,
                            marginBottom: 20,
                            height: 50,
                            position: "relative"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "33.33%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#007aff",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#007aff"
                                }}
                            >
                                Last week
                                                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#007aff"
                                }}
                            >
                                Last month
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#007aff",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabThree: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 2 }, () =>
                                    this.handleSlide(xTabThree)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 2 ? "#fff" : "#007aff"
                                }}
                            >
                                Last year
                                                            </Text>
                        </TouchableOpacity>
                    </View>
 
                </View>
            </View>
        );
    }
}