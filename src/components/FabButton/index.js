import React, {useState} from 'react';
import { View, TouchableWithoutFeedback, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function FabButton(props) {
  const [open, setOpen] = useState(false)
  const [animation] = useState(new Animated.Value(0))

  const toggleMenu = () => {
    var toValue = open ? 0 : 1

    Animated.spring(animation, {
      toValue: toValue,
      friction: 5
    }).start()

    setOpen(!open)
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"]
        })
      }
    ]
  }

  const homeStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50]
        })
      }
    ]
  }

  const heartStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -100]
        })
      }
    ]
  }

  return (
    <View style={[styles.container, props.style]} >
        <TouchableWithoutFeedback onPress={() => alert('Home button')}>
            <Animated.View style={[styles.button, styles.subMenu, heartStyle]}>
              <Icon
                name="home" 
                size={18} 
                color="#FFF"
              />
            </Animated.View>        
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => alert('Home heart')}>
            <Animated.View style={[styles.button, styles.subMenu, homeStyle]}>
              <Icon
                name="heart" 
                size={18} 
                color="#FFF"
              />
            </Animated.View>        
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={toggleMenu}>
            <Animated.View style={[styles.button, styles.menu, rotation]}>
              <Icon
                name="plus" 
                size={20} 
                color="#FFF"
              />
            </Animated.View>        
        </TouchableWithoutFeedback>
    </View>
  );
}
