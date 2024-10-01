import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}

const RootStack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<RootStack.Navigator>
				<RootStack.Screen
					name="Home"
					component={HomeScreen}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
}

export default App;
