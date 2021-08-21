import React, { useState } from 'react';
import { View, FlatList, TouchableOpacityBase } from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation()

  const appointments = [
    {
      id: '1',
      guild: {
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40n',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40n',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  function handlerCategorySelector(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(){
   navigation.navigate('AppointmentDetails')   
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')   
   }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>

      <CategorySelect
        categorySelect={category}
        setCategory={handlerCategorySelector}
      />

      <View style={styles.content}>
        <ListHeader title="partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <Appointment data={item} onPress={handleAppointmentDetails} />
            </>
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}