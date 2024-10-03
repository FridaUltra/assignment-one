import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons
							name="home"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Details"
				component={DetailsScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons
							name="details"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Weather"
				component={WeatherScreen}
			/>
		</Tab.Navigator>
	);
}
