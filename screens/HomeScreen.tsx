import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Box from '../components/Box';
import { TabParamList } from '../navigators/TabNavigator';

type Props = BottomTabScreenProps<TabParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
	const feelLikeTemp = 10;
	const temp = 12;
	let tempIcon = 'temperature-low';

	if (feelLikeTemp > temp) {
		tempIcon = 'temperature-arrow-up';
	}
	if (feelLikeTemp < temp) {
		tempIcon = 'temperature-arrow-down';
	}

	return (
		<View style={[s.rootContainer, { backgroundColor: '#f28482' }]}>
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
				<Text style={{ fontSize: 38 }}>Location</Text>
			</View>
			<View
				style={{
					paddingTop: 48,
					backgroundColor: '#f5cac3',
					height: 600,
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,
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
							title="Steg idag"
							icon="person-walking-arrow-right"
							value={100}
							onPress={() => navigation.navigate('Details')}
						/>
						<Box
							title="Temperatur"
							icon="temperature-low"
							value={temp}
							unit="℃"
							onPress={() => navigation.navigate('Details')}
						/>
						<Box
							title="Känns som"
							icon={tempIcon}
							value={feelLikeTemp}
							unit="℃"
							onPress={() => navigation.navigate('Details')}
						/>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const s = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
});
