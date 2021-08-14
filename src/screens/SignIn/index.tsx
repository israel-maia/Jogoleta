import React from "react";
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";

export function SignIn() {
    const navigation = useNavigation(); 
    function handleSignIn() {
        navigation.navigate('Home');
    }
    
    return (
        <View style={styles.container}>

            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{'\n'}e organize suas{'\n'}
                    gameplays com seus amigos {'\n'}
                </Text>

                <Text style={styles.subtitle}>
                Crie grupos para jogar seus games{'\n'}com seus amigos{'\n'}
                </Text>

                <ButtonIcon title="Entrar com discord" activeOpacity={0.7} onPress={handleSignIn}
                />
            </View>
        </View >

    )
}
