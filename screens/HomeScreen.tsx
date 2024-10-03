import { BottomTabScreenProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import Box from '../components/Box';
import { TabParamList } from '../navigators/TabNavigator';

type Props = BottomTabScreenProps<TabParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
	return (
		<View style={[s.rootcontainer, { backgroundColor: '#f28482' }]}>
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
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />
						<Box onPress={() => navigation.navigate('Details')} />

						<Button
							title="Klicka här för detaljer"
							onPress={() => navigation.navigate('Details')}
						/>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const s = StyleSheet.create({
	rootcontainer: {
		flex: 1,
		justifyContent: 'flex-end',
		// alignItems: 'center',
	},
	iconLabel: {
		color: '#fff',
		marginTop: 12,
	},
});
