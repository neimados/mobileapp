import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'
import Fact_fetch from '../components/fetchdb'
import Swiper from 'react-native-swiper/src'

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor: generateColor(),
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor: generateColor(),
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor: generateColor(),
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor: generateColor(),
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor: generateColor(),
  },
  slide6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor: generateColor(),
  },
  slide7: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor: generateColor(),
  },
  slide8: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    backgroundColor: generateColor(),
  }
})

export default class SwipeFact extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={true} horizontal={false} showsPagination={false}>
        <View style={styles.slide1}>
            <Fact_fetch />
        </View>
        <View style={styles.slide2}>
            <Fact_fetch />
        </View>
        <View style={styles.slide3}>
            <Fact_fetch />
        </View>
        <View style={styles.slide3}>
            <Fact_fetch />
        </View>
        <View style={styles.slide4}>
            <Fact_fetch />
        </View>
        <View style={styles.slide5}>
            <Fact_fetch />
        </View>
        <View style={styles.slide6}>
            <Fact_fetch />
        </View>
        <View style={styles.slide7}>
            <Fact_fetch />
        </View>
        <View style={styles.slide8}>
            <Fact_fetch />
        </View>
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)