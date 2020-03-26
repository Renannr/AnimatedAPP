import React, {useState, useEffect} from 'react';
import { View, Text, Animated } from 'react-native';

import styles from './styles';

export default function Main() {
  const [opacity] = useState(new Animated.Value(1))
  const [show, setShow] = useState(true)
  const [widthElem, setWidthElem] = useState(new Animated.Value(25))
  const [heightElem, setHeightElem] = useState(new Animated.Value(5))

  useEffect(() => {
    Animated.sequence([
      Animated.timing(widthElem, {
        toValue: 500,
        duration: 750
      }),
      Animated.parallel([
        Animated.timing(heightElem, {
          toValue: 1000,
          duration: 950
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 950
        })
      ])
    ]).start(() => { setShow(!show)})
  },[])

  return (
    <View style={styles.container}>
      {
        show ?  
        <Animated.View 
          style={[styles.animation, 
            {
              opacity: opacity, 
              width: widthElem, 
              height: heightElem
            }
          ]} 
        /> 
        : 
        <Text style={styles.text} >  MAIN PAGE </Text> 
      }
    </View>
  );
}
