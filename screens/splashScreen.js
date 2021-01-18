import React, { Component } from 'react'
import {
  Animated,
  View,
} from 'react-native'
import {styles} from '../styles/splashScreenStyle'

export default class SplashScreen extends Component {
  constructor (props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
      Animated.timing(this.animatedValue, 
        {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true
        }
      ).start()
  }

  render () {
    const spinImage = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '1080deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.imageStyle, {transform: [{rotateY: spinImage}]}]}
          source={require('../components/main.jpg')} />
      </View>
    )
  }
}