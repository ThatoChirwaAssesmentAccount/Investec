import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge,} from '../redux/actions';

const CustomHeader = (props) => {
    const { name, age } = useSelector(state => state.userReducer);
    return (
        <View
            style={styles.view}
        >
            <Text
                style={styles.text}
            >
                Welcome {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        
        
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 15,
        fontWeight:'bold',
        color:'#ffffff'
    }
})

export default CustomHeader;