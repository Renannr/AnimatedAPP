import React, {useState, useEffect} from 'react';
import { View, 
  Text, 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  Image, 
  TextInput, 
  Keyboard,
  Animated } from 'react-native';

import styles from './styles';
//#A134D6

export default function Login({navigation}) {
  const [keyboardUp, setKeyboardUp] = useState(false)
  const [opacity] = useState(new Animated.Value(0))
  const [offsetFormXY, setOffsetFormXY] = useState(new Animated.ValueXY({x: 0, y: 200 }))
  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

  function keyboardDidShow(){
    setKeyboardUp(!keyboardUp)
  }

  function keyboardDidHide(){
    setKeyboardUp(!keyboardUp)
  }

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offsetFormXY, {
        toValue: 0,
        speed: 4,
        bounciness: 15
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 750
      })
    ]).start()
  }, [])

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}> APP </Text>
      <Image 
        source={require('../../assets/logo.png')} // from  https://undraw.co/illustrations
        style={styles.logo}
      />
      <Animated.View 
        style={[
          styles.form, 
          {
            opacity: opacity,
            transform: [
              { translateY: offsetFormXY.y }
            ]
          }
        ]}>
        <TextInput
          style={styles.input} 
          title={'LOGIN'} 
          placeholder={'email@email.com'} 
        />

        <TextInput 
          style={styles.input} 
          autoCorrect={false} 
          secureTextEntry={true}
          title={'SENHA'} 
          placeholder={'*********'} 
        />
        { !keyboardUp ? <View style={styles.register}>
          <Text style={styles.registerText} > Não é registrado? </Text>
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{fontWeight:'bold', fontSize:12, color: '#A134D6'}}> REGISTRAR </Text>
          </TouchableOpacity>
        </View> : <Text></Text> }
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => { navigation.navigate('Main') }}>
          <Text style={styles.buttonText}> ENTRAR </Text>
        </TouchableOpacity>
      </Animated.View>
      
    </KeyboardAvoidingView>
  );
}
