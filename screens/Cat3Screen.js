import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Cat3({ navigation }) {
	return (
		<SafeAreaView style={styles.container} screenOptions={{ headerShown: false }}>
			<View style={styles.content}>
				<Text>Categorie 1</Text>
			</View>
			<View style={styles.icon}>
				<Icon name="home" size={50} color="#b22222" onPress={() => navigation.navigate('home')}/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icon:{
		justifyContent:'center',
		alignItems:"center",
		width:65,
		borderRadius:100,
		height:65,
		position:'absolute',
		bottom:15,
		right:15,
		backgroundColor:"#deb887",
		elevation:10
	},
	content:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});