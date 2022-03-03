import React ,{useState} from 'react';
import { View, StyleSheet, Image} from 'react-native';
import SwipeButton from 'rn-swipe-button-rectangular';
import ClearButton from '../utilities/ClearButton';
import SolidButton from '../utilities/SolidButton';
import OutlineButton from '../utilities/OutlineButton';
export default function ButtonsScreen({ navigation }){
    const onPressHandler = () => {
        navigation.navigate('Native');
      }
    
    return ( 
       

         <View style={styles.body}>
             <Image
                style={styles.logo}
                source={require('../../assets/logo.jpg')}
            />
             <ClearButton
               
                onPressFunction={onPressHandler}
              />
            

           

              <OutlineButton
               
                onPressFunction={onPressHandler}
                
              />

              <SolidButton 
              onPressFunction={onPressHandler}
             />
              <SwipeButton 
              disabled={false}
              swipeSuccessThreshold ={70}
              shouldResetAfterSuccess ={true}
              onSwipeSuccess ={()=> {alert('Sucessfull swipe')}}
              railBackgroundColor ='black'
              railFillBackgroundColor='#7DAFF1'
              railBorderColor='#7DAFF1'
              thumbIconBackgroundColor='#7DAFF1'
              title='Slide me to continue'
              titleColor='#7DAFF1'
              width={350}
              height={50}
              
             />

        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent:'flex-end',
        paddingBottom: 50,
    },
    logo: {
        width: 180,
        height: 180,
        marginTop: 100,
        justifyContent :'flex-start'
    },
 
    
})