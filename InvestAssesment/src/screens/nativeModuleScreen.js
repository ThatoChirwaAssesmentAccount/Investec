import React ,{useState} from 'react';
import { View,  StyleSheet, Text, ScrollView, Image} from 'react-native';
import { useIsEmulator } from 'react-native-device-info';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge,} from '../redux/actions';

 
     export default function NativeModuleScreen(){
        const { name, age } = useSelector(state => state.userReducer);
        let deviceJSON ={};
        deviceJSON.isEmulator=useIsEmulator();
        if(deviceJSON["isEmulator"].result=true){
            return (
            
                <View style={styles.body}>
                    <Text style={styles.text}>
                     Hello {name} of age {age} We would like to inform you that you are using an Emulator
                    </Text>
    
                </View>
                     
            )
        }else {
            return(
                <View style ={style.body}>
                    <Text style={styles.text}>
                    Hello {name} of age {age} We would like to inform you that you are using an physical Device

                    </Text>

                </View>
            )
        }
        
        

        
    }
   
   const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent:'center',
    
    },
     
    titleStyle:{
        fontSize: 30,
        textAlign: 'center',
        margin :10,
        color: 'white'
    },
    text:{
        textAlign: 'left',
        margin: 5,
        color: 'white'
    },
})