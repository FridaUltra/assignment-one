import { BottomTabScreenProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Button, Text, View } from 'react-native';
import { TabParamList } from '../navigators/TabNavigator';

type Props = BottomTabScreenProps<TabParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Klicka här för detaljer"
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	);
}
