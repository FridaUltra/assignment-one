export interface Weather {
	location: {
		name: string;
		region: string;
		country: string;
		lat: number;
		lon: number;
		tz_id: string;
		localtime_epoch: number;
		localtime: string;
	};
	current: {
		last_updated_epoch: number;
		last_updated: string;
		temp_c: number;
		is_day: number;
		condition: {
			text: string;
			icon: string;
			code: number;
		};
		wind_kph: number;
		wind_degree: number;
		wind_dir: string;
		cloud: number;
		feelslike_c: number;
		vis_km: number;
	};
}
