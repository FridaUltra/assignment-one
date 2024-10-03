import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Weather } from '../data';

const API_KEY = 'a3b13214b49043318a485725240210';

export default function WeatherScreen() {
	const [location, setLocation] = useState<LocationObject>();
	const [errorMsg, setErrorMsg] = useState<string>();
	const [weather, setWeather] = useState<Weather>();

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
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
			console.log(`Land: ${weather!.location.country}`);
			console.log(`namn: ${weather!.location.name}`);
		}
		fetcher();
	}, [location]);

	let text = 'Waiting..';
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
	}

	const locationName = weather?.location.name ?? 'Unknown Location';
	const temp = weather?.current.temp_c ?? 0;
	const feelsLikeTemp = weather?.current.feelslike_c ?? 0;
	const windSpeed_mps = (weather?.current.wind_kph ?? 0) / 3.6;
	const cloudiness = weather?.current.cloud ?? 0;
	const weatherIconUrl = weather?.current.condition.icon ?? 'Unknown Url';
	const weatherDescription = weather?.current.condition.text ?? 'Unknown text';

	return (
		<>
			<View style={s.container}>
				<Text style={s.title}>{locationName} - Väderdata</Text>

				<LineChart
					data={{
						labels: ['Temp (°C)', 'Feels Like (°C)', 'Wind (m/s)', 'Cloud (%)'],
						datasets: [
							{
								data: [temp, feelsLikeTemp, windSpeed_mps, cloudiness],
							},
						],
					}}
					width={Dimensions.get('window').width - 20} // bredden på diagrammet
					height={400} // höjden på diagrammet
					chartConfig={{
						backgroundColor: '#e26a00',
						backgroundGradientFrom: '#fb8c00',
						backgroundGradientTo: '#ffa726',
						decimalPlaces: 0, // Antal decimaler
						color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
	},
	paragraph: {
		fontSize: 18,
		textAlign: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
});
