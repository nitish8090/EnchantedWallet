import { React } from 'react';
import { useRef, useState, useEffect } from 'react';

import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { Button } from "@react-native-material/core";

import SafeViewAndroid from "./SafeViewAndroid";
import { TextInput, IconButton } from "@react-native-material/core";
import { Stack, useRouter } from 'expo-router';


export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastBuild, setLastBuild] = useState('');

  const router = useRouter();

  const startTime = useRef(Date.now());

  function handleLogin (){
    router.push(`Home`);
  }
  // setLastBuild((Date.now() - startDate.getTime()) / 1000)

  useEffect(() => {
    
    
    setInterval(() => {
      setLastBuild(parseInt(Date.now()/1000 - startTime.current /1000)) 
      }, 1000);
    
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Stack.Screen/>
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%' }} >
        <Text >Log In</Text>
        <TextInput variant="outlined" placeholder="User" style={{ margin: 16, minWidth: '70%' }} />
        <TextInput variant="outlined" placeholder="Password" secureTextEntry={true} style={{ margin: 16, minWidth: '70%' }} />
        <Button title="Login" color="primary" onPress={handleLogin} />
        <Text>Last build: {lastBuild} seconds ago.</Text>
      </View>
    </SafeAreaView>
  );
}

