import { StyleSheet, Text, View, ImageBackground, Pressable, SafeAreaView, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {

	return (
		<SafeAreaView style={styles.container} screenOptions={{ headerShown: false }}>
			<ImageBackground source={require('../assets/bg_home.png')} style={styles.bg_image}>
				<View style={styles.container}>
					<Image style={styles.logo} source={require('../assets/logo_main.png')}/>
					<Pressable style={styles.button} onPress={() => navigation.navigate('cat1')}>
						<Text style={styles.bt_txt}>Cats</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={() => navigation.navigate('cat2')}>
						<Text style={styles.bt_txt}>Technologies</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={() => navigation.navigate('cat3')}>
						<Text style={styles.bt_txt}>History</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={() => navigation.navigate('cat4')}>
						<Text style={styles.bt_txt}>Sciences</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={() => navigation.navigate('cat5')}>
						<Text style={styles.bt_txt}>Others</Text>
					</Pressable>
					<Pressable style={styles.flags} onPress={() => navigation.navigate('homefr')}>
						<Image style={styles.flags_img} source={require('../assets/fr.png')}/>
					</Pressable>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bg_image: {
		width: "100%",
        height: "100%",
        resizeMode: 'cover',
        position: "absolute",
	},
	logo: {
		width: 200,
		height: 200,
		backgroundColor: 'transparent',
	},
	button: {
		width: 200,
    	marginTop: 20,
    	backgroundColor: '#4169e1',
    	padding: 10,
    	borderRadius: 50,
		alignItems: 'center',
	},
	bt_txt: {
		color: '#f8f8ff',
		fontFamily: 'monospace',
		fontWeight: 'bold',
	},
	flags:{
		justifyContent:'center',
		alignItems:"center",
		width:50,
		height:35,
		position:'absolute',
		bottom:15,
		right:15,
		elevation:10
	},
	flags_img: {
		width: 50,
		height: 35,
		backgroundColor: 'transparent',
	},
});
export default HomeScreen;
