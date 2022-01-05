import React, { Component } from 'react';
import { Animated, Easing, SafeAreaView, StyleSheet } from 'react-native';

class Loader extends React.Component {
	constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
    }

	handleAnimation = () => {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 2000,
			useNativeDriver: false,
            easing: Easing.in(Easing.bounce)
        }).start()
    }

	render() {
		this.handleAnimation();

		return (
			<SafeAreaView style={styles.container}>
				<Animated.Image
                    source={require('../assets/logo.png')} 
                    resizeMode='contain'
                    style={{
                        height: 150,
                        width: 150,
                        transform: [
                            {
                                scale: this.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [.6, 1]
                                })
                            }
                        ]
                    }}
				/>
			</SafeAreaView>
		);
	}
}

function LoadScreen({ navigation }) {
	setTimeout(() => {
		navigation.navigate('home');
	}, 2000);
	return (<Loader/>)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		height: 150,
		width: 150,
	}
})

export default LoadScreen