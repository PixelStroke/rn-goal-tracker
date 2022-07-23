
import { useState } from 'react';
import { View, TextInput, Button, Modal, Image } from 'react-native';
import { GoalStyles } from './goal-styles';

export default function GoalInput(props: any) {

    const [goalText, setGoalText] = useState('');

    function goalInputHandler(text: string): void {
        setGoalText(text);
    };

    function addGoalHandler() {
        props.onAddGoal(goalText);
        setGoalText('');
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={GoalStyles.inputContainer}>
                <Image
                    source={require('../../../assets/images/target.png')}
                    style={GoalStyles.image} />
                <TextInput 
                    onChangeText={goalInputHandler}
                    value={goalText}
                    style={GoalStyles.textInput}
                    placeholder='Your next goal' />

                <View style={GoalStyles.buttonContainer}>
                    <View style={GoalStyles.button}>
                        <Button onPress={addGoalHandler} title='Add Goal' color={GoalStyles.primaryButton.color} />
                    </View>
                    <View style={GoalStyles.button}>
                        <Button onPress={props.onCancel} title='Cancel' color={GoalStyles.dangerButton.color} />
                    </View>
                </View>

            </View>
        </Modal>
    );
}
