import { View, Text, Pressable } from 'react-native';
import { IGoal } from '../../models/goal';
import { GoalStyles } from './goal-styles';
import { GlobalStyles } from '../../theme/styles';

export default function GoalItem(props: {
    goal: IGoal,
    onRemoveGoal: (goalId: string) => void,
}) {
    function removeGoalHandler(): void {
        props.onRemoveGoal(props.goal.id);
    }

    return (
        <View style={GoalStyles.goalItem}>
            <Pressable
                android_ripple={GlobalStyles.rippleColor}
                onPress={removeGoalHandler}
                style={({ pressed }) => pressed && GlobalStyles.pressedItem}>
                <Text style={GoalStyles.goalItemText}>{ props.goal.text }</Text>
            </Pressable>
        </View>
  )
}