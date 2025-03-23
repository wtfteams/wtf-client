import React from 'react';
import { View, Animated, Easing } from 'react-native';

export default function LoadingDots() {

  const dot1Opacity = new Animated.Value(0);
  const dot2Opacity = new Animated.Value(0);
  const dot3Opacity = new Animated.Value(0);

  const animateDots = () => {

    Animated.loop(
      Animated.stagger(200, [
        Animated.timing(dot1Opacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(dot2Opacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(dot3Opacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(dot1Opacity, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(dot2Opacity, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(dot3Opacity, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };
  
  React.useEffect(() => {
    animateDots();
  }, []);

  return (
    <View className="flex-row space-x-1">
      <Animated.View
        style={{ opacity: dot1Opacity }}
        className="w-2 h-2 bg-white rounded-full"
      />
      <Animated.View
        style={{ opacity: dot2Opacity }}
        className="w-2 h-2 bg-white rounded-full"
      />
      <Animated.View
        style={{ opacity: dot3Opacity }}
        className="w-2 h-2 bg-white rounded-full"
      />
    </View>
  );
};

