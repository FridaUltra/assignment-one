import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Image } from 'expo-image';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Weather } from '../data';

const API_KEY = 'a3b13214b49043318a485725240210';

export default function WeatherScreen() {
	const [location, setLocation] = useState<LocationObject>();
	const [weather, setWeather] = useState<Weather>();

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
			console.log(`Land: ${weather?.location.country}`);
			console.log(`namn: ${weather?.location.name}`);
		}
		fetcher();
	}, [location]);

	const locationName = weather?.location.name ?? 'Unknown Location';
	const temp = weather?.current.temp_c ?? 0;
	const feelsLikeTemp = weather?.current.feelslike_c ?? 0;
	const windSpeed_mps = (weather?.current.wind_kph ?? 0) / 3.6;
	const cloudiness = weather?.current.cloud ?? 0;
	const weatherIconUrl =
		weather?.current.condition.icon ?? require('../assets/adaptive-icon.png');
	const weatherDescription = weather?.current.condition.text ?? 'Unknown text';

	return (
		<>
			<View style={s.container}>
				<View
					style={{
						flexDirection: 'row',
						gap: 16,
						alignItems: 'center',
						width: '100%',
						justifyContent: 'center',
					}}>
					<FontAwesome6
						name="location-dot"
						size={36}
						color="black"
					/>
					<Text style={[s.title, { fontSize: 36 }]}>{locationName}</Text>
				</View>
				<View
					style={{
						height: 100,
						width: 100,
					}}>
					<Image
						style={{ flex: 1, width: '100%' }}
						source={
							weather?.current.condition.icon
								? { uri: `https:${weather?.current.condition.icon}` }
								: null
						}
						placeholder={require('../assets/adaptive-icon.png')}
						contentFit="cover"
						transition={1000}
					/>
				</View>

				<Text style={s.title}>{weatherDescription}</Text>

				<Text style={[s.title, { paddingTop: 20 }]}>Väderdata</Text>

				<LineChart
					data={{
						labels: [
							'Temp (°C)',
							'Känns som (°C)',
							'Vind (m/s)',
							'Molnighet (%)',
						],
						datasets: [
							{
								data: [temp, feelsLikeTemp, windSpeed_mps, cloudiness],
							},
						],
					}}
					width={Dimensions.get('window').width - 20} // bredden på diagrammet
					height={350} // höjden på diagrammet
					chartConfig={{
						backgroundColor: '#e76f51',
						backgroundGradientFrom: '#e29578',
						backgroundGradientTo: '#e29578',
						decimalPlaces: 0, // Antal decimaler
						color: (opacity = 1) => `rgba(051, 042, 041, ${opacity})`,
						labelColor: (opacity = 1) => `rgba(051, 042, 041, ${opacity})`,
						style: {
							borderRadius: 16,
						},
						propsForDots: {
							r: '9',
							strokeWidth: '2',
							stroke: '#ffa726',
						},
					}}
					bezier // För att göra linjerna mjuka
					style={{
						marginVertical: 8,
						borderRadius: 16,
					}}
				/>
			</View>
		</>
	);
}

const s = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffddd2',
	},
	paragraph: {
		fontSize: 18,
		textAlign: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
});