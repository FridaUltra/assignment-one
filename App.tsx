import { NavigationContainer } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Klicka här för detaljer"
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	);
}
function DetailsScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
		</View>
	);
}

type RootStackParamList = {
	Home: undefined;
	Details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App() {
	return (
		<NavigationContainer>
			<RootStack.Navigator>
				<RootStack.Screen
					name="Home"
					component={HomeScreen}
				/>
				<RootStack.Screen
					name="Details"
					component={DetailsScreen}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
}

export default App;
