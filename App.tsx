import React from 'react';
import { Home } from './src/screens/Home';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  /*Estratégia para garantir que as fontes serão
  carregadas enquanto a splash screen ainda está na tela.
  Se as fontes não foram carregadas, retorna esse comonente
  AppLoading, que "segura" a splash screen*/
  if (!fontsLoaded) {
    return (<AppLoading />);
  }

  return (
    <AuthProvider>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </AuthProvider>
  );
}
