import {View,StyleSheet,FlatList,Button} from 'react-native';
import {useState} from 'react';
import {StatusBar} from "expo-status-bar";
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'
function App(){
  const [goals,setGoals]=useState([]);
  const [ModelVesibile,setModelVesibile]=useState(false);
  

  function startModelGoalHandeler(){
    setModelVesibile(true);
  }
  function endModelGoalHandeler(){
    setModelVesibile(false);
  }

  function addGaol(entredText){
    setGoals((prev)=> [...prev,{text:entredText,id:Math.random().toString()}])
    setModelVesibile(false);
  }

  function OnDelete(id){
    setGoals((prev)=>prev.filter((goal)=>goal.id!==id))
  }

  
  return(
    <>
    <StatusBar color="light"/>
    <View style={styles.container}>
    <Button title="Add new Goal" color="#50aa" onPress={startModelGoalHandeler} />
    <GoalInput onAddGoal={addGaol} visible={ModelVesibile} onCancel={endModelGoalHandeler}/>
    <FlatList data={goals} 
    renderItem={({item})=>
    < GoalItem text={item.text} id={item.id}  
    onDelteItem={OnDelete} />
    }keyExtractor={(item) =>item.id}/>

    </View>
    </>
  )
}export default App;
const styles=StyleSheet.create(
  {container:{
    margin:50,
  },
 
})