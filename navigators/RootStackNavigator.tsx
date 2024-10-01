import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
	HomeNavigator: undefined;
	Details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
	return (
		<RootStack.Navigator>
			<RootStack.Screen
				name="HomeNavigator"
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
		</RootStack.Navigator>
	);
}
