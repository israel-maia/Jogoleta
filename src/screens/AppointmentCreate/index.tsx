import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground, Text, View, FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { Background } from '../../components/Background';

import { theme } from '../../global/styles/themes';
import { styles } from './style';
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentCreate() {

    const members = [
    {
        id: '1',
        username: 'SociopataDoLol',
        avatar_url: 'https://github.com/israel-maia',
        status: 'online'
    },
    {
        id: '2',
        username: 'SociopataDoLol',
        avatar_url: 'https://github.com/israel-maia',
        status: 'online'
    },
    ]

    return <Background>
        <Header
        title="Criar"
        action={
            <BorderlessButton>
                <Fontisto name="share"
                size={24}
                color={theme.colors.primary} />
            </BorderlessButton>
        }
        />   
    </Background>;
}