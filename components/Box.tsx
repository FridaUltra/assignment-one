import { Pressable, Text, View } from 'react-native';
interface Props {
	onPress: () => void;
}
export default function Box({ onPress }: Props) {
	return (
		<View
			style={{
				backgroundColor: '#fff',
				height: 100,
				width: 100,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 10,
				padding: 3,
			}}>
			<Pressable
				style={{ width: '100%', height: '100%' }}
				onPress={onPress}>
				<Text>Home Screen</Text>
			</Pressable>
		</View>
	);
}
