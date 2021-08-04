import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated, ScrollView } from 'react-native';
import CardView from "./cardView";


const { width, height } = Dimensions.get('screen');

const CustomAnimated = () => {
  const [animation] = useState(new Animated.Value(0));

  handleOpen = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  handleClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };



  const backdrop = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.01],
          outputRange: [height, 0],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0.01, 0.5],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
  };

  const gestureHandler = (e) => {
    if (e.nativeEvent.contentOffset.y > 0) handleOpen();
    else
      if (e.nativeEvent.contentOffset.y < 0) handleClose();

  }

  const actionSheetIntropolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [height / 2, 0]
  });

  const actionSheetStyle = {
    translateY: actionSheetIntropolate
  }

  const slideUp = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0.01, 1],
          outputRange: [0, -1 * height],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpen}>
        <Text>Open</Text>
      </TouchableOpacity>
      <Animated.View style={[StyleSheet.absoluteFill, actionSheetStyle, styles.cover, backdrop]} />
      <View style={[styles.sheet]}>
        <Animated.View style={[styles.popup, slideUp]}>
          <ScrollView
            onScroll={(e) => {
              console.log('testing click', e.nativeEvent.contentOffset);
              gestureHandler(e)
            }}
            scrollEventThrottle={16}
            style={styles.grabber}></ScrollView>
          <CardView />

        </Animated.View>

      </View>
    </View>


  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cover: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  sheet: {
    position: "absolute",
    top: height,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  popup: {
    backgroundColor: "#f8f6f9",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  grabber: {
    marginTop: 2,
    width: 80,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopWidth: 5,
    borderTopColor: '#aaa'
  }


})

export default CustomAnimated;