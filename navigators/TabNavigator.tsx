import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';

export type TabParamList = {
	Home: undefined;
	Details: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
			/>
			<Tab.Screen
				name="Details"
				component={DetailsScreen}
			/>
		</Tab.Navigator>
	);
}
