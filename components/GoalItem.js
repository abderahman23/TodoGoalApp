import {View,StyleSheet,Text,Pressable} from 'react-native'
function GoalItem(props){
  return(
    <View style={styles.goalItem} >
      <Pressable onPress={()=>props.onDelteItem(props.id)} style={({press})=> press && styles.pressItem}>
      
        <Text style={styles.goalText}>
      {props.text}
        </Text>
    
      </Pressable>
    </View>
  )
}export default GoalItem;
const styles=StyleSheet.create({
  goalItem:{
    backgroundColor:"#50aaaa",
    borderRadius:20,
    padding:10,
    marginBottom:10
  },
  pressItem:{
    opacity:0.5
  },
  goalText:{
    color :"white"
  }
})