import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { View, Text } from 'react-native';
import SvgUri from 'expo-svg-uri';

type Props = {
  iconUri?: string | undefined;
  first: string;
};

export const Title: FC<Props> = ({ iconUri, first }) => (
  <View style={tw('flex items-bottom border-b-2 pb-2')}>
    {iconUri && (
      <SvgUri
        style={tw('mr-3')}
        width={64}
        height={64}
        source={require(iconUri)}
      />
    )}
    <Text style={tw('text-3xl font-extrabold')}>{first}</Text>
  </View>
);
