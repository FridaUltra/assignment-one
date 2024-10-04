import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { useBatteryLevel } from 'expo-battery';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';
import { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Box from '../components/Box';
import { Weather } from '../data';
import { TabParamList } from '../navigators/TabNavigator';

const API_KEY = 'a3b13214b49043318a485725240210';

type Props = BottomTabScreenProps<TabParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
	const [location, setLocation] = useState<LocationObject>();
	const [isLoading, setIsLoading] = useState(true);
	const [weather, setWeather] = useState<Weather>();
	let batteryLevel = useBatteryLevel();
	batteryLevel = Math.round(batteryLevel * 100);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				console.log('Permission to access location was denied');
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
			console.log(
				`location: lat ${location.coords.latitude}, lon ${location.coords.longitude}`
			);
		})();
	}, []);

	useEffect(() => {
		async function fetcher() {
			const lat = location!.coords.latitude;
			const lon = location!.coords.longitude;
			const lang = 'sv';
			const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&lang=${lang}`;

			const response = await fetch(url);
			const data: Weather = await response.json();
			console.log(data);
			setWeather(data);
			setIsLoading(false);
			console.log(`Land: ${weather!.location.country}`);
			console.log(`namn: ${weather!.location.name}`);
		}
		fetcher();
	}, [location]);

	const temp = weather?.current.temp_c ?? 0;
	const feelsLikeTemp = weather?.current.feelslike_c ?? 0;

	let tempIcon = 'temperature-low';

	if (feelsLikeTemp > temp) {
		tempIcon = 'temperature-arrow-up';
	}
	if (feelsLikeTemp < temp) {
		tempIcon = 'temperature-arrow-down';
	}

	return (
		<View style={{ backgroundColor: '#f28482', flex: 1 }}>
			{isLoading && (
				<View
					style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
					<ActivityIndicator
						size="large"
						color="#0000ff"
					/>
				</View>
			)}
			{weather && (
				<View style={[s.rootContainer, { backgroundColor: '#f28482' }]}>
					<LinearGradient
						// Background Linear Gradient
						colors={['#854B49', '#A15A58', '#192f6a']}
						style={s.background}
					/>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'row',
							gap: 16,
						}}>
						<FontAwesome6
							name="location-dot"
							size={24}
							color="black"
						/>
						<Text style={{ fontSize: 38 }}>{weather.location.name}</Text>
					</View>
					<View
						style={{
							// paddingTop: 48,
							// backgroundColor: '#f5cac3',
							height: 400,
							// borderTopLeftRadius: 30,
							// borderTopRightRadius: 30,
						}}>
						<ScrollView>
							<View
								style={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									gap: 30,
									paddingHorizontal: 25,
								}}>
								<Box
									title="Batteri"
									icon="battery-half"
									value={batteryLevel}
									unit="%"
								/>
								<Box
									title="Steg idag"
									icon="person-walking-arrow-right"
									value={100}
									onPress={() => navigation.navigate('Weather')}
								/>
								<Box
									title="Temperatur"
									icon="temperature-low"
									value={temp}
									unit="℃"
									onPress={() => navigation.navigate('Weather')}
								/>
								<Box
									title="Känns som"
									icon={tempIcon}
									value={feelsLikeTemp}
									unit="℃"
									onPress={() => navigation.navigate('Weather')}
								/>
								<Box
									title="Molnighet"
									icon="cloud-sun"
									value={weather.current.cloud}
									unit="%"
									onPress={() => navigation.navigate('Weather')}
								/>
								<Box
									title="Vindstyrka"
									icon="wind"
									value={weather.current.wind_kph}
									unit="km/h"
									onPress={() => navigation.navigate('Weather')}
								/>
								<Box
									title="Sikt"
									icon="glasses"
									value={weather.current.vis_km}
									unit="km"
									onPress={() => navigation.navigate('Weather')}
								/>
							</View>
						</ScrollView>
					</View>
				</View>
			)}
		</View>
	);
}

const s = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: '100%',
	},
});
