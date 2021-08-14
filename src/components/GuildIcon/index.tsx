import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri =
    'https://e7.pngegg.com/pngimages/672/63/png-clipart-discord-computer-icons-online-chat-cool-discord-icon-logo-smiley.png';
  return (
    <View>
      {iconId ? (
        <Image resizeMode="cover" source={{ uri }} style={styles.image} />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}