import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppStyles } from './src/theme/styles';
import GoalApp from './src/components/goal/goal-app';

export default function App() {
  return (
    <>
        <StatusBar style='light' />
        <View style={AppStyles.container}>
            <GoalApp />
        </View>
    </>
  );
}
