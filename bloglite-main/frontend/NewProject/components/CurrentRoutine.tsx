import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View , Button, Alert} from 'react-native';
import axios from 'axios'
import Icons from 'react-native-vector-icons/Ionicons';


 export const CurrentRoutine= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Routine</Text>

        <View style={styles.main}>
        <Text style={styles.label}>Daliy Tasks</Text>
        <Icons name='add-circle' size={30} color={'white'}/>

        </View>
     
        <View style={styles.routinelist}>
            <View style={styles.routinecontainer}>
                <View style={styles.routinetimecontainer}>
                    <Text style={styles.label}>06:00</Text>
                </View>
                <View style={styles.routinedetailscontainer}>
                    <Text style={styles.routinelabel}>Breakfast</Text>
                </View>
            </View>

            <View style={styles.routinecontainer}>
                <View style={styles.routinetimecontainer}>
                    <Text style={styles.label}>06:00</Text>
                </View>
                <View style={styles.routinedetailscontainer}>
                    <Text style={styles.routinelabel}>Breakfast</Text>
                </View>
            </View>

            <View style={styles.routinecontainer}>
                <View style={styles.routinetimecontainer}>
                    <Text style={styles.label}>06:00</Text>
                </View>
                <View style={styles.routinedetailscontainer}>
                    <Text style={styles.routinelabel}>Breakfast</Text>
                </View>
            </View>
        </View>

    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor:'#585484',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color:'white',

  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:50,
    color:'white',
  },
  main:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'green',
    marginBottom:30,
  },
  routinelist:{
    gap:10,
  },
  routinecontainer:{
    display:'flex',
    flexDirection:'row',
    height:70,
  },
  routinetimecontainer:{
    // backgroundColor:'yellow',
    width:100,
    justifyContent:'center'

  },
  routinedetailscontainer:{
    backgroundColor:'#f8ecfc',
    justifyContent:'center',
    borderRadius:9,
    width:270,
    padding:10,
  },
  routinelabel:{
    fontSize:16,
    color:'black'
  }
});

export default CurrentRoutine;
