import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import WeatherScreen from '../screens/WeatherScreen';

export type TabParamList = {
	Home: undefined;
	Details: undefined;
	Weather: undefined;
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
			<Tab.Screen
				name="Weather"
				component={WeatherScreen}
			/>
		</Tab.Navigator>
	);
}
