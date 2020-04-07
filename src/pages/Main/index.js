import React, {useState, useEffect} from 'react';
import { View, Text, Animated } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import Shimmer from 'react-native-shimmer';

import FabButton from '../../components/FabButton'

import styles from './styles';

export default function Main() {
  const [opacity] = useState(new Animated.Value(1))
  const [show, setShow] = useState(true)
  const [isLoading, setLoading] = useState(true)
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
    ]).start(() => {setShow(!show)})

    setInterval(() => {
      return setLoading(!isLoading)
    }, 3000)
    
  },[])

  const initialAnimation = () => {
    return (
      <Animated.View 
        style={[styles.animation, 
          {
            opacity: opacity, 
            width: widthElem, 
            height: heightElem
          }
        ]} 
      /> 
    )
  }

  const mainPage = () => {
    return (
      <>
        <Shimmer 
          style={{}}
          animating={isLoading}
        >
          { isLoading ? 
              <Text style={styles.text}> Loading...</Text> 
            :
              <Text style={styles.text}> Hello APP </Text>  
          }
        </Shimmer>
        <FabButton
          style={{ bottom: 80, right: 40 }}       
        />
      </>
    )
  }

  return (
    <View style={styles.container}>
      { show ? initialAnimation() : mainPage() }
    </View>
  );
}
