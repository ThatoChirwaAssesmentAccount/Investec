import React ,{useState} from 'react';
import { View , StyleSheet , Text , TextInput, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/UserDetails/actions';
import FirstPagebutton from '../utilities/FirstPagebutton';
export default function Welcome({ navigation }){
    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const setData = async () =>{ 
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                dispatch(setName(name));
                dispatch(setAge(age));
                
                
                navigation.navigate('Buttons');
            } catch (error) {
                console.log(error);
            }
        }

    };
    return (
        <View style={styles.body}>
              <Image
                style={styles.logo}
                source={require('../../assets/logo.jpg')}
            />
            <Text style={styles.text}>
                Welcome to Bank
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => dispatch(setName(value))}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                onChangeText={(value) => dispatch(setAge(value))}
            />
            <FirstPagebutton
                title='Login'
                color='#1eb900'
                onPressFunction={setData}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        flex:1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logo: {
        width: 180,
        height: 180,
        marginTop: 100,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 80,
    },
    input: {
        width: 300,
        height: 60,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 60,
    }
})