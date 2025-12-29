import {View ,TextInput,Button,StyleSheet}from 'react-native';
import { useState }from 'react';
function GoalInput(onAddGoal){
    const [goal,setGoal]=useState('');
    function addGoal(){
        if(goal.trim().length===0)return;
        onAddGoal(goal);
        setGoal('');
    }
    return(
        <View >
            <TextInput placeholder="write your goal" value={goal}  onChangeText={setGoal} />
            <Button title="Add Goal" onPress={addGoal}/>
        </View>
    )
}