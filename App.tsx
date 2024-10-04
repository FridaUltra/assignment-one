import { NavigationContainer } from '@react-navigation/native';
import WeatherProvider from './context/WeatherProvider';
import RootStackNavigator from './navigators/RootStackNavigator';

function App() {
	return (
		<WeatherProvider>
			<NavigationContainer>
				<RootStackNavigator />
			</NavigationContainer>
		</WeatherProvider>
	);
}

export default App;
