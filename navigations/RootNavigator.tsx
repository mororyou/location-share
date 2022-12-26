import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { useAuthState } from '../hooks/useAuthState';
import { AuthStackNavigator } from './AuthStackNavigator';
import { LocationStackNavigator } from './LocationStackNavigator';

export const RootNavigator = () => {
  const { user, isLoading } = useAuthState();
  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size={'large'} color="gray" />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      {user?.uid ? <LocationStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
