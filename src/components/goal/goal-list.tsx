import { View, FlatList } from 'react-native';
import GoalItem from './goal-item';
import { IGoal } from '../../models/goal';
import { GoalStyles } from './goal-styles';

export default function GoalList(props: {
    goals: IGoal[],
    onRemoveGoal: (goal: IGoal | undefined) => void,
}) {

    function removeGoalHandler(goalId: string): void {
        props.onRemoveGoal(props.goals.find(goal => goal.id === goalId));
    }    
    return(
        <View style={GoalStyles.goalsContainer}>
            <FlatList data={props.goals} renderItem={itemData => {
                return <GoalItem goal={itemData.item} onRemoveGoal={removeGoalHandler} />;
            }}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false} />
        </View>
    );
}
