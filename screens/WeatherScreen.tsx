import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
		})();
	}, []);

	useEffect(() => {
		async function fetcher() {
			const lat = location?.coords.latitude;
			const lon = location?.coords.longitude;
			const lang = 'sv';
			const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&lang=${lang}`;

			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			// todo: Sätt vädret när API:t fungerar
		}
		fetcher();
	}, [location]);

	let text = 'Waiting..';
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	paragraph: {
		fontSize: 18,
		textAlign: 'center',
	},
});
