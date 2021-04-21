import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';




const CircleButton = props => (
  <TouchableOpacity
    style={{
      margin: props.margin,
      height: props.size,
      width: props.size,
      backgroundColor: props.color,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: props.size * 2,
    }}
    onPress={props.onPress}>
    <Text style={{color: props.textColor, fontSize: props.fontSize}}>
      {props.text}
    </Text>
  </TouchableOpacity>
);








export default function ExampleProgram() {
  const showMessage = () => Alert.alert('Button clicked !');

  return (
    <View style={styles.container}>
      
      <CircleButton
        text="Hold to Speak !"
        size={200}
        color="#2196f3"
        textColor="white"
        margin={10}
        fontSize={20}
      />
      


      
    </View>
  );



  
}


