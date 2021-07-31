import React from "react";
import { View, Text, Image } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./style.";

export function SignIn(){
    return (
        <View style={styles.container}>              
        
        <Image
           source={IllustrationImg}
           style={styles.image}
           resizeMode="stretch"
        />
        
    <Text> Eai galerinha!</Text>
    </View>
)}
