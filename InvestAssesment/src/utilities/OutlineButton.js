import React from 'react';
import {
    TouchableOpacity,
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
const OutlineButton = (props) => {
    return (
        
        <TouchableOpacity
        style={styles.button}
        onPress={props.onPressFunction}
      >
        <Text style={styles.text}>Emulator Check</Text>
      </TouchableOpacity>

   
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#7DAFF1',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        justifyContent:'center'
    },
    button: {
        width: 350,
        height: 50,
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        backgroundColor:'#374249'
    },
})

export default OutlineButton;