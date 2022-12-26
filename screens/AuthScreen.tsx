import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { SafeAreaView, Text } from 'react-native';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';

type Props = {};

export const AuthScreen: FC<Props> = () => {
  const {
    isLogin,
    email,
    password,
    authErr,
    login,
    register,
    setEmail,
    setPassword,
    toggleMode,
  } = useFirebaseAuth();

  return (
    <SafeAreaView
      style={[
        tw('flex-1 items-center justify-center'),
        { backgroundColor: '#008b8b' },
      ]}
    >
      <Text style={tw('text-2xl text-white font-semibold mb-5')}>
        {isLogin ? 'Login' : 'SignUp'}
      </Text>

      <InputField
        leftIcon={'email'}
        placeholder="Emailを入力してください"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />

      <InputField
        leftIcon={'lock'}
        placeholder="パスワードを入力してください"
        secureTextEntry
        textContentType="password"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
      />

      {authErr !== '' && (
        <Text style={tw('text-yellow-300 my-3 font-semibold')}>{authErr}</Text>
      )}

      <Button
        onPress={isLogin ? login : register}
        title={isLogin ? 'ログイン' : '会員登録'}
      />
      <Button
        onPress={toggleMode}
        title={isLogin ? '会員登録画面へ' : 'ログイン画面へ'}
      />
    </SafeAreaView>
  );
};
