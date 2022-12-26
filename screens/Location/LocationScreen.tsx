import React from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-rn';
import { auth } from '../../firebaseConfig';
import { logout, selectUser } from '../../slices/userSlice';

export const LocationScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch (error) {
      Alert.alert('Logout Error!!');
    }
  };

  return (
    <SafeAreaView style={tw('flex-1 mt-5 items-center')}>
      <Text>{user.email}</Text>
    </SafeAreaView>
  );
};
