import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
	onPress?: () => void;
	icon: any;
	title: string;
	value: number;
	unit?: string;
}
export default function Box({ onPress, icon, title, value, unit }: Props) {
	return (
		<View
			style={{
				backgroundColor: '#fff',
				height: 100,
				width: 100,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 10,
				padding: 7,
			}}>
			<Pressable
				style={{
					width: '100%',
					height: '100%',
				}}
				onPress={onPress}>
				<FontAwesome6
					name={icon}
					size={18}
					color="black"
					style={{ textAlign: 'left' }}
				/>

				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={s.buttonValue}>{value}</Text>
						<Text>{unit}</Text>
					</View>
					<Text style={s.label}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const s = StyleSheet.create({
	boxContainer: {
		backgroundColor: '#fff',
		height: 100,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		padding: 7,
	},
	label: { color: '#404040' },
	buttonValue: {
		fontSize: 24,
	},
});
