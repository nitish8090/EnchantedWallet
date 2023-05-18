import { React } from 'react';
import { useRef, useState, useEffect } from 'react';

import { StyleSheet, Text, View, SafeAreaView, Appearance, StatusBar } from "react-native";

import { Button } from "@react-native-material/core";

import SafeViewAndroid from "./SafeViewAndroid";
import { TextInput, IconButton, Avatar } from "@react-native-material/core";
import { Stack, useRouter } from 'expo-router';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import theme from './constants';


export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastBuild, setLastBuild] = useState('');

  const router = useRouter();

  const startTime = useRef(Date.now());

  function handleLogin() {
    router.push(`Home`);
  }
  // setLastBuild((Date.now() - startDate.getTime()) / 1000)

  useEffect(() => {


    setInterval(() => {
      setLastBuild(parseInt(Date.now() / 1000 - startTime.current / 1000))
    }, 1000);

  }, []);

  // StatusBar.setBackgroundColor(theme == 'Light' ? '#fff' : '#000')
  StatusBar.setBarStyle(theme == 'Light' ? 'dark-content' : 'light-content');


  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={[theme.centeredLayout, { minHeight: '100%' }, theme.darkMode]}>
      <Avatar icon={props => <Icon name="account" {...props} />} autoColor/>
        <TextInput variant="outlined" placeholder="User" style={{ margin: 16, minWidth: '70%' }} />
        <TextInput variant="outlined" placeholder="Password" secureTextEntry={true} style={{ margin: 16, minWidth: '70%' }} />
        <Button title="Login" color="primary" onPress={handleLogin} />
        <Text style={theme.darkMode}>Last build: {lastBuild} seconds ago.</Text>
      </View>
    </SafeAreaView>
  );
}

