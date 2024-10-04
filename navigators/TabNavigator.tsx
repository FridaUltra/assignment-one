import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
		<Tab.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#E6E6E6',
				},
				headerTintColor: 'black',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				tabBarStyle: {
					backgroundColor: '#E6E6E6',
				},
				tabBarActiveTintColor: '#854B49',
				tabBarInactiveTintColor: '#CCCCCC',
			}}>
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
					title: 'Start',
				}}
			/>
			<Tab.Screen
				name="Weather"
				component={WeatherScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5
							name="cloud-sun"
							size={size}
							color={color}
						/>
					),
					title: 'Väder',
				}}
			/>
		</Tab.Navigator>
	);
}
