import React, {Component} from 'react'
import {
  Text,
  Animated,
  View,
  Easing,
} from 'react-native'
import {styles} from '../styles/loadScreenStyles'

export default class FirstSplash extends Component {
  constructor (props) {
    super(props)
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.animatedValue3 = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    this.animatedValue1.setValue(0)
    this.animatedValue2.setValue(0)
    this.animatedValue3.setValue(0)

    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(
       value,
        {
          toValue: 1,
          duration,
          easing,
          delay,
          useNativeDriver: false
        }
      )
    }
    Animated.sequence([
      createAnimation(this.animatedValue1, 1000, Easing.ease),
      createAnimation(this.animatedValue2, 2000, Easing.ease),
      createAnimation(this.animatedValue3, 2000, Easing.ease),
    ]).start()
  }

  render () {
    const textSize = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 38]
    })
    const marginLeft = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 300]
    })
    const opacity = this.animatedValue2.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const redMarginLeft = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 300]
    })
    const redOpacity = this.animatedValue3.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    
    return (
      <View>
        <Animated.Text style={styles.animText, {fontSize: textSize}}>Please wait!</Animated.Text>
        
        <Text style={styles.textStyle}>loading...</Text>
        
        <Animated.View style={{...styles.blueLoad, marginLeft, opacity}}/>
        
        <Animated.View style={{...styles.redLoad, marginLeft: redMarginLeft, opacity: redOpacity}}/>
        
      </View>
    )
  }
}
