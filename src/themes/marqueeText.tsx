import React, { useRef, useEffect, useState } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Easing,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MarqueeText = ({
  text,
  duration = 8000,
  style,
  textStyle,
}: {
  text: string;
  duration?: number;
  style?: any;
  textStyle?: any;
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textWidth > 0) {
      animatedValue.setValue(0);
      // animatedValue.setValue(SCREEN_WIDTH);
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: -textWidth,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [textWidth]);

  return (
    <View style={[styles.container, style]}>
      <Animated.Text
        onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
        numberOfLines={2}
        style={[
          styles.marqueeText,
          textStyle,
          {
            transform: [{ translateX: animatedValue }],
          },
        ]}
      >
        {text + '     '}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    height: 42,
    justifyContent: 'center',
  },
  marqueeText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default MarqueeText;
