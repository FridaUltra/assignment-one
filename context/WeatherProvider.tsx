import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Weather } from '../data';

interface ContextValue {
	// location: LocationObject;
	weather: Weather;
}

export const WeatherContext = createContext<ContextValue>({} as ContextValue);

const API_KEY = 'a3b13214b49043318a485725240210';

export default function WeatherProvider({ children }: PropsWithChildren) {
	const [location, setLocation] = useState<LocationObject>(
		{} as LocationObject
	);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				console.log('Permission to access location was denied');
				return;
			}

			let userLocation = await Location.getCurrentPositionAsync({});
			setLocation(userLocation);
			console.log(
				`location: lat ${location?.coords.latitude}, lon ${location?.coords.longitude}`
			);
		})();
	}, []);

	const [weather, setWeather] = useState<Weather>({} as Weather);
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

	return (
		<WeatherContext.Provider value={{ weather }}>
			{children}
		</WeatherContext.Provider>
	);
}
