import React from 'react';
import {
    TouchableOpacity,
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
const SolidButton = (props) => {
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
        color: '#ffffff',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        width: 350,
        height: 50,
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        backgroundColor: "#7DAFF1",
        
    },
})

export default SolidButton ;