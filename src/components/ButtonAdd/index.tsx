import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

type Props = RectButtonProps;

export function ButtonAdd({ ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons name="plus" size={24} style={styles.icon} />
    </RectButton>
  );
}