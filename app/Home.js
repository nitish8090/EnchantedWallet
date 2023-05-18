import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Surface, Stack, Button } from "@react-native-material/core";
import SafeViewAndroid from "./SafeViewAndroid";

import { useRouter } from 'expo-router';
import theme from './constants';
import TouchableCard from "./components/touchableCard";
export default function Home() {

    const router = useRouter();


    function openCards() {
        router.push(`Cards`);
    }
    return (
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, theme.darkMode]}>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableCard title='Cards' onPress={openCards}/>
                <TouchableCard title='Credentials'/>
            </View>
        </SafeAreaView>
    )
}
