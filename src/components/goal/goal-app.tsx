
import { useState } from 'react';
import { View, Button } from 'react-native';
import { IGoal } from '../../models/goal';
import GoalInput from './goal-input';
import GoalList from './goal-list';
import { GoalStyles } from './goal-styles';
import { GlobalStyles } from '../../theme/styles';

export default function GoalApp() {
    const [myGoals, setGoals] = useState([] as IGoal[]);
    const [modalVisible, setModalVisible] = useState(false);

    function onGoalInitHandler(): void {
        setModalVisible(true);
    }

    function onGoalFinishHandler(): void {
        setModalVisible(false);
    }

    function addGoalHandler(goalText: string): void {
        const goal: IGoal = {
            text: goalText,
            id: String(Math.random()),
        };

        setGoals(myCurrentGoals => [
            ...myCurrentGoals,
            goal,
        ]);

        onGoalFinishHandler()
    };

    function removeGoalHandler(goal: IGoal | undefined): void {
        setGoals(myCurrentGoals => [...myCurrentGoals.filter(g => g.id !== goal?.id)]);
    }

    return (
        <View style={GoalStyles.container}>
            <Button onPress={onGoalInitHandler} title='Add New Goal' color={GlobalStyles.buttonPrimary.backgroundColor} />
            <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} onCancel={onGoalFinishHandler} />
            <GoalList goals={myGoals} onRemoveGoal={removeGoalHandler} />
        </View>
    );
}