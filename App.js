import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HomeScreenFr from './screens/fr/HomeScreenFr';
import LoadScreen from './screens/LoadScreen';
import Cat1 from './screens/Cat1Screen';
import Cat2 from './screens/Cat2Screen';
import Cat3 from './screens/Cat3Screen';
import Cat4 from './screens/Cat4Screen';
import Cat5 from './screens/Cat5Screen';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="load" component={LoadScreen} options={{ headerShown: false }} />
				<Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
				<Stack.Screen name="homefr" component={HomeScreenFr} options={{ headerShown: false }} />
				<Stack.Screen name="cat1" component={Cat1} options={{ headerShown: false }} />
				<Stack.Screen name="cat2" component={Cat2} options={{ headerShown: false }} />
				<Stack.Screen name="cat3" component={Cat3} options={{ headerShown: false }} />
				<Stack.Screen name="cat4" component={Cat4} options={{ headerShown: false }} />
				<Stack.Screen name="cat5" component={Cat5} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;